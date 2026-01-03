export const facilitiesData = [
    {
        id: 1,
        title: "CNC Centers",
        description: "CNC Turning, Milling and Grinding Centers with advanced computer numerical control systems.",
        image: "/assets/images/machines/all-machines.png",
    },
    {
        id: 2,
        title: "Measuring Tools",
        description: "Extensive range of high-precision measuring tools with all required instruments for quality assurance.",
        image: "/assets/images/measurement-tools/micrometer.png",
    },
    {
        id: 3,
        title: "Vendor Network",
        description: "Strong network of vendors for Wire cut, Blackening, and specialized processes.",
        image: "/assets/images/facilities/vendor-network.png",
    },
    {
        id: 4,
        title: "Experienced Team",
        description: "Our team of experts, with years of experience in precision manufacturing and engineering.",
        image: "/assets/images/facilities/experienced-team.png",
    },
];

export const cncMachinesData = [
    {
        id: 1,
        name: "Jyoti DX200 5A",
        title: "Jyoti DX200 5A",
        category: "CNC Turning Center",
        image: "/assets/images/facilities/cnc-centers.png",
        images: ["/assets/images/facilities/cnc-centers.png", "/assets/images/facilities/cnc-centers.png"],
        description: "The Jyoti DX 200-5A is a high-tech CNC turning center designed for high productivity, featuring a rigid bed with a 30° slant saddle, a high-speed servo turret, and options for various workpiece sizes.",
        specifications: [
            { label: "Spindle Motor Power (Siemens)", value: "13.5/9 kW" },
            { label: "Spindle Motor Power (Fanuc)", value: "11/9 kW" },
            { label: "Spindle Speed Range", value: "50-4000 RPM" },
            { label: "Spindle Bore", value: "70 mm" },
            { label: "Tool Change Time", value: "0.5 seconds" },
            { label: "Bed Construction", value: "30° Slant Saddle" }
        ],
        features: [
            "Rigid bed and single piece 30° slant saddle construction",
            "Rigid headstock & Heavy duty spindle",
            "High precision L.M. guide ways",
            "Bi-directional high speed servo turret",
            "Fast tool changing time just 0.5 sec",
            "Efficient chip disposal",
            "Tail stock with hydraulic quill",
            "Hydraulic chucking",
            "Auto and manual coolant system",
            "Electrical with quality devices & panel with A.C",
            "Centralized & programmable lubrication"
        ],
        applications: [
            "Production components",
            "General purpose machining",
            "Prototype development",
            "Heavy cutting operations",
            "High precision turning"
        ]
    },
    {
        id: 2,
        name: "Jyoti VMC 1060",
        title: "Jyoti VMC 1060",
        category: "Vertical Machining Center",
        image: "/assets/images/machines/vmc 1060.png",
        images: ["/assets/images/machines/vmc 1060.png", "/assets/images/machines/vmc 1060.png"],
        description: "The Jyoti VMC 1060 is a Vertical Machining Center from Jyoti CNC Automation, designed for high precision and reliability in demanding applications like die/mold manufacturing and the automotive industry.",
        specifications: [
            { label: "X-Axis Travel", value: "1000 mm" },
            { label: "Y-Axis Travel", value: "600 mm" },
            { label: "Z-Axis Travel", value: "650 mm" },
            { label: "Spindle Speed", value: "10,000 RPM" },
            { label: "Tool Magazine", value: "24 Tools" },
            { label: "Table Size", value: "1100 x 600 mm" }
        ],
        features: [
            "Robust structure for demanding applications",
            "High dynamic performance for rapid axis movements",
            "Wide working area for large workpieces",
            "Superior stability and accuracy",
            "Ergonomic and tilting operator panel",
            "Precision linear guides",
            "High-speed spindle capabilities",
            "Through-spindle coolant system"
        ],
        applications: [
            "Die and mold manufacturing",
            "Automotive industry components",
            "Large fixtures and jigs",
            "Precision production parts",
            "Heavy-duty machining operations"
        ]
    },
    {
        id: 3,
        name: "Jyoti VMC 850 4th Axis",
        title: "Jyoti VMC 850 (4-Axis)",
        category: "4-Axis Vertical Machining Center",
        image: "/assets/images/machines/vmc-850.png",
        images: ["/assets/images/machines/vmc-850.png", "/assets/images/machines/vmc-850.png"],
        description: "The Jyoti VMC 850 (4-Axis) is a robust vertical machining center designed for precision and efficiency in operations like die and mold making.",
        specifications: [
            { label: "X-Axis Travel", value: "820 mm" },
            { label: "Y-Axis Travel", value: "510 mm" },
            { label: "Z-Axis Travel", value: "510 mm" },
            { label: "Spindle Speed", value: "8,000 RPM" },
            { label: "Spindle Power", value: "7.5 kW" },
            { label: "Control System", value: "Siemens SINUMERIK 828D" },
            { label: "Approximate Weight", value: "5,700 kg" },
            { label: "Axes", value: "4-Axis" }
        ],
        features: [
            "Heavy, wide-based structure for improved vibration damping and stability",
            "Broad column and wide base for heavy-duty cutting",
            "High dynamics and acceleration for precision and speed",
            "4th axis rotary table for multi-side machining without re-fixturing",
            "Siemens SINUMERIK 828D control system",
            "Optional coolant-through-spindle (CTS)",
            "Optional higher RPM spindles available",
            "Various probe options for increased flexibility"
        ],
        applications: [
            "Die and mold making",
            "Multi-sided parts machining",
            "Complex fixtures and components",
            "Rotational components",
            "Valve bodies",
            "Heavy-duty precision machining"
        ]
    },
    {
        id: 4,
        name: "Jyoti VMC 850 3rd Axis",
        title: "Jyoti VMC 850 (3-Axis)",
        category: "3-Axis Vertical Machining Center",
        image: "/assets/images/machines/vmc-850.png",
        images: ["/assets/images/machines/vmc-850.png", "/assets/images/machines/vmc-850.png"],
        description: "The Jyoti VMC 850 is a 3-axis vertical machining center designed for high-speed, accuracy, and reliability in operations like milling, drilling, and cutting.",
        specifications: [
            { label: "X-Axis Travel", value: "820 mm" },
            { label: "Y-Axis Travel", value: "510 mm" },
            { label: "Z-Axis Travel", value: "510 mm" },
            { label: "Spindle Speed", value: "8,000 RPM" },
            { label: "Control System", value: "Siemens SINUMERIK 828D" },
            { label: "Table Size", value: "1000 x 530 mm" },
            { label: "Machine Depth", value: "~2,500 mm" },
            { label: "Approximate Weight", value: "5,700 kg" },
            { label: "Acceleration", value: "Up to 5 m/s²" }
        ],
        features: [
            "Rigid C-frame construction with broad base and column",
            "Graded, heat-treated casting for stability",
            "3-axis movement (X, Y, Z) for high precision",
            "High acceleration rates up to 5 m/s²",
            "Ceramic bearings for spindle (available)",
            "High load-carrying capacity table",
            "Wider linear motion guideways",
            "Optional high-speed spindle and through-spindle coolant",
            "Can be adapted for 4th axis use"
        ],
        applications: [
            "High-end die and mold sector",
            "Milling operations",
            "Drilling and cutting",
            "Standard fixtures and production components",
            "General purpose machining",
            "Prototype development",
            "Demanding high-precision applications"
        ]
    }
];

