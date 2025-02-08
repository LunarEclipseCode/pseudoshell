const defaultHourFormat = "12";

export const handleBasicCommand = (command, args, xterm) => {
  switch (command) {
    case "binary-clock":
      return handleBinaryClock(args);
    case "cal":
      return handleCalendar(args, xterm);
    case "daktilo":
      return handleDaktilo(args);
    case "date":
      return handleDate(args);
    case "echo":
      return handleEcho(args);
    case "factor":
      return handleFactor(args);
    case "fortune":
      return handleFortune(xterm);
    case "weather":
      return handleWeather(args, xterm);
    default:
      return { output: `Command not found: ${command}`, noNewline: false };
  }
};

//================ Binary Clock ================//

const handleBinaryClock = (args) => {
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();

  if (args[0] === "--alt") {
    // Horizontal display
    const toBinaryArray = (num, bits) => {
      const binary = num.toString(2).padStart(bits, "0");
      return Array.from(binary).map((bit) => (bit === "1" ? "🔵" : "⚪"));
    };

    // Convert hours (5 bits), minutes and seconds (6 bits each)
    const hourBits = toBinaryArray(hours, 5);
    const minuteBits = toBinaryArray(minutes, 6);
    const secondBits = toBinaryArray(seconds, 6);

    const rows = [];
    // Hour row padded with spaces for alignment
    const hourCircles = ["   " + hourBits.join("  ")];
    const minCircles = [minuteBits.join("  ")];
    const secCircles = [secondBits.join("  ")];

    rows.push(hourCircles.join(" "), "", minCircles.join(" "), "", secCircles.join(" "));

    return {
      output: "\r\n" + rows.join("\r\n") + "\r\n",
      noNewline: false,
    };
  } else {
    // Vertical display
    // Split digits
    const h1 = Math.floor(hours / 10);
    const h2 = hours % 10;
    const m1 = Math.floor(minutes / 10);
    const m2 = minutes % 10;
    const s1 = Math.floor(seconds / 10);
    const s2 = seconds % 10;

    // Convert to binary
    const toBinary = (num, pad) => num.toString(2).padStart(pad, "0");

    const binaryH1 = toBinary(h1, 2); // 0-2 needs 2 bits
    const binaryH2 = toBinary(h2, 4); // 0-9 needs 4 bits
    const binaryM1 = toBinary(m1, 3); // 0-5 needs 3 bits
    const binaryM2 = toBinary(m2, 4); // 0-9 needs 4 bits
    const binaryS1 = toBinary(s1, 3); // 0-5 needs 3 bits
    const binaryS2 = toBinary(s2, 4); // 0-9 needs 4 bits

    // Create a column of circles for each digit
    const createColumn = (binary, height) => {
      const fullBinary = binary.padStart(height, "0");
      const circles = [];
      // Add empty spaces at top for shorter columns
      for (let i = 0; i < 4 - height; i++) {
        circles.push(" ");
      }
      // Add the actual binary circles
      for (let i = height - 1; i >= 0; i--) {
        const bit = fullBinary[fullBinary.length - 1 - i];
        circles.push(bit === "1" ? "🔵" : "⚪");
      }
      return circles;
    };

    // Create all columns
    const h1Col = createColumn(binaryH1, 2);
    const h2Col = createColumn(binaryH2, 4);
    const m1Col = createColumn(binaryM1, 3);
    const m2Col = createColumn(binaryM2, 4);
    const s1Col = createColumn(binaryS1, 3);
    const s2Col = createColumn(binaryS2, 4);

    // Build rows with correct spacing
    const rows = [];
    for (let i = 0; i < 4; i++) {
      const row = [h1Col[i], h2Col[i], m1Col[i], m2Col[i], s1Col[i], s2Col[i]].join("  ");
      rows.push(row);
    }

    return {
      output: "\r\n" + rows.join("\r\n") + "\r\n",
      noNewline: false,
    };
  }
};

//================ Calendar ================//

