export const navigationData = [
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
];

export const footerData = {
    copyright: "© 2025 Savyasachi Engineering. All Rights Reserved.",
    links: [
        { name: "Home", path: "/" },
        { name: "About Us", path: "/about" },
        { name: "Facilities", path: "/facilities" },
        { name: "Products", path: "/products" },
        { name: "Contact Us", path: "/contact" },
        { name: "Brochure", path: "/brochure.pdf", external: true },
    ],
};
