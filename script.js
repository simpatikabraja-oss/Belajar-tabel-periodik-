const rawElementsArray = [
    [1, "H", "Hidrogen", 1.008, "nonlogam", "G", 37, 1312, 2.20, [1], ["hydrogen"]],
    [2, "He", "Helium", 4.003, "gas-mulia", "G", 32, 2372, 0, [2], ["helium"]],
    [3, "Li", "Litium", 6.94, "alkali", "S", 134, 520, 0.98, [2, 1], ["lithium"]],
    [4, "Be", "Berilium", 9.012, "alkali-tanah", "S", 90, 900, 1.57, [2, 2], ["beryllium"]],
    [5, "B", "Boron", 10.81, "metaloid", "S", 82, 801, 2.04, [2, 3], ["boron"]],
    [6, "C", "Karbon", 12.011, "nonlogam", "S", 77, 1086, 2.55, [2, 4], ["carbon"]],
    [7, "N", "Nitrogen", 14.007, "nonlogam", "G", 75, 1402, 3.04, [2, 5], ["nitrogen"]],
    [8, "O", "Oksigen", 15.999, "nonlogam", "G", 73, 1314, 3.44, [2, 6], ["oxygen"]],
    [9, "F", "Fluor", 18.998, "halogen", "G", 71, 1681, 3.98, [2, 7], ["fluorine"]],
    [10, "Ne", "Neon", 20.180, "gas-mulia", "G", 69, 2081, 0, [2, 8], ["neon"]],
    [11, "Na", "Natrium", 22.990, "alkali", "S", 154, 496, 0.93, [2, 8, 1], ["sodium"]],
    [12, "Mg", "Magnesium", 24.305, "alkali-tanah", "S", 130, 738, 1.31, [2, 8, 2], ["magnesium"]],
    [13, "Al", "Aluminium", 26.982, "pasca-transisi", "S", 118, 578, 1.61, [2, 8, 3], ["aluminum"]],
    [14, "Si", "Silikon", 28.085, "metaloid", "S", 111, 786, 1.90, [2, 8, 4], ["silicon"]],
    [15, "P", "Fosfor", 30.974, "nonlogam", "S", 106, 1012, 2.19, [2, 8, 5], ["phosphorus"]],
    [16, "S", "Belerang", 32.06, "nonlogam", "S", 102, 1000, 2.58, [2, 8, 6], ["sulfur", "belerang"]],
    [17, "Cl", "Klorin", 35.45, "halogen", "G", 99, 1251, 3.16, [2, 8, 7], ["chlorine"]],
    [18, "Ar", "Argon", 39.948, "gas-mulia", "G", 97, 1521, 0, [2, 8, 8], ["argon"]],
    [19, "K", "Kalium", 39.098, "alkali", "S", 196, 419, 0.82, [2, 8, 8, 1], ["potassium"]],
    [20, "Ca", "Kalsium", 40.078, "alkali-tanah", "S", 174, 590, 1.00, [2, 8, 8, 2], ["calcium"]],
    [21, "Sc", "Skandium", 44.956, "transisi", "S", 144, 633, 1.36, [2, 8, 9, 2], ["scandium"]],
    [22, "Ti", "Titanium", 47.867, "transisi", "S", 136, 659, 1.54, [2, 8, 10, 2], ["titanium"]],
    [23, "V", "Vanadium", 50.942, "transisi", "S", 125, 651, 1.63, [2, 8, 11, 2], ["vanadium"]],
    [24, "Cr", "Kromium", 51.996, "transisi", "S", 127, 653, 1.66, [2, 8, 13, 1], ["chromium"]],
    [25, "Mn", "Mangan", 54.938, "transisi", "S", 139, 717, 1.55, [2, 8, 13, 2], ["manganese"]],
    [26, "Fe", "Besi", 55.845, "transisi", "S", 125, 762, 1.83, [2, 8, 14, 2], ["iron", "besi"]],
    [27, "Co", "Kobalt", 58.933, "transisi", "S", 126, 760, 1.88, [2, 8, 15, 2], ["cobalt"]],
    [28, "Ni", "Nikel", 58.693, "transisi", "S", 121, 737, 1.91, [2, 8, 16, 2], ["nickel"]],
    [29, "Cu", "Tembaga", 63.546, "transisi", "S", 138, 745, 1.90, [2, 8, 18, 1], ["copper", "tembaga"]],
    [30, "Zn", "Seng", 65.38, "transisi", "S", 131, 906, 1.65, [2, 8, 18, 2], ["zinc", "seng"]],
    [31, "Ga", "Galium", 69.723, "pasca-transisi", "S", 126, 579, 1.81, [2, 8, 18, 3], ["gallium"]],
    [32, "Ge", "Germanium", 72.630, "metaloid", "S", 122, 762, 2.01, [2, 8, 18, 4], ["germanium"]],
    [33, "As", "Arsenik", 74.922, "metaloid", "S", 119, 947, 2.18, [2, 8, 18, 5], ["arsenic"]],
    [34, "Se", "Selenium", 78.971, "nonlogam", "S", 116, 941, 2.55, [2, 8, 18, 6], ["selenium"]],
    [35, "Br", "Bromin", 79.904, "halogen", "L", 114, 1140, 2.96, [2, 8, 18, 7], ["bromine"]],
    [36, "Kr", "Kripton", 83.798, "gas-mulia", "G", 110, 1351, 3.00, [2, 8, 18, 8], ["krypton"]],
    [37, "Rb", "Rubidium", 85.468, "alkali", "S", 211, 403, 0.82, [2, 8, 18, 8, 1], ["rubidium"]],
    [38, "Sr", "Stronsium", 87.62, "alkali-tanah", "S", 192, 549, 0.95, [2, 8, 18, 8, 2], ["strontium"]],
    [39, "Y", "Ytrium", 88.906, "transisi", "S", 162, 600, 1.22, [2, 8, 18, 9, 2], ["yttrium"]],
    [40, "Zr", "Zirkonium", 91.224, "transisi", "S", 148, 640, 1.33, [2, 8, 18, 10, 2], ["zirconium"]],
    [41, "Nb", "Niobium", 92.906, "transisi", "S", 137, 652, 1.60, [2, 8, 18, 12, 1], ["niobium"]],
    [42, "Mo", "Molibdenum", 95.95, "transisi", "S", 145, 684, 2.16, [2, 8, 18, 13, 1], ["molybdenum"]],
    [43, "Tc", "Teknesium", 98, "transisi", "S", 156, 702, 1.90, [2, 8, 18, 13, 2], ["technetium"]],
    [44, "Ru", "Rutenium", 101.07, "transisi", "S", 126, 710, 2.20, [2, 8, 18, 15, 1], ["ruthenium"]],
    [45, "Rh", "Rhodium", 102.91, "transisi", "S", 135, 720, 2.28, [2, 8, 18, 16, 1], ["rhodium"]],
    [46, "Pd", "Paladium", 106.42, "transisi", "S", 131, 804, 2.20, [2, 8, 18, 18], ["palladium"]],
    [47, "Ag", "Perak", 107.87, "transisi", "S", 153, 731, 1.93, [2, 8, 18, 18, 1], ["silver", "perak"]],
    [48, "Cd", "Kadmium", 112.41, "transisi", "S", 148, 868, 1.69, [2, 8, 18, 18, 2], ["cadmium"]],
    [49, "In", "Indium", 114.82, "pasca-transisi", "S", 144, 558, 1.78, [2, 8, 18, 18, 3], ["indium"]],
    [50, "Sn", "Timah", 118.71, "pasca-transisi", "S", 141, 709, 1.96, [2, 8, 18, 18, 4], ["tin", "timah"]],
    [51, "Sb", "Antimon", 121.76, "metaloid", "S", 138, 834, 2.05, [2, 8, 18, 18, 5], ["antimony"]],
    [52, "Te", "Telurium", 127.60, "metaloid", "S", 135, 869, 2.10, [2, 8, 18, 18, 6], ["tellurium"]],
    [53, "I", "Iodin", 126.90, "halogen", "S", 133, 1008, 2.66, [2, 8, 18, 18, 7], ["iodine"]],
    [54, "Xe", "Xenon", 131.29, "gas-mulia", "G", 130, 1170, 2.60, [2, 8, 18, 18, 8], ["xenon"]],
    [55, "Cs", "Sesium", 132.91, "alkali", "S", 225, 376, 0.79, [2, 8, 18, 18, 8, 1], ["cesium"]],
    [56, "Ba", "Barium", 137.33, "alkali-tanah", "S", 198, 503, 0.89, [2, 8, 18, 18, 8, 2], ["barium"]],
    [57, "La", "Lantanum", 138.91, "lantanida", "S", 169, 538, 1.10, [2, 8, 18, 18, 9, 2], ["lanthanum"]],
    [58, "Ce", "Serium", 140.12, "lantanida", "S", 182, 534, 1.12, [2, 8, 18, 19, 9, 2], ["cerium"]],
    [59, "Pr", "Praseodim", 140.91, "lantanida", "S", 181, 527, 1.13, [2, 8, 18, 21, 8, 2], ["praseodymium"]],
    [60, "Nd", "Neodimil", 144.24, "lantanida", "S", 180, 533, 1.14, [2, 8, 18, 22, 8, 2], ["neodymium"]],
    [61, "Pm", "Prometium", 145, "lantanida", "S", 180, 540, 1.13, [2, 8, 18, 23, 8, 2], ["promethium"]],
    [62, "Sm", "Samarium", 150.36, "lantanida", "S", 180, 545, 1.17, [2, 8, 18, 24, 8, 2], ["samarium"]],
    [63, "Eu", "Europium", 151.96, "lantanida", "S", 204, 547, 1.20, [2, 8, 18, 25, 8, 2], ["europium"]],
    [64, "Gd", "Gadolinium", 157.25, "lantanida", "S", 180, 593, 1.20, [2, 8, 18, 25, 9, 2], ["gadolinium"]],
    [65, "Tb", "Terbium", 158.93, "lantanida", "S", 180, 566, 1.22, [2, 8, 18, 27, 8, 2], ["terbium"]],
    [66, "Dy", "Disprosium", 162.50, "lantanida", "S", 180, 573, 1.23, [2, 8, 18, 28, 8, 2], ["dysprosium"]],
    [67, "Ho", "Holmium", 164.93, "lantanida", "S", 180, 581, 1.24, [2, 8, 18, 29, 8, 2], ["holmium"]],
    [68, "Er", "Erbium", 167.26, "lantanida", "S", 180, 589, 1.24, [2, 8, 18, 30, 8, 2], ["erbium"]],
    [69, "Tm", "Tulium", 168.93, "lantanida", "S", 176, 597, 1.25, [2, 8, 18, 31, 8, 2], ["thulium"]],
    [70, "Yb", "Yterbium", 173.05, "lantanida", "S", 176, 603, 1.10, [2, 8, 18, 32, 8, 2], ["ytterbium"]],
    [71, "Lu", "Lutesium", 174.97, "lantanida", "S", 174, 523, 1.27, [2, 8, 18, 32, 9, 2], ["lutetium"]],
    [72, "Hf", "Hafnium", 178.49, "transisi", "S", 159, 659, 1.30, [2, 8, 18, 32, 10, 2], ["hafnium"]],
    [73, "Ta", "Tantalum", 180.95, "transisi", "S", 146, 761, 1.50, [2, 8, 18, 32, 11, 2], ["tantalum"]],
    [74, "W", "Volfram", 183.84, "transisi", "S", 139, 770, 2.36, [2, 8, 18, 32, 12, 2], ["tungsten", "wolfram"]],
    [75, "Re", "Rhenium", 186.21, "transisi", "S", 137, 760, 1.90, [2, 8, 18, 32, 13, 2], ["rhenium"]],
    [76, "Os", "Osmium", 190.23, "transisi", "S", 135, 840, 2.20, [2, 8, 18, 32, 14, 2], ["osmium"]],
    [77, "Ir", "Iridium", 192.22, "transisi", "S", 136, 880, 2.20, [2, 8, 18, 32, 15, 2], ["iridium"]],
    [78, "Pt", "Platina", 195.08, "transisi", "S", 138, 870, 2.28, [2, 8, 18, 32, 17, 1], ["platinum", "platina"]],
    [79, "Au", "Emas", 196.97, "transisi", "S", 144, 890, 2.54, [2, 8, 18, 32, 18, 1], ["gold", "emas", "logam mulia"]],
    [80, "Hg", "Raksa", 200.59, "transisi", "L", 151, 1007, 2.00, [2, 8, 18, 32, 18, 2], ["mercury", "raksa"]],
    [81, "Tl", "Talium", 204.38, "pasca-transisi", "S", 170, 589, 1.62, [2, 8, 18, 32, 18, 3], ["thallium"]],
    [82, "Pb", "Timbal", 207.2, "pasca-transisi", "S", 146, 716, 2.33, [2, 8, 18, 32, 18, 4], ["lead", "timbal"]],
    [83, "Bi", "Bismut", 208.98, "pasca-transisi", "S", 150, 703, 2.02, [2, 8, 18, 32, 18, 5], ["bismuth"]],
    [84, "Po", "Polonium", 209, "metaloid", "S", 168, 812, 2.00, [2, 8, 18, 32, 18, 6], ["polonium"]],
    [85, "At", "Astatin", 210, "halogen", "S", 145, 890, 2.20, [2, 8, 18, 32, 18, 7], ["astatine"]],
    [86, "Rn", "Radon", 222, "gas-mulia", "G", 140, 1037, 2.20, [2, 8, 18, 32, 18, 8], ["radon"]],
    [87, "Fr", "Fransium", 223, "alkali", "S", 260, 380, 0.79, [2, 8, 18, 32, 18, 8, 1], ["francium"]],
    [88, "Ra", "Radium", 226, "alkali-tanah", "S", 221, 509, 0.90, [2, 8, 18, 32, 18, 8, 2], ["radium"]],
    [89, "Ac", "Aktinium", 227, "aktinida", "S", 215, 499, 1.10, [2, 8, 18, 32, 18, 18, 9, 2], ["actinium"]],
    [90, "Th", "Torium", 232.04, "aktinida", "S", 179, 587, 1.30, [2, 8, 18, 32, 18, 19, 9, 2], ["thorium"]],
    [91, "Pa", "Protaktinium", 231.04, "aktinida", "S", 163, 568, 1.50, [2, 8, 18, 32, 18, 20, 9, 2], ["protactinium"]],
    [92, "U", "Uranium", 238.03, "aktinida", "S", 156, 597, 1.38, [2, 8, 18, 32, 18, 21, 9, 2], ["uranium"]],
    [93, "Np", "Neptunium", 237, "aktinida", "S", 155, 604, 1.36, [2, 8, 18, 32, 18, 22, 9, 2], ["neptunium"]],
    [94, "Pu", "Plutonium", 244, "aktinida", "S", 159, 584, 1.28, [2, 8, 18, 32, 18, 24, 8, 2], ["plutonium"]],
    [95, "Am", "Amerisium", 243, "aktinida", "S", 173, 578, 1.30, [2, 8, 18, 32, 18, 25, 8, 2], ["americium"]],
    [96, "Cm", "Kurium", 247, "aktinida", "S", 174, 581, 1.30, [2, 8, 18, 32, 18, 25, 9, 2], ["curium"]],
    [97, "Bk", "Berkelium", 247, "aktinida", "S", 170, 601, 1.30, [2, 8, 18, 32, 18, 27, 8, 2], ["berkelium"]],
    [98, "Cf", "Kalifornium", 251, "aktinida", "S", 186, 608, 1.30, [2, 8, 18, 32, 18, 28, 8, 2], ["californium"]],
    [99, "Es", "Einsteinium", 252, "aktinida", "S", 186, 619, 1.30, [2, 8, 18, 32, 18, 29, 8, 2], ["einsteinium"]],
    [100, "Fm", "Fermium", 257, "aktinida", "S", 198, 627, 1.30, [2, 8, 18, 32, 18, 30, 8, 2], ["fermium"]],
    [101, "Md", "Mendelevium", 258, "aktinida", "S", 198, 635, 1.30, [2, 8, 18, 32, 18, 31, 8, 2], ["mendelevium"]],
    [102, "No", "Nobelium", 259, "aktinida", "S", 197, 642, 1.30, [2, 8, 18, 32, 18, 32, 8, 2], ["nobelium"]],
    [103, "Lr", "Lawrensium", 262, "aktinida", "S", 196, 470, 1.30, [2, 8, 18, 32, 18, 32, 9, 2], ["lawrencium"]],
    [104, "Rf", "Rutherfordium", 267, "transisi", "S*", 150, 580, 0, [2, 8, 18, 32, 32, 10, 2], ["rutherfordium"]],
    [105, "Db", "Dubnium", 268, "transisi", "S*", 139, 570, 0, [2, 8, 18, 32, 32, 11, 2], ["dubnium"]],
    [106, "Sg", "Seaborgium", 271, "transisi", "S*", 132, 610, 0, [2, 8, 18, 32, 32, 12, 2], ["seaborgium"]],
    [107, "Bh", "Bohrium", 270, "transisi", "S*", 128, 660, 0, [2, 8, 18, 32, 32, 13, 2], ["bohrium"]],
    [108, "Hs", "Hassium", 277, "transisi", "S*", 134, 730, 0, [2, 8, 18, 32, 32, 14, 2], ["hassium"]],
    [109, "Mt", "Meitnerium", 278, "transisi", "S*", 141, 800, 0, [2, 8, 18, 32, 32, 15, 2], ["meitnerium"]],
    [110, "Ds", "Darmstadtium", 281, "transisi", "S*", 147, 960, 0, [2, 8, 18, 32, 32, 16, 2], ["darmstadtium"]],
    [111, "Rg", "Roentgenium", 280, "transisi", "S*", 154, 950, 0, [2, 8, 18, 32, 32, 17, 2], ["roentgenium"]],
    [112, "Cn", "Kopernisium", 285, "transisi", "S*", 147, 1150, 0, [2, 8, 18, 32, 32, 18], ["copernicium"]],
    [113, "Nh", "Nihonium", 286, "pasca-transisi", "S*", 148, 704, 0, [2, 8, 18, 32, 32, 18, 3], ["nihonium"]],
    [114, "Fl", "Flerovium", 289, "pasca-transisi", "S*", 147, 823, 0, [2, 8, 18, 32, 32, 18, 4], ["flerovium"]],
    [115, "Mc", "Moskovium", 288, "pasca-transisi", "S*", 145, 538, 0, [2, 8, 18, 32, 32, 18, 5], ["moscovium"]],
    [116, "Lv", "Livermorium", 293, "pasca-transisi", "S*", 144, 589, 0, [2, 8, 18, 32, 32, 18, 6], ["livermorium"]],
    [117, "Ts", "Tenesin", 294, "halogen", "S*", 142, 742, 0, [2, 8, 18, 32, 32, 18, 7], ["tennessine"]],
    [118, "Og", "Oganeson", 294, "gas-mulia", "G", 140, 860, 0, [2, 8, 18, 32, 32, 18, 8], ["oganesson"]]
];