const handleCalendar = (args, xterm) => {
  const now = new Date();
  const currentYear = now.getFullYear();
  const currentMonth = now.getMonth();
  const currentDay = now.getDate();

  let targetYear = currentYear;
  let targetMonth = currentMonth;
  let targetDay = null;
  let numMonths = 1;
  let spanMode = false;
  let highlightToday = true;
  let mondayFirst = false;
  let verticalMode = false;

  const validateDate = (d, m, y) => {
    if (m < 1 || m > 12) return "Month must be between 1 and 12";
    const daysInMonth = new Date(y, m, 0).getDate();
    if (d < 1 || d > daysInMonth) return `Day must be between 1 and ${daysInMonth} for ${monthNames[m - 1]} ${y}`;
    return null;
  };

  const validateYear = (y) => {
    if (y < 1 || y > 9999) return "Year must be between 1 and 9999";
    return null;
  };

  const validFlags = ["-n", "--months", "-S", "--span", "-m", "--monday", "-v", "--vertical"];
  const nonFlagArgs = [];
  let error = null;

  for (let i = 0; i < args.length; i++) {
    const arg = args[i];
    if (arg.startsWith("-")) {
      if (arg.startsWith("-") && arg.length > 1 && !isNaN(parseInt(arg.substring(1)))) {
        return {
          output: "Negative numbers are not allowed as arguments",
        };
      }
      if (!validFlags.includes(arg)) {
        return {
          output: `Invalid option: ${arg}\r\nValid options are: ${validFlags.join(", ")}`,
        };
      }
      if (arg === "-n" || arg === "--months") {
        if (i + 1 >= args.length || isNaN(parseInt(args[i + 1])) || parseInt(args[i + 1]) <= 0) {
          return {
            output: "Option -n/--months requires a positive number",
          };
        }
        numMonths = parseInt(args[++i]);
      } else if (arg === "-S" || arg === "--span") {
        spanMode = true;
      } else if (arg === "-m" || arg === "--monday") {
        mondayFirst = true;
      } else if (arg === "-v" || arg === "--vertical") {
        verticalMode = true;
      }
    } else {
      if (isNaN(parseInt(arg))) {
        return {
          output: `Failed to parse invalid argument: '${arg}'`,
        };
      }
      nonFlagArgs.push(parseInt(arg));
    }
  }

  if (nonFlagArgs.some((arg) => arg <= 0)) {
    return {
      output: "Arguments must be positive numbers",
    };
  }

  if (args.includes("-n") || args.includes("--months")) {
    const nIndex = Math.max(args.indexOf("-n"), args.indexOf("--months"));
    if (nIndex === args.length - 1 || isNaN(parseInt(args[nIndex + 1]))) {
      return {
        output: "Option -n/--months requires a number",
      };
    }
  }

  if (nonFlagArgs.length > 3) {
    return {
      output: "Too many arguments",
    };
  }

  if (error) {
    return {
      output: error,
    };
  }

  if (nonFlagArgs.length === 1) {
    targetYear = nonFlagArgs[0];
    error = validateYear(targetYear);
    highlightToday = targetYear === currentYear;
    if (numMonths === 1) numMonths = 12;
  } else if (nonFlagArgs.length === 2) {
    [targetMonth, targetYear] = nonFlagArgs;
    error = validateYear(targetYear) || validateDate(1, targetMonth, targetYear);
    targetMonth--;
    highlightToday = targetMonth === currentMonth && targetYear === currentYear;
  } else if (nonFlagArgs.length === 3) {
    [targetDay, targetMonth, targetYear] = nonFlagArgs;
    error = validateYear(targetYear) || validateDate(targetDay, targetMonth, targetYear);
    targetMonth--;
    highlightToday = false;
  }

  let monthsToShow = [];
  if (spanMode && numMonths > 1 && numMonths !== 12) {
    const prevMonths = Math.floor((numMonths - 1) / 2) + (numMonths % 2 === 0 ? 1 : 0);
    const nextMonths = Math.floor((numMonths - 1) / 2);

    for (let i = -prevMonths; i <= nextMonths; i++) {
      let month = targetMonth + i;
      let year = targetYear;

      while (month < 0) {
        month += 12;
        year--;
      }
      while (month > 11) {
        month -= 12;
        year++;
      }

      monthsToShow.push({ month, year });
    }
  } else {
    for (let i = 0; i < numMonths; i++) {
      let month = (targetMonth + i) % 12;
      let year = targetYear + Math.floor((targetMonth + i) / 12);
      monthsToShow.push({ month, year });
    }
  }

  const MONTH_SPACING = verticalMode ? 3 : 2;
  const MONTH_WIDTH = 20;
  const WEEK_NAME_WIDTH = 3;

  const termWidth = xterm.cols;
  let monthsPerRow = Math.min(Math.floor((termWidth - (verticalMode ? WEEK_NAME_WIDTH : 0)) / (verticalMode ? 14 : 22)), 4);
  monthsPerRow = Math.max(1, monthsPerRow);

  const showingFullYear = monthsToShow.length === 12 && monthsToShow[0].year === monthsToShow[11].year;

  let columnInfo = Array(monthsPerRow)
    .fill()
    .map(() => ({
      maxWeeks: 0,
      width: 0,
    }));

  if (verticalMode) {
    for (let i = 0; i < monthsToShow.length; i += monthsPerRow) {
      const rowMonths = monthsToShow.slice(i, i + monthsPerRow);
      rowMonths.forEach((monthInfo, colIndex) => {
        const firstDay = new Date(monthInfo.year, monthInfo.month, 1).getDay();
        const daysInMonth = new Date(monthInfo.year, monthInfo.month + 1, 0).getDate();
        const numWeeks = Math.ceil((firstDay + daysInMonth) / 7);
        columnInfo[colIndex].maxWeeks = Math.max(columnInfo[colIndex].maxWeeks, numWeeks);

        const monthStr = monthInfo.month;
        const yearStr = monthInfo.year.toString();
        const headerWidth = monthNames[monthInfo.month].length + (!showingFullYear ? yearStr.length + 1 : 0);
        const dateWidth = numWeeks * 3 - 1;
        columnInfo[colIndex].width = Math.max(columnInfo[colIndex].width, Math.max(headerWidth, dateWidth));
      });
    }
  }

  const totalWidth = verticalMode ? columnInfo.reduce((sum, col) => sum + col.width, 0) + (monthsPerRow - 1) * MONTH_SPACING + WEEK_NAME_WIDTH : monthsPerRow * MONTH_WIDTH + (monthsPerRow - 1) * MONTH_SPACING;

  const rows = [];

  if (showingFullYear) {
    const yearHeader = targetYear.toString();
    const padding = Math.floor((totalWidth - yearHeader.length) / 2);
    rows.push(" ".repeat(padding) + yearHeader);
    rows.push("");
  }

  for (let i = 0; i < monthsToShow.length; i += monthsPerRow) {
    const rowMonths = monthsToShow.slice(i, i + monthsPerRow);

    const monthLines = rowMonths.map(({ month, year }, idx) =>
      genCalendar(
        month,
        year,
        targetDay || (highlightToday ? currentDay : null),
        targetDay ? targetMonth : highlightToday ? currentMonth : null,
        targetDay ? targetYear : highlightToday ? currentYear : null,
        !showingFullYear,
        mondayFirst,
        verticalMode,
        idx === 0,
        verticalMode ? columnInfo[idx].maxWeeks : 0,
        verticalMode ? columnInfo[idx].width : MONTH_WIDTH
      ).split("\r\n")
    );

    const maxLines = Math.max(...monthLines.map((month) => month.length));

    for (let lineNum = 0; lineNum < maxLines; lineNum++) {
      const rowLine = monthLines
        .map((month, idx) => {
          const content = month[lineNum] || "";
          return content.padEnd(verticalMode ? columnInfo[idx].width : MONTH_WIDTH);
        })
        .join(" ".repeat(MONTH_SPACING));
      const containsMonth = monthNames.some((month) => rowLine.includes(month));
      const finalLine = containsMonth && verticalMode ? "    " + rowLine : rowLine;

      rows.push(finalLine);
    }

    if (i + monthsPerRow < monthsToShow.length) {
      rows.push("");
    }
  }

  return {
    output: rows.join("\r\n"),
    noNewline: false,
  };
};

