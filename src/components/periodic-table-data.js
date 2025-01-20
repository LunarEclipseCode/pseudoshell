import PeriodicTableTerminal from "./periodic-table-app";

const PERIODIC_TABLE_SMALL =
  "\r\n" +
  "     1                                                                  18  \r\n" +
  "   ╔═══╗        THE PERIODIC TABLE OF ELEMENTS                         ╔═══╗\r\n" +
  " 1 ║ 1 ║                                                               ║ 2 ║\r\n" +
  "   ║ H ║ 2                                          13  14  15  16  17 ║ He║\r\n" +
  "   ╠═══╬═══╗                                       ╔═══╦═══╦═══╦═══╦═══╬═══╣\r\n" +
  " 2 ║ 3 ║ 4 ║                                       ║ 5 ║ 6 ║ 7 ║ 8 ║ 9 ║10 ║\r\n" +
  "   ║ Li║ Be║                                       ║ B ║ C ║ N ║ O ║ F ║ Ne║\r\n" +
  "   ╠═══╬═══╣                                       ╠═══╬═══╬═══╬═══╬═══╬═══╣\r\n" +
  " 3 ║11 ║12 ║                                       ║13 ║14 ║15 ║16 ║17 ║18 ║\r\n" +
  "   ║ Na║ Mg║ 3   4   5   6   7   8   9  10  11  12 ║ Al║ Si║ P ║ S ║ Cl║ Ar║\r\n" +
  "   ╠═══╬═══╬═══╦═══╦═══╦═══╦═══╦═══╦═══╦═══╦═══╦═══╬═══╬═══╬═══╬═══╬═══╬═══╣\r\n" +
  " 4 ║19 ║20 ║21 ║22 ║23 ║24 ║25 ║26 ║27 ║28 ║29 ║30 ║31 ║32 ║33 ║34 ║35 ║36 ║\r\n" +
  "   ║ K ║ Ca║ Sc║ Ti║ V ║ Cr║ Mn║ Fe║ Co║ Ni║ Cu║ Zn║ Ga║ Ge║ As║ Se║ Br║ Kr║\r\n" +
  "   ╠═══╬═══╬═══╬═══╬═══╬═══╬═══╬═══╬═══╬═══╬═══╬═══╬═══╬═══╬═══╬═══╬═══╬═══╣\r\n" +
  " 5 ║37 ║38 ║39 ║40 ║41 ║42 ║43 ║44 ║45 ║46 ║47 ║48 ║49 ║50 ║51 ║52 ║53 ║54 ║\r\n" +
  "   ║ Rb║ Sr║ Y ║ Zr║ Nb║ Mo║ Tc║ Ru║ Rh║ Pd║ Ag║ Cd║ In║ Sn║ Sb║ Te║ I ║ Xe║\r\n" +
  "   ╠═══╬═══╬═══╬═══╬═══╬═══╬═══╬═══╬═══╬═══╬═══╬═══╬═══╬═══╬═══╬═══╬═══╬═══╣\r\n" +
  " 6 ║55 ║56 ╟─┬─╢72 ║73 ║74 ║75 ║76 ║77 ║78 ║79 ║80 ║81 ║82 ║83 ║84 ║85 ║86 ║\r\n" +
  "   ║ Cs║ Ba║ │ ║ Hf║ Ta║ W ║ Re║ Os║ Ir║ Pt║ Au║ Hg║ Tl║ Pb║ Bi║ Po║ At║ Rn║\r\n" +
  "   ╠═══╬═══╣ │ ╠═══╬═══╬═══╬═══╬═══╬═══╬═══╬═══╬═══╬═══╬═══╬═══╬═══╬═══╬═══╣\r\n" +
  " 7 ║87 ║88 ╠═╪═╣104║105║106║107║108║109║110║111║112║113║114║115║116║117║118║\r\n" +
  "   ║ Fr║ Ra║ │ ║ Rf║ Db║ Sg║ Bh║ Hs║ Mt║ Ds║ Rg║ Cn║ Nh║ Fl║ Mc║ Lv║ Ts║ Og║\r\n" +
  "   ╚═══╩═══╝ │ ╚═══╩═══╩═══╩═══╩═══╩═══╩═══╩═══╩═══╩═══╩═══╩═══╩═══╩═══╩═══╝\r\n" +
  "         ┌───┘                                                              \r\n" +
  "         │ ╔═══╦═══╦═══╦═══╦═══╦═══╦═══╦═══╦═══╦═══╦═══╦═══╦═══╦═══╦═══╗    \r\n" +
  "         ├─╢57 ║58 ║59 ║60 ║61 ║62 ║63 ║64 ║65 ║66 ║67 ║68 ║69 ║70 ║71 ║    \r\n" +
  "         │ ║ La║ Ce║ Pr║ Nd║ Pm║ Sm║ Eu║ Gd║ Tb║ Dy║ Ho║ Er║ Tm║ Yb║ Lu║    \r\n" +
  "         │ ╠═══╬═══╬═══╬═══╬═══╬═══╬═══╬═══╬═══╬═══╬═══╬═══╬═══╬═══╬═══╣    \r\n" +
  "         ╘═╣89 ║90 ║91 ║92 ║93 ║94 ║95 ║96 ║97 ║98 ║99 ║100║101║102║103║    \r\n" +
  "           ║ Ac║ Th║ Pa║ U ║ Np║ Pu║ Am║ Cm║ Bk║ Cf║ Es║ Fm║ Md║ No║ Lr║    \r\n" +
  "           ╚═══╩═══╩═══╩═══╩═══╩═══╩═══╩═══╩═══╩═══╩═══╩═══╩═══╩═══╩═══╝    \r\n";