export const measurementToolsData = [
    {
        id: 1,
        name: "Dial Indicator Set with Stand",
        title: "Dial Indicator Set with Stand",
        category: "Measurement Setup",
        range: "Professional Grade",
        accuracy: "High Precision",
        image: "/assets/images/measurement-tools/dial-indicator-with-stand.png",
        images: ["/assets/images/measurement-tools/dial-indicator-with-stand.png"],
        description: "Complete Mitutoyo dial indicator set with universal magnetic stand.",
        specifications: [
            { label: "Dial Type", value: "Pocket Dial Indicator" },
            { label: "Stand Type", value: "Universal Magnetic Base" },
            { label: "Magnetic Force", value: "60 kg" },
            { label: "Reach", value: "300 mm" },
            { label: "Fine Adjustment", value: "Yes" },
            { label: "On/Off Switch", value: "Magnetic control" }
        ],
        features: ["Universal magnetic base", "Flexible arm positioning", "Fine adjustment mechanism", "Strong magnetic force", "Quick on/off switch", "Compact storage case"],
        applications: ["Machine setup", "Part inspection", "Runout checking", "Surface measurement"]
    },
    {
        id: 2,
        name: "Micrometer Set Mitutoyo Make",
        title: "Micrometer Set (Mitutoyo)",
        category: "Precision Measurement",
        range: "0 – 200 mm",
        accuracy: "±0.001 mm",
        image: "/assets/images/measurement-tools/micrometer.png",
        images: ["/assets/images/measurement-tools/micrometer.png"],
        description: "Professional-grade Mitutoyo micrometer set for ultra-precise external measurements.",
        specifications: [
            { label: "Measuring Range", value: "0 – 200 mm (Set)" },
            { label: "Resolution", value: "0.001 mm" },
            { label: "Accuracy", value: "±0.001 mm" },
            { label: "Measuring Face", value: "Carbide Tipped" },
            { label: "Set Contents", value: "8 Pieces" },
            { label: "Standard", value: "DIN 863" }
        ],
        features: ["Carbide measuring faces", "Ratchet stop for constant force", "Spindle lock mechanism", "Satin chrome finish", "Heat insulated frame", "Supplied with standards"],
        applications: ["Shaft diameter measurement", "Thickness measurement", "Precision part inspection", "Quality control"]
    },
    {
        id: 3,
        name: "Bore Gauge Set",
        title: "Bore Gauge Set",
        category: "Internal Measurement",
        range: "18 – 150 mm",
        accuracy: "±0.002 mm",
        image: "/assets/images/measurement-tools/bore-gauge.png",
        images: ["/assets/images/measurement-tools/bore-gauge.png"],
        description: "Precision bore gauge set with dial indicator for accurate internal diameter measurements.",
        specifications: [
            { label: "Measuring Range", value: "18 – 150 mm" },
            { label: "Resolution", value: "0.002 mm" },
            { label: "Accuracy", value: "±0.003 mm" },
            { label: "Dial Indicator", value: "0.002 mm graduation" },
            { label: "Anvils", value: "Interchangeable" },
            { label: "Case", value: "Wooden storage box" }
        ],
        features: ["Three-point contact measurement", "Self-centering design", "Interchangeable anvils", "High-precision dial indicator", "Carbide contact points", "Complete with setting rings"],
        applications: ["Bore diameter measurement", "Hole inspection", "Internal groove measurement", "Cylinder bore checking"]
    },
    {
        id: 4,
        name: "Round Dial Mitutoyo Make",
        title: "Dial Indicator (Mitutoyo)",
        category: "Comparative Measurement",
        range: "0.01 mm & 0.001 mm",
        accuracy: "High Precision",
        image: "/assets/images/measurement-tools/dial-indicator.png",
        images: ["/assets/images/measurement-tools/dial-indicator.png"],
        description: "Professional Mitutoyo dial indicators with both 0.01mm and 0.001mm least count.",
        specifications: [
            { label: "Least Count", value: "0.01 mm / 0.001 mm" },
            { label: "Measuring Range", value: "10 mm" },
            { label: "Dial Reading", value: "0-100" },
            { label: "Back Type", value: "Lug back" },
            { label: "Contact Point", value: "Ø4mm spherical" },
            { label: "Stem Diameter", value: "Ø8 mm" }
        ],
        features: ["High accuracy dial reading", "Shock-proof mechanism", "Jeweled bearings", "Adjustable tolerance markers", "Lifting lever (optional)", "Various contact point options"],
        applications: ["Runout measurement", "Flatness checking", "Concentricity measurement", "Setup and alignment"]
    },
    {
        id: 5,
        name: "Zero Grade Granite Surface Plate",
        title: "Zero Grade Granite Surface Plate",
        category: "Reference Surface",
        range: "1000 x 1000 mm",
        accuracy: "Grade 0",
        image: "/assets/images/measurement-tools/granite-surface-plate.png",
        images: ["/assets/images/measurement-tools/granite-surface-plate.png"],
        description: "Laboratory-grade granite surface plate with Zero Grade accuracy.",
        specifications: [
            { label: "Size", value: "1000 x 1000 mm" },
            { label: "Thickness", value: "200 mm" },
            { label: "Grade", value: "0 (AAA)" },
            { label: "Flatness", value: "±0.0025 mm" },
            { label: "Material", value: "Black Granite" },
            { label: "Stand", value: "Rigid steel stand" }
        ],
        features: ["Zero Grade (AAA) accuracy", "Non-magnetic material", "Excellent thermal stability", "Wear-resistant surface", "Rust and corrosion proof", "Calibration certificate included"],
        applications: ["Precision layout work", "Height gauge measurements", "Flatness inspection", "CMM reference surface"]
    },
    {
        id: 6,
        name: "Digital Vernier Calliper",
        title: "Digital Vernier Calliper",
        category: "Linear Measurement",
        range: "0 – 300 mm",
        accuracy: "±0.01 mm",
        image: "/assets/images/measurement-tools/digital-verniar.png",
        images: ["/assets/images/measurement-tools/digital-verniar.png"],
        description: "High-precision digital vernier calliper for accurate measurement.",
        specifications: [
            { label: "Measuring Range", value: "0 – 300 mm" },
            { label: "Resolution", value: "0.01 mm" },
            { label: "Accuracy", value: "±0.02 mm" },
            { label: "Display", value: "LCD Digital" },
            { label: "Battery Life", value: "~2000 hours" },
            { label: "Material", value: "Hardened Stainless Steel" }
        ],
        features: ["Digital LCD display", "Inch/Metric conversion", "Zero setting at any position", "Data output port", "Automatic power off", "Dust and water resistant (IP54)"],
        applications: ["External diameter measurement", "Internal diameter measurement", "Depth measurement", "Step measurement"]
    },
    {
        id: 7,
        name: "Digital Height Gauge",
        title: "Digital Height Gauge 600mm",
        category: "Height Measurement",
        range: "0 – 600 mm",
        accuracy: "±0.01 mm",
        image: "/assets/images/measurement-tools/digital-height-gauge.png",
        images: ["/assets/images/measurement-tools/digital-height-gauge.png"],
        description: "High-precision digital height gauge for accurate vertical measurements.",
        specifications: [
            { label: "Measuring Range", value: "0 – 600 mm" },
            { label: "Resolution", value: "0.01 mm" },
            { label: "Accuracy", value: "±0.02 mm" },
            { label: "Display", value: "Large LCD" },
            { label: "Drive", value: "Motorized" },
            { label: "Base", value: "Hardened steel base" }
        ],
        features: ["Motorized fine adjustment", "Large digital display", "Preset and zero functions", "Data output capability", "Inch/mm conversion", "Air bearing slide (smooth movement)"],
        applications: ["Height measurement", "Step measurement", "Layout and marking", "Quality inspection"]
    }
];
