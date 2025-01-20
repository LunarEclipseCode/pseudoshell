import { handleBasicCommand } from "./basics";
import { handleNeofetchCommand } from "./neofetch";
import { applyTheme, themes } from "./themes";
import { handlePeriodicTableData } from "./periodic-table-data";
import { elements } from "../../public/elementData";

let currentTheme = "default";

export const executeCommand = async (input, terminal) => {
  if (!input) {
    return true;
  }

  const args = parseArguments(input);
  const command = args[0];
  const commandArgs = args.slice(1);

  switch (command) {
    case "echo":
      if (commandArgs[0] === "--help") {
        const echoHelpLines = [
          "Usage: echo [OPTION]... [STRING]...",
          "Echo the STRING(s) to terminal output.",
          "",
          "Options:",
          "  -e        Enable interpretation of backslash escapes",
          "",
          "If -e is in effect, the following sequences are recognized:",
          "  \\b        backspace",
          "  \\n        new line",
          "  \\r        carriage return",
          "  \\t        horizontal tab",
          "  \\v        vertical tab",
          "  \\c        produce no further output",
          "  \\e        escape character",
          "  \\\\        backslash",
          "",
          "Examples:",
          '  echo -e "e[1;37;41mThis is white text on red backgrounde[0m"',
          '  echo -e "e[4mThis is underlined texte[0m"',
          '  echo -e "e[31mThis e[32mis e[33ma e[34mrainbow e[35mtexte[0m"',
        ];
        terminal.write(echoHelpLines.join("\r\n"));
        return true;
      }
      const { output, noNewline } = handleBasicCommand(command, commandArgs);
      terminal.write(`${output}`);
      return !noNewline;
    case "date":
      if (commandArgs[0] === "--help") {
        const dateHelpLines = [
          "Usage: date [OPTION]... [+FORMAT]",
          "Display the time in the given FORMAT.",
          "",
          "Options:",
          "  -u                       Output in UTC/GMT timezone",
          "  --date=STRING            Display date described by STRING",
          "",
          "FORMAT Options:",
          "  %Y        year",
          "  %y        last two digits of year",
          "  %m        month",
          "  %d        day of month",
          "  %H        hour",
          "  %M        minute",
          "  %S        second",
          "  %A        full weekday name",
          "  %B        full month name",
          "",
          "Special FORMAT sequences:",
          "  %D        date; same as %m/%d/%y",
          "  %T        time; same as %H:%M:%S",
          "",
          "Supported date STRING formats:",
          "  'N years ago'          N years before current date",
          "  'N months ago'         N months before current date",
          "  'N days ago'           N days before current date",
          "  'N hours ago'          N hours before current date",
          "  'N minutes/min ago'    N minutes before current date",
          "  'N seconds/sec ago'    N seconds before current date",
          "  'yesterday'            Previous day",
          "  'tomorrow'             Next day",
          "  'next sun/mon/tue...'  Next occurrence of specified weekday",
          "",
          "Examples:",
          '  date "+%D %T"                           Display date and time in MM/DD/YY HH:MM:SS format',
          '  date -u --date="1 year" "+%Y/%m/%d"     Display date of 1 year ago in UTC using YYYY/MM/DD format',
          "",
        ];
        terminal.write(dateHelpLines.join("\r\n"));
        return true;
      }
      const { output: dateOut } = handleBasicCommand(command, commandArgs);
      terminal.write(`${dateOut}`);
      return true;
    case "weather":
      try {
        const { output: weatherOutput } = await handleBasicCommand(command, commandArgs, terminal.term);
        terminal.write(`${weatherOutput}`);
      } catch (error) {
        terminal.write("Error fetching weather data\r\n");
      }
      return true;
    case "whoami":
      terminal.write(terminal.username.split("@")[0]);
      return true;
    case "help":
      displayHelp(terminal);
      return true;
    case "theme":
      if (commandArgs[0] === "--help" || commandArgs.length === 0) {
        const themeHelpLines = ["Usage: theme [THEME_NAME]", "", "Available themes:", "  default, monokai, dracula, solarized_dark, nord, onedark", "", "Examples:", "  theme onedark      Switch to the Dracula theme", ""];
        terminal.write(themeHelpLines.join("\r\n"));
        return true;
      } else {
        const themeName = commandArgs[0].toLowerCase();
        if (themes[themeName]) {
          applyTheme(terminal.term, themeName);
          currentTheme = themeName; // Update current theme
          terminal.write(`Theme changed to ${themeName}`);
        } else {
          terminal.write(`Theme '${themeName}' not found`);
        }
      }
      return true;
    case "neofetch":
      if (commandArgs[0] === "--help") {
        const neofetchHelpLines = [
          "",
          "Usage: neofetch [OPTIONS]",
          "View system information in an aesthetic way.",
          "",
          "Options:",
          "  --colors x x x x x x       Changes the text colors in this order:",
          "                             title, @, underline, subtitle, colon, info",
          "  --ascii_distro distro      Display the ascii art of the mentioned distro",
          "  --color_blocks on/off      Enable/disable the color blocks",
          "  --underline on/off         Enable/disable underline after title",
          "  --underline_char char      Character to use when underlining title",
          "  --separator string         Changes the default ':' separator to the specified string",
          "  --col_offset auto/num      Left padding of color blocks",
          "  --block_width num          Width of color blocks in spaces",
          "  --disable infoname         Allows you to disable an info line from appearing",
          "                             You can supply multiple args. eg. 'neofetch --disable cpu gpu'",
          "  --off                      Disable ASCII art",
          "  -L                         Hide the info text and only show the ascii logo",
          "  --stdout                   Output without ASCII art and colors",
          "",
          "Available fields to disable:",
          "  os, browser, engine, appearance, uptime, ip, region, resolution,",
          "  pixel-ratio, font, time, timezone, language, battery, weather, temperature",
          "",
          "Available ascii art for --ascii_distro:",
          "  mac, ubuntu, windows, linux, aix, alma, hash, alpine, alter, amazon,",
          "  anarchy, android, instant, antergos, aperture, apricity, archcraft, arco,",
          "  archbox, archlabs, arch_old, archstrike, archmerge, arch, artix, arya,",
          "  bedrock, blackarch, blag, blankon, bluelight, manjaro, xferience",
          "",
        ];
        terminal.write(neofetchHelpLines.join("\r\n"));
        return true;
      }
      try {
        const { output: neofetchOutput } = await handleNeofetchCommand(commandArgs, terminal.username, terminal.firstRun, terminal.term, currentTheme, terminal.pageLoadTime);
        terminal.write(neofetchOutput);
      } catch (error) {
        terminal.write(`Error running neofetch: ${error.message}\r\n`);
      }
      return true;

    case "periodic-table-cli":
      if (commandArgs[0] === "--help") {
        const periodicTableHelpLines = [
          "Usage: periodic-table-cli [OPTIONS]",
          "Display and interact with the periodic table of elements.",
          "",
          "Options:",
          "  --mode=MODE            Set display mode",
          "                           app   - Interactive mode (default)",
          "                           data  - Display element data",
          "                           chart - Static table view",
          "  --atomic-number=NUM    Select element by atomic number",
          "  --symbol=SYMBOL        Select element by atomic symbol",
          "  --name=NAME            Select element by full name",
          "  --small                Display condensed periodic table",
          "  --verbose              Show extended element data",
          "",
          "Examples:",
          "  periodic-table-cli                         Launch interactive periodic table",
          "  periodic-table-cli --mode=data --symbol=H  Display hydrogen data",
          "  periodic-table-cli --mode=chart --small    Show condensed periodic table",
          "  periodic-table-cli --mode=data --verbose   Display complete element dataset",
          "",
        ];
        terminal.write(periodicTableHelpLines.join("\r\n"));
        return true;
      }

      const content = handlePeriodicTableData(input, terminal, elements);
      if (content != false) {
        terminal.write(content);
        return true;
      }
      return false;
    case "exit":
      window.close();
      setTimeout(() => {
        window.location.href = "about:blank";
      }, 1000);
      break;
    default:
      terminal.write(`Command not found: ${command}`);
      return true; // Always return true for unknown commands
  }
};