const PERIODIC_TABLE =
  "\r\n" +
  "      1                                                                                                    18    \r\n" +
  "   ╔═════╗                    THE PERIODIC TABLE OF ELEMENTS                                             ╔═════╗ \r\n" +
  " 1 ║  1  ║                                                                                               ║  2  ║ \r\n" +
  "   ║  H  ║  2                                                                13    14    15    16    17  ║  He ║ \r\n" +
  "   ╠═════╬═════╗                                                           ╔═════╦═════╦═════╦═════╦═════╬═════╣ \r\n" +
  " 2 ║  3  ║  4  ║                                                           ║  5  ║  6  ║  7  ║  8  ║  9  ║ 10  ║ \r\n" +
  "   ║  Li ║  Be ║                                                           ║  B  ║  C  ║  N  ║  O  ║  F  ║  Ne ║ \r\n" +
  "   ╠═════╬═════╣                                                           ╠═════╬═════╬═════╬═════╬═════╬═════╣ \r\n" +
  " 3 ║ 11  ║ 12  ║                                                           ║ 13  ║ 14  ║ 15  ║ 16  ║ 17  ║ 18  ║ \r\n" +
  "   ║  Na ║  Mg ║  3     4     5     6     7     8     9    10    11    12  ║  Al ║  Si ║  P  ║  S  ║  Cl ║  Ar ║ \r\n" +
  "   ╠═════╬═════╬═════╦═════╦═════╦═════╦═════╦═════╦═════╦═════╦═════╦═════╬═════╬═════╬═════╬═════╬═════╬═════╣ \r\n" +
  " 4 ║ 19  ║ 20  ║ 21  ║ 22  ║ 23  ║ 24  ║ 25  ║ 26  ║ 27  ║ 28  ║ 29  ║ 30  ║ 31  ║ 32  ║ 33  ║ 34  ║ 35  ║ 36  ║ \r\n" +
  "   ║  K  ║  Ca ║  Sc ║  Ti ║  V  ║  Cr ║  Mn ║  Fe ║  Co ║  Ni ║  Cu ║  Zn ║  Ga ║  Ge ║  As ║  Se ║  Br ║  Kr ║ \r\n" +
  "   ╠═════╬═════╬═════╬═════╬═════╬═════╬═════╬═════╬═════╬═════╬═════╬═════╬═════╬═════╬═════╬═════╬═════╬═════╣ \r\n" +
  " 5 ║ 37  ║ 38  ║ 39  ║ 40  ║ 41  ║ 42  ║ 43  ║ 44  ║ 45  ║ 46  ║ 47  ║ 48  ║ 49  ║ 50  ║ 51  ║ 52  ║ 53  ║ 54  ║ \r\n" +
  "   ║  Rb ║  Sr ║  Y  ║  Zr ║  Nb ║  Mo ║  Tc ║  Ru ║  Rh ║  Pd ║  Ag ║  Cd ║  In ║  Sn ║  Sb ║  Te ║  I  ║  Xe ║ \r\n" +
  "   ╠═════╬═════╬═════╬═════╬═════╬═════╬═════╬═════╬═════╬═════╬═════╬═════╬═════╬═════╬═════╬═════╬═════╬═════╣ \r\n" +
  " 6 ║ 55  ║ 56  ╟──┬──╢ 72  ║ 73  ║ 74  ║ 75  ║ 76  ║ 77  ║ 78  ║ 79  ║ 80  ║ 81  ║ 82  ║ 83  ║ 84  ║ 85  ║ 86  ║ \r\n" +
  "   ║  Cs ║  Ba ║  │  ║  Hf ║  Ta ║  W  ║  Re ║  Os ║  Ir ║  Pt ║  Au ║  Hg ║  Tl ║  Pb ║  Bi ║  Po ║  At ║  Rn ║ \r\n" +
  "   ╠═════╬═════╣  │  ╠═════╬═════╬═════╬═════╬═════╬═════╬═════╬═════╬═════╬═════╬═════╬═════╬═════╬═════╬═════╣ \r\n" +
  " 7 ║ 87  ║ 88  ╠══╪══╣ 104 ║ 105 ║ 106 ║ 107 ║ 108 ║ 109 ║ 110 ║ 111 ║ 112 ║ 113 ║ 114 ║ 115 ║ 116 ║ 117 ║ 118 ║ \r\n" +
  "   ║  Fr ║  Ra ║  │  ║  Rf ║  Db ║  Sg ║  Bh ║  Hs ║  Mt ║  Ds ║  Rg ║  Cn ║  Nh ║  Fl ║  Mc ║  Lv ║  Ts ║  Og ║ \r\n" +
  "   ╚═════╩═════╝  │  ╚═════╩═════╩═════╩═════╩═════╩═════╩═════╩═════╩═════╩═════╩═════╩═════╩═════╩═════╩═════╝ \r\n" +
  "             ┌────┘                                                                                              \r\n" +
  "             │ ╔═════╦═════╦═════╦═════╦═════╦═════╦═════╦═════╦═════╦═════╦═════╦═════╦═════╦═════╦═════╗       \r\n" +
  "             ├─╢ 57  ║ 58  ║ 59  ║ 60  ║ 61  ║ 62  ║ 63  ║ 64  ║ 65  ║ 66  ║ 67  ║ 68  ║ 69  ║ 70  ║ 71  ║       \r\n" +
  "             │ ║  La ║  Ce ║  Pr ║  Nd ║  Pm ║  Sm ║  Eu ║  Gd ║  Tb ║  Dy ║  Ho ║  Er ║  Tm ║  Yb ║  Lu ║       \r\n" +
  "             │ ╠═════╬═════╬═════╬═════╬═════╬═════╬═════╬═════╬═════╬═════╬═════╬═════╬═════╬═════╬═════╣       \r\n" +
  "             ╘═╣ 89  ║ 90  ║ 91  ║ 92  ║ 93  ║ 94  ║ 95  ║ 96  ║ 97  ║ 98  ║ 99  ║ 100 ║ 101 ║ 102 ║ 103 ║       \r\n" +
  "               ║  Ac ║  Th ║  Pa ║  U  ║  Np ║  Pu ║  Am ║  Cm ║  Bk ║  Cf ║  Es ║  Fm ║  Md ║  No ║  Lr ║       \r\n" +
  "               ╚═════╩═════╩═════╩═════╩═════╩═════╩═════╩═════╩═════╩═════╩═════╩═════╩═════╩═════╩═════╝       \r\n";

