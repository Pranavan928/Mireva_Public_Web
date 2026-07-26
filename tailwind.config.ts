import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        surface: "#141414",
        "surface-container-highest": "#1D1D1D",
        tertiary: "#959A7C",
        "on-tertiary": "#141414",
        "secondary-container": "#97856D",
        "on-surface-variant": "#CFCFCF",
        "on-background": "#FFFFFF",
        "on-tertiary-container": "#141414",
        error: "#ffb4ab",
        "surface-bright": "#2A2A2A",
        "on-primary": "#FFFFFF",
        outline: "#46473f",
        "on-surface": "#FFFFFF",
        "primary-fixed": "#DDC69C",
        "primary-fixed-dim": "#97856D",
        "error-container": "#93000a",
        "on-primary-fixed": "#141414",
        "surface-container-low": "#1D1D1D",
        "surface-variant": "#1D1D1D",
        "inverse-on-surface": "#141414",
        "on-secondary-fixed-variant": "#97856D",
        "tertiary-container": "#959A7C",
        primary: "#DDC69C",
        "on-tertiary-fixed-variant": "#959A7C",
        "on-secondary-fixed": "#141414",
        "surface-dim": "#141414",
        "on-tertiary-fixed": "#141414",
        "tertiary-fixed-dim": "#959A7C",
        "surface-container": "#1D1D1D",
        "surface-container-high": "#242424",
        "surface-tint": "#DDC69C",
        "surface-container-lowest": "#0D0D0D",
        secondary: "#959A7C",
        "secondary-fixed-dim": "#97856D",
        "outline-variant": "#333333",
        "primary-container": "#97856D",
        "inverse-surface": "#FFFFFF",
        "tertiary-fixed": "#959A7C",
        "on-secondary-container": "#FFFFFF",
        "on-primary-fixed-variant": "#FFFFFF",
        "on-error": "#690005",
        "inverse-primary": "#97856D",
        "on-secondary": "#141414",
        "on-primary-container": "#FFFFFF",
        background: "#141414",
        "secondary-fixed": "#DDC69C",
        "on-error-container": "#ffdad6",
        slate: "#676a6e"
      },
      borderRadius: {
        DEFAULT: "0.125rem",
        lg: "0.25rem",
        xl: "0.5rem",
        full: "9999px"
      },
      spacing: {
        "margin-mobile": "20px",
        unit: "8px",
        "section-gap": "120px",
        gutter: "24px",
        "margin-desktop": "80px",
        "container-max": "1440px"
      },
      fontFamily: {
        "display-lg": ["var(--font-playfair)", "serif"],
        "body-md": ["var(--font-manrope)", "sans-serif"],
        "headline-lg-mobile": ["var(--font-playfair)", "serif"],
        "label-sm": ["var(--font-manrope)", "sans-serif"],
        "body-lg": ["var(--font-manrope)", "sans-serif"],
        "headline-lg": ["var(--font-playfair)", "serif"],
        "headline-md": ["var(--font-playfair)", "serif"]
      },
      fontSize: {
        "display-lg": ["clamp(40px, 5vw + 1rem, 64px)", { lineHeight: "1.1", letterSpacing: "-0.02em", fontWeight: "700" }],
        "body-md": ["16px", { lineHeight: "1.6", fontWeight: "400" }],
        "headline-lg-mobile": ["clamp(28px, 4vw + 1rem, 36px)", { lineHeight: "1.2", fontWeight: "600" }],
        "label-sm": ["14px", { lineHeight: "1.2", letterSpacing: "0.05em", fontWeight: "600" }],
        "body-lg": ["clamp(16px, 2vw + 10px, 18px)", { lineHeight: "1.6", fontWeight: "400" }],
        "headline-lg": ["clamp(32px, 5vw + 1rem, 48px)", { lineHeight: "1.2", fontWeight: "600" }],
        "headline-md": ["clamp(24px, 4vw + 1rem, 32px)", { lineHeight: "1.3", fontWeight: "500" }]
      }
    },
  },
  plugins: [],
};
export default config;