const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const genCalendar = (month, year, highlightDay, highlightMonth, highlightYear, showYear = true, mondayFirst = false, verticalMode = false, showWeekNames = true, targetWeeks = 0, monthWidth = 20) => {
  let firstDay = new Date(year, month, 1).getDay();
  if (mondayFirst) {
    firstDay = firstDay === 0 ? 6 : firstDay - 1;
  }

  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const numWeeks = Math.ceil((firstDay + daysInMonth) / 7);
  const weeksToShow = targetWeeks || numWeeks;

  let header = monthNames[month];
  if (showYear) {
    header += " " + year;
  }

  const centeredHeader = verticalMode ? header : header.padStart(Math.floor((monthWidth + header.length) / 2)).padEnd(monthWidth);

  const days = mondayFirst ? ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"] : ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];

  if (!verticalMode) {
    const daysHeader = days.join(" ");
    const grid = [];
    let currentLine = "".padStart(firstDay * 3);

    for (let day = 1; day <= daysInMonth; day++) {
      const isHighlighted = day === highlightDay && month === highlightMonth && year === highlightYear;

      let dayStr = day.toString().padStart(2);
      if (isHighlighted) {
        dayStr = `\x1b[47m\x1b[30m${dayStr}\x1b[0m`;
      }

      currentLine += dayStr;

      let currentDayPos = (firstDay + day - 1) % 7;
      if (currentDayPos !== 6 && day !== daysInMonth) {
        currentLine += " ";
      }

      if (currentDayPos === 6 || day === daysInMonth) {
        grid.push(currentLine);
        currentLine = "";
      }
    }

    return [centeredHeader, daysHeader, ...grid].join("\r\n");
  } else {
    const calendar = Array(7)
      .fill()
      .map(() => Array(weeksToShow).fill("  "));

    for (let day = 1; day <= daysInMonth; day++) {
      const weekIndex = Math.floor((firstDay + day - 1) / 7);
      const dayIndex = (firstDay + day - 1) % 7;

      let dayStr = day.toString().padStart(2);
      if (day === highlightDay && month === highlightMonth && year === highlightYear) {
        dayStr = `\x1b[47m\x1b[30m${dayStr}\x1b[0m`;
      }
      calendar[dayIndex][weekIndex] = dayStr;
    }

    const result = [header];

    days.forEach((day, i) => {
      const prefix = showWeekNames ? `${day} ` : "";
      const dayRow = prefix + calendar[i].join(" ");
      result.push(dayRow);
    });

    return result.join("\r\n");
  }
};

