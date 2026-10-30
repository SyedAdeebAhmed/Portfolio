/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: { ink: "#0b0b09", panel: "#13130f", brand: "#ffd400", mute: "#a3a298", paper: "#f2f1ea" },
      fontFamily: {
        display: ['"Big Shoulders Display"', '"Arial Narrow"', "Impact", "sans-serif"],
        sans: ['"IBM Plex Sans"', "system-ui", "sans-serif"],
        mono: ['"JetBrains Mono"', "ui-monospace", "monospace"],
      },
      keyframes: {
        marquee: { to: { transform: "translateX(-50%)" } },
        blink: { "50%": { opacity: "0" } },
        beat: { "50%": { opacity: ".25" } },
      },
      animation: {
        marquee: "marquee 34s linear infinite",
        blink: "blink 1.1s steps(1) infinite",
        beat: "beat 1.8s infinite",
      },
    },
  },
  plugins: [],
};