const highlightElement = (table, element) => {
  if (!element) return table;

  // Create a copy of the table
  let modifiedTable = table;

  // Find and highlight both the atomic number and symbol rows
  const symbol = element.symbol;
  const number = element.atomicNumber;

  // Create regex patterns that match the number and symbol
  const numberRegex = new RegExp(`║\\s*${number}\\s*║`);
  const symbolRegex = new RegExp(`║\\s*${symbol}\\s*║`);

  // Replace both the number and symbol with highlighted versions
  modifiedTable = modifiedTable.replace(numberRegex, (match) => `║\x1b[7m${match.slice(1, -1)}\x1b[0m║`).replace(symbolRegex, (match) => `║\x1b[7m${match.slice(1, -1)}\x1b[0m║`);

  return modifiedTable;
};

const handlePeriodicTableData = (input, terminal, elements) => {
  const parseArguments = (input) => {
    const args = [];
    let current = "";
    let inQuotes = false;

    for (let i = 0; i < input.length; i++) {
      const char = input[i];

      if (char === '"' && input[i - 1] !== "\\") {
        inQuotes = !inQuotes;
      } else if (char === " " && !inQuotes) {
        if (current) {
          args.push(current);
          current = "";
        }
      } else {
        current += char;
      }
    }

    if (current) {
      args.push(current);
    }

    return args;
  };

  const parsePeriodicTableArgs = (args) => {
    const result = {
      mode: args.length === 1 ? "app" : null,
      verbose: false,
      small: false,
      atomicNumber: null,
      symbol: null,
      name: null,
    };

    for (let i = 0; i < args.length; i++) {
      const arg = args[i];
      if (arg.startsWith("--mode=")) {
        result.mode = arg.split("=")[1];
      } else if (arg === "--verbose") {
        result.verbose = true;
      } else if (arg === "--small") {
        result.small = true;
      } else if (arg.startsWith("--atomic-number=")) {
        result.atomicNumber = arg.split("=")[1];
      } else if (arg.startsWith("--symbol=")) {
        result.symbol = arg.split("=")[1];
      } else if (arg.startsWith("--name=")) {
        result.name = arg.split("=")[1];
      }
    }

    return result;
  };

  const formatValue = (value, columnName) => {
    if (value === undefined || value === null || value === "") {
      return "-";
    }

    const numericColumns = ["atomicMass", "atomicRadius", "ionizationEnergy", "electronAffinity", "meltingPoint", "boilingPoint", "density", "specificHeat"];

    if (numericColumns.includes(columnName)) {
      // Extract just the numeric value before the space or unit
      const numericValue = String(value).split(" ")[0];
      return numericValue || "-";
    }

    return String(value);
  };

  const createTable = (data, columns, termWidth) => {
    let table = [""];

    if (columns.length <= 3) {
      // Basic table format
      table.push(" Atomic │        │", " Number │ Symbol │     Name", "────────┼────────┼" + "─".repeat(12));

      data.forEach((element) => {
        table.push(` ${element.atomicNumber.toString().padEnd(6)} │ ${element.symbol.padEnd(6)} │ ${element.name}`);
      });
    } else {
      // Verbose table format with 3-row headers
      const columnHeaders = {
        atomicNumber: ["", "Atomic", "Number"],
        symbol: ["", "", "Symbol"],
        name: ["", "", "Name"],
        family: ["", "", "Family"],
        standardState: ["", "", "State"],
        atomicMass: ["", "Atomic Mass", "(u)"],
        numberOfProtons: ["", "Pro-", "tons"],
        numberOfNeutrons: ["", "Neut-", "rons"],
        numberOfElectrons: ["", "Elect-", "rons"],
        numberOfValence: ["Valence", "Elec-", "trons"],
        valency: ["", "", "Valency"],
        atomicRadius: ["Atomic", "Radius", "(pm)"],
        density: ["", "Density", "(g/cm³)"],
        electronegativity: ["", "Electro-", "negativity"],
        ionizationEnergy: ["Ionization", "Energy", "(eV)"],
        electronAffinity: ["Electron", "Affinity", "(eV)"],
        meltingPoint: ["Melting", "Point", "(K)"],
        boilingPoint: ["Boiling", "Point", "(K)"],
        specificHeat: ["Specific", "Heat", "(J/g K)"],
        radioactive: ["Radio-", "active", ""],
        occurrence: ["", "", "Occurrence"],
        yearDiscovered: ["", "", "Year"],
        period: ["", "", "Period"],
        group: ["", "", "Group"],
        shell: ["", "", "Shell"],
        electronConfiguration: ["", "", "Electron Configuration"],
        oxidationStates: ["", "", "Oxidation States"],
      };

      let fittingColumns = [];
      let omittedColumns = [];
      let currentWidth = 0;

      // Determine fitting columns
      columns.forEach((col) => {
        const colWidth = Math.max(...data.map((e) => String(formatValue(e[col], col)).length), columnHeaders[col][0].length, columnHeaders[col][1].length, columnHeaders[col][2].length) + 2;

        if (currentWidth + colWidth + 1 < termWidth) {
          currentWidth += colWidth + 1;
          fittingColumns.push({ name: col, width: colWidth });
        } else {
          omittedColumns.push(col);
        }
      });

      // Create headers with centering for three rows
      let headerLine1 = "";
      let headerLine2 = "";
      let headerLine3 = "";
      let separator = "";

      fittingColumns.forEach(({ name, width }) => {
        const headers = columnHeaders[name];

        // Calculate padding for centering each row
        const padding1 = Math.max(0, width - headers[0].length);
        const padding2 = Math.max(0, width - headers[1].length);
        const padding3 = Math.max(0, width - headers[2].length);

        const leftPad1 = Math.floor(padding1 / 2);
        const rightPad1 = padding1 - leftPad1;
        const leftPad2 = Math.floor(padding2 / 2);
        const rightPad2 = padding2 - leftPad2;
        const leftPad3 = Math.floor(padding3 / 2);
        const rightPad3 = padding3 - leftPad3;

        // Add centered headers
        headerLine1 += " ".repeat(leftPad1) + headers[0] + " ".repeat(rightPad1) + "│";
        headerLine2 += " ".repeat(leftPad2) + headers[1] + " ".repeat(rightPad2) + "│";
        headerLine3 += " ".repeat(leftPad3) + headers[2] + " ".repeat(rightPad3) + "│";
        separator += "─".repeat(width) + "┼";
      });

      // Remove trailing separators
      headerLine1 = headerLine1.slice(0, -1);
      headerLine2 = headerLine2.slice(0, -1);
      headerLine3 = headerLine3.slice(0, -1);
      separator = separator.slice(0, -1);

      table.push(headerLine1);
      table.push(headerLine2);
      table.push(headerLine3);
      table.push(separator);

      // Add data rows
      data.forEach((element) => {
        let row = "";
        fittingColumns.forEach(({ name, width }) => {
          const value = formatValue(element[name], name);
          row += (" " + value).padEnd(width) + "│";
        });
        table.push(row.slice(0, -1)); // Remove trailing separator
      });

      if (omittedColumns.length > 0) {
        table.push("", `Note: ${omittedColumns.length} columns omitted due to screen size constraints.`, "Specify an element to see full data.");
      }
    }

    table.push(""); // End with empty line
    return table.join("\r\n");
  };

  const displayElementDetails = (element) => {
    if (!element) return "Element not found.";

    const details = [
      "",
      `Atomic Number: ${element.atomicNumber}`,
      `Atomic Mass: ${element.atomicMass}`,
      `Electron Configuration: ${element.electronConfiguration}`,
      `Electronegativity: ${element.electronegativity}`,
      `Atomic Radius: ${element.atomicRadius}`,
      `Ionization Energy: ${element.ionizationEnergy}`,
      `Electron Affinity: ${element.electronAffinity}`,
      `Oxidation States: ${element.oxidationStates}`,
      `Standard State: ${element.standardState}`,
      `Melting Point: ${element.meltingPoint}`,
      `Boiling Point: ${element.boilingPoint}`,
      `Density: ${element.density}`,
      `Family: ${element.family}`,
      `Year Discovered: ${element.yearDiscovered}`,
      `Number of Neutrons: ${element.numberOfNeutrons}`,
      `Number of Protons: ${element.numberOfProtons}`,
      `Number of Electrons: ${element.numberOfElectrons}`,
      `Number of Valence: ${element.numberOfValence}`,
      `Valency: ${element.valency}`,
      `Group: ${element.group}`,
      `Period: ${element.period}`,
      `Shell: ${element.shell}`,
      `Specific Heat: ${element.specificHeat}`,
      `Radioactive: ${element.radioactive}`,
      `Occurrence: ${element.occurrence}`,
      "",
    ];

    return details.join("\r\n");
  };

  const initialHighlight = (atomicNumber, symbol, name, elements) => {
    if (atomicNumber) {
      return parseInt(atomicNumber);
    }
    if (symbol) {
      const element = elements.find((e) => e.symbol.toLowerCase() === symbol.toLowerCase());
      return element?.atomicNumber || 1;
    }
    if (name) {
      const element = elements.find((e) => e.name.toLowerCase() === name.toLowerCase());
      return element?.atomicNumber || 1;
    }
    return 1;
  };

  const args = parseArguments(input);
  const parsedArgs = parsePeriodicTableArgs(args);
  const { mode, verbose, small, atomicNumber, symbol, name } = parsedArgs;

  if (mode === "app") {
    const initial = initialHighlight(atomicNumber, symbol, name, elements);
    terminal.showOverlay(<PeriodicTableTerminal onClose={() => terminal.hideOverlay()} initial={initial} />);
    return false;
  }

  if (mode === "chart") {
    let selectedElement = null;
    let table = small ? PERIODIC_TABLE_SMALL : PERIODIC_TABLE;

    if (atomicNumber) {
      selectedElement = elements.find((e) => e.atomicNumber === parseInt(atomicNumber));
    } else if (symbol) {
      selectedElement = elements.find((e) => e.symbol.toLowerCase() === symbol.toLowerCase());
    } else if (name) {
      selectedElement = elements.find((e) => e.name.toLowerCase() === name.toLowerCase());
    }

    if (selectedElement) {
      return highlightElement(table, selectedElement);
    }

    return table;
  }

  if (mode === "data") {
    if (atomicNumber) {
      const element = elements.find((e) => e.atomicNumber === parseInt(atomicNumber));
      return displayElementDetails(element);
    }
    if (symbol) {
      const element = elements.find((e) => e.symbol.toLowerCase() === symbol.toLowerCase());
      return displayElementDetails(element);
    }
    if (name) {
      const element = elements.find((e) => e.name.toLowerCase() === name.toLowerCase());
      return displayElementDetails(element);
    }

    const columns = verbose
      ? [
          "atomicNumber",
          "symbol",
          "name",
          "family",
          "standardState",
          "atomicMass",
          "numberOfProtons",
          "numberOfNeutrons",
          "numberOfElectrons",
          "numberOfValence",
          "valency",
          "atomicRadius",
          "density",
          "electronegativity",
          "ionizationEnergy",
          "electronAffinity",
          "meltingPoint",
          "boilingPoint",
          "specificHeat",
          "radioactive",
          "occurrence",
          "yearDiscovered",
          "period",
          "group",
          "shell",
          "electronConfiguration",
          "oxidationStates",
        ]
      : ["atomicNumber", "symbol", "name"];

    return createTable(elements, columns, terminal.term.cols);
  }

  return `Command not found: ${input}`;
};

export { handlePeriodicTableData };