const p3TrendData = { 11:{afinitas:53,logam:100}, 12:{afinitas:0,logam:85}, 13:{afinitas:43,logam:70}, 14:{afinitas:134,logam:50}, 15:{afinitas:72,logam:30}, 16:{afinitas:200,logam:15}, 17:{afinitas:349,logam:5}, 18:{afinitas:0,logam:0} };
const trendExplanations = {
    radius: { title: "Jari-Jari Atom", icon: "📏", color: "#facc15", text: "Jarak dari inti atom sampai ke kulit elektron terluar.<br>• <strong>Seperiode</strong> (Kanan ke Kiri): Makin <span class='hl-besar'>BESAR</span><br>• <strong>Segolongan</strong> (Atas ke Bawah): Makin <span class='hl-besar'>BESAR</span>" },
    logam: { title: "Sifat Logam", icon: "🛡️", color: "#facc15", text: "Kecenderungan atom melepaskan elektron membentuk ion positif.<br>• <strong>Seperiode</strong> (Kanan ke Kiri): Makin <span class='hl-besar'>BESAR</span><br>• <strong>Segolongan</strong> (Atas ke Bawah): Makin <span class='hl-besar'>BESAR</span>" },
    ionisasi: { title: "Energi Ionisasi", icon: "⚡", color: "#60a5fa", text: "Energi minimum untuk melepaskan elektron.<br>• <strong>Seperiode</strong> (Kiri ke Kanan): Makin <span class='hl-besar' style='color:#60a5fa; background:rgba(96,165,250,0.15)'>BESAR</span><br>• <strong>Segolongan</strong> (Bawah ke Atas): Makin <span class='hl-besar' style='color:#60a5fa; background:rgba(96,165,250,0.15)'>BESAR</span>" },
    elektronegatif: { title: "Elektronegativitas", icon: "🧲", color: "#60a5fa", text: "Kemampuan menarik elektron dalam ikatan kimia.<br>• <strong>Seperiode</strong> (Kiri ke Kanan): Makin <span class='hl-besar' style='color:#60a5fa; background:rgba(96,165,250,0.15)'>BESAR</span><br>• <strong>Segolongan</strong> (Bawah ke Atas): Makin <span class='hl-besar' style='color:#60a5fa; background:rgba(96,165,250,0.15)'>BESAR</span>" },
    afinitas: { title: "Afinitas Elektron", icon: "🔋", color: "#60a5fa", text: "Energi yang dilepaskan/diserap saat menangkap elektron.<br>• <strong>Seperiode</strong> (Kiri ke Kanan): Makin <span class='hl-besar' style='color:#60a5fa; background:rgba(96,165,250,0.15)'>BESAR</span><br>• <strong>Segolongan</strong> (Bawah ke Atas): Makin <span class='hl-besar' style='color:#60a5fa; background:rgba(96,165,250,0.15)'>BESAR</span>" }
};

