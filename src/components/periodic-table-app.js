import React, { useEffect, useRef, useState } from "react";
import { elements } from "../../public/elementData";

const DASHBOARD = [
  "                                                                                                                                                            ",
  "      1                                                                                                    18                                               ",
  "   ╔═════╗                    THE PERIODIC TABLE OF ELEMENTS                                             ╔═════╗   ┌──────────────────────────────────────┐ ",
  " 1 ║     ║                                                                                               ║     ║   │                                      │ ",
  "   ║     ║  2                                                                13    14    15    16    17  ║     ║   ╞══════════════════════════════════════╡ ",
  "   ╠═════╬═════╗                                                           ╔═════╦═════╦═════╦═════╦═════╬═════╣   │                                      │ ",
  " 2 ║     ║     ║                                                           ║     ║     ║     ║     ║     ║     ║   │                                      │ ",
  "   ║     ║     ║                                                           ║     ║     ║     ║     ║     ║     ║   │                                      │ ",
  "   ╠═════╬═════╣                                                           ╠═════╬═════╬═════╬═════╬═════╬═════╣   │                                      │ ",
  " 3 ║     ║     ║                                                           ║     ║     ║     ║     ║     ║     ║   │                                      │ ",
  "   ║     ║     ║  3     4     5     6     7     8     9    10    11    12  ║     ║     ║     ║     ║     ║     ║   │                                      │ ",
  "   ╠═════╬═════╬═════╦═════╦═════╦═════╦═════╦═════╦═════╦═════╦═════╦═════╬═════╬═════╬═════╬═════╬═════╬═════╣   │                                      │ ",
  " 4 ║     ║     ║     ║     ║     ║     ║     ║     ║     ║     ║     ║     ║     ║     ║     ║     ║     ║     ║   │                                      │ ",
  "   ║     ║     ║     ║     ║     ║     ║     ║     ║     ║     ║     ║     ║     ║     ║     ║     ║     ║     ║   │                                      │ ",
  "   ╠═════╬═════╬═════╬═════╬═════╬═════╬═════╬═════╬═════╬═════╬═════╬═════╬═════╬═════╬═════╬═════╬═════╬═════╣   │                                      │ ",
  " 5 ║     ║     ║     ║     ║     ║     ║     ║     ║     ║     ║     ║     ║     ║     ║     ║     ║     ║     ║   │                                      │ ",
  "   ║     ║     ║     ║     ║     ║     ║     ║     ║     ║     ║     ║     ║     ║     ║     ║     ║     ║     ║   │                                      │ ",
  "   ╠═════╬═════╬═════╬═════╬═════╬═════╬═════╬═════╬═════╬═════╬═════╬═════╬═════╬═════╬═════╬═════╬═════╬═════╣   │                                      │ ",
  " 6 ║     ║     ╟──┬──╢     ║     ║     ║     ║     ║     ║     ║     ║     ║     ║     ║     ║     ║     ║     ║   │                                      │ ",
  "   ║     ║     ║  │  ║     ║     ║     ║     ║     ║     ║     ║     ║     ║     ║     ║     ║     ║     ║     ║   │                                      │ ",
  "   ╠═════╬═════╣  │  ╠═════╬═════╬═════╬═════╬═════╬═════╬═════╬═════╬═════╬═════╬═════╬═════╬═════╬═════╬═════╣   │                                      │ ",
  " 7 ║     ║     ╠══╪══╣     ║     ║     ║     ║     ║     ║     ║     ║     ║     ║     ║     ║     ║     ║     ║   │                                      │ ",
  "   ║     ║     ║  │  ║     ║     ║     ║     ║     ║     ║     ║     ║     ║     ║     ║     ║     ║     ║     ║   │                                      │ ",
  "   ╚═════╩═════╝  │  ╚═════╩═════╩═════╩═════╩═════╩═════╩═════╩═════╩═════╩═════╩═════╩═════╩═════╩═════╩═════╝   │                                      │ ",
  "             ┌────┘                                                                                                │                                      │ ",
  "             │ ╔═════╦═════╦═════╦═════╦═════╦═════╦═════╦═════╦═════╦═════╦═════╦═════╦═════╦═════╦═════╗         │                                      │ ",
  "             ├─╢     ║     ║     ║     ║     ║     ║     ║     ║     ║     ║     ║     ║     ║     ║     ║         │                                      │ ",
  "             │ ║     ║     ║     ║     ║     ║     ║     ║     ║     ║     ║     ║     ║     ║     ║     ║         │                                      │ ",
  "             │ ╠═════╬═════╬═════╬═════╬═════╬═════╬═════╬═════╬═════╬═════╬═════╬═════╬═════╬═════╬═════╣         │                                      │ ",
  "             ╘═╣     ║     ║     ║     ║     ║     ║     ║     ║     ║     ║     ║     ║     ║     ║     ║         │                                      │ ",
  "               ║     ║     ║     ║     ║     ║     ║     ║     ║     ║     ║     ║     ║     ║     ║     ║         │                                      │ ",
  "               ╚═════╩═════╩═════╩═════╩═════╩═════╩═════╩═════╩═════╩═════╩═════╩═════╩═════╩═════╩═════╝         └──────────────────────────────────────┘ ",
  "                                                                                                                                                            ",
  "                                                                                                                                                            ",
  "                                                 ELEMENT FAMILIES                                                                DISPLAY MODE               ",
  "   ┌───────────────────────────────────────────────────────────────────────────────────────────────────────────┐   ┌──────────────────────────────────────┐ ",
  "   │                                                                                                           │   │                                      │ ",
  "   │                                                                                                           │   └──────────────────────────────────────┘ ",
  "   │                                                                                                           │                                            ",
  "   └───────────────────────────────────────────────────────────────────────────────────────────────────────────┘                   CONTROLS                 ",
  "                                                                                                                     Navigation: Use Arrows                 ",
  "                                              ELECTRON CONFIGURATIONS                                                Toggle Display Mode: </> (slash) or    ",
  "   ┌───────────────────────────────────────────────────────────────────────────────────────────────────────────┐                          <\\> (backslash)   ",
  "   │                                                                                                           │     Search: Query with Letters / Numbers   ",
  "   └───────────────────────────────────────────────────────────────────────────────────────────────────────────┘     Quit: <ESC> or <CTRL+C>                ",
  "                                                                                                                                                            ",
];

const FAMILIES = [
  {
    name: "Alkali Metals",
    description:
      "The Alkali Metals, found in Group 1 of the Periodic Table, are highly reactive metals that do not occur freely in nature. These metals have only one electron in their outer shell. Therefore, they are ready to lose that one electron in ionic bonding with other elements. The Alkali Metals are malleable, ductile, silvery, good conductors of heat and electricity, and have low melting points, boiling points, and densities. They also react violently with water and therefore must be stored in oil.",
    color: "RED",
  },
  {
    name: "Alkaline Earth Metals",
    description:
      "The Alkaline Earth Metals are metallic elements found in Group 2 of the Periodic Table. All Alkaline Earth Metals are strong reducing agents, and have an oxidation number of +2, making them very reactive. These metals are also shiny, lustrous, and good conductors of heat and electricity. They have low melting points, boiling points, and densities (but higher than those of Alkali Metals).",
    color: "ORANGE",
  },
  {
    name: "Transition Metals",
    description:
      "The 38 elements in Groups 3 through 12 of the Periodic Table are called Transition Metals. As with all metals, the Transition elements are both ductile and malleable, and good conductors of heat and electricity. Their valence electrons are present in more than one shell. This is why they often exhibit several common oxidation states. They also have high melting points, boiling points, and densities.",
    color: "YELLOW",
  },
  {
    name: "Post-Transition Metals",
    description:
      "While Post-Transition Metals are ductile and malleable, they are not the same as the Transition Metals. These elements, unlike the Transition Metals, do not exhibit variable oxidation states, and their valence electrons are only present in their outer shell. All of these elements are solid, have a relatively high density, and are opaque.",
    color: "DARK_YELLOW",
  },
  {
    name: "Metalloids",
    description:
      "Metalloids are the elements found between the boundary that distinguishes metals from non-metals. Metalloids have properties of both metals and non-metals. For example, they can be shiny or dull, and are more brittle than metals but less brittle than non-metals. Some of the Metalloids, such as Silicon and Germanium, are semi-conductors because they partially conduct electricity.",
    color: "GREEN",
  },
  {
    name: "Nonmetals",
    description:
      "Non-metals are the elements in Groups 14-16 of the Periodic Table. Non-metals are not able to conduct electricity or heat very well. As opposed to metals, non-metallic elements are very brittle. The Non-metals can be gases such as oxygen, and solids such as carbon. The Non-metals have no metallic luster, and do not reflect light.",
    color: "DARK_GREEN",
  },
  {
    name: "Halogens",
    description:
      'The Halogens are non-metallic elements found in Group 17 of the Periodic Table. All Halogens have 7 electrons in their outer shells, giving them an oxidation number of -1. The members of the Halogen family are highly reactive, toxic to humans, and go from gas to liquid to solid at room temperature as you descend the group. The word "halogen" means "salt former" or "salt maker". When Halogens react with metals, they produce a wide range of salts. Halogens also have a high electronegativity and electron affinity.',
    color: "SKY_BLUE",
  },
  {
    name: "Noble Gases",
    description:
      "The Noble Gases are found in Group 18 of the Periodic Table. These elements have an oxidation number of 0. This prevents them from forming compounds readily. All Noble Gases also have 8 electrons in their outer shell, making them stable, inert, and highly non-reactive. They are all odorless, colorless, monatomic, have low melting points, low boiling points, and high ionization energies.",
    color: "BLUE",
  },
  {
    name: "Lanthanides",
    description:
      "The Lanthanides consist of the elements in the f-block in Period 6 of the Periodic Table. They are soft, silvery, bright metals that all naturally occur except for Promethium. They are also highly reactive and strong reducing agents. Rare earth elements which are useful for their metallurgical properties in alloy form are composed of the Lanthanide family plus Scandium and Yttrium. They also have high melting points and boiling points.",
    color: "MAGENTA",
  },
  {
    name: "Actinides",
    description:
      "The Actinides consist of the elements in the f-block in Period 7 of the Periodic Table. All the elements of the Actinides family are radioactive and most are synthetic, that is, human-made. All have a silvery or silvery-white luster in metallic form, and are soft, ductile, and paramagnetic.",
    color: "PURPLE",
  },
];

