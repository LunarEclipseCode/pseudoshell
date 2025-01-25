import React, { useEffect, useRef, useState } from "react";
import Head from "next/head";
import { executeCommand } from "../components/executeCommand";

const firstWords = ["lunar", "cosmic", "stellar", "astral", "nova", "nebula", "phoenix", "aurora", "comet", "eclipse", "galaxy", "meteor", "quasar", "starlit", "zenith"];

const secondWords = ["eclipse", "cosmos", "horizon", "nexus", "prism", "vertex", "cipher", "matrix", "quantum", "shadow", "spectrum", "vortex", "orbit", "pulse", "synth"];

const getRandomWord = (array) => {
  const randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
};

const generateTerminalName = () => {
  const first = getRandomWord(firstWords);
  const second = getRandomWord(secondWords);
  return `${first}@${second}`;
};

const TerminalComponent = () => {
  const terminalRef = useRef(null);
  const xtermRef = useRef(null);
  const commandHistoryRef = useRef([]);
  const historyIndexRef = useRef(-1);
  const currentLineRef = useRef("");
  const cursorPositionRef = useRef(0);
  const undoStackRef = useRef([]);
  const redoStackRef = useRef([]);
  const terminalNameRef = useRef("");
  const promptLengthRef = useRef(0); // Length of the prompt "$ "
  const [viewportHeight, setViewportHeight] = useState("100vh");
  const resizeTimeoutRef = useRef(null);
  const isScrollingRef = useRef("");
  const savedCommandRef = useRef("");
  const keyboardHeightRef = useRef(0);
  const visualViewportRef = useRef(null);
  const [overlay, setOverlay] = useState(null);
  const pageLoadTime = Date.now();

  useEffect(() => {
    // Generate terminal name
    terminalNameRef.current = generateTerminalName();
    // Update promptLength based on terminal name
    promptLengthRef.current = terminalNameRef.current.length + 4; // +4 for ":~$ "
  }, []);

  useEffect(() => {
    const initializeTerminal = async () => {
      const { Terminal } = await import("@xterm/xterm");
      const { FitAddon } = await import("@xterm/addon-fit");

      const hiddenInput = document.createElement("input");
      hiddenInput.style.position = "absolute";
      hiddenInput.style.opacity = "0";
      hiddenInput.style.height = "0";
      hiddenInput.style.width = "0";
      hiddenInput.style.left = "0";
      hiddenInput.style.top = "0";
      hiddenInput.style.pointerEvents = "none";
      hiddenInput.autocomplete = "off";
      hiddenInput.autocapitalize = "none";
      hiddenInput.spellcheck = false;
      hiddenInput.type = "text";
      hiddenInput.enterKeyHint = "enter";
      terminalRef.current.appendChild(hiddenInput);

      Terminal.applyCustomKeyEventHandler = () => true;

      const fontFace = new FontFace("Cascadia Mono NF", "url(/CascadiaMonoNF-Regular.woff2)");
      await fontFace.load();
      document.fonts.add(fontFace);

      const term = new Terminal({
        cursorBlink: true,
        fontSize: 14,
        fontFamily: "Cascadia Mono NF",
        rightClickSelectsWord: true,
        cursorStyle: "bar",
        cursorInactiveStyle: "bar",
        lineHeight: 1.1,
        theme: {
          background: "#000000",
          foreground: "#ffffff",
          cursor: "#ffffff",
          selection: "#5c5c5c",
        },
        allowProposedApi: true,
        copyOnSelect: true,
      });

      const fitAddon = new FitAddon();
      term.loadAddon(fitAddon);

      // Open terminal
      term.open(terminalRef.current);
      fitAddon.fit();
      xtermRef.current = term;
      setTimeout(adjustScrollArea, 100);

      // Show neofetch when site is launched
      currentLineRef.current = "neofetch --disable ip region weather temperature battery";
      handleEnter(true);
      currentLineRef.current = "";
      commandHistoryRef.current = [];
      historyIndexRef.current = 0;

      setTimeout(term.focus(), 100);

      const handleHiddenInput = (e) => {
        const text = e.target.value;
        if (text) {
          insertTextAtCursor(text);
          e.target.value = ""; // Clear the input
        }
      };
      hiddenInput.addEventListener("input", handleHiddenInput);

      const handleHiddenKeydown = (e) => {
        switch (e.key) {
          case "Enter":
            e.preventDefault();
            handleEnter(e);
            break;
          case "Backspace":
            handleBackspace(e);
            break;
          default:
            // Do nothing for other keys
            break;
        }
      };

      hiddenInput.addEventListener("keydown", handleHiddenKeydown);

      const restoreFocus = () => {
        hiddenInput.blur();
        xtermRef.current?.focus();
      };

      const focusHiddenInput = (e) => {
        if (!isScrollingRef.current) {
          const hasSelection = xtermRef.current?.hasSelection();
          if (!hasSelection) {
            hiddenInput.focus();
          }
        }
      };

      // Paste event listener for right click context menu paste
      hiddenInput.addEventListener("paste", (e) => {
        e.stopPropagation();
        e.preventDefault();
        const text = e.clipboardData.getData("text");
        handlePastedText(text);
        // Restore focus after paste completes to show blinking cursor
        setTimeout(restoreFocus, 10);
      });

      term.element.addEventListener("contextmenu", (e) => {
        focusHiddenInput();
      });

      terminalRef.current.addEventListener("touchend", (e) => {
        if (!isScrollingRef.current) {
          setTimeout(() => {
            focusHiddenInput(e);
          }, 100);
        }
        isScrollingRef.current = false;
      });

      const insertTextAtCursor = (text) => {
        const term = xtermRef.current;

        const line = currentLineRef.current;
        const pos = cursorPositionRef.current;
        const cols = term.cols;

        // Save current state for undo and redo
        undoStackRef.current.push({
          line: currentLineRef.current,
          position: cursorPositionRef.current,
        });
        redoStackRef.current = [];

        const newLine = line.slice(0, pos) + text + line.slice(pos);
        currentLineRef.current = newLine;

        // Calculate cursor positions
        const totalPos = promptLengthRef.current + pos;
        const currentCol = totalPos % cols;

        // Write the new text
        term.write(text);

        // Check if we need to wrap to next line
        if (currentCol + text.length >= cols) {
          term.write("\r\n");
        }

        if (pos < line.length) {
          // Clear everything from current position to end of screen
          term.write("\x1b[J");

          // Get remaining text and its length
          const remainingText = line.slice(pos);
          const remainingLength = remainingText.length;

          // Calculate current cursor position after writing the text
          const newTotalPos = promptLengthRef.current + pos + text.length;
          const currentRow = Math.floor(newTotalPos / cols);
          const newCurrentCol = newTotalPos % cols;

          // Calculate how many more characters until end of current line
          const charsUntilLineEnd = cols - newCurrentCol;

          if (remainingLength <= charsUntilLineEnd) {
            // If remaining text fits on current line, then write it
            term.write(remainingText);
          } else {
            // Write remaining text with proper line breaks
            let textLeft = remainingText;
            let isFirstLine = true;

            while (textLeft.length > 0) {
              const chunkSize = isFirstLine ? charsUntilLineEnd : cols;
              const chunk = textLeft.slice(0, chunkSize);

              term.write(chunk);

              textLeft = textLeft.slice(chunkSize);

              if (textLeft.length > 0) {
                term.write("\r\n");
              }

              isFirstLine = false;
            }
          }

          // Calculate final cursor position
          const finalTotalPos = promptLengthRef.current + pos + text.length;
          const finalRow = Math.floor(finalTotalPos / cols);
          const finalCol = finalTotalPos % cols;

          // Calculate current position after writing all text
          const endPos = promptLengthRef.current + newLine.length;
          const endRow = Math.floor(endPos / cols);

          let hasLineBreak = false;
          const textLength = remainingText.length < cols ? remainingText.length : remainingText.length % cols;
          for (let i = 1; i < textLength; i++) {
            if ((finalTotalPos + i) % cols === 0) {
              hasLineBreak = true;
              break;
            }
          }

          // Move cursor back to correct position
          if (endRow !== finalRow) {
            if (hasLineBreak) {
              // Move cursor up required rows
              term.write(`\x1b[${endRow - finalRow}A`);
            } else if (remainingText.length >= cols) {
              // Move cursor up for wrapped lines
              term.write(`\x1b[${Math.floor(remainingText.length / cols)}A`);
            }
          }
          // Move to correct column
          term.write(`\x1b[${finalCol + 1}G`);
        }

        // Update cursor position
        cursorPositionRef.current += text.length;
      };

      term.onKey(({ key, domEvent }) => {
        const ev = domEvent;
        const printable = !ev.altKey && !ev.ctrlKey && !ev.metaKey;

        if (ev.keyCode === 13) {
          handleEnter();
        } else if (ev.keyCode === 8) {
          handleBackspace();
        } else if (ev.keyCode === 38) {
          handleArrowUp();
        } else if (ev.keyCode === 40) {
          handleArrowDown();
        } else if (ev.keyCode === 37) {
          handleArrowLeft();
        } else if (ev.keyCode === 39) {
          handleArrowRight();
        } else if (ev.keyCode === 9) {
          ev.preventDefault();
        } else if (ev.ctrlKey && ev.keyCode === 90) {
          handleUndo();
        } else if (ev.ctrlKey && ev.keyCode === 89) {
          handleRedo();
        } else if (ev.ctrlKey && ev.keyCode === 67) {
          handleCopy();
        } else if (ev.ctrlKey && ev.keyCode === 86) {
          handlePaste();
          ev.preventDefault();
        } else if (ev.keyCode === 46) {
          ev.preventDefault();
        } else if (ev.keyCode === 35) {
          ev.preventDefault();
        } else if (printable) {
          insertTextAtCursor(key);
        }
      });

      // Handle window resize
      const handleResize = () => {
        const term = xtermRef.current;
        if (!term) return;

        // Store the current state
        const currentState = {
          command: currentLineRef.current,
          cursorPosition: cursorPositionRef.current,
          oldCols: term.cols,
        };

        // Debounce the resize operation
        if (resizeTimeoutRef.current) {
          clearTimeout(resizeTimeoutRef.current);
        }

        resizeTimeoutRef.current = setTimeout(() => {
          // Hide cursor during resize operations
          term.write("\x1b[?25l");

          try {
            // Clear the current command display
            clearMultiLineCommand();

            // Fit terminal to new dimensions
            fitAddon.fit();

            // Calculate new dimensions and cursor positions
            const newCols = term.cols;
            const newRows = term.rows;

            // Redraw the prompt and command
            term.write(getPrompt());
            term.write(currentState.command);

            // Calculate new cursor position
            const totalNewPos = promptLengthRef.current + currentState.cursorPosition;
            const newRow = Math.floor(totalNewPos / newCols);
            const newCol = totalNewPos % newCols;

            // Move cursor to new calculated position
            const endPos = promptLengthRef.current + currentState.command.length;
            moveCursor(endPos, totalNewPos);

            // Update viewport if needed
            const newViewportHeight = `${window.innerHeight}px`;
            if (viewportHeight !== newViewportHeight) {
              setViewportHeight(newViewportHeight);
            }
          } finally {
            // Make cursor visible after resize
            term.write("\x1b[?25h");
            adjustScrollArea();
          }
        }, 100); // Debounce delay

        // Cleanup function
        return () => {
          if (resizeTimeoutRef.current) {
            clearTimeout(resizeTimeoutRef.current);
          }
        };
      };
      window.addEventListener("resize", handleResize);

      xtermRef.current.element.addEventListener("mousedown", handleClick);

      if (window.visualViewport) {
        visualViewportRef.current = window.visualViewport;
        visualViewportRef.current.addEventListener("resize", handleViewportChange);
        visualViewportRef.current.addEventListener("scroll", handleViewportChange);
      }

      return () => {
        term.dispose();
        window.removeEventListener("resize", handleResize);
        hiddenInput.removeEventListener("input", handleHiddenInput);
        hiddenInput.removeEventListener("keydown", handleHiddenKeydown);
        cleanupYesCommand();
      };

      if (visualViewportRef.current) {
        visualViewportRef.current.removeEventListener("resize", handleViewportChange);
        visualViewportRef.current.removeEventListener("scroll", handleViewportChange);
      }
    };

    // Load xterm.css dynamically
    const loadXtermStyles = async () => {
      await import("@xterm/xterm/css/xterm.css");
    };

    Promise.all([initializeTerminal(), loadXtermStyles()]);
  }, []);

  const handleViewportChange = () => {
    if (!visualViewportRef.current) return;

    const viewport = visualViewportRef.current;
    const windowHeight = window.innerHeight;
    const viewportHeight = viewport.height;

    const isZoomEvent = Math.abs(window.visualViewport.scale - 1.0) > 0.01;

    if (!isZoomEvent) {
      // Only adjust height for non-zoom viewport changes (i.e. virtual keyboard)
      keyboardHeightRef.current = Math.max(0, windowHeight - viewportHeight);

      if (terminalRef.current) {
        terminalRef.current.style.height = `${viewportHeight}px`;
      }

      // Scroll to cursor position
      const term = xtermRef.current;
      if (term) {
        const { row } = getCursorPosition();
        const scrollAmount = row * term.element.querySelector(".xterm-rows").children[0].offsetHeight;
        term.scrollToLine(term.buffer.active.viewportY + row);
      }
    }
  };

  const showOverlay = (component) => {
    setOverlay(component);
    const hiddenInput = terminalRef.current?.querySelector("input");
    if (hiddenInput) {
      hiddenInput.blur();
    }
    if (xtermRef.current) {
      xtermRef.current.blur();
    }
  };

  const hideOverlay = () => {
    setOverlay(null);
    // Restore focus to terminal
    const hiddenInput = terminalRef.current?.querySelector("input");
    if (hiddenInput) {
      hiddenInput.focus();
    }
    if (xtermRef.current) {
      xtermRef.current.focus();
    }
  };

  const handleClick = (event) => {
    if (!xtermRef.current) return;
    if (overlay) return;

    const term = xtermRef.current;
    const xtermRows = term.element.querySelector(".xterm-rows");

    if (!xtermRows) return;

    // Get all row elements
    const rowElements = Array.from(xtermRows.children);

    // Get click coordinates relative to xterm-rows
    const rect = xtermRows.getBoundingClientRect();
    const clickX = event.clientX - rect.left;
    const clickY = event.clientY - rect.top;

    // Find the clicked row element
    const rowHeight = rowElements[0].getBoundingClientRect().height;
    const clickedRowIndex = Math.floor(clickY / rowHeight);
    const clickedRowElement = rowElements[clickedRowIndex];

    if (!clickedRowElement) return;

    // Get the character width based on the first row's width and terminal columns
    const charWidth = clickedRowElement.getBoundingClientRect().width / term.cols;
    const clickedCol = Math.round(clickX / charWidth);

    // Find the command start row by looking for the last prompt
    let commandStartIndex = clickedRowIndex;
    for (let i = clickedRowIndex; i >= 0; i--) {
      const rowContent = rowElements[i].textContent;
      if (rowContent.includes(terminalNameRef.current)) {
        commandStartIndex = i;
        break;
      }
    }

    // Calculate where in the current command the click occurred
    const rowsFromCommandStart = clickedRowIndex - commandStartIndex;
    const absolutePosition = rowsFromCommandStart * term.cols + clickedCol;

    // Adjust for prompt (only on first line)
    let newCursorPosition = absolutePosition - promptLengthRef.current;

    // Ensure the cursor position is within bounds
    newCursorPosition = Math.max(0, Math.min(newCursorPosition, currentLineRef.current.length));

    const currentCursorTotalPos = promptLengthRef.current + cursorPositionRef.current;
    const newCursorTotalPos = promptLengthRef.current + newCursorPosition;

    // Update the cursor position
    cursorPositionRef.current = newCursorPosition;

    // Move the terminal cursor to the new position
    moveCursor(currentCursorTotalPos, newCursorTotalPos);
  };

  const adjustScrollArea = () => {
    const scrollArea = terminalRef.current?.querySelector(".xterm-scroll-area");
    if (scrollArea) {
      const computedHeight = parseInt(window.getComputedStyle(scrollArea).height);
      scrollArea.style.height = `${computedHeight - 1}px`;
    }
  };

  const getCursorPosition = () => {
    const term = xtermRef.current;
    const cols = term.cols;
    const totalLength = promptLengthRef.current + currentLineRef.current.length;
    const currentPos = promptLengthRef.current + cursorPositionRef.current;

    const row = Math.floor(currentPos / cols);
    const col = currentPos % cols;

    return { row, col, totalRows: Math.floor(totalLength / cols) };
  };

  const moveCursor = (fromPos, toPos) => {
    const term = xtermRef.current;
    const cols = term.cols;

    const fromRow = Math.floor(fromPos / cols);
    const fromCol = fromPos % cols;
    const toRow = Math.floor(toPos / cols);
    const toCol = toPos % cols;

    // Move up/down
    if (fromRow > toRow) {
      term.write("\x1b[".concat(fromRow - toRow, "A"));
    } else if (fromRow < toRow) {
      term.write("\x1b[".concat(toRow - fromRow, "B"));
    }

    // Move left/right
    if (fromCol > toCol) {
      term.write("\x1b[".concat(fromCol - toCol, "D"));
    } else if (fromCol < toCol) {
      term.write("\x1b[".concat(toCol - fromCol, "C"));
    }
  };

  const getPrompt = () => "\x1b[0;92m" + terminalNameRef.current + "\x1b[0m" + ":" + "\x1b[94m~\x1b[0m" + "$ ";

  const writePrompt = (newLine = true) => {
    const term = xtermRef.current;
    if (!term) return;

    if (newLine) {
      term.write("\r\n");
    }

    term.write(getPrompt());

    currentLineRef.current = "";
    cursorPositionRef.current = 0;
    undoStackRef.current = [];
    redoStackRef.current = [];
  };

  const handleBackspace = () => {
    const term = xtermRef.current;
    const line = currentLineRef.current;
    const pos = cursorPositionRef.current;
    const cols = term.cols;

    if (pos > 0) {
      undoStackRef.current.push({
        line: currentLineRef.current,
        position: cursorPositionRef.current,
      });
      redoStackRef.current = [];

      const newLine = line.slice(0, pos - 1) + line.slice(pos);
      currentLineRef.current = newLine;
      cursorPositionRef.current--;

      // Calculate positions
      const totalLength = promptLengthRef.current + line.length;
      const oldTotalPos = promptLengthRef.current + pos;
      const newTotalPos = oldTotalPos - 1;
      const oldRow = Math.floor(oldTotalPos / cols);
      const newRow = Math.floor(newTotalPos / cols);

      // Clear from cursor to end of screen to handle multiline content
      term.write("\x1b[J");

      if (oldRow === newRow) {
        // Same line backspace
        term.write("\b \b");
      } else {
        // Moving up to previous line
        const newCol = newTotalPos % cols;
        term.write("\x1b[A"); // Move up
        term.write("\x1b[".concat(newCol + 1, "G")); // Move to character position
        term.write(" "); // Erase the character
        term.write("\x1b[".concat(newCol + 1, "G")); // Move back to the same position
      }

      // Rewrite all text after the cursor
      if (pos < line.length) {
        const remainingText = newLine.slice(pos - 1);
        term.write(remainingText);

        // Calculate final cursor position
        const finalTotalPos = promptLengthRef.current + cursorPositionRef.current;
        const finalRow = Math.floor(finalTotalPos / cols);
        const finalCol = finalTotalPos % cols;

        // Move cursor to correct position
        const currentRow = Math.floor((promptLengthRef.current + newLine.length) / cols);
        let hasLineBreak = false;

        const textLength = remainingText.length < cols ? remainingText.length : remainingText.length % cols;

        // Check for line breaks
        for (let i = 1; i < textLength; i++) {
          if ((finalTotalPos + i) % cols === 0) {
            hasLineBreak = true;
            break;
          }
        }

        // Handle cursor movement
        if (currentRow !== finalRow) {
          if (hasLineBreak) {
            // Move cursor up required rows for both cases
            term.write(`\x1b[${currentRow - finalRow}A`);
          } else if (remainingText.length >= cols) {
            term.write(`\x1b[${Math.floor(remainingText.length / cols)}A`);
          }
        }
        // Move to correct column
        term.write("\x1b[".concat(finalCol + 1, "G"));
      }
    }
  };

  const handleCopy = () => {
    const term = xtermRef.current;
    const selection = term.getSelection();
    if (selection) {
      navigator.clipboard.writeText(selection);
    }
  };

  const handlePastedText = (text) => {
    const pos = cursorPositionRef.current;
    const line = currentLineRef.current;
    const term = xtermRef.current;
    const cols = term.cols;

    // Split text into lines
    const lines = text.split(/\r?\n/);

    if (lines.length === 1) {
      // Single line paste - insert at cursor position
      const newLine = line.slice(0, pos) + lines[0] + line.slice(pos);

      // Save current state to undo stack
      undoStackRef.current.push({
        line: currentLineRef.current,
        position: cursorPositionRef.current,
      });
      redoStackRef.current = [];

      // Clear existing line content
      clearMultiLineCommand();
      term.write(getPrompt() + newLine);

      // Update state
      currentLineRef.current = newLine;
      cursorPositionRef.current = pos + lines[0].length;

      // Calculate cursor positions
      const fromPos = promptLengthRef.current + newLine.length;
      const toPos = promptLengthRef.current + cursorPositionRef.current;

      // If cursor is not at the end, move it to correct position
      if (cursorPositionRef.current < newLine.length) {
        moveCursor(fromPos, toPos);
      }
    } else {
      // Multiline paste
      clearMultiLineCommand();
      let newLine = line.slice(0, pos) + lines[0];
      currentLineRef.current = newLine;
      term.write(getPrompt() + newLine);

      for (let i = 1; i < lines.length - 1; i++) {
        handleEnter();
        currentLineRef.current = lines[i];
        term.write(lines[i]);
      }

      if (lines.length > 1) {
        handleEnter();
        newLine = lines[lines.length - 1] + line.slice(pos);
        currentLineRef.current = newLine;
        term.write(newLine);
        cursorPositionRef.current = newLine.length;
      }
    }
  };

  const handlePaste = async () => {
    try {
      const text = await navigator.clipboard.readText();
      handlePastedText(text);
    } catch (err) {
      console.error("Failed to read clipboard:", err);
    }
  };

  const handleEnter = async (firstRun = false) => {
    const term = xtermRef.current;
    const line = currentLineRef.current;

    // First move cursor to end of current command if not already there
    if (cursorPositionRef.current < line.length) {
      const fromPos = promptLengthRef.current + cursorPositionRef.current;
      const toPos = promptLengthRef.current + line.length;
      moveCursor(fromPos, toPos);
      cursorPositionRef.current = line.length;
    }

    if (line.trim()) {
      commandHistoryRef.current.push(line);
      historyIndexRef.current = commandHistoryRef.current.length;
    }

    if (line.trim() != "") {
      term.write("\r\n");
    }
    let lineBreak = true;
    if (line.trim() === "clear") {
      term.write("\x1b[?25l");

      const clearSequence =
        "\x1b[H" + // Move to home
        "\x1b[2J" + // Clear screen
        "\x1b[3J"; // Clear scrollback

      term.write(clearSequence);

      term.write(
        "\x1b[?25h" // Show cursor
      );

      lineBreak = true;
    } else {
      try {
        // Execute the command and wait for it to complete
        const result = await executeCommand(line.trim(), {
          write: (text) => term.write(text),
          writeln: (text) => term.write(text + "\r\n"),
          term: term,
          username: terminalNameRef.current,
          prompt: getPrompt(),
          firstRun: firstRun,
          showOverlay: showOverlay,
          hideOverlay: hideOverlay,
          pageLoadTime: pageLoadTime,
        });

        lineBreak = result !== false;
      } catch (error) {
        term.write(`Error: ${error.message}\r\n`);
      }
    }

    if(firstRun) {
      term.write("\r\n\x1b[0mRun 'help' to see the list of available commands.\x1b[0m\r\n");
    }

    currentLineRef.current = "";
    cursorPositionRef.current = 0;
    savedCommandRef.current = "";
    undoStackRef.current = [];
    redoStackRef.current = [];
    writePrompt(lineBreak);
  };

  const clearMultiLineCommand = () => {
    const term = xtermRef.current;
    const totalLength = promptLengthRef.current + currentLineRef.current.length;
    const promptLines = Math.ceil(promptLengthRef.current / term.cols);
    const totalLines = Math.ceil(totalLength / term.cols);
    term.write("\x1b[?25l");

    // Get current cursor position
    const cursorTotalPos = promptLengthRef.current + cursorPositionRef.current;
    const cursorRow = Math.floor(cursorTotalPos / term.cols);

    // Calculate the topmost line of the entire command (including prompt)
    const topmostLine = Math.max(0, cursorRow - (totalLines - 1));

    // First move cursor to the beginning of the entire command (including prompt)
    if (cursorRow > topmostLine) {
      term.write("\x1b[".concat(cursorRow - topmostLine, "A"));
    }
    term.write("\r");

    // Clear all lines used by both prompt and command
    for (let i = 0; i < totalLines; i++) {
      term.write("\x1b[2K"); // Clear entire line
      if (i < totalLines - 1) {
        term.write("\x1b[1B"); // Move down one line
        term.write("\r"); // Move to start of line
      }
    }

    // Move back to first line
    if (totalLines > 1) {
      term.write("\x1b[".concat(totalLines - 1, "A"));
    }
    term.write("\r");
    term.write("\x1b[?25h");
  };

  const handleArrowUp = () => {
    const term = xtermRef.current;
    const history = commandHistoryRef.current;

    // Save current command if just started to navigate history
    if (historyIndexRef.current === history.length) {
      savedCommandRef.current = currentLineRef.current;
    }

    if (historyIndexRef.current > 0) {
      historyIndexRef.current--;
      const command = history[historyIndexRef.current];

      clearMultiLineCommand();
      term.write(getPrompt() + command);

      currentLineRef.current = command;
      cursorPositionRef.current = command.length;
    }
  };

  const handleArrowDown = () => {
    const term = xtermRef.current;
    const history = commandHistoryRef.current;

    if (historyIndexRef.current < history.length) {
      historyIndexRef.current++;
      const command =
        historyIndexRef.current === history.length
          ? savedCommandRef.current // Use saved command when reaching the bottom
          : history[historyIndexRef.current];

      clearMultiLineCommand();
      term.write(getPrompt() + command);

      currentLineRef.current = command;
      cursorPositionRef.current = command.length;
    }
  };

  const handleArrowLeft = () => {
    if (cursorPositionRef.current > 0) {
      const { row: oldRow, col: oldCol } = getCursorPosition();
      cursorPositionRef.current--;
      const { row: newRow, col: newCol } = getCursorPosition();

      if (oldRow === newRow) {
        xtermRef.current.write("\x1b[D");
      } else {
        xtermRef.current.write("\x1b[A"); // Move up
        xtermRef.current.write("\x1b[".concat(xtermRef.current.cols - 1, "C")); // Move to end of previous line
      }
    }
  };

  const handleArrowRight = () => {
    if (cursorPositionRef.current < currentLineRef.current.length) {
      const { row: oldRow, col: oldCol } = getCursorPosition();
      cursorPositionRef.current++;
      const { row: newRow, col: newCol } = getCursorPosition();

      if (oldRow === newRow) {
        xtermRef.current.write("\x1b[C");
      } else {
        xtermRef.current.write("\x1b[B"); // Move down
        xtermRef.current.write("\x1b[".concat(newCol, "G")); // Move to start of next line
      }
    }
  };

  const handleUndo = () => {
    if (undoStackRef.current.length > 0) {
      const term = xtermRef.current;
      const currentState = {
        line: currentLineRef.current,
        position: cursorPositionRef.current,
      };

      redoStackRef.current.push(currentState);
      const prevState = undoStackRef.current.pop();

      clearMultiLineCommand();
      term.write("\x1b[2K\r");
      term.write(getPrompt());
      term.write(prevState.line);

      currentLineRef.current = prevState.line;
      cursorPositionRef.current = prevState.position;

      // Move cursor to the correct position
      moveCursor(promptLengthRef.current + prevState.line.length, promptLengthRef.current + prevState.position);
    }
  };

  const handleRedo = () => {
    if (redoStackRef.current.length > 0) {
      const term = xtermRef.current;
      const currentState = {
        line: currentLineRef.current,
        position: cursorPositionRef.current,
      };

      undoStackRef.current.push(currentState);
      const nextState = redoStackRef.current.pop();

      clearMultiLineCommand();
      term.write("\x1b[2K\r");
      term.write(getPrompt());
      term.write(nextState.line);

      currentLineRef.current = nextState.line;
      cursorPositionRef.current = nextState.position;

      // Move cursor to the correct position
      moveCursor(promptLengthRef.current + nextState.line.length, promptLengthRef.current + nextState.position);
    }
  };

  return (
    <>
      <Head>
        <title key="title">PseudoShell - Terminal Simulator</title>

        {/* Basic Meta Tags */}
        <meta name="title" content="PseudoShell - Browser-based Terminal Simulator" />
        <meta name="description" content="Experience a fully featured terminal interface in your browser with PseudoShell. Supports common terminal commands and options, all running client-side." />
        <meta name="keywords" content="terminal simulator, command line interface, CLI, web terminal, browser terminal, unix commands, linux commands" />
        <meta name="application-name" content="PseudoShell" />
        <meta name="theme-color" content="#000000" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://pseudoshell.com" />
        <meta property="og:title" content="PseudoShell - Browser-based Terminal Simulator" />
        <meta property="og:description" content="Experience a fully featured terminal interface in your browser. PseudoShell simulates common terminal commands and options, all running client-side." />

        <link rel="icon" type="image/x-icon" href="/terminal.svg" />

        {/* Schema.org JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebApplication",
              name: "PseudoShell",
              url: "https://pseudoshell.com",
              description: "A browser-based terminal simulator that implements common terminal commands and options, running entirely client-side.",
            }),
          }}
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <style>{`
          body {
            background-color: #000000;
            margin: 0;
            height: 100%;
            overflow: hidden;
            position: fixed;
            width: 100%;
          }
          #__next {
            background-color: #000000;
            height: 100%;
            overflow: hidden;
          }
        `}</style>
      </Head>
      <div
        className="w-screen text-white font-mono flex overflow-hidden pl-2.5"
        style={{
          height: "100%",
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
        }}
      >
        <div
          ref={terminalRef}
          className="flex-1 w-full relative"
          style={{
            height: "100%",
            overflow: "hidden",
          }}
        />
        {overlay && (
          <div
            className="fixed inset-0 z-50"
            style={{
              backgroundColor: "rgba(0, 0, 0, 0.95)",
            }}
          >
            {overlay}
          </div>
        )}
      </div>
    </>
  );
};

export default TerminalComponent;