//================ Daktilo ================//

let daktiloEnabled = false;
let currentPreset = null;
let sequenceIndex = {};

const presets = {
  default: {
    keyConfig: [
      {
        keys: "Enter",
        files: [{ path: "ding.mp3", volume: 1.0 }],
      },
      {
        keys: ".*",
        variation: { volume: [0.1, 0.1], tempo: [0.05, 0.05] },
        files: [{ path: "keyup.mp3", volume: 1.0 }],
      },
    ],
  },
  basic: {
    keyConfig: [
      {
        keys: "Enter",
        files: [{ path: "newline.mp3", volume: 0.9 }],
      },
      {
        keys: ".*",
        files: [{ path: "keystroke.mp3", volume: 0.9 }],
      },
    ],
  },
  musicbox: {
    keyConfig: [
      {
        keys: ".*",
        files: [{ path: "mbox1.mp3" }, { path: "mbox2.mp3" }, { path: "mbox3.mp3" }, { path: "mbox4.mp3" }, { path: "mbox5.mp3" }, { path: "mbox6.mp3" }, { path: "mbox7.mp3" }, { path: "mbox8.mp3" }],
        strategy: "random",
      },
    ],
  },
  ducktilo: {
    keyConfig: [
      {
        keys: "Enter",
        files: [{ path: "quack2.mp3", volume: 0.3 }],
      },
      {
        keys: ".*",
        files: [{ path: "quack1.mp3" }],
      },
    ],
  },
  drumkit: {
    keyConfig: [
      {
        keys: ".*",
        files: [{ path: "kick.mp3" }, { path: "hat.mp3" }, { path: "snare.mp3" }, { path: "kick.mp3" }, { path: "hat.mp3" }, { path: "kick.mp3" }, { path: "snare.mp3" }, { path: "hat.mp3" }],
        strategy: "sequential",
      },
    ],
  },
};

const handleDaktilo = (args) => {
  if (args.includes("--close")) {
    if (!daktiloEnabled) {
      return {
        output: "Daktilo is not currently running",
      };
    }

    cleanup();
    return {
      output: "Daktilo sound effects disabled",
    };
  }

  if (args.includes("--list-presets")) {
    const presetList = Object.keys(presets)
      .map((name) => `${name}`)
      .join(", ");
    return {
      output: presetList,
    };
  }

  const presetIndex = args.indexOf("--preset");
  if (presetIndex !== -1 && args[presetIndex + 1]) {
    const presetName = args[presetIndex + 1];
    if (!presets[presetName]) {
      return {
        output: `Preset '${presetName}' not found. Use 'daktilo --list-presets' to see available options.`,
      };
    }

    // If already running, update preset
    if (daktiloEnabled) {
      cleanup();
    }

    return initPreset(presetName);
  }
  
  if (daktiloEnabled) {
    return {
      output: "Daktilo is already running. Run 'daktilo --close' to stop.",
    };
  }

  return initPreset("default");
};

const initPreset = (presetName) => {
  currentPreset = presets[presetName];
  daktiloEnabled = true;
  sequenceIndex = {};

  // Set up event listener for keyup events
  document.addEventListener("keyup", handleKeyEvent);

  return {
    output: `Daktilo launched '${presetName}' preset. Run 'daktilo --close' to stop.`,
  };
};

