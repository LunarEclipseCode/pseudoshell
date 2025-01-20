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

- `clear` - Clear the terminal screen
- `date` - Display current date and time with formatting options
- `echo` - Display text with support for escape sequences
- `help` - Show available commands
- `neofetch` - Display system information in an aesthetic way
- `periodic-table-cli` - Interactive periodic table explorer
- `theme` - Change terminal appearance
- `weather` - Show weather
- `whoami` - Display temporary username
- `exit` - Close the terminal session

`date` `echo` `neofetch` `periodic-table-cli` `theme` and `weather` has additional options available that can be found by running `[command] --help`

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