const elementsData = [];
let isHeatmapActive = false; let currentSelectedProperty = "radius";
let userXP = parseInt(localStorage.getItem("chem_xp")) || 0; let userLevel = 1;
let discoveredElements = JSON.parse(localStorage.getItem("chem_discovered_elements")) || [];
let discoveredCompounds = JSON.parse(localStorage.getItem("chem_discovered_compounds")) || [];

const ranks = ["Pemula Kimia", "Asisten Lab", "Analis Kimia", "Ilmuwan Muda", "Master Alkemis", "Profesor Kimia", "Einstein Reinkarnasi"];

function calculateGamification(xp) { let lvl = 1; let xpNeeded = 100; let currentXP = xp; while (currentXP >= xpNeeded) { currentXP -= xpNeeded; lvl++; xpNeeded = lvl * 100; } let rankIdx = Math.floor((lvl - 1) / 5); if(rankIdx >= ranks.length) rankIdx = ranks.length - 1; return { level: lvl, current: currentXP, next: xpNeeded, rank: ranks[rankIdx] }; }
function updateGamificationUI(isInitialLoad = false) {
    const stats = calculateGamification(userXP);
    if(!isInitialLoad && stats.level > userLevel) { showToast(`🎉 NAIK LEVEL ${stats.level}! Pangkat Baru: ${stats.rank}`, 'lvl-up-toast'); playSound('correct'); if (typeof confetti !== 'undefined') confetti({ particleCount: 150, spread: 80, origin: { y: 0.1 } }); }
    userLevel = stats.level; document.getElementById("user-level").innerText = `Lvl ${stats.level}`; document.getElementById("user-xp").innerText = stats.current; document.getElementById("next-level-xp").innerText = stats.next; document.getElementById("user-rank").innerText = stats.rank; document.getElementById("xp-bar").style.width = `${(stats.current / stats.next) * 100}%`;
}
function addXP(amount, reason) { userXP += amount; localStorage.setItem("chem_xp", userXP); updateGamificationUI(); showToast(`+${amount} XP (${reason})`, ''); }
function showToast(message, extraClass) { const container = document.getElementById("toast-container"); if(!container) return; const toast = document.createElement("div"); toast.className = `xp-toast ${extraClass}`; toast.innerHTML = extraClass.includes('lvl-up') ? message : `<span>✨</span> ${message}`; container.appendChild(toast); setTimeout(() => toast.remove(), 3000); }

const AudioContext = window.AudioContext || window.webkitAudioContext; let audioCtx;
function initAudio() { if(!audioCtx) audioCtx = new AudioContext(); if(audioCtx.state === 'suspended') audioCtx.resume(); }
function playSound(type) {
    if(!audioCtx) return; const osc = audioCtx.createOscillator(); const gain = audioCtx.createGain(); osc.connect(gain); gain.connect(audioCtx.destination);
    if (type === 'click') { osc.type = 'sine'; osc.frequency.setValueAtTime(600, audioCtx.currentTime); osc.frequency.exponentialRampToValueAtTime(300, audioCtx.currentTime + 0.05); gain.gain.setValueAtTime(0.1, audioCtx.currentTime); gain.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.05); osc.start(); osc.stop(audioCtx.currentTime + 0.05); } 
    else if (type === 'correct') { osc.type = 'triangle'; osc.frequency.setValueAtTime(400, audioCtx.currentTime); osc.frequency.setValueAtTime(800, audioCtx.currentTime + 0.1); gain.gain.setValueAtTime(0.1, audioCtx.currentTime); gain.gain.linearRampToValueAtTime(0, audioCtx.currentTime + 0.3); osc.start(); osc.stop(audioCtx.currentTime + 0.3); } 
    else if (type === 'wrong') { osc.type = 'sawtooth'; osc.frequency.setValueAtTime(150, audioCtx.currentTime); osc.frequency.linearRampToValueAtTime(100, audioCtx.currentTime + 0.2); gain.gain.setValueAtTime(0.1, audioCtx.currentTime); gain.gain.linearRampToValueAtTime(0, audioCtx.currentTime + 0.2); osc.start(); osc.stop(audioCtx.currentTime + 0.2); }
}

function mapIUPACCoordinatesAndParse() {
    rawElementsArray.forEach(row => {
        const atomNum = row[0]; let p = Math.ceil(atomNum / 18); let g = atomNum % 18 === 0 ? 18 : atomNum % 18;
        if (atomNum === 1) { p = 1; g = 1; } if (atomNum === 2) { p = 1; g = 18; }
        if (atomNum >= 3 && atomNum <= 10) { p = 2; g = atomNum >= 5 ? atomNum + 8 : atomNum - 2; } if (atomNum >= 11 && atomNum <= 18) { p = 3; g = atomNum >= 13 ? atomNum + 0 : atomNum - 10; }
        if (atomNum >= 19 && atomNum <= 54) { p = atomNum <= 36 ? 4 : 5; g = atomNum <= 36 ? atomNum - 18 : atomNum - 36; } if (atomNum >= 55 && atomNum <= 56) { p = 6; g = atomNum - 54; }
        if (atomNum >= 57 && atomNum <= 71) { p = 6; g = atomNum - 54; } if (atomNum >= 72 && atomNum <= 86) { p = 6; g = atomNum - 68; }
        if (atomNum >= 87 && atomNum <= 88) { p = 7; g = atomNum - 86; } if (atomNum >= 89 && atomNum <= 103) { p = 7; g = atomNum - 86; } if (atomNum >= 104 && atomNum <= 118) { p = 7; g = atomNum - 100; }
        let afn = p3TrendData[atomNum] ? p3TrendData[atomNum].afinitas : 0; let lgm = p3TrendData[atomNum] ? p3TrendData[atomNum].logam : 0;
        elementsData.push({ num: atomNum, sym: row[1], name: row[2], weight: row[3], category: row[4], period: p, group: g, state: row[5], bohr: row[9], alias: row[10] || [], mnemonic: (atomNum === 11) ? "Nanti Kita Robohkan Candi Firaun" : "Belum ada", radius: row[6], ionisasi: row[7], elektronegatif: row[8], afinitas: afn, logam: lgm, orbital: hitungKonfigurasiOrbital(atomNum), kuantum: "Aturan Hund & Pauli", isotope: atomNum === 6 ? "C-12 (Stabil)" : "Isotop Alami", hazard: row[4] === "alkali" ? "Sangat reaktif!" : "Aman lab standar.", valency: row[9][row[9].length - 1], biloks: atomNum === 1 ? "+1, -1" : row[4] === "gas-mulia" ? "0" : `+${row[9][row[9].length - 1]}`, use: `Materi SMA`, fact: `Padat/Cair/Gas.` });
    });
}
function hitungKonfigurasiOrbital(nomor) { const aufbau = [{n:"1s",m:2},{n:"2s",m:2},{n:"2p",m:6},{n:"3s",m:2},{n:"3p",m:6},{n:"4s",m:2},{n:"3d",m:10},{n:"4p",m:6},{n:"5s",m:2}]; let sisa = nomor; let hasil = []; for (let sub of aufbau) { if (sisa <= 0) break; let isi = Math.min(sisa, sub.m); hasil.push(`${sub.n}<sup>${isi}</sup>`); sisa -= isi; } return final = hasil.join(" "); }
mapIUPACCoordinatesAndParse();

let favorites = JSON.parse(localStorage.getItem("chem_favs")) || []; let personalNotes = JSON.parse(localStorage.getItem("chem_notes")) || {}; let quizActiveList = []; let quizCurrentIdx = 0; let quizScore = 0; let fcIdx = 0; let quizTimer;
const mainGrid = document.getElementById("periodic-table"); const fBlockGrid = document.getElementById("f-block-table"); const searchInput = document.getElementById("search-input"); const filterCat = document.getElementById("filter-category");

function openModalObj(modalElement) { modalElement.classList.add("open"); document.body.classList.add("modal-open"); }
function closeAllModals() { document.querySelectorAll(".modal").forEach(m => m.classList.remove("open")); document.body.classList.remove("modal-open"); }

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("loader").classList.add("fade-out"); updateGamificationUI(true); 
    renderGrid(); setupCoreEvents(); updateFavButtonDisplay(); renderChart("radius"); setupComparisonEngine(); inisialisasiKalkulatorKimia(); aktifkanShortcutKeyboard(); setupVirtualLab(); setupBackupSystem();
    setupZoomControls();
});

// =======================================================
// SYSTEM CONTROL: ANTI-SCROLL SMART CONTROLLER & ZOOM LIMIT
// =======================================================
let currentTableZoom = 1;
let minZoomAllowed = 0.3; 

function applyTableZoom() {
    const wrapper = document.querySelector('.table-wrapper');
    const container = document.querySelector('.table-outer-container');
    
    if (currentTableZoom < minZoomAllowed) currentTableZoom = minZoomAllowed;
    if (currentTableZoom > 1.5) currentTableZoom = 1.5;

    wrapper.style.transform = `scale(${currentTableZoom})`;
    const baseHeight = 720; 
    container.style.height = `${(baseHeight * currentTableZoom) + 20}px`;

    // MATIKAN SCROLL JIKA PAS DI LAYAR, HIDUPKAN JIKA DI-ZOOM BESAR
    if (currentTableZoom <= minZoomAllowed + 0.02) {
        container.style.overflow = "hidden"; 
    } else {
        container.style.overflow = "auto"; 
    }
}