const handleKeyEvent = (event) => {
  if (!daktiloEnabled || !currentPreset) return;

  // Find matching configuration for the key
  const matchingConfig = currentPreset.keyConfig.find((config) => {
    const keyPattern = new RegExp(config.keys);
    return keyPattern.test(event.key);
  });

  if (!matchingConfig) return;

  const files = matchingConfig.files;
  if (!files || files.length === 0) return;

  let fileToPlay;
  if (matchingConfig.strategy === "random") {
    const randomIndex = Math.floor(Math.random() * files.length);
    fileToPlay = files[randomIndex];
  } else if (matchingConfig.strategy === "sequential") {
    const configId = matchingConfig.keys;
    if (!(configId in sequenceIndex)) {
      sequenceIndex[configId] = 0;
    }
    fileToPlay = files[sequenceIndex[configId]];
    sequenceIndex[configId] = (sequenceIndex[configId] + 1) % files.length;
  } else {
    fileToPlay = files[0];
  }

  playSound(fileToPlay);
};

const playSound = (fileConfig) => {
  const audio = new Audio(`/sounds/${fileConfig.path}`);
  if (fileConfig.volume) {
    audio.volume = fileConfig.volume;
  }

  if (currentPreset && currentPreset.variation) {
    const variation = currentPreset.variation;
    if (variation.volume) {
      const [min, max] = variation.volume;
      audio.volume *= Math.random() * (max - min) + min;
    }
    if (variation.tempo) {
      const [min, max] = variation.tempo;
      audio.playbackRate = Math.random() * (max - min) + min;
    }
  }

  audio.play().catch((err) => {
    console.error("Error playing sound:", err);
  });
};

const cleanup = () => {
  document.removeEventListener("keyup", handleKeyEvent);

  daktiloEnabled = false;
  currentPreset = null;
  sequenceIndex = {};
};

//================ Date ================//

const dateUtils = {
  modify: (date, value, unit) => {
    const actions = {
      seconds: (d, v) => d.setSeconds(d.getSeconds() + v),
      minutes: (d, v) => d.setMinutes(d.getMinutes() + v),
      hours: (d, v) => d.setHours(d.getHours() + v),
      days: (d, v) => d.setDate(d.getDate() + v),
      months: (d, v) => d.setMonth(d.getMonth() + v),
      years: (d, v) => d.setFullYear(d.getFullYear() + v),
    };
    const result = new Date(date);
    actions[unit](result, value);
    return result;
  },

  getNextWeekday: (date, weekday) => {
    const weekdays = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];
    const targetIdx = weekdays.indexOf(weekday);
    if (targetIdx === -1) return date;

    let daysToAdd = targetIdx - date.getDay();
    if (daysToAdd <= 0) daysToAdd += 7;
    return dateUtils.modify(date, daysToAdd, "days");
  },
};

const parseDateString = (str) => {
  const now = new Date();
  const input = str.toLowerCase().trim();

  const shortcuts = {
    yesterday: () => dateUtils.modify(now, -1, "days"),
    tomorrow: () => dateUtils.modify(now, 1, "days"),
  };

  if (shortcuts[input]) return shortcuts[input]();
  if (input.startsWith("next ")) return dateUtils.getNextWeekday(now, input.split(" ")[1]);

  const regex = /^(\d+)\s+(year|month|day|sec|min|hour)s?\s*(ago)?$/;
  const match = input.match(regex);
  if (!match) return null;

  const [, value, unit, ago] = match;
  const multiplier = ago ? -1 : 1;
  const unitMap = {
    year: "years",
    month: "months",
    day: "days",
    hour: "hours",
    min: "minutes",
    sec: "seconds",
  };

  return dateUtils.modify(now, parseInt(value, 10) * multiplier, unitMap[unit]);
};

const formatDate = (date, useUTC = false) => {
  const options = {
    weekday: "short",
    day: "2-digit",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: defaultHourFormat === "12",
  };

  if (useUTC) {
    options.timeZone = "UTC";
  } else {
    options.timeZoneName = "long";
  }

  const parts = new Intl.DateTimeFormat("en-US", options).formatToParts(date);
  const values = Object.fromEntries(parts.map(({ type, value }) => [type, value]));

  let result = `${values.weekday} ${values.day} ${values.month} ${values.year} ` + `${values.hour}:${values.minute}:${values.second}`;

  if (options.hour12) result += ` ${values.dayPeriod}`;

  if (useUTC) {
    result += " UTC";
  } else {
    const offset = date.getTimezoneOffset();
    const sign = offset > 0 ? "-" : "+";
    const hours = String(Math.floor(Math.abs(offset) / 60)).padStart(2, "0");
    const minutes = String(Math.abs(offset) % 60).padStart(2, "0");
    result += ` UTC${sign}${hours}:${minutes} (${values.timeZoneName})`;
  }

  return result;
};

