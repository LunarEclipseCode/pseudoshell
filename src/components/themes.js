export const themes = {
    default: {
      terminal: {
        background: "#000000",
        foreground: "#ffffff",
        cursor: "#ffffff",
        selection: "#5c5c5c",
      },
      scrollbar: {
        track: "#222222",
        thumb: "#555555",
      },
      page: "#000000"
    },
    monokai: {
      terminal: {
        background: "#272822",
        foreground: "#F8F8F2",
        cursor: "#F8F8F2",
        selection: "#49483E",
      },
      scrollbar: {
        track: "#1e1f1c",
        thumb: "#49483E",
      },
      page: "#272822"
    },
    dracula: {
      terminal: {
        background: "#282A36",
        foreground: "#F8F8F2",
        cursor: "#F8F8F2",
        selection: "#44475A",
      },
      scrollbar: {
        track: "#21222C",
        thumb: "#44475A",
      },
      page: "#282A36"
    },
    solarized_dark: {
      terminal: {
        background: "#002B36",
        foreground: "#839496",
        cursor: "#839496",
        selection: "#073642",
      },
      scrollbar: {
        track: "#001E27",
        thumb: "#073642",
      },
      page: "#002B36"
    },
    nord: {
      terminal: {
        background: "#2E3440",
        foreground: "#D8DEE9",
        cursor: "#D8DEE9",
        selection: "#434C5E",
      },
      scrollbar: {
        track: "#242933",
        thumb: "#434C5E",
      },
      page: "#2E3440"
    },
    onedark: {
      terminal: {
        background: "#282C34",
        foreground: "#ABB2BF",
        cursor: "#ABB2BF",
        selection: "#3E4451",
      },
      scrollbar: {
        track: "#21252B",
        thumb: "#3E4451",
      },
      page: "#282C34"
    }
  };
  
  export const applyTheme = (term, themeName) => {
    const theme = themes[themeName] || themes.default;
    
    // Update terminal colors
    term.options.theme = theme.terminal;
    
    // Update page background
    document.body.style.backgroundColor = theme.page;
    document.getElementById('__next').style.backgroundColor = theme.page;
    
    // Update scrollbar styles
    const style = document.createElement('style');
    style.textContent = `
      .xterm .xterm-viewport::-webkit-scrollbar-track {
        background: ${theme.scrollbar.track} !important;
      }
      .xterm .xterm-viewport::-webkit-scrollbar-thumb {
        background: ${theme.scrollbar.thumb} !important;
      }
      ::-webkit-scrollbar {
        scrollbar-color: ${theme.scrollbar.thumb} ${theme.scrollbar.track} !important;
      }
    `;
    
    // Remove any existing theme styles
    const existingStyle = document.querySelector('style[data-theme-style]');
    if (existingStyle) {
      existingStyle.remove();
    }
    
    style.setAttribute('data-theme-style', 'true');
    document.head.appendChild(style);
    
    return true;
  };