const SHELLS = [
  {
    name: "s-block",
    description: 'The s-block consists of elements in Groups 1 and 2 plus Helium. The valence electrons of these elements are in the s-shell. This spherical shaped shell holds at most 2 electrons, and has an azimuthal quantum number of 0. The "s" stands for "sharp".',
    color: "RED",
  },
  {
    name: "p-block",
    description:
      'The p-block consists elements in Groups 13 to 18 but not Helium. The valence electrons of these elements are in the p-shell. This dumb-bell shaped shell holds at most 6 electrons, and has an azimuthal quantum number of 1. The "p" stands for "principal".',
    color: "YELLOW",
  },
  {
    name: "d-block",
    description: 'The d-block consists of elements in Groups 3 to 12. The valence electrons of these elements are in the d-shell. This shell holds at most 10 electrons, and has an azimuthal quantum number of 2. The "d" stands for "diffuse".',
    color: "GREEN",
  },
  {
    name: "f-block",
    description: 'The f-block consists of elements in the Lanthanides and Actinides families. The valence electrons of these elements are in the f-shell. This shell holds at most 14 electrons, and has an azimuthal quantum number of 3. The "f" stands for "fundamental".',
    color: "BLUE",
  },
];

const DISPLAY_MODES = [
  "STANDARD",
  "FAMILIES",
  "SHELLS",
  "STATES",
  "ATOMIC_MASS",
  "PROTONS",
  "NEUTRONS",
  "ELECTRONS",
  "VALENCE_ELECTRONS",
  "VALENCY",
  "ATOMIC_RADIUS",
  "DENSITY",
  "ELECTRONEGATIVITY",
  "IONIZATION_ENERGY",
  "ELECTRON_AFFINITY",
  "MELTING_POINT",
  "BOILING_POINT",
  "SPECIFIC_HEAT",
  "RADIOACTIVE",
  "OCCURRENCE",
  "YEAR",
];

const HEATMAP_COLORS = [
  { fg: "\u001b[38;5;51m", bg: "\u001b[48;5;51m" },
  { fg: "\u001b[38;5;50m", bg: "\u001b[48;5;50m" },
  { fg: "\u001b[38;5;49m", bg: "\u001b[48;5;49m" },
  { fg: "\u001b[38;5;48m", bg: "\u001b[48;5;48m" },
  { fg: "\u001b[38;5;47m", bg: "\u001b[48;5;47m" },
  { fg: "\u001b[38;5;46m", bg: "\u001b[48;5;46m" },
  { fg: "\u001b[38;5;82m", bg: "\u001b[48;5;82m" },
  { fg: "\u001b[38;5;118m", bg: "\u001b[48;5;118m" },
  { fg: "\u001b[38;5;154m", bg: "\u001b[48;5;154m" },
  { fg: "\u001b[38;5;190m", bg: "\u001b[48;5;190m" },
  { fg: "\u001b[38;5;226m", bg: "\u001b[48;5;226m" },
  { fg: "\u001b[38;5;220m", bg: "\u001b[48;5;220m" },
  { fg: "\u001b[38;5;214m", bg: "\u001b[48;5;214m" },
  { fg: "\u001b[38;5;208m", bg: "\u001b[48;5;208m" },
  { fg: "\u001b[38;5;202m", bg: "\u001b[48;5;202m" },
  { fg: "\u001b[38;5;196m", bg: "\u001b[48;5;196m" },
];

// prettier-ignore
const STATES_CONFIG = {
  "Solid": "WHITE",
  "Solid **": "GRAY",
  "Liquid": "RED",
  "Liquid **": "DARK_RED",
  "Gas": "SKY_BLUE",
  "Gas **": "BLUE"
};

// prettier-ignore
const FAMILIES_CONFIG = {
  "Alkali Metals": "RED",
  "Alkaline Earth Metals": "ORANGE",
  "Transition Metals": "YELLOW",
  "Post-Transition Metals": "DARK_YELLOW",
  "Metalloids": "GREEN",
  "Nonmetals": "DARK_GREEN",
  "Halogens": "SKY_BLUE",
  "Noble Gases": "BLUE",
  "Lanthanides": "MAGENTA",
  "Actinides": "PURPLE"
};

// prettier-ignore
const SHELLS_CONFIG = {
  "s-block": "RED", "p-block": "YELLOW", "d-block": "GREEN", "f-block": "BLUE",
};

// prettier-ignore
const VALENCE_ELECTRON_CONFIG = {
  1: "PURPLE", 2: "MAGENTA", 3: "BLUE", 4: "SKY_BLUE",
  5: "GREEN", 6: "YELLOW", 7: "ORANGE", 8: "RED"
};

const RESET = "\x1b[0m";
const DETAILBOX = 38;

// prettier-ignore
const VALENCY_CONFIG = {
  0: "SKY_BLUE", 1: "GREEN", 2: "YELLOW", 3: "ORANGE", 4: "RED"
};

// prettier-ignore
const RADIOACTIVE_CONFIG = {
  true: "RED", false: "GREEN",
};

// prettier-ignore
const OCCURRENCE_CONFIG = {
  Natural: "SKY_BLUE", Rare: "YELLOW", Synthetic: "ORANGE",
};

const COLORS = {
  BLACK: { fg: "\x1b[38;5;0m", bg: "\x1b[48;5;0m" },
  WHITE: { fg: "\x1b[38;5;255m", bg: "\x1b[48;5;255m" },
  GRAY: { fg: "\x1b[38;5;244m", bg: "\x1b[48;5;244m" },
  LIGHT_GRAY: { fg: "\x1b[38;5;250m", bg: "\x1b[48;5;250m" },
  FOCUS_GOLD: { fg: "\x1b[38;5;214m", bg: "\x1b[48;5;214m" },
  FOCUS_BLUE: { fg: "\x1b[38;5;33m", bg: "\x1b[48;5;33m" },
  RED: { fg: "\x1b[38;5;196m", bg: "\x1b[48;5;196m" },
  DARK_RED: { fg: "\x1b[38;5;88m", bg: "\x1b[48;5;88m" },
  ORANGE: { fg: "\x1b[38;5;208m", bg: "\x1b[48;5;208m" },
  YELLOW: { fg: "\x1b[38;5;226m", bg: "\x1b[48;5;226m" },
  DARK_YELLOW: { fg: "\x1b[38;5;136m", bg: "\x1b[48;5;136m" },
  GREEN: { fg: "\x1b[38;5;40m", bg: "\x1b[48;5;40m" },
  MID_GREEN: { fg: "\x1b[38;5;34m", bg: "\x1b[48;5;34m" },
  DARK_GREEN: { fg: "\x1b[38;5;28m", bg: "\x1b[48;5;28m" },
  SKY_BLUE: { fg: "\x1b[38;5;51m", bg: "\x1b[48;5;51m" },
  BLUE: { fg: "\x1b[38;5;27m", bg: "\x1b[48;5;27m" },
  MAGENTA: { fg: "\x1b[38;5;207m", bg: "\x1b[48;5;207m" },
  PURPLE: { fg: "\x1b[38;5;93m", bg: "\x1b[48;5;93m" },
};

const genHeatmapBar = (labels = {}) => {
  return HEATMAP_COLORS.map((color, i) => `${color.bg}${labels[i] ? `${COLORS.BLACK.fg}${labels[i]}` : " "}${RESET}`).join("");
};

// prettier-ignore
const STANDARD_LABELS = {
  1: 'M', 2: 'I', 3: 'N', 12: 'M', 13: 'A', 14: 'X'
};

// prettier-ignore
const YEAR_LABELS = {
  1: '1', 2: '6', 3: '6', 4: '9', 11: '2', 12: '0', 13: '1', 14: '0'
};

const DEFAULT_FAMILY_LINES = [
  `${COLORS.GRAY.fg}      Alkali Metals       Alkaline Earth Metals       Transition Metals       Post-Transition Metals       ${RESET}`,
  `${COLORS.GRAY.fg}      Metalloids          Nonmetals                   Halogens                Noble Gases                  ${RESET}`,
  `${COLORS.GRAY.fg}      Lanthanides         Actinides                                                                        ${RESET}`,
];

const DEFAULT_SHELL_LINES = [`${COLORS.GRAY.fg}               s-block                p-block                d-block                f-block                ${RESET}`];

const center = (text, width) => {
  const padding = width - text.length;
  const leftPadding = Math.floor(padding / 2);
  const rightPadding = padding - leftPadding;
  return " ".repeat(leftPadding) + text + " ".repeat(rightPadding);
};

const genColorBlock = (text, color) => `${COLORS[color].bg}${COLORS.BLACK.fg}${center(text, text.length + 2)}${RESET}`;