// Custom date format handler
const formatDateCustom = (date, format, useUTC = false) => {
  const getValue = (key) => {
    const getters = {
      Y: ["FullYear", false],
      m: ["Month", true],
      d: ["Date", false],
      H: ["Hours", false],
      M: ["Minutes", false],
      S: ["Seconds", false],
      A: ["weekday", "long"],
      B: ["month", "long"],
      y: ["FullYear", false, (year) => year.toString().slice(-2)],
    };

    const [getter, adjust, transform] = getters[key];
    const method = useUTC ? `getUTC${getter}` : `get${getter}`;

    if (["A", "B"].includes(key)) {
      return new Intl.DateTimeFormat("en-US", {
        [getter]: adjust,
        timeZone: useUTC ? "UTC" : undefined,
      }).format(date);
    }

    let value = date[method]();
    if (adjust) value++;
    return transform ? transform(value) : value;
  };

  // Handle special format codes
  const specialFormats = {
    "%D": "%m/%d/%y",
    "%T": "%H:%M:%S",
  };

  Object.entries(specialFormats).forEach(([key, value]) => {
    format = format.replace(key, value);
  });

  return format.replace(/%([YmdHMSABy])/g, (_, code) => {
    const value = getValue(code);
    return ["A", "B"].includes(code) ? value : String(value).padStart(2, "0");
  });
};

// Main date command handler
const handleDate = (args) => {
  const options = {
    useUTC: false,
    dateStr: null,
    format: null,
  };

  for (let i = 0; i < args.length; i++) {
    const arg = args[i];
    if (arg === "-u") {
      options.useUTC = true;
    } else if (arg.startsWith("--date=")) {
      options.dateStr = arg.substring(7);
    } else if (arg === "--date" && i + 1 < args.length) {
      options.dateStr = args[++i];
    } else if (arg.startsWith("+")) {
      options.format = arg.substring(1);
    }
  }

  const targetDate = options.dateStr ? parseDateString(options.dateStr) : new Date();
  if (options.dateStr && !targetDate) {
    return { output: `Invalid date string provided: "${options.dateStr}"`, noNewline: false };
  }

  const output = options.format ? formatDateCustom(targetDate, options.format, options.useUTC) : formatDate(targetDate, options.useUTC);

  return { output, noNewline: false };
};

//================ Echo ================//