export const parseArguments = (input) => {
  const regex = /--[a-zA-Z]+="([^"]+)"|--[a-zA-Z]+=(\S+)|"([^"]+)"|'([^']+)'|(\S+)/g;
  const args = [];
  let match;

  while ((match = regex.exec(input)) !== null) {
    // Find the first not undefined capture group
    const value = match.slice(1).find((x) => x !== undefined);

    if (match[0].includes("--date=")) {
      args.push(`--date=${value}`);
    } else {
      args.push(value);
    }
  }
  return args;
};

const displayHelp = (terminal) => {
  const helpLines = [
    "",
    "  clear                Clear the terminal",
    `  \x1b[92mdate\x1b[0m                 Show current date and time`,
    `  \x1b[92mecho\x1b[0m                 Display a line of text`,
    "  exit                 Close the terminal",
    "  help                 Display this help message",
    `  \x1b[92mneofetch\x1b[0m             Display system information aesthetically`,
    `  \x1b[92mperiodic-table-cli\x1b[0m   Show interactive periodic table`,
    `  \x1b[92mtheme\x1b[0m                List or change terminal themes`,
    `  \x1b[92mweather\x1b[0m              Show weather information`,
    "  whoami               Display temporary username",
    "",
    "To learn more about the colored commands, type '[command] --help'",
  ];
  terminal.write(helpLines.join("\r\n"));
};
