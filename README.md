![](public/pseudoshell.jpg)

<h1 align="center">
 Pseudoshell
</h1>

A feature-rich terminal simulator that runs entirely in your browser, providing a native-like command-line experience with common Unix/Linux commands.

## 🚀 Features

- **Native-like Experience**: 
  - Command history navigation (up/down arrows)
  - Cursor movement (left/right arrows or mouse click)
  - Multi-line command support
  - Copy/paste functionality
  - Undo/redo support
- **Customizable Themes**: Multiple built-in themes including Monokai, Dracula, Solarized Dark, Nord, and One Dark.
- **Mobile-Friendly**: Responsive design with virtual keyboard support

## 📋 Available Commands

- [binary-clock](https://github.com/tom-on-the-internet/binary-clock) - Shows current time in binary
- [cal](https://github.com/skeeto/scratch/blob/master/windows/cal.c) - Displays calendar
- `clear` - Clears the terminal screen
- `date` - Displays current date and time with formatting options
- [daktilo](https://github.com/orhun/daktilo) - Plays typewriter sounds while typing
- `echo` - Displays text with support for escape sequences
- `exit` - Closes the terminal session
- `factor` - Prints the prime factors of input
- [fortune](https://github.com/bmc/fortunes) - Displays random quotes
- `help` - Shows available commands
- [neofetch](https://github.com/dylanaraps/neofetch) - Displays system information in an aesthetic way. Some ASCII art are from [fastfetch](https://github.com/fastfetch-cli/fastfetch). Weather and temperature information is fetched from [Open-Meteo](https://open-meteo.com/en/docs) using the approximate location collected from IP address via [GeoJS](https://www.geojs.io/)
- [periodic-table-cli](https://github.com/spirometaxas/periodic-table-cli) - Interactive periodic table explorer
- [sl](https://github.com/mtoyoda/sl) - Displays steam locomotive
- [theme](https://gogh-co.github.io/Gogh/) - Changes terminal appearance
- [weather](https://wttr.in/) - Shows weather
- `whoami` - Displays temporary username
- `yes` - Prints the input text repeatedly

`binary-clock` `cal` `date` `daktilo`  `echo` `neofetch` `periodic-table-cli` `sl`  `theme` and `weather` has additional options available that can be found by running `[command] --help`

### More command support coming soon!

## 📦 Development

To get started with Pseudoshell, clone the repository and install the required dependencies:

```shell
git clone https://github.com/LunarEclipseCode/omni-tools
cd omni-tools
npm install
npm run dev
```

Once the application is running, navigate to `http://localhost:3000` in your browser.
