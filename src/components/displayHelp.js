const calendarLines = [
  "",
  "Usage: cal [options] [[[day] month] year]",
  "Display a calendar, or some part of it.",
  "Without any arguments, display he current month.",
  "",
  "Options:",
  "  -n, --months <num>     Show num months starting with date's month",
  "  -S, --span             Span the date when displaying multiple months",
  "  -m, --monday           Monday as first day of week",
  "  -v, --vertical         Show day vertically instead of line",

  "Examples:",
  "  cal 2012               Show full year 2012",
  "  cal 14 3 2016          Show March 2016, highlight the 14th",
  "  cal 6 1988 -n 6 -S -v  Show Mar - Aug 1988 in vertical layout",
  "  cal -m                 Show current month with Monday as first day",
  "",
];

const daktiloLines = [
  "",
  "Usage: daktilo [options]",
  "Display a calendar, or some part of it.",
  "Turn your keyboard into a typewriter!",
  "",
  "Options:",
  "  --preset           Sets the name of the sound preset to use",
  "  --list-presets     Lists the available presets",
  "  --close            Closes daktilo and stops the sound",
  "",
];

const dateLines = [
  "",
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

const echoLines = [
  "",
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
  '  echo -e "\\e[1;37;41mThis is white text on red background\\e[0m"',
  '  echo -e "\\e[4mThis is underlined text\\e[0m"',
  '  echo -e "\\e[31mThis \\e[32mis \\e[33ma \\e[34mrainbow \\e[35mtext\\e[0m"',
  "",
];

const helpLines = [
  "",
  "  \x1b[92mbinary-clock \x1b[0m        Shows current time in binary",
  "  \x1b[92mcal\x1b[0m                  Displays calendar",
  "  clear                Clears the terminal",
  `  \x1b[92mdate\x1b[0m                 Shows current date and time`,
  `  \x1b[92mdaktilo\x1b[0m              Turn your keyboard into a typewriter`,
  `  \x1b[92mecho\x1b[0m                 Displays a line of text`,
  "  exit                 Closes the terminal",
  "  \x1b[92mfactor\x1b[0m               Prints the prime factors of input",
  "  fortune              Displays random quotes",
  "  help                 Displays this help message",
  `  \x1b[92mneofetch\x1b[0m             Displays system information aesthetically`,
  `  \x1b[92mperiodic-table-cli\x1b[0m   Shows interactive periodic table`,
  "  \x1b[92msl\x1b[0m                   Displays steam locomotive",
  `  \x1b[92mtheme\x1b[0m                Lists or changes terminal themes`,
  `  \x1b[92mweather\x1b[0m              Shows weather information`,
  "  whoami               Displays temporary username",
  "  yes [text]           Prints the input text repeatedly",
  "",
  "To learn more about the colored commands, type '[command] --help'",
  "",
];

const neofetchLines = [
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

const periodicTableLines = [
  "",
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

export const displayHelp = (command, terminal) => {
  switch (command) {
    case "cal": {
      terminal.write(calendarLines.join("\r\n"));
      return true;
    }
    case "daktilo": {
      terminal.write(daktiloLines.join("\r\n"));
      return true;
    }
    case "date": {
      terminal.write(dateLines.join("\r\n"));
      return true;
    }
    case "echo": {
      terminal.write(echoLines.join("\r\n"));
      return true;
    }
    case "help": {
      terminal.write(helpLines.join("\r\n"));
      return true;
    }
    case "neofetch": {
      terminal.write(neofetchLines.join("\r\n"));
      return true;
    }
    case "periodic-table-cli": {
      terminal.write(periodicTableLines.join("\r\n"));
      return true;
    }
  }
};