function setupZoomControls() {
    const hitungBatasMinZoom = () => {
        const containerWidth = document.querySelector('.table-outer-container').clientWidth;
        const tableWidth = 1260; 
        minZoomAllowed = containerWidth / tableWidth;
        if(minZoomAllowed > 1) minZoomAllowed = 1; 
    };

    document.getElementById("btn-zoom-in").addEventListener("click", () => {
        currentTableZoom += 0.1; applyTableZoom(); playSound('click');
    });
    document.getElementById("btn-zoom-out").addEventListener("click", () => {
        hitungBatasMinZoom(); currentTableZoom -= 0.1; applyTableZoom(); playSound('click');
    });
    document.getElementById("btn-zoom-reset").addEventListener("click", () => {
        hitungBatasMinZoom(); currentTableZoom = minZoomAllowed; applyTableZoom(); playSound('click');
    });
    
    window.addEventListener('resize', () => {
        hitungBatasMinZoom(); if(currentTableZoom < minZoomAllowed) currentTableZoom = minZoomAllowed; applyTableZoom();
    });

    setTimeout(() => { document.getElementById("btn-zoom-reset").click(); }, 350);
}

function renderGrid() {
    mainGrid.innerHTML = ""; fBlockGrid.innerHTML = "";
    elementsData.forEach(el => {
        const cell = document.createElement("div"); cell.className = `element-cell cat-${el.category}`; if (favorites.includes(el.num)) cell.classList.add("is-fav");
        cell.setAttribute("data-num", el.num); cell.setAttribute("data-sym", el.sym.toLowerCase()); cell.setAttribute("data-name", el.name.toLowerCase()); cell.setAttribute("data-category", el.category);
        cell.innerHTML = `<span class="cell-num">${el.num}</span><span class="cell-sym">${el.sym}</span><span class="cell-name">${el.name}</span><span class="cell-weight">${el.weight}</span><span class="cell-fav-indicator">⭐</span>`;
        if (el.category !== "lantanida" && el.category !== "aktinida") { cell.style.gridColumn = el.group; cell.style.gridRow = el.period; mainGrid.appendChild(cell); } else { fBlockGrid.appendChild(cell); }
    });
}

function applyHeatmapEngine() {
    if (!isHeatmapActive) { document.body.classList.remove("heatmap-active"); document.querySelectorAll(".element-cell").forEach(cell => cell.style.background = ""); return; }
    document.body.classList.add("heatmap-active"); const validValues = elementsData.map(e => e[currentSelectedProperty]).filter(v => v > 0);
    const maxVal = Math.max(...validValues); const minVal = Math.min(...validValues);
    document.querySelectorAll(".element-cell").forEach(cell => {
        const num = parseInt(cell.getAttribute("data-num")); const el = elementsData.find(x => x.num === num); if (!el) return;
        const currentVal = el[currentSelectedProperty]; if (currentVal === 0) { cell.style.background = "#131525"; return; }
        const ratio = (currentVal - minVal) / (maxVal - minVal || 1); const hue = 240 - (ratio * 240); cell.style.background = `hsla(${hue}, 85%, 45%, 0.85)`;
    });
}

function filterEngine() {
    const q = searchInput.value.toLowerCase().trim(); const cat = filterCat.value; const isFavMode = document.getElementById("btn-show-fav").classList.contains("active");
    document.querySelectorAll(".element-cell").forEach(cell => {
        const num = cell.getAttribute("data-num"); const el = elementsData.find(x => x.num == num); if (!el) return;
        let matchesQ = !q || el.num.toString() === q || el.sym.toLowerCase().includes(q) || el.name.toLowerCase().includes(q); if (!matchesQ && el.alias && Array.isArray(el.alias)) matchesQ = el.alias.some(a => a.toLowerCase().includes(q));
        const matchesC = cat === "all" || el.category === cat; const matchesF = !isFavMode || cell.classList.contains("is-fav"); cell.classList.toggle("dimmed", !(matchesQ && matchesC && matchesF));
    });
}

function setupCoreEvents() {
    document.body.addEventListener("click", initAudio, {once:true});
    const searchSugg = document.getElementById("search-suggestions");
    if(searchSugg) { searchInput.addEventListener("input", (e) => { const q = e.target.value.toLowerCase().trim(); searchSugg.innerHTML = ""; if(q.length > 0) { const matches = elementsData.filter(el => el.sym.toLowerCase().includes(q) || el.name.toLowerCase().includes(q) || el.num.toString() === q || el.alias.some(a=>a.toLowerCase().includes(q))).slice(0, 5); if(matches.length > 0) { searchSugg.classList.remove("hidden"); matches.forEach(m => { const div = document.createElement("div"); div.className = "suggestion-item"; div.innerHTML = `<strong>${m.sym}</strong> - ${m.name} (No. Atom: ${m.num})`; div.onclick = () => { searchInput.value = m.name; searchSugg.classList.add("hidden"); filterEngine(); playSound('click'); bukaModalUnsur(m.num); }; searchSugg.appendChild(div); }); } else { searchSugg.classList.add("hidden"); } } else { searchSugg.classList.add("hidden"); } filterEngine(); }); document.addEventListener("click", (e) => { if(!e.target.closest(".search-box")) searchSugg.classList.add("hidden"); }); }
    filterCat.addEventListener("change", () => { searchInput.value = ""; if(searchSugg) searchSugg.classList.add("hidden"); filterEngine(); playSound('click'); });
    document.getElementById("btn-reset").addEventListener("click", () => { searchInput.value = ""; filterCat.value = "all"; isHeatmapActive = false; document.getElementById("btn-toggle-heatmap").classList.remove("active"); document.body.classList.remove("heatmap-active"); document.getElementById("btn-show-fav").classList.remove("active"); document.querySelectorAll(".sub-panel").forEach(p => p.classList.add("hidden-panel")); document.querySelectorAll(".btn-nav").forEach(b => b.classList.remove("active")); document.querySelectorAll(".element-cell").forEach(cell => { cell.classList.remove("dimmed"); cell.style.background = ""; }); document.getElementById("btn-zoom-reset").click(); playSound('click'); });
    document.getElementById("btn-show-fav").addEventListener("click", (e) => { e.target.classList.toggle("active"); filterEngine(); playSound('click'); });
    
    document.getElementById("btn-toggle-heatmap").addEventListener("click", (e) => { 
        isHeatmapActive = !isHeatmapActive; e.target.classList.toggle("active", isHeatmapActive); applyHeatmapEngine(); playSound('click'); 
        if(isHeatmapActive && !localStorage.getItem("chem_heatmap_used")) { addXP(10, "Aktivasi Pertama Mode Heatmap"); localStorage.setItem("chem_heatmap_used", "true"); } 
    });
    
    window.addEventListener("click", (e) => { if (e.target.classList.contains("modal")) closeAllModals(); });
    document.querySelectorAll(".close-button, .close-flashcard, .close-compare, .close-backup").forEach(btn => { btn.addEventListener("click", () => { closeAllModals(); playSound('click'); }); });
    document.body.addEventListener("click", e => { const cell = e.target.closest(".element-cell"); if (cell) { bukaModalUnsur(parseInt(cell.getAttribute("data-num"))); playSound('click'); } });

    document.querySelectorAll(".btn-nav").forEach(btn => btn.addEventListener("click", () => playSound('click')));
    document.getElementById("btn-mode-belajar").addEventListener("click", (e) => toggleSubPanel(document.getElementById("panel-belajar"), e.target));
    document.getElementById("btn-mode-kuis").addEventListener("click", (e) => toggleSubPanel(document.getElementById("panel-kuis"), e.target));
    document.getElementById("btn-mode-tren").addEventListener("click", (e) => toggleSubPanel(document.getElementById("panel-tren"), e.target));
    document.getElementById("btn-mode-kalkulator").addEventListener("click", (e) => toggleSubPanel(document.getElementById("panel-kalkulator"), e.target));
    document.getElementById("btn-mode-lab").addEventListener("click", (e) => toggleSubPanel(document.getElementById("panel-lab"), e.target));
    document.getElementById("btn-mode-ujian").addEventListener("click", (e) => toggleSubPanel(document.getElementById("panel-ujian"), e.target));

    document.getElementById("hide-name").addEventListener("change", (e) => mainGrid.classList.toggle("hide-names-active", e.target.checked));
    document.getElementById("hide-symbol").addEventListener("change", (e) => mainGrid.classList.toggle("hide-symbols-active", e.target.checked));
    document.getElementById("hide-num").addEventListener("change", (e) => mainGrid.classList.toggle("hide-nums-active", e.target.checked));
    
    document.getElementById("start-quiz-btn").addEventListener("click", () => { startQuizEngine(); playSound('click'); });
    document.getElementById("start-exam-btn").addEventListener("click", () => { startExamEngine(); playSound('click'); }); 

    document.getElementById("theme-toggle").addEventListener("click", (e) => { 
        document.body.classList.toggle("light-theme"); 
        const isLight = document.body.classList.contains("light-theme");
        e.currentTarget.innerHTML = isLight 
            ? `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4"/></svg>` 
            : `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>`;
        playSound('click'); 
    });
    
    document.getElementById("btn-export-png").addEventListener("click", () => { 
        if (typeof html2canvas === 'undefined') return; 
        const captureArea = document.getElementById("capture-area");
        showToast("📸 Memproses gambar PNG...", "");
        
        const parentScroll = document.querySelector('.table-outer-container');
        const origScroll = parentScroll.scrollLeft;
        parentScroll.scrollLeft = 0;

        html2canvas(captureArea, { backgroundColor: "#0a0b10", scale: 2, windowWidth: 1260 }).then(canvas => { 
            const link = document.createElement("a"); link.download = "Tabel-Periodik-ChemLab.png"; link.href = canvas.toDataURL("image/png"); link.click(); 
            parentScroll.scrollLeft = origScroll;
            showToast("✅ Berhasil menyimpan PNG!", "lvl-up-toast");
        }).catch(() => { showToast("Gagal export PNG.", ""); }); 
    });
    
    document.querySelectorAll(".btn-chart-type").forEach(btn => { btn.addEventListener("click", (e) => { document.querySelectorAll(".btn-chart-type").forEach(b => b.classList.remove("active")); e.target.classList.add("active"); const prop = e.target.getAttribute("data-property"); currentSelectedProperty = prop; renderChart(prop); applyHeatmapEngine(); const info = trendExplanations[prop]; document.getElementById("trend-title-display").innerText = info.title; document.getElementById("trend-title-display").style.color = info.color; document.getElementById("trend-icon-display").innerText = info.icon; document.getElementById("trend-text-display").innerHTML = info.text; playSound('click'); }); });
    setupFlashcardEngine();
}

function toggleSubPanel(panel, btn) { const isOpen = !panel.classList.contains("hidden-panel"); document.querySelectorAll(".sub-panel").forEach(p => p.classList.add("hidden-panel")); document.querySelectorAll(".btn-nav").forEach(b => b.classList.remove("active")); if (!isOpen) { panel.classList.remove("hidden-panel"); btn.classList.add("active"); } }
function updateFavButtonDisplay() { document.getElementById("fav-count").innerText = favorites.length; }