const handleEcho = (args) => {
  let enableEscapes = false;
  let noNewline = false;
  let output = "";

  if (args[0] === "-e") {
    enableEscapes = true;
    args.shift();
  }

  let inputString = args.join(" ");

  if (enableEscapes) {
    if (inputString.includes("\\c")) {
      noNewline = true;
      inputString = inputString.split("\\c")[0];
    }

    output = inputString
      .replace(/\\e\[([0-9;]*)m/g, "\x1b[$1m")
      .replace(/\\e/g, "\x1b")
      .replace(/\\b/g, "\b")
      .replace(/\\n/g, "\r\n")
      .replace(/\\r/g, "\r")
      .replace(/\\t/g, "\t")
      .replace(/\\v/g, "\v")
      .replace(/\\a/g, "\x07")
      .replace(/\\\\/g, "\\");
  } else {
    output = inputString;
  }

  return { output, noNewline };
};

//================ Factor ================//

// Miller-Rabin Primality Test
const isPrime = (n, k = 5) => {
  if (n === 2n || n === 3n) return true;
  if (n <= 1n || n % 2n === 0n) return false;

  // Write n-1 as 2^s * d
  let s = 0n;
  let d = n - 1n;
  while (d % 2n === 0n) {
    d /= 2n;
    s += 1n;
  }

  // Witness loop
  for (let i = 0; i < k; i++) {
    const a = 2n + BigInt(Math.floor(Math.random() * Number(n - 4n)));
    let x = modPow(a, d, n);
    if (x === 1n || x === n - 1n) continue;

    let continueOuter = false;
    for (let r = 0n; r < s - 1n; r++) {
      x = modPow(x, 2n, n);
      if (x === n - 1n) {
        continueOuter = true;
        break;
      }
    }

    if (continueOuter) continue;
    return false;
  }

  return true;
};

// Modular Exponentiation
const modPow = (base, exponent, modulus) => {
  if (modulus === 1n) return 0n;
  let result = 1n;
  base = base % modulus;
  while (exponent > 0n) {
    if (exponent % 2n === 1n) {
      result = (result * base) % modulus;
    }
    exponent = exponent >> 1n;
    base = (base * base) % modulus;
  }
  return result;
};

// Pollard's Rho Algorithm
const pollardsRho = (n) => {
  if (n % 2n === 0n) return 2n;
  if (n % 3n === 0n) return 3n;
  if (n % 5n === 0n) return 5n;

  const f = (x, c, mod) => (modPow(x, 2n, mod) + c) % mod;

  let x = 2n;
  let y = 2n;
  let c = 1n;
  let d = 1n;

  while (d === 1n) {
    x = f(x, c, n);
    y = f(f(y, c, n), c, n);
    d = gcd(abs(x - y), n);
    if (d === n) {
      c += 1n;
      x = 2n;
      y = 2n;
      d = 1n;
    }
  }

  return d;
};

const gcd = (a, b) => {
  while (b !== 0n) {
    const temp = b;
    b = a % b;
    a = temp;
  }
  return a;
};

// Absolute Value for BigInt
const abs = (n) => (n < 0n ? -n : n);

// Factorization using Pollard's Rho and Miller-Rabin
const getPrimeFactors = (n) => {
  const factors = [];

  const factor = (num) => {
    if (num === 1n) return;
    if (isPrime(num)) {
      factors.push(num);
      return;
    }
    const divisor = pollardsRho(num);
    factor(divisor);
    factor(num / divisor);
  };

  factor(n);

  // Sort factors for better readability
  factors.sort((a, b) => (a < b ? -1 : a > b ? 1 : 0));
  return factors;
};

const handleFactor = (args) => {
  if (args.length === 0) {
    return {
      output: "Please provide a number to factorize",
      noNewline: false,
    };
  }

  try {
    // Parse the input number as BigInt to handle large numbers
    const num = BigInt(args[0]);

    // Validate input
    if (num <= 0n) {
      return {
        output: "Please provide a valid positive integer",
        noNewline: false,
      };
    }

    const factors = getPrimeFactors(num);

    const output =
      factors.length === 1
        ? `${num.toString()}: ${num.toString()}` // Prime number
        : `${num.toString()}: ${factors.map((f) => f.toString()).join(" ")}`; // Composite number

    return {
      output,
    };
  } catch (error) {
    return {
      output: "Invalid input. Please provide a valid positive integer",
    };
  }
};

//================ Fortune ================/

const FORTUNES_URL = "/fortunes.txt";
let fortunesCache = null;

const fetchFortunes = async () => {
  if (fortunesCache) {
    return fortunesCache;
  }
  try {
    const response = await fetch(FORTUNES_URL);
    if (!response.ok) {
      throw new Error("Failed to fetch fortunes");
    }
    const text = await response.text();

    fortunesCache = text
      .split("%")
      .map((fortune) => fortune.trim())
      .filter((fortune) => fortune.length > 0);

    return fortunesCache;
  } catch (error) {
    return ["Error fetching fortunes. Here's a fortune for you anyway: If debugging is the process of removing software bugs, then programming must be the process of putting them in. ― Edsger Dijkstra"];
  }
};

const wrapText = (text, maxLength, initialIndent = "", laterIndent = "") => {
  const words = text.split(" ");
  const lines = [];
  let currentLine = [];
  let currentLength = initialIndent.length;

  for (const word of words) {
    const wordLength = word.length;
    const spaceNeeded = currentLine.length > 0 ? 1 : 0;

    if (currentLength + spaceNeeded + wordLength > maxLength) {
      if (currentLine.length > 0) {
        lines.push(currentLine.join(" "));
      }
      currentLine = [word];
      currentLength = laterIndent.length + wordLength;
    } else {
      currentLength += spaceNeeded + wordLength;
      currentLine.push(word);
    }
  }

  if (currentLine.length > 0) {
    lines.push(currentLine.join(" "));
  }

  return lines.map((line, index) => (index === 0 ? initialIndent : laterIndent) + line).join("\r\n");
};

const processQuote = (fortune, terminalCols) => {
  // Split into quote and attribution
  const parts = fortune.split(/\n\s*―/);
  const quote = parts[0];
  const attr = parts.length > 1 ? parts[1].trim() : "";

  // Process quote
  // Keep leading spaces but trim trailing spaces
  const quoteChunks = quote.split("\n").map((chunk) => chunk.replace(/\s+$/, ""));
  const quoteMaxLength = Math.max(...quoteChunks.map((chunk) => chunk.length));
  const quoteExceedsWidth = quoteMaxLength > terminalCols;

  // Format quote
  let formattedQuote;
  if (quoteExceedsWidth) {
    // If exceeding width, trim all spaces and rewrap
    const trimmedChunks = quoteChunks.map((chunk) => chunk.trim());
    formattedQuote = wrapText(trimmedChunks.join(" "), terminalCols);
  } else {
    // Keep original formatting with leading spaces
    formattedQuote = quoteChunks.join("\r\n");
  }

  // If no attribution, return just the quote
  if (!attr) {
    return formattedQuote;
  }

  // Process attribution
  const INITIAL_INDENT = "        ";
  const LATER_INDENT = "          ";
  // Add back the "― " prefix to the first chunk
  const attrChunks = attr.split("\n").map((chunk) => chunk.trim());
  attrChunks[0] = "― " + attrChunks[0];
  const attrMaxLength = Math.max(...attrChunks.map((chunk) => chunk.length + INITIAL_INDENT.length));
  const attrExceedsWidth = attrMaxLength > terminalCols;

  // Format attribution based on conditions
  let formattedAttr;
  if (attrExceedsWidth) {
    if (quoteExceedsWidth) {
      formattedAttr = wrapText(attrChunks.join(" "), terminalCols, INITIAL_INDENT, LATER_INDENT);
    } else {
      // Only attribution exceeds, wrap to quote length
      formattedAttr = wrapText(attrChunks.join(" "), quoteMaxLength, INITIAL_INDENT, LATER_INDENT);
    }
  } else {
    if (quoteExceedsWidth) {
      // Only quote exceeds, keep attribution chunks as is
      formattedAttr = attrChunks.map((chunk, i) => (i === 0 ? INITIAL_INDENT : LATER_INDENT) + chunk).join("\r\n");
    } else {
      // Neither exceeds, wrap attribution to quote length
      formattedAttr = wrapText(attrChunks.join(" "), quoteMaxLength, INITIAL_INDENT, LATER_INDENT);
    }
  }

  return `${formattedQuote}\r\n${formattedAttr}`;
};

const handleFortune = async (terminal) => {
  const fortunes = await fetchFortunes();
  const randomIndex = Math.floor(Math.random() * fortunes.length);
  const fortune = fortunes[randomIndex];

  const formattedFortune = processQuote(fortune, terminal.cols);
  return { output: formattedFortune };
};

//================ Weather ================//

const handleWeather = async (args, xterm) => {
  if (args.length === 0 || args[0] === "--help") {
    const helpLines = ["Usage:", '  weather [city/town name]     - Get weather for a city/town (e.g., weather "Salt Lake City")', '  weather [location] --geo     - Get weather for a geographical location (e.g., weather "Eiffel Tower" --geo)'];
    return {
      output: helpLines.join("\r\n"),
      noNewline: false,
    };
  }

  const cols = xterm.cols;

  let location = "";
  let isGeo = args.includes("--geo");
  // Remove the --geo flag if present
  args = args.filter((arg) => arg !== "--geo");
  // Join the remaining arguments to form the location
  location = args.join(" ").replace(/['"]/g, ""); // Remove quotes if present

  try {
    // Choose URL based on terminal width
    let url;
    if (cols >= 125) {
      url = `https://wttr.in/${encodeURIComponent(location)}?A`;
    } else if (cols >= 63) {
      url = `https://wttr.in/${encodeURIComponent(location)}?A&n&2`;
    } else {
      url = `https://wttr.in/${encodeURIComponent(location)}?A&0`;
    }

    const response = await fetch(url);
    let weather = await response.text();

    // For narrow formats, remove location line if present
    if (cols < 125) {
      weather = weather
        .split("\n")
        .filter((line) => !line.toLowerCase().startsWith("location:"))
        .join("\n");
    }

    const formattedWeather = weather
      .split("\n")
      .map((line) => line.trimEnd()) // Remove trailing spaces
      .join("\r\n");

    return {
      output: formattedWeather,
      noNewline: false,
    };
  } catch (error) {
    return {
      output: "Error fetching weather data. Please check your internet connection and try again.",
      noNewline: false,
    };
  }
};
