const defaultHourFormat = "12";

export const handleBasicCommand = (command, args, xterm) => {
  switch (command) {
    case "echo":
      return handleEcho(args);
    case "date":
      return handleDate(args);
    case "whoami":
      return handleWhoami();
    case "weather":
      return handleWeather(args, xterm);
    default:
      return { output: `Command not found: ${command}`, noNewline: false };
  }
};

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

const handleWhoami = () => {
  const userAgent = navigator.userAgent;
  const browserInfo = detectBrowser(userAgent);
  return {
    output: `${browserInfo.name} v${browserInfo.version}`,
    noNewline: false,
  };
};

const detectBrowser = (userAgent) => {
  let name = "Unknown";
  let version = "Unknown";

  if (userAgent.includes("Firefox/")) {
    name = "Firefox";
    version = userAgent.split("Firefox/")[1];
  } else if (userAgent.includes("Chrome/")) {
    if (userAgent.includes("Edg/")) {
      name = "Edge";
      version = userAgent.split("Edg/")[1];
    } else if (userAgent.includes("OPR/")) {
      name = "Opera";
      version = userAgent.split("OPR/")[1];
    } else {
      name = "Chrome";
      version = userAgent.split("Chrome/")[1].split(" ")[0];
    }
  } else if (userAgent.includes("Safari/")) {
    name = "Safari";
    version = userAgent.split("Version/")[1].split(" ")[0];
  }

  return { name, version };
};

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