function renderBohrModel(shells) {
    const container = document.getElementById("bohr-visual"); container.innerHTML = '<div class="bohr-nucleus"></div>';
    shells.forEach((electrons, index) => { const radius = 20 + (index * 16); const size = radius * 2; const shell = document.createElement("div"); shell.className = "bohr-shell"; shell.style.width = `${size}px`; shell.style.height = `${size}px`; shell.style.animationDuration = `${10 + (index * 4)}s`; for (let i = 0; i < electrons; i++) { const e = document.createElement("div"); e.className = "bohr-electron"; e.style.transform = `rotate(${(360 / electrons) * i}deg) translateX(${radius}px)`; shell.appendChild(e); } container.appendChild(shell); });
    document.getElementById("bohr-text-summary").innerText = `Kulit Elektron: ${shells.join(" • ")}`;
}

function renderOrbitalBoxes(atomicNumber) {
    const container = document.getElementById("orbital-visualizer"); if(!container) return; container.innerHTML = ""; 
    const orbitalStructure = [ {n: "1s", b: 1, c: 2}, {n: "2s", b: 1, c: 2}, {n: "2p", b: 3, c: 6}, {n: "3s", b: 1, c: 2}, {n: "3p", b: 3, c: 6}, {n: "4s", b: 1, c: 2}, {n: "3d", b: 5, c: 10}, {n: "4p", b: 3, c: 6}, {n: "5s", b: 1, c: 2} ];
    let remainingElectrons = atomicNumber; let delayCounter = 0;
    for (let shell of orbitalStructure) {
        if (remainingElectrons <= 0) break; let electronsInShell = Math.min(remainingElectrons, shell.c); remainingElectrons -= electronsInShell;
        const groupDiv = document.createElement("div"); groupDiv.className = "subshell-group"; groupDiv.innerHTML = `<span class="subshell-label">${shell.n}</span>`;
        const boxesDiv = document.createElement("div"); boxesDiv.className = "subshell-boxes"; let boxes = [];
        for (let i = 0; i < shell.b; i++) { const box = document.createElement("div"); box.className = "orbital-box"; boxes.push(box); boxesDiv.appendChild(box); }
        let elCount = 0;
        for (let i = 0; i < shell.b; i++) { if (elCount < electronsInShell) { const arrowUp = document.createElement("span"); arrowUp.className = "electron-arrow arrow-up"; arrowUp.innerHTML = "↿"; boxes[i].appendChild(arrowUp); setTimeout(() => arrowUp.classList.add("show"), delayCounter * 150); delayCounter++; elCount++; } }
        for (let i = 0; i < shell.b; i++) { if (elCount < electronsInShell) { const arrowDown = document.createElement("span"); arrowDown.className = "electron-arrow arrow-down"; arrowDown.innerHTML = "⇂"; boxes[i].appendChild(arrowDown); setTimeout(() => arrowDown.classList.add("show"), delayCounter * 150); delayCounter++; elCount++; } }
        groupDiv.appendChild(boxesDiv); container.appendChild(groupDiv);
    }
}

function bukaModalUnsur(atomNum) {
    const el = elementsData.find(x => x.num === atomNum); if (!el) return;
    if (!discoveredElements.includes(atomNum)) { addXP(5, "Eksplorasi Unsur Baru"); discoveredElements.push(atomNum); localStorage.setItem("chem_discovered_elements", JSON.stringify(discoveredElements)); }
    const modal = document.getElementById("element-modal"); document.getElementById("modal-card-display").className = `modal-card-view cat-${el.category}`;
    document.getElementById("m-atomic-num").innerText = el.num; document.getElementById("m-symbol").innerText = el.sym; document.getElementById("m-name").innerText = el.name; document.getElementById("m-weight").innerText = `Ar ${el.weight}`; document.getElementById("detail-title-id").innerText = el.name; document.getElementById("detail-title-en").innerText = el.alias[0] || "-"; document.getElementById("d-mnemonic").innerText = el.mnemonic; document.getElementById("d-hazard").innerText = el.hazard; document.getElementById("d-group-period").innerText = `Golongan ${el.group}, Periode ${el.period}`; document.getElementById("d-config").innerText = `Kulit Bohr (n): ${el.bohr.length}`; document.getElementById("d-orbital").innerHTML = el.orbital; document.getElementById("d-kuantum").innerText = el.kuantum; document.getElementById("d-isotope").innerText = el.isotope; document.getElementById("d-valensi").innerText = el.valency; document.getElementById("d-biloks").innerText = el.biloks; document.getElementById("d-wujud").innerText = el.state === "G" ? "Gas" : el.state === "L" ? "Cair" : "Padat";
    const noteArea = document.getElementById("user-note-input"); noteArea.value = personalNotes[el.num] || ""; noteArea.oninput = (e) => { personalNotes[el.num] = e.target.value; localStorage.setItem("chem_notes", JSON.stringify(personalNotes)); };
    const favBtn = document.getElementById("modal-fav-btn"); favBtn.classList.toggle("active", favorites.includes(el.num));
    favBtn.onclick = () => { const gridCell = document.querySelector(`.element-cell[data-num="${el.num}"]`); if (favorites.includes(el.num)) { favorites = favorites.filter(id => id !== el.num); if(gridCell) gridCell.classList.remove("is-fav"); } else { favorites.push(el.num); if(gridCell) gridCell.classList.add("is-fav"); } localStorage.setItem("chem_favs", JSON.stringify(favorites)); favBtn.classList.toggle("active", favorites.includes(el.num)); playSound('click'); updateFavButtonDisplay(); filterEngine(); };
    renderBohrModel(el.bohr); renderOrbitalBoxes(el.num); openModalObj(modal); 
}

function setupComparisonEngine() {
    const sel1 = document.getElementById("compare-1"); const sel2 = document.getElementById("compare-2");
    let optionsHTML = '<option value="">-- Pilih Unsur --</option>'; elementsData.forEach(e => optionsHTML += `<option value="${e.num}">${e.num} - ${e.name}</option>`); sel1.innerHTML = optionsHTML; sel2.innerHTML = optionsHTML;
    document.getElementById("btn-mode-banding").onclick = () => { openModalObj(document.getElementById("compare-modal")); };
    const renderComp = () => { if (!sel1.value || !sel2.value) return; const e1 = elementsData.find(x => x.num == sel1.value); const e2 = elementsData.find(x => x.num == sel2.value); let kesimpulan = ""; if(e1.radius > e2.radius) kesimpulan += `⚛️ Ukuran atom <strong>${e1.sym}</strong> lebih besar. <br>`; else if(e1.radius < e2.radius) kesimpulan += `⚛️ Ukuran atom <strong>${e2.sym}</strong> lebih besar. <br>`; if(e1.elektronegatif > e2.elektronegatif) kesimpulan += `⚡ <strong>${e1.sym}</strong> jauh lebih mudah menarik elektron.`; else if(e1.elektronegatif < e2.elektronegatif) kesimpulan += `⚡ <strong>${e2.sym}</strong> jauh lebih mudah menarik elektron.`; document.getElementById("compare-results").innerHTML = `<div class="comp-card cat-${e1.category}"><h2>${e1.sym}</h2><p>${e1.name}</p><div class="comp-stat"><span>Jari-jari:</span> <strong>${e1.radius} pm</strong></div></div><div class="comp-card cat-${e2.category}"><h2>${e2.sym}</h2><p>${e2.name}</p><div class="comp-stat"><span>Jari-jari:</span> <strong>${e2.radius} pm</strong></div></div><div class="comp-conclusion">${kesimpulan || "Data seimbang."}</div>`; };
    sel1.onchange = renderComp; sel2.onchange = renderComp;
}

function inisialisasiKalkulatorKimia() {
    const elSelect = document.getElementById("calc-element-select"); const valInput = document.getElementById("calc-value"); const typeSelect = document.getElementById("calc-type"); const outputBox = document.getElementById("calc-output");
    if (!elSelect) return; let options = ""; elementsData.forEach(e => options += `<option value="${e.weight}">${e.name} (Ar: ${e.weight})</option>`); elSelect.innerHTML = options;
    const hitungMol = () => { const ar = parseFloat(elSelect.value); const nilai = parseFloat(valInput.value); const tipe = typeSelect.value; if (isNaN(nilai) || nilai <= 0) { outputBox.innerHTML = "<p>Masukkan angka valid.</p>"; return; } let mol = 0, gram = 0, vol = 0; if (tipe === "massa") { gram = nilai; mol = gram / ar; vol = mol * 22.4; } else if (tipe === "mol") { mol = nilai; gram = mol * ar; vol = mol * 22.4; } else { vol = nilai; mol = vol / 22.4; gram = mol * ar; } outputBox.innerHTML = `<strong>🧪 Hasil Analisis:</strong><p>• Mol: ${mol.toFixed(4)} mol</p><p>• Massa: ${gram.toFixed(2)} gram</p><p>• Volume Gas (STP): ${vol.toFixed(2)} L</p>`; };
    valInput.oninput = hitungMol; elSelect.onchange = hitungMol; typeSelect.onchange = hitungMol;
}

