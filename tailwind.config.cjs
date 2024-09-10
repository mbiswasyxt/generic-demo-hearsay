// tailwind.config.js

const { ComponentsContentPath } = require("@yext/search-ui-react");

module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}",
    "./node_modules/@yext/search-ui-react/**/*.{html,js,jsx,ts,tsx}",
    ComponentsContentPath,
  ],
  theme: {
    fontFamily: {
      systemui: ["system-ui", "sans-serif"],
    },
    extend: {
      colors: {
        primary: "#D71E28",
        secondary: "#FAFAFA",
        "primary-text": "#2E2E2E",
        "secondary-text": "#333333",
        "tertiary-text": "#3D3D3D",

        primaryCTA: {
          DEFAULT: "#D71E28",
          hover: "#B1161F",
        },
        secondaryCTA: {
          DEFAULT: "#E67E22",
          hover: "#CC6D19",
        },
        tertiaryCTA: {
          DEFAULT: "#FFC107",
          hover: "#E0A800",
        },
        accentCTA: {
          DEFAULT: "#6F42C1",
          hover: "#563D7C",
        },
      },
      borderRadius: {
        cta: "var(--cta-border-radius, 1rem)",
      },
      keyframes: {
        rotate: {
          "100%": { transform: "rotate(360deg)" },
        },
        dash: {
          "0%": { transform: "rotate(0deg)", "stroke-dashoffset": 204 },
          "50%": { transform: "rotate(45deg)", "stroke-dashoffset": 52 },
          "100%": { transform: "rotate(360deg)", "stroke-dashoffset": 204 },
        },
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms")({
      strategy: "class",
    }),
  ],
};
