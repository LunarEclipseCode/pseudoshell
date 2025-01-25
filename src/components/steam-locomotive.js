import React, { useEffect, useRef, useState } from "react";

const SteamLocomotive = ({ input, onClose }) => {
  const containerRef = useRef(null);
  const terminalRef = useRef(null);
  const xtermRef = useRef(null);
  const fitAddonRef = useRef(null);

  useEffect(() => {
    const initializeTerminal = async () => {
      const [{ Terminal }, { FitAddon }] = await Promise.all([import("@xterm/xterm"), import("@xterm/addon-fit")]);

      const fontFace = new FontFace("Cascadia Mono NF", "url(/CascadiaMonoNF-Regular.woff2)");
      await fontFace.load();
      document.fonts.add(fontFace);

      const term = new Terminal({
        fontFamily: "Cascadia Mono NF",
        fontSize: 12,
        cursorStyle: "bar",
        theme: {
          background: "#000000",
          foreground: "#ffffff",
          cursor: "#ffffff",
          selection: "#5c5c5c",
          black: "#000000",
        },
        allowTransparency: true,
        allowProposedApi: true,
        convertEol: true,
        cursorBlink: false,
        rendererType: "canvas",
      });

      const fitAddon = new FitAddon();
      fitAddonRef.current = fitAddon;
      term.loadAddon(fitAddon);

      term.open(terminalRef.current);
      fitAddon.fit();
      xtermRef.current = term;

      term.focus();
      term.write("\x1b[?25l");

      term.onKey(({ domEvent }) => {
        switch (domEvent.key) {
          case "Escape":
            term.write("\x1b[?1049l");
            onClose();
            return;
        }
      });

      // Fix duplicate terminal issue
      setTimeout(() => {
        const container = terminalRef.current;
        if (container) {
          const terminals = container.querySelectorAll(":scope > .terminal.xterm");
          if (terminals.length > 1) {
            let lowestOwnerNum = Infinity;
            let terminalToRemove = null;

            terminals.forEach((terminal) => {
              const ownerMatch = terminal.className.match(/owner-(\d+)/);
              if (ownerMatch) {
                const ownerNum = parseInt(ownerMatch[1]);
                if (ownerNum < lowestOwnerNum) {
                  lowestOwnerNum = ownerNum;
                  terminalToRemove = terminal;
                }
              }
            });

            if (terminalToRemove) {
              terminalToRemove.remove();
            }
          }
        }
      }, 0);

      const adjustScrollArea = () => {
        const scrollArea = terminalRef.current?.querySelector(".xterm-scroll-area");
        if (scrollArea) {
          const computedHeight = parseInt(window.getComputedStyle(scrollArea).height);
          scrollArea.style.height = `${computedHeight - 1}px`;
        }
      };

      const PRIMARY = {
        height: 10,
        patterns: 5,
        frameCounter: 0,
        helpLines: [
          ["   |(_)---  |   H\\________/ |   |        =|___ ___|   ", "   /     |  |   H  |  |     |   |         |(o) (o)|   "],
          ["   |(_)---  |   H\\________/ |   |        =|Help!__|   ", "   /     |  |   H  |  |     |   |         |\\o/ (o)|   "],
          ["   |(_)---  |   H\\________/ |   |        =|HelpHelp!  ", "   /     |  |   H  |  |     |   |         |\\o/ \\o/|   "],
          ["   |(_)---  |   H\\________/ |   |        =|___ Help!  ", "   /     |  |   H  |  |     |   |         |(o) \\o/|   "],
        ],
        topLines: ["      ====        ________                ___________ ", "  *D *|  |_______/        \\__I_I_____===__|_________| "],
        middleLines: ["   |(_)---  |   H\\________/ |   |        =|___ ___|   ", "   /     |  |   H  |  |     |   |         ||_| |_||   "],
        bottomLines: ["  |      |  |   H  |__--------------------| [___] |   ", "  | ________|___H__/__|_____/[][]~\\_______|       |   ", "  |/ |   |-----------I_____I [][] []  D   |=======|__ "],
        wheels: [
          ["__/ =| o |=-~~\\  /~~\\  /~~\\  /~~\\ ____Y___________|__ ", " |/-=|___|=    ||    ||    ||    |_____/~\\___/        ", "  \\_/      \\O=====O=====O=====O_/      \\_/            "],
          ["__/ =| o |=-~~\\  /~~\\  /~~\\  /~~\\ ____Y___________|__ ", " |/-=|___|=O=====O=====O=====O   |_____/~\\___/        ", "  \\_/      \\__/  \\__/  \\__/  \\__/      \\_/            "],
          ["__/ =| o |=-O=====O=====O=====O \\ ____Y___________|__ ", " |/-=|___|=    ||    ||    ||    |_____/~\\___/        ", "  \\_/      \\__/  \\__/  \\__/  \\__/      \\_/            "],
          ["__/ =| o |=-~O=====O=====O=====O\\ ____Y___________|__ ", " |/-=|___|=    ||    ||    ||    |_____/~\\___/        ", "  \\_/      \\__/  \\__/  \\__/  \\__/      \\_/            "],
          ["__/ =| o |=-~~\\  /~~\\  /~~\\  /~~\\ ____Y___________|__ ", " |/-=|___|=   O=====O=====O=====O|_____/~\\___/        ", "  \\_/      \\__/  \\__/  \\__/  \\__/      \\_/            "],
        ],
        get frames() {
          const useHelpLines = input && input.includes("-a");
          const frames = [];
          console.log(this.helpLines.length);

          for (let i = 1; i <= 40; i++) {
            // i= 1,2 -> 0, i = 3,4 -> 1, wrap back i = 11, 12 -> 0
            const wheelIndex = Math.floor((i - 1) / 2) % this.wheels.length;

            // Switch from one help line to another every 10 frames
            const helpLineIndex = Math.floor((i - 1) / 10) % this.helpLines.length;

            const middle = useHelpLines ? this.helpLines[helpLineIndex] : this.middleLines;
            frames.push([...this.topLines, ...middle, ...this.bottomLines, ...this.wheels[wheelIndex]]);
          }

          return frames;
        },
      };

      const SECONDARY = {
        height: 11,
        patterns: 6,
        helpLines: [
          ["     | `---'   |:: `--'  H  `--'         |  |___ ___|  ", "    +|~~~~~~~~++::~~~~~~~H~~+=====+~~~~~~|~~|(o) (o)|  "],
          ["     | `---'   |:: `--'  H  `--'         |  |Help!__|  ", "    +|~~~~~~~~++::~~~~~~~H~~+=====+~~~~~~|~~|\\o/ (o)|  "],
          ["     | `---'   |:: `--'  H  `--'         |  |HelpHelp! ", "    +|~~~~~~~~++::~~~~~~~H~~+=====+~~~~~~|~~|\\o/ \\o/|  "],
          ["     | `---'   |:: `--'  H  `--'         |  |___ Help! ", "    +|~~~~~~~~++::~~~~~~~H~~+=====+~~~~~~|~~|(o) \\o/|  "],
        ],
        topLines: ["        ___                                            ", "       _|_|_  _     __       __             ___________", "    D__/   \\_(_)___|  |__H__|  |_____I_Ii_()|_________|"],

        middleLines: ["     | `---'   |:: `--'  H  `--'         |  |___ ___|  ", "    +|~~~~~~~~++::~~~~~~~H~~+=====+~~~~~~|~~||_| |_||  "],

        bottomLines: ["    ||        | ::       H  +=====+      |  |::  ...|  ", "|    | _______|_::-----------------[][]-----|       |  "],
        wheels: [
          ["| /~~ ||   |-----/~~~~\\  /[I_____I][][] --|||_______|__", "------'|oOo|==[]=-     ||      ||      |  ||=======_|__", "/~\\____|___|/~\\_|   O=======O=======O  |__|+-/~\\_|     ", "\\_/         \\_/  \\____/  \\____/  \\____/      \\_/       "],
          ["| /~~ ||   |-----/~~~~\\  /[I_____I][][] --|||_______|__", "------'|oOo|===[]=-    ||      ||      |  ||=======_|__", "/~\\____|___|/~\\_|    O=======O=======O |__|+-/~\\_|     ", "\\_/         \\_/  \\____/  \\____/  \\____/      \\_/       "],
          ["| /~~ ||   |-----/~~~~\\  /[I_____I][][] --|||_______|__", "------'|oOo|===[]=- O=======O=======O  |  ||=======_|__", "/~\\____|___|/~\\_|      ||      ||      |__|+-/~\\_|     ", "\\_/         \\_/  \\____/  \\____/  \\____/      \\_/       "],
          ["| /~~ ||   |-----/~~~~\\  /[I_____I][][] --|||_______|__", "------'|oOo|==[]=- O=======O=======O   |  ||=======_|__", "/~\\____|___|/~\\_|      ||      ||      |__|+-/~\\_|     ", "\\_/         \\_/  \\____/  \\____/  \\____/      \\_/       "],
          ["| /~~ ||   |-----/~~~~\\  /[I_____I][][] --|||_______|__", "------'|oOo|=[]=- O=======O=======O    |  ||=======_|__", "/~\\____|___|/~\\_|      ||      ||      |__|+-/~\\_|     ", "\\_/         \\_/  \\____/  \\____/  \\____/      \\_/       "],
          ["| /~~ ||   |-----/~~~~\\  /[I_____I][][] --|||_______|__", "------'|oOo|=[]=- O=======O=======O    |  ||=======_|__", "/~\\____|___|/~\\_|      ||      ||      |__|+-/~\\_|     ", "\\_/         \\_/  \\____/  \\____/  \\____/      \\_/       "],
          ["| /~~ ||   |-----/~~~~\\  /[I_____I][][] --|||_______|__", "------'|oOo|=[]=-      ||      ||      |  ||=======_|__", "/~\\____|___|/~\\_|  O=======O=======O   |__|+-/~\\_|     ", "\\_/         \\_/  \\____/  \\____/  \\____/      \\_/       "],
        ],

        get frames() {
          const useHelpLines = input && input.includes("-a");
          const frames = [];

          for (let i = 1; i <= 28; i++) {
            const wheelIndex = Math.floor((i - 1) / 2) % this.wheels.length;
            const helpLineIndex = Math.floor((i - 1) / 7) % this.helpLines.length;

            const middle = useHelpLines ? this.helpLines[helpLineIndex] : this.middleLines;
            frames.push([...this.topLines, ...middle, ...this.bottomLines, ...this.wheels[wheelIndex]]);
          }

          return frames;
        },
      };

      const SMALL = {
        height: 6,
        patterns: 6,
        helpLines: [["     ||      |+-+ |  "], ["     ||      |Help!  "]],
        topLines: ["     ++      +------ "],
        middleLines: ["     ||      |+-+ |  "],
        bottomLines: ["   /---------|| | |  ", "  + ========  +-+ |  "],
        wheels: [
          [" _|--O========O~\\-+  ", "//// \\_/      \\_/    "],
          [" _|--/O========O\\-+  ", "//// \\_/      \\_/    "],
          [" _|--/~O========O-+  ", "//// \\_/      \\_/    "],
          [" _|--/~\\------/~\\-+  ", "//// \\_O========O    "],
          [" _|--/~\\------/~\\-+  ", "//// \\O========O/    "],
          [" _|--/~\\------/~\\-+  ", "//// O========O_/    "],
        ],
        get frames() {
          const useHelpLines = input && input.includes("-a");
          const frames = [];

          for (let i = 1; i <= 24; i++) {
            const wheelIndex = Math.floor((i - 1) / 2) % this.wheels.length;
            const helpLineIndex = Math.floor((i - 1) / 8) % 2;

            const middle = useHelpLines ? this.helpLines[helpLineIndex] : this.middleLines;
            frames.push([...this.topLines, ...middle, ...this.bottomLines, ...this.wheels[wheelIndex]]);
          }

          return frames;
        },
      };

      const COAL_SMALL = ["____                 ", "|   \\@@@@@@@@@@@     ", "|    \\@@@@@@@@@@@@@_ ", "|                  | ", "|__________________| ", "   (O)       (O)     "];

      const CAR_SMALL = {
        helpLines: [
          ["|  ___ ___ ___ ___ | ", "|  (o) |_| (o) |_| | "],
          ["|  Help!__ ___ ___ | ", "|  \\o/ |_| (o) |_| | "],
          ["|  Help!__ Help!__ | ", "|  \\o/ |_| \\o/ |_| | "],
          ["|  ___ ___ Help!__ | ", "|  (o) |_| \\o/ |_| | "],
        ],
        topLines: ["____________________ "],
        middleLines: ["|  ___ ___ ___ ___ | ", "|  |_| |_| |_| |_| | "],
        bottomLines: ["|__________________| ", "|__________________| ", "   (O)        (O)    "],
        get frames() {
          const useHelpLines = input && input.includes("-a");
          const frames = [];

          for (let i = 1; i <= 32; i++) {
            const helpLineIndex = Math.floor((i - 1) / 8) % this.helpLines.length;
            const middle = useHelpLines ? this.helpLines[helpLineIndex] : this.middleLines;
            frames.push([...this.topLines, ...middle, ...this.bottomLines]);
          }
          return frames;
        },
      };

      const COAL = [
        "                              ",
        "                              ",
        "    _________________         ",
        "   _|                \\_____A  ",
        " =|                        |  ",
        " -|                        |  ",
        "__|________________________|_ ",
        "|__________________________|_ ",
        "   |_D__D__D_|  |_D__D__D_|   ",
        "    \\_/   \\_/    \\_/   \\_/    ",
      ];

      const BASE_SMOKE = {
        pattern1: ["                 (  ) (@@) ( ) (@) ()   @@  O   @@    O    @    O", "             (@@@)", "        (    )", "     (@@@@)", "   (   )"],
        pattern2: ["                 (@@) (  ) (@) ( ) @@   ()  @   OO    @    O    @", "             (   )", "        (@@@@)", "     (    )", "   (@@@)"],
      };

      const useSmall = input && input.includes("-l");
      const useSecond = !useSmall && input && input.includes("-c");
      const TrainModel = useSmall ? SMALL : useSecond ? SECONDARY : PRIMARY;

      const shift = (pattern, spaces) => {
        const extraSpaces = useSmall ? 0 : useSecond ? 5 : 3;
        return pattern.map((line) => " ".repeat(spaces + extraSpaces) + line);
      };

      // Generate smoke patterns
      const genSmoke = () => {
        const patterns = [];
        for (let i = 0; i < 4; i++) {
          patterns.push(shift(BASE_SMOKE.pattern1, i));
        }
        for (let i = 0; i < 4; i++) {
          patterns.push(shift(BASE_SMOKE.pattern2, i));
        }
        return patterns;
      };

      const SMOKE = genSmoke();

      // For debugging purposes
      function sleep(ms) {
        return new Promise((resolve) => setTimeout(resolve, ms));
      }

      // Combine train, cars, and smoke frames based on train
      const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));
      const lcm = (a, b) => (a * b) / gcd(a, b);

      const smokeLength = SMOKE.length;
      const frameLength = TrainModel.frames.length;
      const carLength = CAR_SMALL.frames.length;

      const totalFrames = useSmall
        ? lcm(lcm(smokeLength, frameLength), carLength) // LCM of all three lengths for small mode
        : lcm(smokeLength, frameLength); // LCM of just smoke and train for other modes

      const combinedFrames = Array.from({ length: totalFrames }, (_, index) => {
        const smokeFrame = SMOKE[index % smokeLength];
        const trainFrame = TrainModel.frames[index % frameLength];

        if (useSmall) {
          // For small model, use COAL_SMALL and CAR_SMALL
          const carFrame = CAR_SMALL.frames[index % CAR_SMALL.frames.length];
          return [
            ...smokeFrame,
            ...trainFrame.map((line, lineIndex) => {
              const coalLine = COAL_SMALL[lineIndex] || "";
              const carLine1 = carFrame[lineIndex] || "";
              const carLine2 = carFrame[lineIndex] || "";
              return line + coalLine + carLine1 + carLine2;
            }),
          ];
        } else {
          // Unless small train, use original COAL car
          return [
            ...smokeFrame,
            ...trainFrame.map((line, lineIndex) => {
              const coalLine = COAL[lineIndex] || "";
              return line + coalLine;
            }),
          ];
        }
      });

      const writeLocomotive = (term, fitAddon) => {
        const cols = term.cols;
        const rows = term.rows;

        const trainLength = Math.max(...combinedFrames.flatMap((frame) => frame.map((line) => line.length)));
        let x = cols - 1;
        let frameIndex = 0;
        let smokeIndex = 0;
        let animationFrame;
        let charsToTruncate = 0;
        let revealedChars = 1;

        const writeAt = (y, x, str) => {
          if (y < 0 || y >= rows || x >= cols) return;
          const safeX = Math.max(1, Math.min(cols, x + 1));
          term.write(`\x1b[${y + 1};${safeX}H${str}`);
        };

        const animate = async () => {
          term.write("\x1b[2J\x1b[H");

          // Center train + smoke in y axis
          const y = Math.floor(rows / 2) - Math.ceil((TrainModel.height + SMOKE[0].length) / 1.75);

          if (x < 0) {
            charsToTruncate = Math.abs(x);
          }

          const currentFrame = combinedFrames[frameIndex % combinedFrames.length];
          let visibleFrame = currentFrame.map((line) => {
            if (revealedChars < line.length) {
              line = line.slice(0, revealedChars);
            }

            if (charsToTruncate > 0) {
              line = line.slice(charsToTruncate);
            }

            return line;
          });

          if (visibleFrame.every((line) => line.length === 0)) {
            // await sleep(3000);
            cancelAnimationFrame(animationFrame);
            term.write("\x1b[?1049l");
            onClose();
            return;
          }

          visibleFrame.forEach((line, i) => {
            if (line.length > 0) {
              writeAt(y + i, Math.max(0, x), line);
            }
          });

          x -= 1;
          frameIndex = (frameIndex + 1) % combinedFrames.length;
          smokeIndex = (smokeIndex + 1) % SMOKE.length;

          if (revealedChars < trainLength) {
            revealedChars += 1;
          }

          animationFrame = setTimeout(animate, 40);
        };

        animate();

        return () => {
          if (animationFrame) {
            clearTimeout(animationFrame);
          }
        };
      };

      adjustScrollArea();
      const cleanup = writeLocomotive(term, fitAddon);

      if (containerRef.current) {
        containerRef.current.focus();
      }

      return () => {
        cleanup();
        term.dispose();
      };
    };

    initializeTerminal();
  }, [input]);

  // scale > 100 to hide the space allocated for scrollbar on the right
  return (
    <div
      ref={containerRef}
      tabIndex={0}
      onKeyDown={(e) => e.key === "Escape" && onClose()}
      style={{ outline: "none" }}
      className="w-full h-full"
      onFocus={(e) => {
        if (xtermRef.current) {
          xtermRef.current.focus();
        }
      }}
    >
      <div ref={terminalRef} className="w-full h-full scale-105" />
    </div>
  );
};

export default SteamLocomotive;