function setupVirtualLab() {
    const input1 = document.getElementById("lab-el-1"); const input2 = document.getElementById("lab-el-2"); const datalist = document.getElementById("lab-elements"); const btnReact = document.getElementById("btn-react"); const resultBox = document.getElementById("lab-result");
    if (!input1 || !input2 || !datalist) return; let options = ""; const sortedEls = [...elementsData].sort((a,b) => a.name.localeCompare(b.name)); sortedEls.forEach(e => options += `<option value="${e.sym} - ${e.name}">`); datalist.innerHTML = options;
    const reactionDB = { "Cl-Na": { formula: "NaCl", name: "Natrium Klorida", desc: "Garam dapur biasa." }, "H-O": { formula: "H<sub>2</sub>O", name: "Air", desc: "Zat cair pendukung kehidupan universal." }, "C-O": { formula: "CO<sub>2</sub>", name: "Karbon Dioksida", desc: "Gas sisa respirasi makhluk hidup." }, "Mg-O": { formula: "MgO", name: "Magnesium Oksida", desc: "Bahan antasida obat maag." }, "Cl-H": { formula: "HCl", name: "Asam Klorida", desc: "Asam lambung kuat." } };
    btnReact.onclick = () => {
        const val1 = input1.value.split(" ")[0]; const val2 = input2.value.split(" ")[0]; const e1 = elementsData.find(x => x.sym === val1); const e2 = elementsData.find(x => x.sym === val2);
        if (!e1 || !e2) { resultBox.innerHTML = `<div style="color:#ef4444; font-weight:bold;">❌ Error: Masukkan unsur yang benar dari daftar!</div>`; resultBox.className = "lab-result-box reaction-fail"; playSound('wrong'); return; }
        resultBox.innerHTML = `<div class="lab-placeholder shake-anim" style="color: #10b981;">⚡ Mereaksikan Unsur...</div>`; resultBox.className = "lab-result-box"; playSound('click');
        setTimeout(() => {
            const sym1 = e1.sym; const sym2 = e2.sym; const key = [sym1, sym2].sort().join("-"); let outputHTML = ""; let isSuccess = false;
            if (sym1 === sym2) { outputHTML = `<div class="formula-text">${sym1}<sub>2</sub></div><div class="compound-name">Gas/Molekul Diatomik</div>`; isSuccess = true; } 
            else if (reactionDB[key]) {
                const data = reactionDB[key]; if (!discoveredCompounds.includes(key)) { addXP(15, "Menemukan Senyawa Baru!"); discoveredCompounds.push(key); localStorage.setItem("chem_discovered_compounds", JSON.stringify(discoveredCompounds)); }
                outputHTML = `<div class="formula-text">${data.formula}</div><div class="compound-name">${data.name}</div><p>${data.desc}</p>`; isSuccess = true;
            } else if (e1.group === 18 || e2.group === 18) { outputHTML = `<div class="formula-text">❌ DITOLAK</div><div class="compound-name">Gas Mulia (Inert/Sukar Bereaksi)</div>`; playSound('wrong'); }
            else { outputHTML = `<div class="formula-text">❓ KOMPLEKS</div><div class="compound-name">Reaksi Belum Didukung Sistem Lab.</div>`; playSound('wrong'); }
            resultBox.innerHTML = outputHTML; resultBox.className = `lab-result-box ${isSuccess ? 'reaction-success' : 'reaction-fail'}`; if(isSuccess) playSound('correct');
        }, 1100); 
    };
}

function setupBackupSystem() {
    const backupModal = document.getElementById("backup-modal"); const codeInput = document.getElementById("backup-code-input");
    document.getElementById("btn-backup").addEventListener("click", () => { openModalObj(backupModal); codeInput.value = ""; playSound('click'); });
    document.getElementById("btn-generate-save").addEventListener("click", () => { const saveData = { chem_xp: localStorage.getItem("chem_xp"), chem_favs: localStorage.getItem("chem_favs") }; codeInput.value = btoa(JSON.stringify(saveData)); showToast("Kode Save Berhasil Dibuat!", "lvl-up-toast"); playSound('correct'); });
    document.getElementById("btn-load-save").addEventListener("click", () => { try { const decoded = JSON.parse(atob(codeInput.value.trim())); if(decoded.chem_xp !== undefined) localStorage.setItem("chem_xp", decoded.chem_xp); showToast("Progress Berhasil Dimuat!", "lvl-up-toast"); setTimeout(() => location.reload(), 1200); } catch { showToast("Kode rusak/salah!", ""); playSound('wrong'); } });
}

function startQuizEngine() { document.getElementById("quiz-start-box").classList.add("hidden-panel"); document.getElementById("quiz-play-box").classList.remove("hidden-panel"); quizScore = 0; quizCurrentIdx = 0; quizActiveList = [...elementsData].sort(() => 0.5 - Math.random()).slice(0, 10); loadQuizQuestion(); }
function loadQuizQuestion() { clearInterval(quizTimer); if (quizCurrentIdx >= 10) { document.getElementById("quiz-question-text").innerText = `Kuis Selesai! Skor Akhir: ${quizScore * 10}`; document.getElementById("quiz-options").innerHTML = `<button class="btn-primary" onclick="startQuizEngine()">Ulangi Kuis</button>`; return; } document.getElementById("quiz-question-num").innerText = `Soal ${quizCurrentIdx + 1}/10`; document.getElementById("quiz-score").innerText = `Skor: ${quizScore}`; let sisaWaktu = 20; document.getElementById("timer-count").innerText = sisaWaktu; quizTimer = setInterval(() => { sisaWaktu--; document.getElementById("timer-count").innerText = sisaWaktu; if(sisaWaktu <= 0) { quizCurrentIdx++; loadQuizQuestion(); } }, 1000); const target = quizActiveList[quizCurrentIdx]; document.getElementById("quiz-question-text").innerText = `Apa nama unsur dari lambang "${target.sym}"?`; let options = [target.name]; while(options.length<4) { let n = elementsData[Math.floor(Math.random()*118)].name; if(!options.includes(n)) options.push(n); } options.sort(() => 0.5 - Math.random()); const optGrid = document.getElementById("quiz-options"); optGrid.innerHTML = ""; options.forEach(opt => { const btn = document.createElement("button"); btn.className = "quiz-opt"; btn.innerText = opt; btn.onclick = () => { if(opt === target.name) { quizScore++; playSound('correct'); addXP(10, "Benar"); } else { playSound('wrong'); } quizCurrentIdx++; loadQuizQuestion(); }; optGrid.appendChild(btn); }); }
function renderChart(prop) { const chartContainer = document.getElementById("custom-bar-chart"); chartContainer.innerHTML = ""; const p3 = elementsData.filter(e => e.period === 3).sort((a,b)=>a.num - b.num); const max = { radius: 220, logam: 100, ionisasi: 1600, elektronegatif: 4.0, afinitas: 400 }; const colors = { radius: "linear-gradient(to top, #3b82f6, #06b6d4)", logam: "linear-gradient(to top, #64748b, #cbd5e1)", ionisasi: "linear-gradient(to top, #ef4444, #f97316)", elektronegatif: "linear-gradient(to top, #8b5cf6, #d946ef)", afinitas: "linear-gradient(to top, #10b981, #34d399)" }; p3.forEach(el => { const val = el[prop]; const pct = Math.min((val / max[prop]) * 100, 100); const bar = document.createElement("div"); bar.className = "chart-bar-item"; bar.innerHTML = `<div class="bar-fill" style="height: ${pct}%; background: ${colors[prop]};"><span class="bar-val">${val}</span></div><span class="bar-label">${el.sym}</span>`; chartContainer.appendChild(bar); }); }
function setupFlashcardEngine() { document.getElementById("btn-flashcard").onclick = () => { openModalObj(document.getElementById("flashcard-modal")); showCard(); }; document.getElementById("flashcard-box").onclick = () => { document.getElementById("flashcard-box").classList.toggle("flipped"); }; document.getElementById("fc-next").onclick = () => { fcIdx = (fcIdx + 1) % 118; showCard(); }; document.getElementById("fc-prev").onclick = () => { fcIdx = (fcIdx - 1 + 118) % 118; showCard(); }; }
function showCard() { document.getElementById("flashcard-box").classList.remove("flipped"); const el = elementsData[fcIdx]; document.getElementById("fc-symbol").innerText = el.sym; document.getElementById("fc-num").innerText = el.num; document.getElementById("fc-name").innerText = el.name; document.getElementById("fc-desc").innerText = el.category.toUpperCase(); }
function aktifkanShortcutKeyboard() { window.addEventListener("keydown", e => { if (e.key === "/") { e.preventDefault(); searchInput.focus(); } if (e.key === "Escape") closeAllModals(); }); }