const genFixedRow = (items, totalWidth = DETAILBOX) => {
  const spaceCount = items.length + 1; // Spaces between and around blocks
  const remainingWidth = totalWidth - spaceCount;

  let blockWidths;
  if (items.length === 3) {
    // For 3 blocks (states/occurrence), middle block gets extra space
    const baseWidth = Math.floor(remainingWidth / 3);
    blockWidths = [baseWidth, baseWidth + 1, baseWidth];
  } else if (items.length === 2) {
    // For 2 blocks (radioactive), longer text gets extra space
    const baseWidth = Math.floor(remainingWidth / 2);
    const [text1, text2] = items.map(([text]) => text);
    if (text1.length > text2.length) {
      blockWidths = [baseWidth + 1, baseWidth];
    } else {
      blockWidths = [baseWidth, baseWidth + 1];
    }
  }

  const blocks = items.map(([text, color], index) => {
    const width = blockWidths[index];
    return `${COLORS[color].bg}${COLORS.BLACK.fg}${center(text, width)}${RESET}`;
  });

  return ` ${blocks.join(" ")} `;
};

const genValenceElectrons = () => {
  const blocks = Object.entries(VALENCE_ELECTRON_CONFIG)
    .map(([number, color]) => `${COLORS[color].bg}${COLORS.BLACK.fg} ${number}${RESET}`)
    .join("");
  return `${center("VALENCE ELECTRONS", 21)}${blocks} `;
};

const genValency = () => {
  const blocks = Object.entries(VALENCY_CONFIG)
    .map(([number, color]) => `${COLORS[color].bg}${COLORS.BLACK.fg} ${number} ${RESET}`)
    .join("");
  return `${center("VALENCY", 22)}${blocks} `;
};

const DISPLAY_MODES_TEXT = [
  center("STANDARD", DETAILBOX),
  center("ELEMENT FAMILIES", DETAILBOX),
  center("ELECTRON CONFIGURATIONS", DETAILBOX),

  // States
  genFixedRow([
    ["SOLID", STATES_CONFIG["Solid"]],
    ["LIQUID", STATES_CONFIG["Liquid"]],
    ["GAS", STATES_CONFIG["Gas"]],
  ]),

  // Atomic Properties
  ...["ATOMIC MASS", "PROTONS", "NEUTRONS", "ELECTRONS"].map((title) => `${center(title, DETAILBOX - 16 - 1)}${genHeatmapBar(STANDARD_LABELS)} `),

  // Valence Electrons and Valency
  genValenceElectrons(),
  genValency(),

  // Other Properties
  ...["ATOMIC_RADIUS", "DENSITY", "ELECTRONEGATIVITY", "IONIZATION_ENERGY", "ELECTRON_AFFINITY", "MELTING POINT", "BOILING POINT", "SPECIFIC HEAT"].map((title) => `${center(title, 21)}${genHeatmapBar(STANDARD_LABELS)} `),

  // Radioactive
  genFixedRow([
    ["RADIOACTIVE", RADIOACTIVE_CONFIG.true],
    ["STABLE", RADIOACTIVE_CONFIG.false],
  ]),

  // Occurrence
  genFixedRow(Object.entries(OCCURRENCE_CONFIG).map(([state, color]) => [state.toUpperCase(), color])),

  // Year
  `${center("YEAR", 11)}${RESET}${genColorBlock("ANCIENT", "WHITE")} ${genHeatmapBar(YEAR_LABELS)} `,
];

const elementsMap = elements.reduce((acc, element) => {
  acc[element.atomicNumber] = element;
  return acc;
}, {});

// Layout matrix representing positions of elements
const periodicTable = [
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2],
  [3, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 6, 7, 8, 9, 10],
  [11, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 13, 14, 15, 16, 17, 18],
  [19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36],
  [37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54],
  [55, 56, 0, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86],
  [87, 88, 0, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118],
];

const lanthanideRow = [57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71];
const actinideRow = [89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103];

