/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        "grey-primary": "#6B7280",
        "grey-secondary": "#1F2937",
      },
      fontFamily: {
        primary: "'Inter Variable', sans-serif",
      },
      letterSpacing: {
        default: "0.005em",
      },
      boxShadow: {
        card: "0px 2px 6px 2px rgba(0,0,0,0.15),0px 1px 2px rgba(0,0,0,0.3)",
      },
      keyframes: {
        "grow-card-content": {
          "0%": {
            height: "158px",
          },
          "60%": {
            height: "300px",
          },
          "100%": {
            height: "286px",
          },
        },
      },
      animation: {
        "grow-card-content": "grow-card-content 300ms ease forwards",
      },
    },
  },
  plugins: [],
};
