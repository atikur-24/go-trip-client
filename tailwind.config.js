/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#fff",
      lite: "#F2F3F5",
      black: "#000",
      "title-color": "#111a28",
      "black-2": "#1d2a38",
      "gray-3": "#e5e7eb",
      "gray-4": "#7d879c",
      "gray-5": "#64748b",
      "gray-6": "#4b5563",
      "gray-7": "#374151",
      "gray-8": "rgb(31 41 55)",
      "gray-9": "rgb(17 24 39)",
      "my-accent": "#10B6A8",
      "my-primary": "#5C98F2",
      "my-secondary": "#4482ff",
      "slate-1": "#f1f5f9",
      "slate-3": "#cbd5e1",
      "slate-6": "#475569",
      "slate-7": "#475569",
      "my-pink": "#eb3a7b",
      "red-400": "#f87171",
      "red-500": "#ef4444",
      "yellow-500": "#fbb614",
    },
  },
  plugins: [],
};