const PeriodicTableTerminal = ({ onClose, initial = 1 }) => {
  const containerRef = useRef(null);
  const terminalRef = useRef(null);
  const xtermRef = useRef(null);
  const fitAddonRef = useRef(null);

  const currentlyHighlighted = useRef(initial);
  const displayMode = useRef(0);
  const searchQuery = useRef("");
  const searchResults = useRef([]);
  const selectedSearchResult = useRef(0);
  const isSearching = useRef(false);
  const prevHighlighted = useRef(0);

  const switchDisplayMode = (forward) => {
    if (forward) {
      displayMode.current = (displayMode.current + 1) % DISPLAY_MODES.length;
    } else {
      displayMode.current = displayMode.current === 0 ? DISPLAY_MODES.length - 1 : displayMode.current - 1;
    }
  };

  const genFamilyLayoutMap = (familiesConfig) => {
    const ITEMS_PER_ROW = 4;
    const familyLayoutMap = {};

    Object.keys(familiesConfig).forEach((family, index) => {
      const row = Math.floor(index / ITEMS_PER_ROW);
      const col = index % ITEMS_PER_ROW;
      familyLayoutMap[family] = { row, col };
    });

    return familyLayoutMap;
  };

  const familyLayoutMap = genFamilyLayoutMap(FAMILIES_CONFIG);

  const shellLayoutMap = Object.fromEntries(Object.keys(SHELLS_CONFIG).map((shell, index) => [shell, { row: 0, col: index }]));

  const colorize = (str, color) => `${color}${str}${RESET}`;

  const fillElement = (atomicNumber, symbol, options = {}) => {
    const { highlightedElements = [], highlightColor = null, bgColor = null } = options;

    // Fixes some spacing issues when coloring background for display modes
    const isLanAct = (atomicNumber >= 58 && atomicNumber < 71) || (atomicNumber >= 90 && atomicNumber < 103);
    const TOTAL_CONTENT_SPACE = isLanAct ? 6 : 5;

    const numStr = atomicNumber.toString().padStart(2, " ");
    const symStr = symbol.padEnd(2, " ");

    // Array for highlighted elements so that multiple elements can be marked in families and shells view
    const isHighlighted = highlightedElements.includes(atomicNumber);
    const elementColor = isHighlighted ? highlightColor : atomicNumber === currentlyHighlighted.current ? COLORS.ORANGE.fg : COLORS.FOCUS_BLUE.fg;
    const numColor = isHighlighted ? highlightColor : atomicNumber === currentlyHighlighted.current ? COLORS.ORANGE.fg : COLORS.GRAY.fg;

    // Table color is blue if highlighting an element in main table and in standard view
    const tableColor = typeof currentlyHighlighted.current === "string" || displayMode.current != 0 ? COLORS.WHITE.fg : COLORS.FOCUS_BLUE.fg;
    const symColor = bgColor != null ? COLORS.BLACK.fg : COLORS.WHITE.fg;

    const colorContent = (content, prefix, textColor, atomicNumLine = false) => {
      // Calculate remaining space for suffix
      const suffixLength = TOTAL_CONTENT_SPACE - prefix.length - content.length;
      const suffix = " ".repeat(Math.max(0, suffixLength));

      // If highlighted element, do not apply background color to the atomic number row
      if (atomicNumLine && (isHighlighted || atomicNumber === currentlyHighlighted.current)) {
        return `${textColor}${prefix}${content}${suffix}${RESET}`;
      }
      if (bgColor) {
        return `${COLORS.BLACK.fg}${bgColor}${prefix}${content}${suffix}${RESET}`;
      }
      return `${textColor}${prefix}${content}${suffix}${RESET}`;
    };

    const getBarConfig = (atomicNumber) => {
      const isLanthanideOrActinide = (atomicNumber >= 58 && atomicNumber <= 71) || (atomicNumber >= 90 && atomicNumber <= 103);

      if (isLanthanideOrActinide) {
        return {
          line1: { char: "║", prefix: " " },
          line2: { char: "║", prefix: " " },
        };
      } else if (atomicNumber === 57) {
        return {
          line1: { char: "─╢", prefix: " " },
          line2: { char: " ║", prefix: " " },
        };
      } else if (atomicNumber === 89) {
        return {
          line1: { char: "═╣", prefix: " " },
          line2: { char: " ║", prefix: " " },
        };
      } else if (atomicNumber === 72) {
        return {
          line1: { char: "╢", prefix: " " },
          line2: { char: "║", prefix: " " },
        };
      } else if (atomicNumber === 104) {
        return {
          line1: { char: "╣", prefix: " " },
          line2: { char: "║", prefix: " " },
        };
      } else if (atomicNumber === 1 || (atomicNumber >= 5 && atomicNumber <= 9)) {
        return {
          line1: { char: "║", prefix: " " },
          line2: { char: "║", prefix: "  " },
        };
      } else if (atomicNumber >= 2 && atomicNumber <= 4) {
        return {
          line1: { char: "║", prefix: "" },
          line2: { char: "║", prefix: " " },
        };
      } else {
        return {
          line1: { char: "║", prefix: " " },
          line2: { char: "║", prefix: " " },
        };
      }
    };

    const barConfig = getBarConfig(atomicNumber);

    const lines = [
      // First line with atomic number
      `${RESET}${tableColor}${barConfig.line1.char}${RESET}${colorContent(numStr, barConfig.line1.prefix, numColor, true)}`,
      // Second line with atomic symbol
      `${RESET}${tableColor}${barConfig.line2.char}${RESET}${colorContent(symStr, barConfig.line2.prefix, symColor)}`,
    ];

    return [colorize(lines[0], elementColor), colorize(lines[1], elementColor)];
  };

  const getElementPosition = (atomicNumber) => {
    for (let row = 0; row < periodicTable.length; row++) {
      const col = periodicTable[row].indexOf(atomicNumber);
      if (col !== -1) {
        return { row, col };
      }
    }

    const lanthanideIndex = lanthanideRow.indexOf(atomicNumber);
    if (lanthanideIndex !== -1) {
      return { row: 7, col: lanthanideIndex + 2 }; // +2 to account for offset
    }

    const actinideIndex = actinideRow.indexOf(atomicNumber);
    if (actinideIndex !== -1) {
      return { row: 8, col: actinideIndex + 2 };
    }

    return null;
  };

  // Color the top and bottom line ═══ of the highlighted element
  const colorizeBox = (line, startCol, color, normalColor) => {
    let result = "";
    let visibleIndex = 0;
    let currentIndex = 0;

    while (currentIndex < line.length) {
      // Check if we are at an ANSI escape code
      const remainingLine = line.slice(currentIndex);
      const ansiMatch = remainingLine.match(/^\x1b\[[0-9;]*[mGK]/);

      if (ansiMatch) {
        // Add the ANSI code to result without counting it as visible character
        result += ansiMatch[0];
        currentIndex += ansiMatch[0].length;
        continue;
      }

      // Get current character
      const char = line[currentIndex];

      // Check if it's a box drawing character and if it's in the highlight range
      if (/[║╔╗╚╝╠╣╦╩╬═╟╢├┤└┘┌┐─│╘┬╪]/.test(char)) {
        if (visibleIndex >= startCol && visibleIndex <= startCol + 7) {
          result += `${color}${char}${RESET}`;
        } else {
          result += `${normalColor}${char}${RESET}`;
        }
      } else {
        result += char;
      }
      currentIndex++;
      visibleIndex++;
    }

    return result;
  };

  const columnWidths = [
    Math.max("Alkali Metals".length, "Metalloids".length, "Lanthanides".length),
    Math.max("Alkaline Earth Metals".length, "Nonmetals".length, "Actinides".length),
    Math.max("Transition Metals".length, "Halogens".length),
    Math.max("Post-Transition Metals".length, "Noble Gases".length),
  ];

  const processDashboardLine = (line, startCol, startCol7, color, normalColor) => {
    // Get the actual indices considering ANSI codes
    const actualStartCol = findActualIndex(line, startCol);
    const actualEndCol = findActualIndex(line, startCol7);

    const before = line.slice(0, actualStartCol);
    const middle = colorizeBox(line.slice(actualStartCol, actualEndCol), 0, color, normalColor);
    const after = line.slice(actualEndCol);

    return before + middle + after;
  };

  // Pad string that contain ANSI codes to specific length
  const padEndWithAnsi = (str, length) => {
    const visibleLength = str.replace(/\x1b\[[0-9;]*[mGK]/g, "").length;
    return str + " ".repeat(Math.max(0, length - visibleLength));
  };

  const buildDashboard = () => {
    let dashboard = Array.from(DASHBOARD);
    const pos = getElementPosition(currentlyHighlighted.current);
    let familyLines = [];
    let shellLines = [];
    let heatmapColors = {};

    // Update display mode text
    const displayModeText = DISPLAY_MODES_TEXT[displayMode.current];
    dashboard[36] = replaceAt(dashboard[36], 116, displayModeText);

    const assignHeatmapColors = (elementField) => {
      const validValues = Object.values(elementsMap)
        .map((element) => {
          const value = element[elementField];
          return typeof value === "string" ? parseFloat(value) : value;
        })
        .filter((value) => value !== undefined);

      // Normalize all the collected values and place them into HEATMAP_COLORS.length buckets
      if (validValues.length > 0) {
        const minValue = Math.min(...validValues);
        const maxValue = Math.max(...validValues);
        const range = maxValue - minValue;

        Object.values(elementsMap).forEach((element) => {
          const numValue = typeof element[elementField] === "string" ? parseFloat(element[elementField]) : element[elementField];

          if (numValue !== undefined) {
            const normalized = (numValue - minValue) / range;
            const colorIndex = Math.floor(normalized * (HEATMAP_COLORS.length - 1));
            heatmapColors[element.atomicNumber] = HEATMAP_COLORS[colorIndex].bg;
          }
        });
      }
    };

    // Map elements to colors based on their properties
    const assignColors = (propertyName, colorConfig) => {
      Object.values(elementsMap).forEach((element) => {
        const value = element[propertyName];
        if (value !== undefined) {
          heatmapColors[element.atomicNumber] = COLORS[colorConfig[value]].bg;
        }
      });
    };

    const createColorBlock = (color) => {
      const colorCode = COLORS[color].bg;
      return `${colorCode}  ${RESET}${COLORS.GRAY.fg}`;
    };

    // Handle different display modes
    const handleDisplayMode = () => {
      const numericModes = [4, 5, 6, 7, 10, 11, 12, 13, 14, 15, 16, 17];

      if (numericModes.includes(displayMode.current)) {
        const fieldMap = {
          atomic_mass: "atomicMass",
          protons: "numberOfProtons",
          neutrons: "numberOfNeutrons",
          electrons: "numberOfElectrons",
          valence_electrons: "numberOfValence",
          valency: "valency",
          atomic_radius: "atomicRadius",
          density: "density",
          electronegativity: "electronegativity",
          ionization_energy: "ionizationEnergy",
          electron_affinity: "electronAffinity",
          melting_point: "meltingPoint",
          boiling_point: "boilingPoint",
          specific_heat: "specificHeat",
        };

        const field = DISPLAY_MODES[displayMode.current].toLowerCase();
        assignHeatmapColors(fieldMap[field]);
        return;
      }

      const displayModeHandler = {
        3: () => assignColors("standardState", STATES_CONFIG),
        8: () => assignColors("numberOfValence", VALENCE_ELECTRON_CONFIG),
        9: () => assignColors("valency", VALENCY_CONFIG),
        18: () => assignColors("radioactive", RADIOACTIVE_CONFIG),
        19: () => assignColors("occurrence", OCCURRENCE_CONFIG),
        1: () => {
          assignColors("family", FAMILIES_CONFIG);
          familyLines = [
            `   ${createColorBlock("RED")} Alkali Metals    ${createColorBlock("ORANGE")} Alkaline Earth Metals    ${createColorBlock("YELLOW")} Transition Metals    ${createColorBlock("DARK_YELLOW")} Post-Transition Metals       ${RESET}`,
            `   ${createColorBlock("GREEN")} Metalloids       ${createColorBlock("DARK_GREEN")} Nonmetals                ${createColorBlock("SKY_BLUE")} Halogens             ${createColorBlock("BLUE")} Noble Gases                  ${RESET}`,
            `   ${createColorBlock("MAGENTA")} Lanthanides      ${createColorBlock("PURPLE")} Actinides                                                                       ${RESET}`,
          ];
          dashboard[34] = `                                               ${COLORS.WHITE.bg}${COLORS.BLACK.fg}  ELEMENT FAMILIES  ${RESET}                                                              DISPLAY MODE               `;
        },
        2: () => {
          assignColors("shell", SHELLS_CONFIG);
          shellLines = [`            ${createColorBlock("RED")} s-block             ${createColorBlock("YELLOW")} p-block             ${createColorBlock("GREEN")} d-block             ${createColorBlock("BLUE")} f-block                ${RESET}`];
          dashboard[41] = `                                            ${COLORS.WHITE.bg}${COLORS.BLACK.fg}  ELECTRON CONFIGURATIONS  ${RESET}                                              Toggle Display Mode: </> (slash) or    `;
        },
        20: () => {
          const years = Object.values(elementsMap)
            .map((element) => (element.yearDiscovered === "Ancient" ? null : parseInt(element.yearDiscovered)))
            .filter((year) => year && !isNaN(year));

          const minYear = Math.min(...years);
          const maxYear = Math.max(...years);
          const range = maxYear - minYear;

          Object.values(elementsMap).forEach((element) => {
            if (element.yearDiscovered === "Ancient") {
              heatmapColors[element.atomicNumber] = COLORS.WHITE.bg;
            } else {
              const numYear = parseInt(element.yearDiscovered);
              if (!isNaN(numYear)) {
                const normalized = (numYear - minYear) / range;
                const colorIndex = Math.ceil(normalized * (HEATMAP_COLORS.length - 1));
                heatmapColors[element.atomicNumber] = HEATMAP_COLORS[colorIndex].bg;
              }
            }
          });
        },
      };

      if (displayModeHandler[displayMode.current]) {
        heatmapColors = {};
        displayModeHandler[displayMode.current]();
      }
    };

    // Process display mode
    handleDisplayMode();

    // Set default family and shell lines if not set
    if (familyLines.length < 1) {
      familyLines = DEFAULT_FAMILY_LINES;
    }

    if (shellLines.length < 1) {
      shellLines = DEFAULT_SHELL_LINES;
    }

    familyLines.forEach((line, index) => {
      dashboard[36 + index] = replaceAt(dashboard[36 + index], 4, line);
    });

    shellLines.forEach((line, index) => {
      dashboard[43 + index] = replaceAt(dashboard[43 + index], 4, line);
    });

    // Fill elements in the periodic table
    const fillTableElements = (highlightedElements = [], highlightColor = null) => {
      const fillOptions = {
        highlightedElements,
        highlightColor,
      };

      // Fill main periodic table
      periodicTable.forEach((row, rowIndex) => {
        row.forEach((atomicNumber, colIndex) => {
          if (atomicNumber > 0) {
            const element = elementsMap[atomicNumber];
            if (element) {
              let yOffset = rowIndex * 3 + 3;
              const xOffset = colIndex * 6 + 3;
              if ((atomicNumber >= 58 && atomicNumber <= 71) || (atomicNumber >= 90 && atomicNumber <= 103)) {
                yOffset = rowIndex * 3 + 4;
              }

              // Use heatmap colors for the background
              if (heatmapColors && heatmapColors[atomicNumber]) {
                fillOptions.bgColor = heatmapColors[atomicNumber];
              } else {
                fillOptions.bgColor = null;
              }

              const [numLine, symLine] = fillElement(element.atomicNumber, element.symbol, fillOptions);

              dashboard[yOffset] = replaceAt(dashboard[yOffset], xOffset, numLine);
              dashboard[yOffset + 1] = replaceAt(dashboard[yOffset + 1], xOffset, symLine);
            }
          }
        });
      });

      // Fill lanthanides and actinides
      const fillSpecialRow = (row, yOffset, xOffsetBase) => {
        row.forEach((atomicNumber, index) => {
          const element = elementsMap[atomicNumber];
          if (element) {
            let xOffset = index * 6 + xOffsetBase;
            if ((atomicNumber >= 58 && atomicNumber <= 71) || (atomicNumber >= 90 && atomicNumber <= 103)) {
              xOffset += 1;
            }

            if (heatmapColors && heatmapColors[atomicNumber]) {
              fillOptions.bgColor = heatmapColors[atomicNumber];
            } else {
              fillOptions.bgColor = null;
            }

            const [numLine, symLine] = fillElement(element.atomicNumber, element.symbol, fillOptions);

            dashboard[yOffset] = replaceAt(dashboard[yOffset], xOffset, numLine);
            dashboard[yOffset + 1] = replaceAt(dashboard[yOffset + 1], xOffset, symLine);
          }
        });
      };

      fillSpecialRow(lanthanideRow, 26, 14);
      fillSpecialRow(actinideRow, 29, 14);
    };

    // Highlight element boxes
    const highlightElementBoxes = (elements, color) => {
      elements.forEach((atomicNumber) => {
        const pos = getElementPosition(atomicNumber);
        if (pos) {
          const startRow = pos.row * 3 + 2;
          const endRow = startRow + 4;
          const startCol = pos.col * 6 + 3;

          // Special case for lanthanides and actinides
          if (pos.row > 6) {
            for (let i = startRow + 2; i < endRow + 2; i++) {
              dashboard[i] = processDashboardLine(dashboard[i], startCol, startCol + 7, color, COLORS.WHITE.fg);
            }
          } else {
            // Regular elements
            for (let i = startRow; i < endRow; i++) {
              dashboard[i] = processDashboardLine(dashboard[i], startCol, startCol + 7, color, COLORS.WHITE.fg);
            }
          }
        }
      });
    };

    // Helper function to update details panel
    const updateDetailsPanel = (title, description, titleColor = COLORS.ORANGE.fg) => {
      const wrappedDescription = wrapText(description, 35);
      const detailLines = [center(title, 37), ...wrappedDescription];

      let index = 0;
      let dashIndex = 0;
      while (index < detailLines.length && index < 25) {
        // Skip the line with ════ in the details panel
        if (!dashboard[3 + dashIndex].slice(112).includes("════")) {
          const color = index === 0 ? titleColor : COLORS.WHITE.fg;
          dashboard[3 + dashIndex] = replaceAt(dashboard[3 + dashIndex], 117, colorize(detailLines[index].padEnd(37), color));
          index++;
        }
        dashIndex++;
      }
    };

    // Handle different display states
    if (typeof currentlyHighlighted.current === "string") {
      // Handle family or shell selection
      const family = FAMILIES.find((f) => f.name === currentlyHighlighted.current);
      const shell = SHELLS.find((s) => s.name === currentlyHighlighted.current);

      if (family) {
        const pos = familyLayoutMap[family.name];
        const startCol = 10 + columnWidths.slice(0, pos.col).reduce((sum, width, index) => sum + width + 7, 0);
        const lineIndex = 36 + pos.row;

        dashboard[lineIndex] = colorizeText(dashboard[lineIndex], startCol, family.name.length, family.color, columnWidths[pos.col]);

        updateDetailsPanel(family.name, family.description, COLORS[family.color].fg);

        // Get atomic numbers of elements that fall into the specified family
        const atomicNumbers = elements
          .filter((element) => element.family === currentlyHighlighted.current)
          .map((element) => element.atomicNumber)
          .sort((a, b) => a - b);

        fillTableElements(atomicNumbers, COLORS[family.color].fg);
        highlightElementBoxes(atomicNumbers, COLORS[family.color].fg);
      } else if (shell) {
        const pos = shellLayoutMap[shell.name];
        const startCol = 18 + 23 * pos.col;
        const lineIndex = 43 + pos.row;

        dashboard[lineIndex] = colorizeText(dashboard[lineIndex], startCol, shell.name.length + 2, shell.color);

        updateDetailsPanel(shell.name, shell.description, COLORS[shell.color].fg);

        const atomicNumbers = elements
          .filter((element) => element.shell === currentlyHighlighted.current)
          .map((element) => element.atomicNumber)
          .sort((a, b) => a - b);

        fillTableElements(atomicNumbers, COLORS[shell.color].fg);
        highlightElementBoxes(atomicNumbers, COLORS[shell.color].fg);
      }
    } else {
      // Handle regular element selection
      dashboard = dashboard.map((line, index) => {
        const boardColor = displayMode.current != 0 ? COLORS.WHITE.fg : COLORS.FOCUS_BLUE.fg;
        if (index <= 31) {
          const sliceEnd = Math.min(112, line.length);
          const processedPart = line.slice(0, sliceEnd).replace(/([║╔╗╚╝╠╣╦╩╬═╟╢├┤└┘┌┐─│╘┬╪])/g, (match) => colorize(match, boardColor));
          return processedPart + line.slice(sliceEnd);
        }
        return line;
      });

      fillTableElements();

      if (currentlyHighlighted.current >= 0) {
        // Highlight the box around the current element
        highlightElementBoxes([currentlyHighlighted.current], COLORS.ORANGE.fg);
        const selectedElement = elementsMap[currentlyHighlighted.current];

        // Highlight the family of currently selected element
        const familyName = selectedElement.family;
        const lineIndex = familyLayoutMap[familyName].row;
        const startPos = DEFAULT_FAMILY_LINES[lineIndex].replace(/\x1b\[[0-9;]*[mGK]/g, "").indexOf(familyName);
        if (startPos !== -1) {
          const highlightedText = `${COLORS.ORANGE.fg}${familyName}${COLORS.GRAY.fg}`;
          dashboard[36 + lineIndex] = replaceAt(dashboard[36 + lineIndex], startPos + 4, highlightedText);
        }

        // Highlight the shell of currently selected element
        const shellName = selectedElement.shell;
        const shellIndex = shellLayoutMap[shellName];
        const startIndex = DEFAULT_SHELL_LINES[0].replace(/\x1b\[[0-9;]*[mGK]/g, "").indexOf(shellName);
        if (startPos !== -1) {
          const highlightedText = `${COLORS.ORANGE.fg}${shellName}${COLORS.GRAY.fg}`;
          dashboard[43] = replaceAt(dashboard[43], startIndex + 4, highlightedText);
        }

        // Highlight row and column numbers
        const rowNumber = pos.row > 6 ? pos.row - 1 : pos.row + 1;
        dashboard[rowNumber * 3] = replaceAt(dashboard[rowNumber * 3], 1, colorize(rowNumber.toString(), COLORS.ORANGE.fg));

        const columnNumber = pos.col + 1;
        const rowIndexDash = columnNumber === 1 || columnNumber === 18 ? 1 : columnNumber === 2 || (columnNumber >= 13 && columnNumber <= 17) ? 4 : 10;

        if (dashboard[rowIndexDash]) {
          const colPos = columnNumber > 9 ? 5 + pos.col * 6 : 6 + pos.col * 6;
          if (colPos < dashboard[rowIndexDash].length) {
            dashboard[rowIndexDash] = replaceAt(dashboard[rowIndexDash], colPos, colorize(columnNumber.toString(), COLORS.ORANGE.fg));
          }
        }
      }

      if (isSearching.current) {
        // Convert search query to uppercase
        const upperSearchQuery = searchQuery.current.toUpperCase();

        // Determine search query color based on results
        const queryColor = searchResults.current.length === 0 ? "RED" : "GREEN";
        const searchDisplayLines = [`${COLORS[queryColor].fg}${center(upperSearchQuery, 38)}${RESET}`, ""];

        searchResults.current.forEach((result, index) => {
          const isSelected = index === selectedSearchResult.current;
          let displayText = "";

          if (result.type === "element") {
            const element = elementsMap[result.value];
            const highlightedName = highlightSearchTerm(element.name, upperSearchQuery, isSelected);

            // Show atomic number instead of symbol for numeric searches
            if (upperSearchQuery.match(/^\d/)) {
              const highlightedNumber = highlightSearchTerm(element.atomicNumber.toString(), upperSearchQuery, isSelected, true);
              displayText = `${padEndWithAnsi(highlightedNumber, 5)}${padEndWithAnsi(highlightedName, 33)}${RESET}`;
            } else {
              const highlightedSymbol = highlightSearchTerm(element.symbol, upperSearchQuery, isSelected, true);
              displayText = `${padEndWithAnsi(highlightedSymbol, 5)}${padEndWithAnsi(highlightedName, 33)}${RESET}`;
            }
          } else if (result.type === "family") {
            const family = FAMILIES.find((f) => f.name === result.value);
            displayText = `${padEndWithAnsi(highlightSearchTerm(family.name, upperSearchQuery, isSelected, true), 38)}${RESET}`;
          } else if (result.type === "shell") {
            const shell = SHELLS.find((s) => s.name === result.value);
            displayText = `${padEndWithAnsi(highlightSearchTerm(shell.name, upperSearchQuery, isSelected, true), 38)}${RESET}`;
          }

          // Add the line with proper padding considering ANSI codes
          searchDisplayLines.push(padEndWithAnsi(displayText, 38));
        });

        // Add empty lines to fill up to 27 lines
        while (searchDisplayLines.length <= 27) {
          searchDisplayLines.push(" ".repeat(37));
        }
        searchDisplayLines[25] = "";

        if (searchResults.current.length === 0) {
          searchDisplayLines[2] = `${COLORS.GRAY.fg}${center("NO RESULTS", 38)}${RESET}`;
          searchDisplayLines[27] = `${COLORS.GRAY.fg}${center("Exit Search:<LEFT>", 38)}${RESET}`;
        } else {
          searchDisplayLines[26] = `${COLORS.GRAY.fg}${center("Navigation:<UP|DOWN>  Select:<ENTER>", 38)}${RESET}`;
          searchDisplayLines[27] = `${COLORS.GRAY.fg}${center("Exit Search:<LEFT>", 38)}${RESET}`;
        }

        // Update the dashboard with search results
        searchDisplayLines.forEach((line, index) => {
          if (index <= 27) {
            dashboard[3 + index] = replaceAt(dashboard[3 + index], 116, line);
          }
        });
      } else {
        if (currentlyHighlighted.current >= 0) {
          const selectedElement = elementsMap[currentlyHighlighted.current];
          const detailLines = [
            `${COLORS.ORANGE.fg}${center(selectedElement.name, 37)}${RESET}`,
            "",
            `${COLORS.GRAY.fg}     Atomic Number: ${selectedElement.atomicNumber ? `${COLORS.WHITE.fg}${selectedElement.atomicNumber}` : `${COLORS.GRAY.fg}-`}${RESET}`,
            `${COLORS.GRAY.fg}            Symbol: ${selectedElement.symbol ? `${COLORS.WHITE.fg}${selectedElement.symbol}` : `${COLORS.GRAY.fg}-`}${RESET}`,
            `${COLORS.GRAY.fg}             State: ${selectedElement.standardState ? `${COLORS.WHITE.fg}${selectedElement.standardState}` : `${COLORS.GRAY.fg}-`}${RESET}`,
            `${COLORS.GRAY.fg}       Atomic Mass: ${selectedElement.atomicMass ? `${COLORS.WHITE.fg}${selectedElement.atomicMass}` : `${COLORS.GRAY.fg}-`}${RESET}`,
            `${COLORS.GRAY.fg}           Protons: ${selectedElement.numberOfProtons ? `${COLORS.WHITE.fg}${selectedElement.numberOfProtons}` : `${COLORS.GRAY.fg}-`}${RESET}`,
            `${COLORS.GRAY.fg}          Neutrons: ${selectedElement.numberOfNeutrons ? `${COLORS.WHITE.fg}${selectedElement.numberOfNeutrons}` : `${COLORS.GRAY.fg}-`}${RESET}`,
            `${COLORS.GRAY.fg}         Electrons: ${selectedElement.numberOfElectrons ? `${COLORS.WHITE.fg}${selectedElement.numberOfElectrons}` : `${COLORS.GRAY.fg}-`}${RESET}`,
            `${COLORS.GRAY.fg} Valence Electrons: ${selectedElement.numberOfValence ? `${COLORS.WHITE.fg}${selectedElement.numberOfValence}` : `${COLORS.GRAY.fg}-`}${RESET}`,
            `${COLORS.GRAY.fg}           Valency: ${selectedElement.valency ? `${COLORS.WHITE.fg}${selectedElement.valency}` : `${COLORS.GRAY.fg}-`}${RESET}`,
            `${COLORS.GRAY.fg}     Atomic Radius: ${selectedElement.atomicRadius ? `${COLORS.WHITE.fg}${selectedElement.atomicRadius}` : `${COLORS.GRAY.fg}-`}${RESET}`,
            `${COLORS.GRAY.fg}           Density: ${selectedElement.density ? `${COLORS.WHITE.fg}${selectedElement.density}` : `${COLORS.GRAY.fg}-`}${RESET}`,
            `${COLORS.GRAY.fg} Electronegativity: ${selectedElement.electronegativity ? `${COLORS.WHITE.fg}${selectedElement.electronegativity}` : `${COLORS.GRAY.fg}-`}${RESET}`,
            `${COLORS.GRAY.fg} Ionization Energy: ${selectedElement.ionizationEnergy ? `${COLORS.WHITE.fg}${selectedElement.ionizationEnergy}` : `${COLORS.GRAY.fg}-`}${RESET}`,
            `${COLORS.GRAY.fg} Electron Affinity: ${selectedElement.electronAffinity ? `${COLORS.WHITE.fg}${selectedElement.electronAffinity}` : `${COLORS.GRAY.fg}-`}${RESET}`,
            `${COLORS.GRAY.fg}     Melting Point: ${selectedElement.meltingPoint ? `${COLORS.WHITE.fg}${selectedElement.meltingPoint}` : `${COLORS.GRAY.fg}-`}${RESET}`,
            `${COLORS.GRAY.fg}     Boiling Point: ${selectedElement.boilingPoint ? `${COLORS.WHITE.fg}${selectedElement.boilingPoint}` : `${COLORS.GRAY.fg}-`}${RESET}`,
            `${COLORS.GRAY.fg}     Specific Heat: ${selectedElement.specificHeat ? `${COLORS.WHITE.fg}${selectedElement.specificHeat}` : `${COLORS.GRAY.fg}-`}${RESET}`,
            `${COLORS.GRAY.fg}       Radioactive: ${selectedElement.radioactive ? `${COLORS.WHITE.fg}Yes` : `${COLORS.WHITE.fg}No`}${RESET}`,
            `${COLORS.GRAY.fg}        Occurrence: ${selectedElement.occurrence ? `${COLORS.WHITE.fg}${selectedElement.occurrence}` : `${COLORS.GRAY.fg}-`}${RESET}`,
            `${COLORS.GRAY.fg}              Year: ${selectedElement.yearDiscovered ? `${COLORS.WHITE.fg}${selectedElement.yearDiscovered}` : `${COLORS.GRAY.fg}-`}${RESET}`,
          ];

          // Handle line break scenario when electron config or oxidation state goes over the length limit
          const electronConfig = selectedElement.electronConfiguration || "-";
          if (electronConfig.length > 38 - "   Electron Config: ".length) {
            detailLines.push(`${COLORS.GRAY.fg}   Electron Config:${RESET}`);
            const paddingLength = 38 - electronConfig.length - 1;
            const coloredConfig = electronConfig !== "-" ? `${COLORS.WHITE.fg}${electronConfig}${RESET}` : `${COLORS.GRAY.fg}${electronConfig}${RESET}`;
            detailLines.push(" ".repeat(paddingLength) + coloredConfig + " ");
          } else {
            detailLines.push(`${COLORS.GRAY.fg}   Electron Config: ${electronConfig !== "-" ? `${COLORS.WHITE.fg}${electronConfig}${RESET}` : `${COLORS.GRAY.fg}${electronConfig}`}${RESET}`);
          }

          const oxidationStates = selectedElement.oxidationStates || "-";
          if (oxidationStates.length > 38 - "  Oxidation States: ".length) {
            detailLines.push(`${COLORS.GRAY.fg}   Oxidation States:${RESET}`);
            const paddingLength = 38 - oxidationStates.length - 1;
            const coloredStates = oxidationStates !== "-" ? `${COLORS.WHITE.fg}${oxidationStates}${RESET}` : `${COLORS.GRAY.fg}${oxidationStates}${RESET}`;
            detailLines.push(" ".repeat(paddingLength) + coloredStates + " ");
          } else {
            detailLines.push(`${COLORS.GRAY.fg}  Oxidation States: ${oxidationStates !== "-" ? `${COLORS.WHITE.fg}${oxidationStates}${RESET}` : `${COLORS.GRAY.fg}${oxidationStates}`}${RESET}`);
          }

          const hasExpectedValue = detailLines.some((line) => line.includes("**"));
          if (hasExpectedValue) {
            while (detailLines.length <= 27) {
              detailLines.push("");
            }
            const expectedText = `** Expected`;
            const lastLine = detailLines[detailLines.length - 1];
            const paddingLength = 38 - expectedText.length;
            detailLines[27] = `${COLORS.GRAY.fg}${" ".repeat(paddingLength) + expectedText}${RESET}`;
          }

          detailLines.forEach((line, index) => {
            if (index <= 27) {
              if (displayMode.current >= 3 && displayMode.current + 2 === index) {
                line = `${padEndWithAnsi(line, 38)}${RESET}`;
              } else {
                if (line.trim() != "") line = line.padEnd(38);
              }
              dashboard[3 + index] = replaceAt(dashboard[3 + index], 116, line);
            }
          });
        }
      }
    }

    return dashboard;
  };

  const updateSearch = (key) => {
    if (key === "Backspace") {
      searchQuery.current = searchQuery.current.slice(0, -1);
    } else {
      searchQuery.current += key;
    }

    const query = searchQuery.current.toLowerCase();

    const getMatchPosition = (str, searchStr) => {
      return str.toLowerCase().indexOf(searchStr);
    };

    // Score a match based on position
    const getPositionScore = (position, length) => {
      if (position === -1) return Number.MAX_VALUE;
      return position;
    };

    if (query.match(/^\d/)) {
      // Numeric search - sort by atomic number match position and value
      const elementResults = Object.values(elementsMap)
        .filter((element) => element.atomicNumber.toString().includes(query))
        .map((element) => ({
          type: "element",
          value: element.atomicNumber,
          matchPosition: element.atomicNumber.toString().indexOf(query),
          atomicNumber: element.atomicNumber,
        }))
        .sort((a, b) => {
          // First sort by match position
          if (a.matchPosition !== b.matchPosition) {
            return a.matchPosition - b.matchPosition;
          }
          // Then by atomic number
          return a.atomicNumber - b.atomicNumber;
        });

      searchResults.current = elementResults;
    } else {
      // Text-based search
      const results = [];

      Object.values(elementsMap).forEach((element) => {
        const symbolMatch = getMatchPosition(element.symbol, query);
        const nameMatch = getMatchPosition(element.name, query);

        if (symbolMatch !== -1 || nameMatch !== -1) {
          const score = {
            hasSymbolMatch: symbolMatch !== -1,
            hasNameMatch: nameMatch !== -1,
            symbolPosition: getPositionScore(symbolMatch, element.symbol.length),
            namePosition: getPositionScore(nameMatch, element.name.length),
            symbolLength: element.symbol.length,
            atomicNumber: element.atomicNumber,
          };

          results.push({
            type: "element",
            value: element.atomicNumber,
            score,
          });
        }
      });

      // Process families
      FAMILIES.forEach((family) => {
        const nameMatch = getMatchPosition(family.name, query);
        const keyMatch = getMatchPosition(family.name, query);

        if (nameMatch !== -1 || keyMatch !== -1) {
          results.push({
            type: "family",
            value: family.name,
            score: {
              namePosition: getPositionScore(nameMatch, family.name.length),
              keyPosition: getPositionScore(keyMatch, family.name.length),
            },
          });
        }
      });

      // Process shells
      SHELLS.forEach((shell) => {
        const nameMatch = getMatchPosition(shell.name, query);
        const keyMatch = getMatchPosition(shell.name, query);

        if (nameMatch !== -1 || keyMatch !== -1) {
          results.push({
            type: "shell",
            value: shell.name,
            score: {
              namePosition: getPositionScore(nameMatch, shell.name.length),
              keyPosition: getPositionScore(keyMatch, shell.name.length),
            },
          });
        }
      });

      // Sort results using the scoring system
      results.sort((a, b) => {
        if (a.type === "element" && b.type === "element") {
          // Both symbol and name match vs single match
          const aMatchCount = (a.score.hasSymbolMatch ? 1 : 0) + (a.score.hasNameMatch ? 1 : 0);
          const bMatchCount = (b.score.hasSymbolMatch ? 1 : 0) + (b.score.hasNameMatch ? 1 : 0);
          if (aMatchCount !== bMatchCount) return bMatchCount - aMatchCount;

          // Earliest match position (symbol takes priority)
          const aFirstPos = Math.min(a.score.hasSymbolMatch ? a.score.symbolPosition : Infinity, a.score.hasNameMatch ? a.score.namePosition : Infinity);
          const bFirstPos = Math.min(b.score.hasSymbolMatch ? b.score.symbolPosition : Infinity, b.score.hasNameMatch ? b.score.namePosition : Infinity);
          if (aFirstPos !== bFirstPos) return aFirstPos - bFirstPos;

          // For symbol matches, prefer shorter symbols (exact matches)
          if (a.score.hasSymbolMatch && b.score.hasSymbolMatch) {
            if (a.score.symbolLength !== b.score.symbolLength) {
              return a.score.symbolLength - b.score.symbolLength;
            }
          }

          // Atomic number as final tiebreaker
          return a.score.atomicNumber - b.score.atomicNumber;
        } else {
          // For families and shells, sort by earliest match position
          const aPos = Math.min(a.score.namePosition, a.score.keyPosition);
          const bPos = Math.min(b.score.namePosition, b.score.keyPosition);
          return aPos - bPos;
        }
      });

      searchResults.current = results;
    }

    selectedSearchResult.current = 0;
  };

  const highlightSearchTerm = (text, searchTerm, isSelected, leftCol = false) => {
    if (!searchTerm || !text) return text;

    text = leftCol ? " " + text : text;
    const lowerText = text.toLowerCase();
    const lowerSearch = searchTerm.toLowerCase();

    const index = lowerText.indexOf(lowerSearch);
    if (index === -1) {
      if (isSelected) {
        return `${COLORS.WHITE.bg}${COLORS.BLACK.fg}${text.replace(/\x1b\[[0-9;]*[mGK]/g, "")}`;
      } else {
        return `${text}`;
      }
    }

    const before = text.slice(0, index);
    const match = text.slice(index, index + searchTerm.length);
    const after = text.slice(index + searchTerm.length);

    if (isSelected) {
      return `${COLORS.WHITE.bg}${COLORS.BLACK.fg}${text.replace(/\x1b\[[0-9;]*[mGK]/g, "")}`;
    }

    return `${before}${COLORS.GREEN.fg}${match}${RESET}${after}`;
  };

  const colorizeText = (line, startCol, textLength, color, width = null) => {
    const padding = 2;
    const bgColorCode = COLORS[color].bg;

    // Calculate actual positions considering ANSI codes
    const startPosition = findActualIndex(line, startCol - padding);
    const highlightWidth = width !== null ? width + padding * 2 : textLength + padding * 2;
    const endPosition = findActualIndex(line, startCol - padding + highlightWidth);

    // Extract the section to be highlighted and process it character by character
    const middleSection = line.substring(startPosition, endPosition);
    let processedMiddle = "";
    let formatsToRestore = [];
    let i = 0;

    // Keep track of any format that was active before our section
    const beforeSection = line.substring(0, startPosition);
    const beforeMatches = beforeSection.match(/\x1b\[[0-9;]*[mGK]/g) || [];
    let lastFormatBefore = beforeMatches[beforeMatches.length - 1] || "";

    while (i < middleSection.length) {
      const remainingString = middleSection.slice(i);
      const match = remainingString.match(/^\x1b\[[0-9;]*[mGK]/);

      if (match) {
        formatsToRestore.push(match[0]);
        i += match[0].length;
      } else {
        // Apply background color for each visible character
        processedMiddle += `${bgColorCode}\x1b[30m${middleSection[i]}${RESET}`;
        i++;
      }
    }

    // If width is specified, pad the processed section
    if (width !== null) {
      const visibleChars = processedMiddle.replace(/\x1b\[[0-9;]*[mGK]/g, "").length;
      const paddingNeeded = width + padding * 2 - visibleChars;
      if (paddingNeeded > 0) {
        processedMiddle += `${bgColorCode}\x1b[30m${" ".repeat(paddingNeeded)}${RESET}`;
      }
    }

    // Restore all format codes after the modified text
    if (formatsToRestore.length > 0) {
      processedMiddle += formatsToRestore.join("");
    } else if (lastFormatBefore) {
      processedMiddle += lastFormatBefore;
    }

    return line.substring(0, startPosition) + processedMiddle + line.substring(endPosition);
  };

  // Helper function to create line breaks in the family/shell description
  const wrapText = (text, maxWidth) => {
    const words = text.split(" ");
    const lines = [];
    let currentLine = "";

    words.forEach((word) => {
      if (currentLine.length + word.length + 1 <= maxWidth) {
        currentLine += (currentLine.length > 0 ? " " : "") + word;
      } else {
        lines.push(currentLine.padEnd(maxWidth));
        currentLine = word;
      }
    });

    if (currentLine) {
      lines.push(currentLine.padEnd(maxWidth));
    }

    return lines;
  };

  const writeDashboard = (term, fitAddon) => {
    // Save cursor position and switch to alternate buffer
    term.write("\x1b7"); // Save cursor
    term.write("\x1b[?7l");

    const dashboard = buildDashboard();
    const dashboardWidth = dashboard[0].length;
    const dashboardHeight = dashboard.length;

    const verticalPadding = Math.max(0, Math.floor((term.rows - dashboardHeight) / 2));
    const horizontalPadding = Math.max(0, Math.floor((term.cols - dashboardWidth) / 2));

    let output = "";

    // Add vertical padding
    for (let i = 0; i < verticalPadding; i++) {
      output += "\r\n";
    }

    // Add dashboard with horizontal padding
    dashboard.forEach((line) => {
      output += " ".repeat(horizontalPadding) + line + "\r\n";
    });

    term.write(output);
    term.write("\x1b8"); // Restore cursor
  };

  const findNextElement = (currentElement, direction) => {
    const isValidElement = (num) => elementsMap[num] !== undefined;
    const checkCurrent = typeof currentElement === "string" ? currentElement.trim() : currentElement.toString();

    if (checkCurrent.endsWith("block")) {
      if (direction === "down") {
        return currentElement;
      }
      if (direction === "up") {
        // Map shells to specific families when moving up
        switch (currentElement) {
          case "s-block":
            return "Lanthanides";
          case "p-block":
            return "Actinides";
          case "d-block":
            return "Halogens";
          case "f-block":
            return "Noble Gases";
          default:
            return currentElement;
        }
      }

      const currentPos = shellLayoutMap[currentElement];
      let newPos;

      switch (direction) {
        case "right":
          newPos = { ...currentPos, col: currentPos.col + 1 };
          break;
        case "left":
          newPos = { ...currentPos, col: currentPos.col - 1 };
          break;
      }

      const nextShell = Object.entries(shellLayoutMap).find(([_, pos]) => pos.row === newPos.row && pos.col === newPos.col);

      return nextShell ? nextShell[0] : currentElement;
    }

    // Handle navigation from families to shells
    if (direction === "down" && typeof currentElement === "string") {
      switch (currentElement) {
        case "Lanthanides":
          return "s-block";
        case "Actinides":
          return "p-block";
        case "Halogens":
          return "d-block";
        case "Noble Gases":
          return "f-block";
      }
    }

    // Navigation from actinide row to families
    if (direction === "down" && currentElement >= 89 && currentElement <= 103) {
      if (currentElement <= 90) return "Alkali Metals";
      if (currentElement <= 94) return "Alkaline Earth Metals";
      if (currentElement <= 98) return "Transition Metals";
      return "Post-Transition Metals";
    }

    // From families to actinides
    if (direction === "up" && typeof currentElement === "string") {
      const currentPos = familyLayoutMap[currentElement];

      // First row families to actinides
      if (currentPos.row === 0) {
        switch (currentElement) {
          case "Alkali Metals":
            return 89;
          case "Alkaline Earth Metals":
            return 91;
          case "Transition Metals":
            return 95;
          case "Post-Transition Metals":
            return 99;
          default:
            return currentElement;
        }
      }

      // Second row families go to first row families
      if (currentPos.row === 1) {
        const aboveFamily = Object.entries(familyLayoutMap).find(([_, pos]) => pos.row === 0 && pos.col === currentPos.col);
        return aboveFamily ? aboveFamily[0] : currentElement;
      }

      // Third row families go to second row families
      if (currentPos.row === 2) {
        const aboveFamily = Object.entries(familyLayoutMap).find(([_, pos]) => pos.row === 1 && pos.col === currentPos.col);
        return aboveFamily ? aboveFamily[0] : currentElement;
      }

      return currentElement;
    }

    // Handle navigation within families
    if (typeof currentElement === "string") {
      const currentPos = familyLayoutMap[currentElement];
      let newPos;

      switch (direction) {
        case "right":
          newPos = { ...currentPos, col: currentPos.col + 1 };
          break;
        case "left":
          newPos = { ...currentPos, col: currentPos.col - 1 };
          break;
        case "up":
          newPos = { ...currentPos, row: currentPos.row - 1 };
          break;
        case "down":
          newPos = { ...currentPos, row: currentPos.row + 1 };
          break;
      }

      // Find family at new position
      const nextFamily = Object.entries(familyLayoutMap).find(([_, pos]) => pos.row === newPos.row && pos.col === newPos.col);

      return nextFamily ? nextFamily[0] : currentElement;
    }

    switch (direction) {
      case "right": {
        let next = currentElement + 1;
        while (next <= 118 && !isValidElement(next)) next++;
        return next <= 118 ? next : currentElement;
      }
      case "left": {
        let prev = currentElement - 1;
        while (prev >= 1 && !isValidElement(prev)) prev--;
        return prev >= 1 ? prev : currentElement;
      }

      case "up": {
        const pos = getElementPosition(currentElement);
        if (!pos) return currentElement;

        if ((pos.row == 7) & (pos.col == 2)) {
          return 39;
        }

        if (pos.row === 7) {
          // Lanthanide row
          return periodicTable[6][pos.col];
        }

        if (pos.row === 8) {
          const lanthanideElement = lanthanideRow[pos.col - 2];
          return lanthanideElement;
        }

        // If in main table, move up while staying in the same column
        if (pos.row > 0 && pos.row < periodicTable.length) {
          const upElement = periodicTable[pos.row - 1][pos.col];
          return isValidElement(upElement) ? upElement : currentElement;
        }

        // If none of the above conditions are met, return the current element
        return currentElement;
      }

      case "down": {
        const pos = getElementPosition(currentElement);
        if (!pos) return currentElement;

        if (pos.row === 6) {
          if (pos.col === 0 || pos.col === 1) {
            return lanthanideRow[0];
          }
          if (pos.col === 17) {
            return lanthanideRow[lanthanideRow.length - 1];
          } else {
            const lanIndex = pos.col - 2;

            if (lanIndex >= 0 && lanIndex < lanthanideRow.length) {
              return lanthanideRow[lanIndex];
            } else {
              return currentElement;
            }
          }
        }

        if (pos.row === 4 && pos.col === 2) {
          return lanthanideRow[0];
        }

        // If in lanthanide row
        if (pos.row === 7) {
          return actinideRow[pos.col - 2];
        }

        // For main table, move down while staying in the same column
        if (pos.row < periodicTable.length - 1) {
          const downElement = periodicTable[pos.row + 1][pos.col];
          return isValidElement(downElement) ? downElement : currentElement;
        }
        return currentElement;
      }

      default:
        return currentElement;
    }
  };

  useEffect(() => {
    const initializeTerminal = async () => {
      const [{ Terminal }, { FitAddon }] = await Promise.all([import("@xterm/xterm"), import("@xterm/addon-fit")]);

      const fontFace = new FontFace("Cascadia Mono NF", "url(/CascadiaMonoNF-Regular.woff2)");
      await fontFace.load();
      document.fonts.add(fontFace);

      const term = new Terminal({
        cursorBlink: true,
        fontFamily: "Cascadia Mono NF",
        fontSize: 14,
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
        cursorWidth: 0,
      });

      const fitAddon = new FitAddon();
      fitAddonRef.current = fitAddon;
      term.loadAddon(fitAddon);

      term.open(terminalRef.current);
      fitAddon.fit();
      xtermRef.current = term;

      term.focus();
      term.write("\x1b[?25l");

      term.onKey(({ key, domEvent }) => {
        let nextElement = currentlyHighlighted.current;
        let shouldRedraw = false;

        if (key.match(/^[a-zA-Z0-9-]$/)) {
          if (!isSearching.current) {
            prevHighlighted.current = currentlyHighlighted.current;
          }
          isSearching.current = true;
          if (searchQuery.current.length <= 37) {
            updateSearch(key.toLowerCase());
          }
          shouldRedraw = true;
          nextElement = -1;
        } else if (isSearching.current) {
          switch (domEvent.key) {
            case "Backspace":
              updateSearch("Backspace");
              shouldRedraw = true;
              if (searchQuery.current.length === 0) {
                isSearching.current = false;
                searchQuery.current = "";
                searchResults.current = [];
                shouldRedraw = true;
                nextElement = prevHighlighted.current;
                break;
              }
              break;
            case "Enter":
              if (searchResults.current.length > 0) {
                nextElement = searchResults.current[selectedSearchResult.current].value;
                isSearching.current = false;
                searchQuery.current = "";
                searchResults.current = [];
              }
              shouldRedraw = true;
              break;
            case "ArrowUp":
              selectedSearchResult.current = Math.max(0, selectedSearchResult.current - 1);
              shouldRedraw = true;
              break;
            case "ArrowDown":
              selectedSearchResult.current = Math.min(22, Math.min(searchResults.current.length - 1, selectedSearchResult.current + 1));
              shouldRedraw = true;
              break;
            case "ArrowLeft":
              isSearching.current = false;
              searchQuery.current = "";
              searchResults.current = [];
              shouldRedraw = true;
              nextElement = prevHighlighted.current;
              break;
            case "Escape":
              term.write("\x1b[?1049l");
              onClose();
              return;
            case "/":
              switchDisplayMode(true);
              shouldRedraw = true;
              break;
            case "\\":
              switchDisplayMode(false);
              shouldRedraw = true;
              break;
          }
        } else {
          switch (domEvent.key) {
            case "/":
              switchDisplayMode(true);
              shouldRedraw = true;
              break;
            case "\\":
              switchDisplayMode(false);
              shouldRedraw = true;
              break;

            case "ArrowRight":
              nextElement = findNextElement(currentlyHighlighted.current, "right");
              shouldRedraw = nextElement !== currentlyHighlighted.current;
              break;
            case "ArrowLeft":
              nextElement = findNextElement(currentlyHighlighted.current, "left");
              shouldRedraw = nextElement !== currentlyHighlighted.current;
              break;
            case "ArrowUp":
              nextElement = findNextElement(currentlyHighlighted.current, "up");
              shouldRedraw = nextElement !== currentlyHighlighted.current;
              break;
            case "ArrowDown":
              nextElement = findNextElement(currentlyHighlighted.current, "down");
              shouldRedraw = nextElement !== currentlyHighlighted.current;
              break;
            case "Escape":
              term.write("\x1b[?1049l");
              onClose();
              return;
          }
        }

        if (shouldRedraw) {
          if (nextElement !== currentlyHighlighted.current) {
            currentlyHighlighted.current = nextElement;
          }
          requestAnimationFrame(() => {
            // term.write("\x1b[2J\x1b[3J"); // Clear screen and scrollback
            term.write("\x1b[H"); // Move cursor to home
            term.clear(); // Additional clear
            fitAddon.fit(); // Adjust terminal size
            term.scrollToTop();
            writeDashboard(term, fitAddon);
          });
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

      // Initial write of dashboard
      writeDashboard(term, fitAddon);

      // Handle window resize and zoom
      const handleResize = (event) => {
        setTimeout(() => {
          requestAnimationFrame(() => {
            term.write("\x1b[2J\x1b[3J");
            term.write("\x1b[H");
            term.clear();
            fitAddon.fit();
            term.scrollToTop();
            writeDashboard(term, fitAddon);
          });
        }, 100);
      };

      window.addEventListener("resize", handleResize);

      // Focus the container when mounted
      if (containerRef.current) {
        containerRef.current.focus();
      }

      return () => {
        term.dispose();
        window.removeEventListener("resize", handleResize);
      };
    };

    initializeTerminal();
  }, []);

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
      <div ref={terminalRef} className="w-full h-full" />
    </div>
  );
};

function findActualIndex(str, visibleIndex) {
  let currentVisibleIndex = 0;
  let actualIndex = 0;

  while (currentVisibleIndex < visibleIndex && actualIndex < str.length) {
    const remainingString = str.slice(actualIndex);
    const match = remainingString.match(/^\x1b\[[0-9;]*[mGK]/);

    if (match) {
      actualIndex += match[0].length;
    } else {
      currentVisibleIndex++;
      actualIndex++;
    }
  }

  return actualIndex;
}

// Replace part of a string at a specific position
function replaceAt(str, index, replacement) {
  const ansiRegex = /\x1b\[[0-9;]*[mGK]/g;
  const actualIndex = findActualIndex(str, index);

  // Remove any existing ANSI codes from the replacement section
  const beforeStr = str.slice(0, actualIndex);
  let afterStr = str.slice(actualIndex);
  const visibleLength = replacement.replace(ansiRegex, "").length;

  // Skip over the appropriate number of visible characters
  let skipCount = visibleLength;
  let skipIndex = 0;
  while (skipCount > 0 && skipIndex < afterStr.length) {
    if (!afterStr.slice(skipIndex).match(/^\x1b\[[0-9;]*[mGK]/)) {
      skipCount--;
      skipIndex++;
    } else {
      const match = afterStr.slice(skipIndex).match(/^\x1b\[[0-9;]*[mGK]/)[0];
      skipIndex += match.length;
    }
  }
  afterStr = afterStr.slice(skipIndex);

  return beforeStr + replacement + afterStr;
}

export default PeriodicTableTerminal;