// =======================================================
// DATABASE DATABASE 50 SOAL HOTS UTBK/SNBT KIMIA SMA
// =======================================================
const examDatabase = [
    { q: "Unsur dengan konfigurasi elektron [Ar] 4s2 3d10 4p3 terletak pada...", options: ["Golongan VA, Periode 4", "Golongan IIIA, Periode 4", "Golongan VA, Periode 3", "Golongan IIIB, Periode 4"], ans: 0, exp: "Elektron valensi berada pada 4s2 4p3 (total 5 elektron valensi ➔ Golongan VA) dengan tingkat kulit n=4 (Periode 4)." },
    { q: "Energi ionisasi unsur-unsur seperiode dari kiri ke kanan cenderung semakin besar disebabkan oleh...", options: ["Jari-jari atom semakin kecil", "Muatan inti efektif berkurang", "Jumlah elektron valensi berkurang", "Sifat non-logam yang semakin lemah"], ans: 0, exp: "Dari kiri ke kanan tarikan inti terhadap elektron semakin kuat sehingga jari-jari atom mengecil, berakibat elektron valensi sukar dilepas (energi ionisasi membesar)." },
    { q: "Senyawa antara unsur logam alkali (IA) dengan golongan halogen (VIIA) memiliki jenis ikatan utama...", options: ["Kovalen Murni", "Logam", "Ionik", "Kovalen Koordinasi"], ans: 2, exp: "Logam alkali (sangat elektropositif) melepaskan elektron kepada halogen (sangat elektronegatif) membentuk gaya elektrostatik / ikatan ionik." },
    { q: "Unsur yang dapat merubah kertas lakmus merah menjadi biru saat direaksikan dengan air adalah...", options: ["Klorin (Cl)", "Kalsium (Ca)", "Belerang (S)", "Argon (Ar)"], ans: 1, exp: "Kalsium merupakan logam alkali tanah yang bereaksi eksotermik dengan air menghasilkan senyawa basa Ca(OH)2." },
    { q: "Sesuai dengan prinsip Aturan Aufbau, setelah orbital 4s terisi penuh, pengisian elektron berlanjut ke...", options: ["Orbital 4p", "Orbital 3d", "Orbital 5s", "Orbital 4d"], ans: 1, exp: "Urutan tingkat energi menurut diagram aufbau adalah: ... 3p ➔ 4s ➔ 3d ➔ 4p." },
    { q: "Atom Karbon (C) memiliki kekhasan mampu membentuk rantai atom karena mempunyai elektron valensi sebanyak...", options: ["2 elektron", "4 elektron", "6 elektron", "8 elektron"], ans: 1, exp: "Karbon nomor atom 6 berkonfigurasi 2, 4. Elektron valensi 4 memungkinkannya membentuk 4 ikatan kovalen kuat." },
    { q: "Massa molekul relatif (Mr) dari H2SO4 jika diketahui Ar H=1, S=32, O=16 adalah...", options: ["98", "96", "49", "104"], ans: 0, exp: "Mr H2SO4 = (2 x 1) + (1 x 32) + (4 x 16) = 2 + 32 + 64 = 98." },
    { q: "Unsur dengan nomor atom 15 (Fosfor). Berapa jumlah elektron tunggal (tidak berpasangan) pada orbital p terluar?", options: ["1 elektron", "2 elektron", "3 elektron", "4 elektron"], ans: 2, exp: "Konfigurasi terluar: 3s2 3p3. Berdasarkan aturan Hund, ketiga elektron pada subkulit 3p akan mengisi kotak orbital secara tunggal terpisah." },
    { q: "Sifat paramagnetik pada unsur transisi disebabkan oleh kondisi...", options: ["Adanya elektron valensi berpasangan", "Adanya elektron tunggal yang tidak berpasangan", "Seluruh orbital d terisi penuh", "Termasuk unsur non-logam murni"], ans: 1, exp: "Paramagnetik adalah sifat ketertarikan lemah terhadap medan magnet akibat adanya elektron tunggal tak berpasangan pada orbital." },
    { q: "Jika unsur logam M (Golongan IIA) membentuk ikatan dengan unsur non-logam X (Golongan VIA), rumus kimianya adalah...", options: ["MX2", "M2X", "MX", "M2X3"], ans: 2, exp: "M membentuk ion M2+, sedangkan X membentuk ion X2-. Gabungan rasio 1:1 membentuk senyawa netral MX." },
    { q: "Proses pengenceran asam sulfat pekat di dalam laboratorium memicu timbulnya suhu panas. Gejala ini disebut reaksi...", options: ["Endoterm", "Eksoterm", "Redoks", "Sublimasi"], ans: 1, exp: "Reaksi eksoterm melepaskan energi panas (kalor) dari sistem menuju ke lingkungan sekitar." },
    { q: "Zat kimia yang ditambahkan ke dalam wadah reaksi untuk menurunkan nilai energi aktivasi dinamakan...", options: ["Katalis", "Inhibitor", "Reaktan", "Indikator"], ans: 0, exp: "Katalis menyediakan jalur reaksi alternatif dengan energi aktivasi lebih rendah agar laju reaksi meningkat." },
    { q: "Kelompok atom dinamakan sebagai Isoton apabila memiliki persamaan dalam hal...", options: ["Nomor atom", "Jumlah proton", "Jumlah neutron", "Nomor massa total"], ans: 2, exp: "Isoton adalah atom-atom dari unsur berbeda yang memiliki jumlah neutron sama (Massa - Proton = sama)." },
    { q: "Apabila 0,5 mol senyawa NaOH dilarutkan ke dalam air hingga mencapai volume 1 Liter, molaritas larutan tersebut adalah...", options: ["0,5 M", "1,0 M", "2,0 M", "0,25 M"], ans: 0, exp: "Molaritas (M) = mol / Volume (L) = 0,5 / 1 = 0,5 M." },
    { q: "Berapakah nilai volume standar (STP) bagi 1 mol gas ideal Oksigen (O2)?", options: ["22,4 Liter", "24,0 Liter", "11,2 Liter", "44,8 Liter"], ans: 0, exp: "Kondisi STP (0 derajat C, 1 atm) menetapkan volume konstan 1 mol gas ideal sebesar 22,4 Liter." },
    { q: "Unsur yang mengantongi tingkat elektronegativitas paling besar di dalam tabel periodik adalah...", options: ["Oksigen (O)", "Klorin (Cl)", "Fluor (F)", "Helium (He)"], ans: 2, exp: "Fluor terletak di pojok kanan atas periode 2 (golongan gas mulia tidak dihitung), menjadikannya penarik elektron terkuat." },
    { q: "Interaksi ikatan hidrogen antarmolekul yang sangat kuat dapat dideteksi pada senyawa...", options: ["CH4", "H2S", "H2O", "HCl"], ans: 2, exp: "Ikatan hidrogen terjadi akibat interaksi atom H dengan atom bermuatan elektronegatif tinggi seperti N, O, atau F." },
    { q: "Unsur-unsur golongan gas mulia (VIII A) bersifat sangat stabil dan inert karena...", options: ["Memiliki konfigurasi elektron luar yang penuh (oktet/duplet)", "Mempunyai kerapatan massa sangat padat", "Mudah melepaskan elektron terluarnya", "Titik didihnya super tinggi"], ans: 0, exp: "Konfigurasi elektron penuh (ns2 np6) membuat gas mulia tidak memiliki kecenderungan melepas/menangkap elektron." },
    { q: "Manakah di bawah ini senyawa yang tergolong ke dalam asam kuat?", options: ["CH3COOH", "HCN", "HF", "HCl"], ans: 3, exp: "Asam Klorida (HCl) terionisasi sempurna (derajat ionisasi = 1) di dalam larutan air." },
    { q: "Hasil akhir dari interaksi reaksi netralisasi antara senyawa asam dengan senyawa basa adalah...", options: ["Garam dan Air", "Gas Hidrogen", "Endapan Logam murni", "Larutan Asam Lemah"], ans: 0, exp: "Reaksi netralisasi ion H+ (asam) bertemu ion OH- (basa) membentuk H2O beserta ion sisa garam." },
    { q: "Spesi kimia yang bertindak sebagai Oksidator di dalam hukum reaksi redoks mengalami...", options: ["Kenaikan bilangan oksidasi", "Penurunan bilangan oksidasi (Reduksi)", "Pelepasan elektron bebas", "Pembentukan endapan logam"], ans: 1, exp: "Oksidator memicu zat lain teroksidasi, sedangkan zat itu sendiri mengalami reduksi (penurunan biloks / penangkapan elektron)." },
    { q: "Tentukan nilai bilangan oksidasi (biloks) bagi atom Oksigen di dalam senyawa Peroksida H2O2...", options: ["-2", "-1", "0", "+1"], ans: 1, exp: "Pengecualian aturan biloks, pada senyawa peroksida biloks atom O bernilai -1 (karena H bernilai +1)." },
    { q: "Senyawa hidrokarbon tipe Alkena dicirikan oleh adanya struktur...", options: ["Ikatan tunggal C-C", "Ikatan rangkap dua C=C", "Ikatan rangkap tiga", "Cincin benzena"], ans: 1, exp: "Alkena merupakan senyawa hidrokarbon alifatik tidak jenuh dengan satu atau lebih ikatan rangkap dua." },
    { q: "Bentuk alotrop karbon yang memiliki karakteristik mampu menghantarkan arus listrik dengan baik adalah...", options: ["Intan murni", "Grafit", "Fulerena", "Arang aktif"], ans: 1, exp: "Struktur delokalisasi elektron antar lapisan karbon datar pada grafit membuatnya bersifat konduktif." },
    { q: "Sistem pencampuran zat homogen yang tidak dapat dipisahkan lagi komponen penyusunnya menggunakan penyaringan biasa adalah...", options: ["Suspensi kasar", "Larutan sejati", "Koloid", "Emulsi minyak"], ans: 1, exp: "Larutan berukuran partikel < 1 nm, tercampur sempurna dalam satu fasa tunggal stabil." },
    { q: "Nilai rentang pH normal bagi cairan darah di dalam tubuh manusia yang sehat adalah...", options: ["1,5 - 2,5", "5,5 - 6,5", "7,35 - 7,45", "9,0 - 10,0"], ans: 2, exp: "pH darah dijaga ketat di area netral cenderung agak basa lemah oleh sistem buffer biologis karbonat." },
    { q: "Sistem larutan penyangga utama yang bekerja menjaga pH plasma darah luar sel adalah...", options: ["Sistem buffer fosfat", "Sistem buffer bikarbonat (H2CO3 / HCO3-)", "Asam asetat encer", "Hemoglobin aktif"], ans: 1, exp: "Buffer bikarbonat adalah pengendali utama pH darah luar sel dari pengaruh metabolisme asam." },
    { q: "Proses pembuatan koloid dengan cara menggerus partikel besar menjadi seukuran koloid disebut cara...", options: ["Kondensasi", "Dispersi Mekanik", "Koagulasi masal", "Peptisasi kimia"], ans: 1, exp: "Dispersi mengubah ukuran makro/kasar menjadi berukuran mikro koloid (1 - 100 nm)." },
    { q: "Bahan kimia Tawas Al2(SO4)3 dimanfaatkan pada proses pengolahan air bersih guna memicu proses...", options: ["Filtrasi mikro", "Desinfeksi kuman", "Koagulasi lumpur (Penggumpalan)", "Destilasi uap"], ans: 2, exp: "Ion Al3+ menetralisir muatan negatif koloid lumpur air, sehingga kotoran menggumpal dan mudah mengendap." },
    { q: "Komponen fraksi minyak bumi yang terkumpul paling awal di puncak kolom distilasi bertingkat adalah...", options: ["Bensin premium", "Aspal hitam", "Kerosin (Minyak tanah)", "Gas hidrokarbon ringkas (LPG)"], ans: 3, exp: "Gas ringkas (C1-C4) menguap duluan karena memiliki titik didih paling rendah dibanding fraksi cair lainnya." },
    { q: "Logam berikut yang paling rentan mengalami korosi atau perkaratan alami di udara terbuka adalah...", options: ["Besi (Fe)", "Emas (Au)", "Platina (Pt)", "Tembaga (Cu)"], ans: 0, exp: "Besi mempunyai potensial reduksi standar kecil (E0 negatif), sangat mudah teroksidasi oleh oksigen dan kelembaban air." },
    { q: "Bahan aktif utama yang diaplikasikan ke dalam cairan pemutih baju komersial adalah...", options: ["Natrium Klorida (NaCl)", "Natrium Hipoklorit (NaClO)", "Natrium Hidroksida (NaOH)", "Asam Klorida (HCl)"], ans: 1, exp: "NaClO merupakan senyawa oksidator kuat yang mendegradasi gugus warna (kromofor) noda pakaian." },
    { q: "Pupuk tanaman kimia jenis Urea diproduksi masal karena kaya akan asupan unsur esensial...", options: ["Fosfor (P)", "Kalium (K)", "Nitrogen (N)", "Magnesium (Mg)"], ans: 2, exp: "Urea CO(NH2)2 menyuplai unsur Nitrogen esensial untuk merangsang pertumbuhan vegetatif daun tanaman." },
    { q: "Ikatan kovalen amida khusus yang bertugas merangkai monomer asam amino membentuk struktur makromolekul protein dinamakan...", options: ["Ikatan Glikosidik", "Ikatan Ester", "Ikatan Peptida", "Ikatan Fosfodiester"], ans: 2, exp: "Ikatan peptida mengikat gugus karboksil satu asam amino dengan gugus amina dari asam amino tetangganya." },
    { q: "Enzim pencernaan ptialin di dalam rongga mulut bertugas memotong makromolekul amilum menjadi...", options: ["Maltosa / Glukosa sederhana", "Asam Lemak bebas", "Gliserol", "Asam Amino esensial"], ans: 0, exp: "Enzim amilase (ptialin) menghidrolisis ikatan glikosidik pati menjadi karbohidrat rantai pendek (disakarida)." },
    { q: "Komoditas pipa air paralon tangguh terbuat dari material polimer sintetik bernama...", options: ["Polietilena", "Polipropilena", "Polivinitil Klorida (PVC)", "Polistirena"], options: ["Polietilena", "Polipropilena", "Polivinitil Klorida (PVC)", "Polistirena"], ans: 2, exp: "PVC dibentuk via polimerisasi adisi monomer vinil klorida sintetik." },
    { q: "Metode standar memisahkan kristal garam murni dari air laut adalah dengan cara...", options: ["Evaporasi dan Kristalisasi", "Kromatografi kertas", "Sublimasi uap", "Ekstraksi pelarut"], ans: 0, exp: "Air laut dijemur menguap (evaporasi), menyisakan zat terlarut yang memadat membentuk kristal garam." },
    { q: "Ciri larutan elektrolit kuat yang diuji dengan alat konduktivitas listrik rakitan adalah...", options: ["Lampu menyala terang dan banyak gelembung gas", "Lampu redup tanpa gelembung", "Lampu mati tanpa gelembung", "Lampu pecah tiba-tiba"], ans: 0, exp: "Elektrolit kuat terurai sempurna menjadi ion-ion bebas konduktif pembawa muatan listrik." },
    { q: "Manakah struktur rumus molekul alkana yang mewakili senyawa Butana?", options: ["CH4", "C2H6", "C3H8", "C4H10"], ans: 3, exp: "Rumus umum alkana CnH2n+2. Untuk Butana (n=4) maka jumlah H = (2x4)+2 = 10." },
    { q: "Warna emisi nyala api spesifik kuning cerah dihasilkan oleh pembakaran senyawa garam logam...", options: ["Natrium (Na)", "Kalium (K)", "Tembaga (Cu)", "Kalsium (Ca)"], ans: 0, exp: "Uji nyala mengeksitasi elektron kulit atom. Na memancarkan spektrum cahaya kuning tajam khas." },
    { q: "Senyawa penyusun utama dari mineral batuan kapur alam adalah...", options: ["Kalsium Oksida (CaO)", "Kalsium Karbonat (CaCO3)", "Kalsium Sulfat (CaSO4)", "Kalsium Hidroksida"], ans: 1, exp: "Batu kapur, marmer, dan cangkang kerang tersusun atas senyawa garam kalsium karbonat CaCO3." },
    { q: "Gas penyusun volume atmosfer terbesar di planet bumi kita ini adalah...", options: ["Gas Oksigen (O2)", "Gas Nitrogen (N2)", "Gas Argon (Ar)", "Gas Karbon Dioksida"], ans: 1, exp: "Atmosfer kering bumi mengandung sekitar 78% gas Nitrogen (N2) lembap bebas." },
    { q: "Satu-satunya unsur logam berwujud cair murni pada kondisi suhu kamar standar adalah...", options: ["Bromin (Br)", "Galium (Ga)", "Raksa (Hg / Merkuri)", "Fransium (Fr)"], ans: 2, exp: "Raksa (Hg) mempertahankan fase cair pada suhu kamar akibat konfigurasi elektron stabil yang menurunkan gaya tarik antar-atom." },
    { q: "Struktur inti atom berdasarkan penemuan fisika modern tersusun atas...", options: ["Elektron bermuatan negatif saja", "Proton bermuatan positif dan Elektron", "Proton bermuatan positif dan Neutron netral", "Hanya dikelilingi awan hampa"], ans: 2, exp: "Inti atom bermassa padat (nukleus) diisi oleh nukleon berupa proton (+) dan neutron (netral)." },
    { q: "Ilmuwan perintis teori model atom mekanika kuantum lintasan orbit stasioner mirip tata surya mini adalah...", options: ["J.J. Thomson", "Niels Bohr", "John Dalton", "Ernest Rutherford"], ans: 1, exp: "Niels Bohr mengajukan postulat lintasan stasioner melingkar berenergi tetap bagi pergerakan elektron." },
    { q: "Gugus fungsi senyawa alkohol medis antiseptik (Etanol) memiliki rumus struktur kimia...", options: ["CH3-O-CH3", "CH3-CH2-OH", "CH3-COOH", "CH3-CHO"], ans: 1, exp: "Etanol merupakan senyawa alkohol primer rantai pendek dua karbon dengan rumus molekul C2H5OH." },
    { q: "Proses safonifikasi / reaksi pembuatan sabun memanfaatkan bahan baku lemak cair ditambahkan...", options: ["Asam klorida encer", "Larutan basa kuat (NaOH / KOH)", "Zat pewarna tekstil", "Alkohol pekat murni"], ans: 1, exp: "Hidrolisis ester trigliserida (lemak) oleh basa kuat melahirkan gliserol beserta garam karboksilat (sabun)." },
    { q: "Pemicu keindahan variasi warna larutan senyawa kompleks logam transisi periode 4 adalah...", options: ["Adanya eksitasi elektron pada subkulit d yang belum terisi penuh", "Ukuran nomor massanya super besar", "Mudah larut dalam air mineral", "Mempunyai sifat radioaktif aktif"], ans: 0, exp: "Adanya celah energi (splitting) pada orbital d tak penuh memungkinkannya menyerap panjang gelombang spektrum warna cahaya tampak." },
    { q: "Gejala hamburan berkas sorot cahaya lampu mobil oleh partikel kabut di malam hari merupakan contoh sifat...", options: ["Gerak Brown koloid", "Efek Tyndall koloid", "Elektroforesis", "Adsorpsi ion permukaan"], ans: 1, exp: "Efek Tyndall adalah fenomena fisik penghamburan berkas sinar oleh partikel-partikel fase terdispersi koloid." },
    { q: "Bahan penyangga (buffer) bekerja mempertahankan kestabilan pH sistem dari gangguan pengaruh...", options: ["Penambahan sedikit senyawa asam atau sedikit senyawa basa kuat", "Pemanasan suhu tinggi ekstrim", "Pengocokan mekanik bejana larutan", "Penambahan air dalam jumlah galon besar"], ans: 0, exp: "Buffer mengandung pasangan asam-basa konjugasi yang dapat menetralisir kelebihan ion H+ atau ion OH-." }
];

