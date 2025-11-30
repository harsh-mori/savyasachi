// ============================================
// SAVYA-SACHI ENGINEERING - CENTRALIZED DATA
// ============================================
// Update all website content from this single file
// Future-ready for admin panel integration

export const siteData = {
  // ==================== COMPANY INFO ====================
  company: {
    name: "Savyasachi Engineering",
    tagline: "Your Partner in Precision Workholding",
    description: "Leading provider of precision workholding solutions",
    brandColor: "#FDB813",
    founded: "2017",
    clientsServed: "250+",
    experience: "20+",
  },

  // ==================== CONTACT INFO ====================
  contact: {
    phone: "+91 81558 82225",
    email: "info@savya-sachi.com",
    address: {
      street: "Street 2, Global Industrial Park",
      landmark: "Near Kishan Petrol pump",
      city: "Rajkot",
      state: "Gujarat",
      country: "India",
      highway: "Rajkot – Gondal Highway",
    },
    social: {
      linkedin: "https://www.linkedin.com/company/savya-sachi-engineering",
      twitter: "https://twitter.com/savyasachi",
      email: "info@savya-sachi.com",
    },
  },

  // ==================== NAVIGATION ====================
  navigation: [
    { id: 1, name: "Home", path: "/" },
    {
      id: 2,
      name: "About Us",
      path: "/about",
      hasDropdown: true,
      dropdownItems: [
        {
          title: "Meet the Leader",
          description: "Meet our founder and leader",
          icon: "user",
          path: "/about/leader"
        },
        {
          title: "Our Clients",
          description: "Trusted by industry leaders",
          icon: "handshake",
          path: "/about/clients"
        }
      ]
    },
    {
      id: 3,
      name: "Facilities",
      path: "/facilities",
      hasDropdown: true,
      dropdownItems: [
        {
          title: "CNC Machines",
          description: "Advanced CNC machining centers",
          icon: "wrench",
          path: "/facilities/cnc-machines"
        },
        {
          title: "Measurement Tools",
          description: "High-precision measurement equipment",
          icon: "ruler",
          path: "/facilities/measurement-tools"
        }
      ]
    },
    {
      id: 4,
      name: "Products",
      path: "/products",
      hasDropdown: true,
      dropdownItems: [
        {
          title: "Mechanical Jigs & Fixtures",
          description: "Precision mechanical workholding",
          icon: "wrench",
          path: "/products/mechanical-fixtures"
        },
        {
          title: "Hydraulic/Pneumatic Fixtures",
          description: "Advanced hydraulic and pneumatic systems",
          icon: "wrench",
          path: "/products/hydraulic-fixtures"
        },
        {
          title: "Zero Point Clamping",
          description: "Quick-change clamping systems",
          icon: "target",
          path: "/products/zero-point-clamping"
        },
        {
          title: "Turning Fixtures & Collets",
          description: "Turning fixtures and collet chucks",
          icon: "wrench",
          path: "/products/turning-fixtures"
        },
        {
          title: "Standard Workholding",
          description: "Industry standard products",
          icon: "box",
          path: "/products/standard-workholding"
        }
      ]
    },
    { id: 5, name: "Contact Us", path: "/contact" },
  ],

  // ==================== HERO SECTION ====================
  hero: {
    title: "Your Partner in Precision Workholding",
    subtitle: "Savyasachi Engineering is a leading provider of precision workholding solutions.",
    cta: {
      primary: { text: "Learn More", link: "/about" },
      secondary: { text: "Contact Us", link: "/contact" },
    },
    stats: [
      { number: "250+", label: "Clients Served" },
      { number: "20+", label: "Years Experience" },
      { number: "100%", label: "Quality Assured" },
    ],
  },

  // ==================== ABOUT SECTION ====================
  about: {
    title: "Welcome to Savyasachi Engineering",
    highlight: "We have Served 250+ Clients across various engineering sectors",
    description: `Founded in 2017 under the leadership of Mr. Dharmesh Mori with 20+ years of manufacturing experience. We develop precision components for aerospace, defense, automotive, locomotive valves, and fittings. We offer all types of workholding solutions with a wide range of applications and machines.`,
    founder: {
      name: "Mr. Dharmesh Mori",
      experience: "20+ years",
      expertise: "Manufacturing & Precision Engineering",
    },
    industries: [
      "Aerospace",
      "Defense",
      "Automotive",
      "Locomotive Valves",
      "Precision Fittings",
    ],
    mission: {
      title: "Our Mission",
      description: "To deliver world-class precision workholding solutions that enable our clients to achieve manufacturing excellence. We are committed to innovation, quality, and customer satisfaction in every project we undertake.",
      icon: "🎯"
    },
    vision: {
      title: "Our Vision",
      description: "To be the leading provider of precision workholding solutions in India and expand globally, setting new standards in quality, reliability, and technological advancement in the manufacturing industry.",
      icon: "🔭"
    },
  },

  // ==================== SERVICES ====================
  services: [
    {
      id: 1,
      title: "Work Holding Jigs & Fixtures",
      icon: "🔧",
      description:
        "We specialize in manufacturing a comprehensive range of work holding solutions, including Mechanical, Hydraulic, Pneumatic, and Zero Point Systems. Our fixtures are designed to enhance precision, efficiency, and stability in Turning, Milling, and Welding applications, ensuring optimal performance across various machining processes.",
      features: ["Precision Engineering", "Maximum Efficiency", "Superior Stability"],
      image: "/images/products/mechanical-fixtures/Mechanical Jigs and Fixtures 3.png",
    },
    {
      id: 2,
      title: "Precision Job Work Services",
      icon: "⚙️",
      description:
        "We offer high-quality precision job work services across all engineering sectors. With extensive experience in manufacturing complex components, we provide superior accuracy, reliability, and efficiency, giving us a competitive edge in the industry.",
      features: ["Superior Accuracy", "Unmatched Reliability", "Enhanced Efficiency"],
      image: "/images/services/precision-job-work.jpg",
    },
    {
      id: 3,
      title: "Turnkey Projects",
      icon: "🏭",
      description:
        "We specialize in executing turnkey projects for machining, offering end-to-end solutions from fixture development and CNC programming to cutting tool optimization and productivity enhancement. Our expertise ensures seamless integration and maximizes efficiency for our clients' manufacturing processes.",
      features: [
        "Complete Solutions",
        "CNC Programming",
        "Tool Optimization",
        "Productivity Enhancement",
      ],
      image: "/images/services/turnkey-projects.jpg",
    },
  ],

  // ==================== FACILITIES ====================
  facilities: [
    {
      id: 1,
      title: "Measuring Tools",
      icon: "📏",
      description:
        "Extensive range of high-precision measuring tools with all required instruments for quality assurance.",
      image: "/images/measurement-tools/micrometer.png",
    },
    {
      id: 2,
      title: "CNC Centers",
      icon: "🤖",
      description:
        "CNC Turning, Milling and Grinding Centers with advanced computer numerical control systems.",
      image: "/images/facilities/cnc-centers.png",
    },
    {
      id: 3,
      title: "Vendor Network",
      icon: "🤝",
      description: "Strong network of vendors for Wire cut, Blackening, and specialized processes.",
      image: "/images/facilities/vendor-network.png",
    },
    {
      id: 4,
      title: "Experienced Team",
      icon: "👷",
      description:
        "Our team of experts, with years of experience in precision manufacturing and engineering.",
      image: "/images/facilities/experienced-team.png",
    },
  ],

  // ==================== CNC MACHINES ====================
  cncMachines: [
    {
      id: 1,
      name: "Jyoti DX200 5A",
      title: "Jyoti DX200 5A",
      category: "CNC Turning Center",
      image: "/images/facilities/cnc-centers.png",
      images: [
        "/images/facilities/cnc-centers.png",
        "/images/facilities/cnc-centers.png"
      ],
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
      image: "/machines/vmc 1060.png",
      images: [
        "/machines/vmc 1060.png",
        "/machines/vmc 1060.png"
      ],
      description: "The Jyoti VMC 1060 is a Vertical Machining Center from Jyoti CNC Automation, designed for high precision and reliability in demanding applications like die/mold manufacturing and the automotive industry. Built with a robust structure and high dynamic performance for rapid axis movements, offering a wide working area with stability and accuracy.",
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
      image: "/machines/vmc-850.png",
      images: [
        "/machines/vmc-850.png",
        "/machines/vmc-850.png"
      ],
      description: "The Jyoti VMC 850 (4-Axis) is a robust vertical machining center designed for precision and efficiency in operations like die and mold making. It features a heavy, wide-based structure for stability, high dynamic performance, and a 4th axis rotary table for machining multiple sides of a part in a single setup.",
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
      image: "/machines/vmc-850.png",
      images: [
        "/machines/vmc-850.png",
        "/machines/vmc-850.png"
      ],
      description: "The Jyoti VMC 850 is a 3-axis vertical machining center from Jyoti CNC Automation Limited designed for high-speed, accuracy, and reliability in operations like milling, drilling, and cutting. Features a rigid, broad base and column structure for vibration damping, with a Siemens SINUMERIK 828D control and spindle speed of up to 8,000 RPM.",
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
  ],

  // ==================== MEASUREMENT TOOLS ====================
  measurementTools: [
    {
      id: 1,
      name: "Dial Indicator Set with Stand",
      title: "Dial Indicator Set with Stand",
      category: "Measurement Setup",
      range: "Professional Grade",
      accuracy: "High Precision",
      image: "/images/measurement-tools/dial-indicator-with-stand.png",
      images: [
        "/images/measurement-tools/dial-indicator-with-stand.png"
      ],
      description: "Complete Mitutoyo dial indicator set with universal magnetic stand. Versatile setup for various measurement applications with flexible positioning.",
      specifications: [
        { label: "Dial Type", value: "Pocket Dial Indicator" },
        { label: "Stand Type", value: "Universal Magnetic Base" },
        { label: "Magnetic Force", value: "60 kg" },
        { label: "Reach", value: "300 mm" },
        { label: "Fine Adjustment", value: "Yes" },
        { label: "On/Off Switch", value: "Magnetic control" }
      ],
      features: [
        "Universal magnetic base",
        "Flexible arm positioning",
        "Fine adjustment mechanism",
        "Strong magnetic force",
        "Quick on/off switch",
        "Compact storage case"
      ],
      applications: [
        "Machine setup",
        "Part inspection",
        "Runout checking",
        "Surface measurement"
      ]
    },
    {
      id: 2,
      name: "Micrometer Set Mitutoyo Make",
      title: "Micrometer Set (Mitutoyo)",
      category: "Precision Measurement",
      range: "0 – 200 mm",
      accuracy: "±0.001 mm",
      image: "/images/measurement-tools/micrometer.png",
      images: [
        "/images/measurement-tools/micrometer.png"
      ],
      description: "Professional-grade Mitutoyo micrometer set for ultra-precise external measurements. Complete set covering 0-200mm range with carbide measuring faces.",
      specifications: [
        { label: "Measuring Range", value: "0 – 200 mm (Set)" },
        { label: "Resolution", value: "0.001 mm" },
        { label: "Accuracy", value: "±0.001 mm" },
        { label: "Measuring Face", value: "Carbide Tipped" },
        { label: "Set Contents", value: "8 Pieces" },
        { label: "Standard", value: "DIN 863" }
      ],
      features: [
        "Carbide measuring faces",
        "Ratchet stop for constant force",
        "Spindle lock mechanism",
        "Satin chrome finish",
        "Heat insulated frame",
        "Supplied with standards"
      ],
      applications: [
        "Shaft diameter measurement",
        "Thickness measurement",
        "Precision part inspection",
        "Quality control"
      ]
    },
    {
      id: 3,
      name: "Bore Gauge Set",
      title: "Bore Gauge Set",
      category: "Internal Measurement",
      range: "18 – 150 mm",
      accuracy: "±0.002 mm",
      image: "/images/measurement-tools/bore-gauge.png",
      images: [
        "/images/measurement-tools/bore-gauge.png"
      ],
      description: "Precision bore gauge set with dial indicator for accurate internal diameter measurements. Essential for checking bores, holes, and internal grooves.",
      specifications: [
        { label: "Measuring Range", value: "18 – 150 mm" },
        { label: "Resolution", value: "0.002 mm" },
        { label: "Accuracy", value: "±0.003 mm" },
        { label: "Dial Indicator", value: "0.002 mm graduation" },
        { label: "Anvils", value: "Interchangeable" },
        { label: "Case", value: "Wooden storage box" }
      ],
      features: [
        "Three-point contact measurement",
        "Self-centering design",
        "Interchangeable anvils",
        "High-precision dial indicator",
        "Carbide contact points",
        "Complete with setting rings"
      ],
      applications: [
        "Bore diameter measurement",
        "Hole inspection",
        "Internal groove measurement",
        "Cylinder bore checking"
      ]
    },
    {
      id: 4,
      name: "Round Dial Mitutoyo Make",
      title: "Dial Indicator (Mitutoyo)",
      category: "Comparative Measurement",
      range: "0.01 mm & 0.001 mm",
      accuracy: "High Precision",
      image: "/images/measurement-tools/dial-indicator.png",
      images: [
        "/images/measurement-tools/dial-indicator.png"
      ],
      description: "Professional Mitutoyo dial indicators with both 0.01mm and 0.001mm least count. Perfect for comparative measurements, runout checking, and surface variation detection.",
      specifications: [
        { label: "Least Count", value: "0.01 mm / 0.001 mm" },
        { label: "Measuring Range", value: "10 mm" },
        { label: "Dial Reading", value: "0-100" },
        { label: "Back Type", value: "Lug back" },
        { label: "Contact Point", value: "Ø4mm spherical" },
        { label: "Stem Diameter", value: "Ø8 mm" }
      ],
      features: [
        "High accuracy dial reading",
        "Shock-proof mechanism",
        "Jeweled bearings",
        "Adjustable tolerance markers",
        "Lifting lever (optional)",
        "Various contact point options"
      ],
      applications: [
        "Runout measurement",
        "Flatness checking",
        "Concentricity measurement",
        "Setup and alignment"
      ]
    },
    {
      id: 5,
      name: "Zero Grade Granite Surface Plate",
      title: "Zero Grade Granite Surface Plate",
      category: "Reference Surface",
      range: "1000 x 1000 mm",
      accuracy: "Grade 0",
      image: "/images/measurement-tools/granite-surface-plate.png",
      images: [
        "/images/measurement-tools/granite-surface-plate.png"
      ],
      description: "Laboratory-grade granite surface plate with Zero Grade accuracy. Provides a perfectly flat reference surface for precision measurement and inspection operations.",
      specifications: [
        { label: "Size", value: "1000 x 1000 mm" },
        { label: "Thickness", value: "200 mm" },
        { label: "Grade", value: "0 (AAA)" },
        { label: "Flatness", value: "±0.0025 mm" },
        { label: "Material", value: "Black Granite" },
        { label: "Stand", value: "Rigid steel stand" }
      ],
      features: [
        "Zero Grade (AAA) accuracy",
        "Non-magnetic material",
        "Excellent thermal stability",
        "Wear-resistant surface",
        "Rust and corrosion proof",
        "Calibration certificate included"
      ],
      applications: [
        "Precision layout work",
        "Height gauge measurements",
        "Flatness inspection",
        "CMM reference surface"
      ]
    },
    {
      id: 6,
      name: "Digital Vernier Calliper",
      title: "Digital Vernier Calliper",
      category: "Linear Measurement",
      range: "0 – 300 mm",
      accuracy: "±0.01 mm",
      image: "/images/measurement-tools/digital-verniar.png",
      images: [
        "/images/measurement-tools/digital-verniar.png"
      ],
      description: "High-precision digital vernier calliper for accurate measurement of internal, external, depth and step dimensions. Features easy-to-read digital display and data output capability.",
      specifications: [
        { label: "Measuring Range", value: "0 – 300 mm" },
        { label: "Resolution", value: "0.01 mm" },
        { label: "Accuracy", value: "±0.02 mm" },
        { label: "Display", value: "LCD Digital" },
        { label: "Battery Life", value: "~2000 hours" },
        { label: "Material", value: "Hardened Stainless Steel" }
      ],
      features: [
        "Digital LCD display",
        "Inch/Metric conversion",
        "Zero setting at any position",
        "Data output port",
        "Automatic power off",
        "Dust and water resistant (IP54)"
      ],
      applications: [
        "External diameter measurement",
        "Internal diameter measurement",
        "Depth measurement",
        "Step measurement"
      ]
    },
    {
      id: 7,
      name: "Digital Height Gauge",
      title: "Digital Height Gauge 600mm",
      category: "Height Measurement",
      range: "0 – 600 mm",
      accuracy: "±0.01 mm",
      image: "/images/measurement-tools/digital-height-gauge.png",
      images: [
        "/images/measurement-tools/digital-height-gauge.png"
      ],
      description: "High-precision digital height gauge for accurate vertical measurements. Features motorized drive, digital display, and data output for efficient inspection work.",
      specifications: [
        { label: "Measuring Range", value: "0 – 600 mm" },
        { label: "Resolution", value: "0.01 mm" },
        { label: "Accuracy", value: "±0.02 mm" },
        { label: "Display", value: "Large LCD" },
        { label: "Drive", value: "Motorized" },
        { label: "Base", value: "Hardened steel base" }
      ],
      features: [
        "Motorized fine adjustment",
        "Large digital display",
        "Preset and zero functions",
        "Data output capability",
        "Inch/mm conversion",
        "Air bearing slide (smooth movement)"
      ],
      applications: [
        "Height measurement",
        "Step measurement",
        "Layout and marking",
        "Quality inspection"
      ]
    }
  ],

  // ==================== PRODUCTS ====================
  products: {
    tabs: [
      { id: 'overview', label: 'Products Overview' },
      { id: 'mechanical', label: 'Mechanical Jigs & Fixtures' },
      { id: 'hydraulic', label: 'Hydraulic/Pneumatic' },
      { id: 'turning', label: 'Turning & Collets' },
      { id: 'zeropoint', label: 'Zero Point Clamping' },
      { id: 'standard', label: 'Standard Workholding' }
    ],
    tabContent: [
      {
        title: 'Precision Workholding Solutions',
        description: 'Savyasachi Engineering specializes in designing and manufacturing comprehensive workholding solutions for diverse machining applications.',
        features: [
          'Custom-designed jigs and fixtures for specific applications',
          'High-precision mechanical and automated workholding systems',
          'Quick-change systems for improved productivity',
          'Complete turnkey solutions from design to implementation',
          'Expert consultation and ongoing technical support'
        ],
        image: '/images/products/mechanical-fixtures/Mechanical Jigs and Fixtures 1.png',
        hasExplore: false,
        explorePath: null
      },
      {
        title: 'Mechanical Jigs & Fixtures',
        description: 'Precision-engineered mechanical workholding solutions designed for maximum rigidity and repeatability in machining operations.',
        features: [
          'Custom milling fixtures for complex geometries',
          'Drilling jigs with precision bushings',
          'Multi-station fixtures for batch production',
          'Modular fixture systems for flexibility',
          'Welding fixtures with position control'
        ],
        image: '/images/products/mechanical-fixtures/Mechanical Jigs and Fixtures 2.png',
        hasExplore: true,
        explorePath: '/products/mechanical-fixtures'
      },
      {
        title: 'Hydraulic & Pneumatic Fixtures',
        description: 'Advanced automated workholding systems utilizing hydraulic and pneumatic power for rapid, consistent clamping force.',
        features: [
          'High-force hydraulic clamping systems',
          'Pneumatic fixtures for light to medium loads',
          'Automated clamping with PLC integration',
          'Self-centering vice systems',
          'Multi-axis synchronized clamping'
        ],
        image: '/images/products/hydraulic-fixtures/Hydraulic Pneumatic Fixtures 1.png',
        hasExplore: true,
        explorePath: '/products/hydraulic-fixtures'
      },
      {
        title: 'Turning Fixtures & Collet Chucks',
        description: 'Specialized workholding solutions for turning operations, including precision collet chucks and custom turning fixtures.',
        features: [
          'Precision collet chucks (ER, 5C, Dead Length)',
          'Custom soft jaws for irregular parts',
          'Between-center fixtures for shaft turning',
          'Quick-change chuck systems',
          'High-speed balanced chucks'
        ],
        image: '/images/products/turning-fixtures/Turning Fixtures and Collet Chucks 1.png',
        hasExplore: true,
        explorePath: '/products/turning-fixtures'
      },
      {
        title: 'Zero Point Clamping Systems',
        description: 'Revolutionary quick-change workholding technology for drastically reduced setup times and enhanced productivity.',
        features: [
          'Sub-minute fixture changeover capability',
          'Repeatable positioning accuracy ±0.005mm',
          'Modular pallet systems',
          'High clamping force with safety locking',
          'Compatible with existing machine tools'
        ],
        image: '/images/products/zero-point-clamping/Zero Point Clamping Systems 1.png',
        hasExplore: true,
        explorePath: '/products/zero-point-clamping'
      },
      {
        title: 'Standard Workholding Products',
        description: 'Industry-standard workholding components and accessories for general-purpose machining applications.',
        features: [
          'Precision vises and angle plates',
          'Step blocks and clamp kits',
          'V-blocks and parallels',
          'Magnetic chucks and sine plates',
          'Tooling plates and grid systems'
        ],
        image: '/images/products/standard-workholding/Standard Workholding Products 1.png',
        hasExplore: true,
        explorePath: '/products/standard-workholding'
      }
    ]
  },

  // ==================== PRODUCT DETAILS ====================
  productDetails: {
    mechanical: {
      hero: {
        title: "Mechanical Jigs & Fixtures",
        subtitle: "Precision-engineered workholding solutions for superior accuracy and repeatability"
      },
      overview: {
        text: [
          "Our mechanical jigs and fixtures represent the pinnacle of precision engineering, designed to meet the exacting demands of modern manufacturing. Each fixture is custom-engineered to your specific application, ensuring optimal part location, rigid clamping, and consistent machining results across production runs.",
          "With decades of experience in fixture design and manufacturing, we understand the critical role that workholding plays in achieving tight tolerances and high-quality finishes. Our mechanical fixtures are built using premium materials and advanced manufacturing techniques, ensuring long service life and reliable performance.",
          "From simple drilling jigs to complex multi-station milling fixtures, we provide complete solutions that enhance productivity, reduce setup time, and eliminate variability in your machining processes. Our team works closely with you to understand your requirements and deliver fixtures that exceed expectations."
        ]
      },
      benefits: [
        {
          title: "Exceptional Repeatability",
          description: "Achieve consistent part positioning within microns, ensuring uniform quality across production runs"
        },
        {
          title: "Reduced Setup Time",
          description: "Quick and foolproof part loading dramatically reduces non-productive time and increases machine utilization"
        },
        {
          title: "Enhanced Rigidity",
          description: "Robust construction eliminates vibration and deflection, enabling aggressive cutting parameters and superior surface finishes"
        },
        {
          title: "Custom Engineering",
          description: "Each fixture is designed specifically for your part geometry and machining requirements"
        },
        {
          title: "Operator Safety",
          description: "Ergonomic design with safety features protects operators while maintaining ease of use"
        },
        {
          title: "Long Service Life",
          description: "Premium materials and precision manufacturing ensure years of reliable operation with minimal maintenance"
        }
      ],
      specifications: [
        {
          title: "Materials Used",
          value: "Hardened steel, aluminum alloys, cast iron, stainless steel"
        },
        {
          title: "Positional Accuracy",
          value: "±0.005mm to ±0.01mm (application dependent)"
        },
        {
          title: "Surface Finish",
          value: "Ground and lapped surfaces up to Ra 0.4μm"
        },
        {
          title: "Clamping Methods",
          value: "Toggle clamps, screw clamps, strap clamps, cam locks"
        },
        {
          title: "Location Methods",
          value: "Fixed pins, diamond pins, V-blocks, nest plates"
        },
        {
          title: "Heat Treatment",
          value: "Selective hardening to HRC 58-62 for wear surfaces"
        },
        {
          title: "Coating Options",
          value: "Hard anodizing, nitriding, blackening, chrome plating"
        },
        {
          title: "Design Standards",
          value: "Compliant with ISO and customer-specific requirements"
        }
      ],
      applications: [
        "Aerospace component manufacturing (brackets, housings, structural parts)",
        "Automotive production (engine components, transmission parts, chassis elements)",
        "Defense sector machining (weapon components, vehicle parts, precision assemblies)",
        "Medical device manufacturing (surgical instruments, implants, diagnostic equipment)",
        "General engineering and job shop applications"
      ]
    },
    hydraulic: {
      hero: {
        title: "Hydraulic & Pneumatic Fixtures",
        subtitle: "Automated workholding systems for high-volume production and consistent clamping force"
      },
      overview: {
        text: [
          "Our hydraulic and pneumatic fixtures bring automation and consistency to your machining operations. These advanced workholding systems utilize fluid power to deliver rapid, repeatable clamping with precise force control, making them ideal for high-volume production environments where speed and consistency are paramount.",
          "Hydraulic fixtures excel in applications requiring high clamping forces, providing the rigidity needed for heavy cuts and large workpieces. Our pneumatic solutions offer speed and efficiency for lighter workloads, with the added benefit of easy integration into automated manufacturing cells.",
          "Each system is engineered with safety and reliability as top priorities. Features like pressure monitoring, fail-safe mechanisms, and visual indicators ensure secure clamping and operator confidence. Whether you need a single-station fixture or a complex multi-axis system, we deliver solutions that enhance productivity and quality."
        ]
      },
      benefits: [
        {
          title: "Consistent Clamping Force",
          description: "Precisely controlled hydraulic or pneumatic pressure ensures uniform clamping force on every part"
        },
        {
          title: "Rapid Operation",
          description: "Fast actuation cycles minimize non-productive time and maximize throughput"
        },
        {
          title: "Reduced Operator Fatigue",
          description: "Automated clamping eliminates manual effort, improving ergonomics and productivity"
        },
        {
          title: "Ideal for Automation",
          description: "Easily integrated with robotic cells and automated production systems"
        },
        {
          title: "High Clamping Force",
          description: "Hydraulic systems deliver superior holding power for heavy-duty machining operations"
        },
        {
          title: "Safety Features",
          description: "Built-in pressure monitoring, safety valves, and visual indicators ensure secure operation"
        }
      ],
      specifications: [
        {
          title: "Hydraulic Pressure Range",
          value: "70-210 bar (1,000-3,000 PSI)"
        },
        {
          title: "Pneumatic Pressure Range",
          value: "5-8 bar (70-115 PSI)"
        },
        {
          title: "Clamping Force",
          value: "500N to 50,000N (application dependent)"
        },
        {
          title: "Actuation Speed",
          value: "0.5 to 3 seconds (full cycle)"
        },
        {
          title: "Control Options",
          value: "Manual valves, PLC integration, foot pedal, push-button"
        },
        {
          title: "Safety Features",
          value: "Pressure sensors, visual indicators, safety locks, check valves"
        },
        {
          title: "Seal Materials",
          value: "Nitrile, Viton, Polyurethane (application dependent)"
        },
        {
          title: "Operating Temperature",
          value: "-10°C to +80°C"
        }
      ],
      applications: [
        "High-volume automotive component production",
        "Automated manufacturing cells and transfer lines",
        "Heavy-duty milling and machining operations",
        "Multi-station progressive machining systems",
        "Robotic work cell integration"
      ]
    },
    turning: {
      hero: {
        title: "Turning Fixtures & Collet Chucks",
        subtitle: "Specialized workholding solutions for precision turning and lathe operations"
      },
      overview: {
        text: [
          "Our turning fixtures and collet chuck systems are engineered to deliver exceptional concentricity, minimal runout, and reliable gripping force for rotational machining operations. From standard ER collet chucks to custom soft jaw fixtures, we provide complete solutions for turning applications across all industries.",
          "Precision collet chucks offer superior part holding with excellent concentricity, making them ideal for high-precision turning operations. Our custom soft jaw solutions enable machining of irregular geometries and pre-machined features while maintaining optimal part support and access.",
          "Each turning fixture is designed with consideration for chip evacuation, tool clearance, and operator accessibility. Whether you're running a single-spindle lathe or a multi-axis turning center, our workholding solutions enhance accuracy, reduce cycle time, and improve overall process capability."
        ]
      },
      benefits: [
        {
          title: "Superior Concentricity",
          description: "Precision-ground collets and fixtures ensure minimal runout (typically <0.005mm TIR)"
        },
        {
          title: "Quick Part Changes",
          description: "Fast collet changes and quick-jaw systems reduce setup time and increase productivity"
        },
        {
          title: "Excellent Gripping Force",
          description: "Optimized collet geometry provides secure holding without part distortion"
        },
        {
          title: "Versatile Solutions",
          description: "Wide range of collet sizes and custom jaw configurations for diverse part geometries"
        },
        {
          title: "High-Speed Capability",
          description: "Dynamically balanced components enable high-RPM operations without vibration"
        },
        {
          title: "Long Tool Life",
          description: "Rigid, vibration-free workholding extends cutting tool life and improves surface finish"
        }
      ],
      specifications: [
        {
          title: "Collet Types",
          value: "ER, 5C, Dead Length, TG, DA, Emergency"
        },
        {
          title: "Collet Size Range",
          value: "ER8 to ER50 (1mm to 50mm capacity)"
        },
        {
          title: "Runout Accuracy",
          value: "<0.003mm to <0.01mm TIR (collet dependent)"
        },
        {
          title: "Gripping Range",
          value: "Typically 1mm collapse range per collet"
        },
        {
          title: "Maximum Speed",
          value: "Up to 25,000 RPM (balanced systems)"
        },
        {
          title: "Chuck Jaw Types",
          value: "Standard hard jaws, custom soft jaws, quick-change systems"
        },
        {
          title: "Material Compatibility",
          value: "Ferrous, non-ferrous, plastics, composites"
        },
        {
          title: "Through-Hole Capacity",
          value: "Custom designs up to 150mm diameter"
        }
      ],
      applications: [
        "Precision shaft and pin manufacturing",
        "Valve body and fitting production",
        "Small component turning (medical, aerospace)",
        "High-volume automotive parts (fasteners, pins, bushings)",
        "Tool and die component machining"
      ]
    },
    zeropoint: {
      hero: {
        title: "Zero Point Clamping Systems",
        subtitle: "Revolutionary quick-change technology for maximum productivity and minimal setup time"
      },
      overview: {
        text: [
          "Zero Point Clamping Systems represent a paradigm shift in workholding technology, enabling fixture changes in seconds rather than hours. This revolutionary technology uses precision-machined interfaces and mechanical or hydraulic actuation to provide highly repeatable, secure clamping of fixture pallets to machine tables.",
          "The core principle involves standardized mounting plates on your machine tools and matching base plates on your fixtures or pallets. Once a fixture is set up offline, it can be loaded onto the machine in under a minute with repeatable accuracy of ±0.005mm or better. This dramatically reduces machine downtime and enables true one-piece flow manufacturing.",
          "Our Zero Point solutions are compatible with virtually any CNC machine tool and can be retrofitted to existing equipment. Whether you're running small batch production or need to switch between different part families frequently, Zero Point Clamping delivers unprecedented flexibility and productivity gains."
        ]
      },
      benefits: [
        {
          title: "Drastically Reduced Setup Time",
          description: "Change complete fixtures in under 60 seconds, transforming hours of setup into seconds"
        },
        {
          title: "Exceptional Repeatability",
          description: "Return to the same position within ±0.005mm, eliminating need for re-indicating"
        },
        {
          title: "Increased Machine Utilization",
          description: "Minimize non-productive downtime and maximize spindle hours"
        },
        {
          title: "Offline Setup Capability",
          description: "Prepare fixtures and load parts while machine continues running"
        },
        {
          title: "Flexible Production",
          description: "Easily switch between different part families and job orders"
        },
        {
          title: "Enhanced Safety",
          description: "Automatic locking mechanisms and visual indicators ensure secure clamping"
        }
      ],
      specifications: [
        {
          title: "Repeatability",
          value: "±0.005mm (X, Y positioning); ±0.01mm (Z-axis)"
        },
        {
          title: "Clamping Force",
          value: "10kN to 100kN per clamping module"
        },
        {
          title: "Module Sizes",
          value: "52mm, 96mm, 148mm (various load capacities)"
        },
        {
          title: "Actuation Type",
          value: "Manual, pneumatic, hydraulic"
        },
        {
          title: "Interface Types",
          value: "Flat plate, grid plate, tombstone, pallet systems"
        },
        {
          title: "Safety Features",
          value: "Visual indicators, safety locks, pressure monitoring"
        },
        {
          title: "Material",
          value: "Hardened and ground steel, stainless steel options"
        },
        {
          title: "Changeover Time",
          value: "30-60 seconds per pallet"
        }
      ],
      applications: [
        "High-mix, low-volume production environments",
        "Job shops requiring frequent changeovers",
        "Aerospace component manufacturing",
        "Automotive prototype and short-run production",
        "Medical device manufacturing with multiple part families"
      ]
    },
    standard: {
      hero: {
        title: "Standard Workholding Products",
        subtitle: "Industry-standard components and accessories for versatile machining applications"
      },
      overview: {
        text: [
          "Our comprehensive range of standard workholding products provides reliable, cost-effective solutions for general-purpose machining operations. From precision vises and angle plates to modular tooling components, we supply the essential workholding elements that every machine shop needs.",
          "Each product in our standard range is manufactured to exacting specifications, ensuring compatibility with industry standards and consistent performance. While these are catalog items rather than custom solutions, they represent the same commitment to quality and precision that defines all our workholding products.",
          "Whether you're setting up a new machine shop, expanding existing capabilities, or need replacement components, our standard workholding products deliver proven performance at competitive prices. We maintain extensive inventory to ensure rapid delivery and keep your operations running smoothly."
        ]
      },
      benefits: [
        {
          title: "Immediate Availability",
          description: "Extensive inventory ensures fast delivery of standard components"
        },
        {
          title: "Proven Reliability",
          description: "Industry-standard designs with established performance track records"
        },
        {
          title: "Cost-Effective Solutions",
          description: "Standardized manufacturing delivers competitive pricing without compromising quality"
        },
        {
          title: "Universal Compatibility",
          description: "Designed to interface with standard machine tool features and accessories"
        },
        {
          title: "Versatile Application",
          description: "Suitable for a wide range of general machining operations and part geometries"
        },
        {
          title: "Quality Assurance",
          description: "Every product meets or exceeds relevant industry standards and specifications"
        }
      ],
      specifications: [
        {
          title: "Vise Types",
          value: "Machine vises, toolmaker vises, angle vises, multi-station vises"
        },
        {
          title: "Vise Jaw Width",
          value: "50mm to 300mm capacity"
        },
        {
          title: "Angle Plates",
          value: "Slotted, webbed, precision ground (100mm to 600mm)"
        },
        {
          title: "V-Blocks",
          value: "Matched pairs with clamps (25mm to 200mm capacity)"
        },
        {
          title: "Parallels",
          value: "Ground steel, hardened (6mm to 50mm thickness)"
        },
        {
          title: "Step Blocks",
          value: "Standard sets, metric and imperial"
        },
        {
          title: "Tooling Plates",
          value: "Grid patterns, threaded holes, custom configurations"
        },
        {
          title: "Material Standards",
          value: "Hardened steel, cast iron, aluminum (per application)"
        }
      ],
      applications: [
        "General job shop machining operations",
        "Prototype and development work",
        "Small batch production runs",
        "Maintenance and repair operations",
        "Educational and training facilities"
      ]
    }
  },

  // ==================== CLIENTS ====================
  clients: {
    title: "Our Clients",
    subtitle: "We have served 250+ clients across all engineering sectors",
    logos: [
      { id: 1, name: "Maruti Suzuki", image: "/images/clients/maruti-suzuki.png", alt: "Maruti Suzuki - Leading Automotive Manufacturer" },
      { id: 2, name: "Jyoti CNC", image: "/images/clients/jyoti.png", alt: "Jyoti CNC - Advanced CNC Machinery" },
      { id: 3, name: "Shaktiman", image: "/images/clients/shaktiman.png", alt: "Shaktiman - Agricultural Equipment Manufacturer" },
      { id: 4, name: "Hi-Con", image: "/images/clients/hi-con.png", alt: "Hi-Con - Industrial Solutions Provider" },
      { id: 5, name: "Amcon", image: "/images/clients/amcon.png", alt: "Amcon - Engineering Services" },
      { id: 6, name: "Rainbow", image: "/images/clients/rainbow.png", alt: "Rainbow - Industrial Manufacturing" },
      { id: 7, name: "GN Altech", image: "/images/clients/gn-altech.png", alt: "GN Altech - Technology Solutions" },
      { id: 8, name: "SMPL", image: "/images/clients/smpl.png", alt: "SMPL - Manufacturing Solutions" },
      { id: 9, name: "Uflow", image: "/images/clients/uflow.png", alt: "Uflow - Flow Control Systems" },
      { id: 10, name: "Shreeram Aerospace", image: "/images/clients/shreeram_aerospace.png", alt: "Shreeram Aerospace - Aerospace Components" },
      { id: 11, name: "Omega", image: "/images/clients/omega.png", alt: "Omega - Precision Engineering" },
      { id: 12, name: "Flybird Interior", image: "/images/clients/flybird-interior.png", alt: "Flybird Interior - Interior Solutions" },
      { id: 13, name: "KFC", image: "/images/clients/kfc.png", alt: "KFC - Food Service Industry" },
      { id: 14, name: "PBW", image: "/images/clients/pbw.png", alt: "PBW - Engineering Services" },
    ],
  },

  // ==================== FOOTER ====================
  footer: {
    copyright: "© 2025 Savyasachi Engineering. All Rights Reserved.",
    links: [
      { name: "Home", path: "/" },
      { name: "About Us", path: "/about" },
      { name: "Facilities", path: "/facilities" },
      { name: "Products", path: "/products" },
      { name: "Contact Us", path: "/contact" },
      { name: "Brochure", path: "/brochure.pdf", external: true },
    ],
  },

  // ==================== SEO META DATA ====================
  seo: {
    title: "Savyasachi Engineering | Precision Workholding Solutions",
    description:
      "Leading provider of precision workholding solutions. Manufacturing Jigs, Fixtures, and Turnkey Projects since 2017. Serving 250+ clients across aerospace, defense, and automotive sectors.",
    keywords:
      "precision engineering, workholding solutions, jigs and fixtures, CNC machining, turnkey projects, Rajkot, Gujarat, India",
    ogImage: "/og-image.jpg", // Firebase URL
  },
};

// ==================== FUTURE INTEGRATION ENDPOINTS ====================
export const apiEndpoints = {
  // Ready for future backend integration
  admin: "/api/admin",
  erp: "/api/erp",
  accounting: "/api/accounting",
  contact: "/api/contact",
  inquiry: "/api/inquiry",
};