let currentExamIdx = 0; let userAnswers = new Array(examDatabase.length).fill(null); let examTimerInterval;
function startExamEngine() {
    document.getElementById("exam-start-box").classList.add("hidden-panel"); document.getElementById("exam-result-box").classList.add("hidden-panel"); document.getElementById("exam-play-box").classList.remove("hidden-panel");
    currentExamIdx = 0; userAnswers.fill(null); let timeLeft = 3600; clearInterval(examTimerInterval);
    examTimerInterval = setInterval(() => { timeLeft--; let m = Math.floor(timeLeft / 60).toString().padStart(2, '0'); let s = (timeLeft % 60).toString().padStart(2, '0'); document.getElementById("exam-time-text").innerText = `${m}:${s}`; if (timeLeft <= 0) { clearInterval(examTimerInterval); finishExam(); } }, 1000);
    renderExamQuestion();
}
function renderExamQuestion() {
    const data = examDatabase[currentExamIdx]; document.getElementById("exam-progress").innerText = `Soal Ujian ${currentExamIdx + 1}/${examDatabase.length}`; document.getElementById("exam-question-text").innerText = data.q;
    const optsBox = document.getElementById("exam-options"); optsBox.innerHTML = ""; const labels = ["A", "B", "C", "D"];
    data.options.forEach((optText, i) => { const btn = document.createElement("div"); btn.className = "exam-opt"; if (userAnswers[currentExamIdx] === i) btn.classList.add("selected"); btn.innerHTML = `<span class="exam-opt-letter">${labels[i]}</span> ${optText}`; btn.onclick = () => { userAnswers[currentExamIdx] = i; renderExamQuestion(); playSound('click'); }; optsBox.appendChild(btn); });
    document.getElementById("btn-exam-prev").disabled = (currentExamIdx === 0);
    const nextBtn = document.getElementById("btn-exam-next"); if (currentExamIdx === examDatabase.length - 1) { nextBtn.innerText = "Selesai & Kumpulkan"; nextBtn.style.background = "#ef4444"; } else { nextBtn.innerText = "Selanjutnya ▶"; nextBtn.style.background = "#3b82f6"; }
}
document.getElementById("btn-exam-prev").onclick = () => { if (currentExamIdx > 0) { currentExamIdx--; renderExamQuestion(); playSound('click'); } };
document.getElementById("btn-exam-next").onclick = () => { if (currentExamIdx < examDatabase.length - 1) { currentExamIdx++; renderExamQuestion(); playSound('click'); } else { finishExam(); } };
function finishExam() {
    clearInterval(examTimerInterval); document.getElementById("exam-play-box").classList.add("hidden-panel"); document.getElementById("exam-result-box").classList.remove("hidden-panel"); playSound('correct');
    let score = 0; const reviewBox = document.getElementById("exam-review-container"); reviewBox.innerHTML = "";
    examDatabase.forEach((q, i) => { 
        const isCorrect = userAnswers[i] === q.ans; if (isCorrect) score += 2; 
        const item = document.createElement("div"); item.className = `review-item ${isCorrect ? 'correct-ans' : 'wrong-ans'}`; const labels = ["A", "B", "C", "D"]; const userAnsText = userAnswers[i] !== null ? q.options[userAnswers[i]] : "Tidak Dijawab"; const correctAnsText = q.options[q.ans]; item.innerHTML = `<div class="review-q">${i+1}. ${q.q}</div><div class="review-a">Jawabanmu: <strong style="color:${isCorrect?'#10b981':'#ef4444'}">${userAnsText}</strong></div>${!isCorrect ? `<div class="review-a">Kunci: <strong>${correctAnsText}</strong></div>` : ''}<div class="review-exp"><strong>📚 Pembahasan Analisis:</strong> ${q.exp}</div>`; reviewBox.appendChild(item); 
    });
    document.getElementById("exam-final-score").innerText = `Nilai Akhir Ujian Pro: ${score} / 100`; if (score >= 80) { addXP(100, "Lulus Ujian!"); if (typeof confetti !== 'undefined') confetti({ particleCount: 150, spread: 80 }); } else { addXP(30, "Ikut Ujian"); }
}
document.getElementById("btn-exam-retry").onclick = () => { document.getElementById("exam-result-box").classList.add("hidden-panel"); document.getElementById("exam-start-box").classList.remove("hidden-panel"); playSound('click'); };
