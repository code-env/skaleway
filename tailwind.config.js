/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {},
      fontFamily: {
        inter: "var(--font-inter)",
        sans: "var(--font-sans)",
      },
      backgroundColor: {
        primary: "var(--color-orange)",
        secondary: "var(--color-blue)",
        neutral: "var(--color-neutral)",
      },
      textColor: {
        primary: "var(--color-orange)",
        secondary: "var(--color-blue)",
        neutral: "var(--color-neutral)",
      },
      borderColor: {
        primary: "var(--color-orange)",
        secondary: "var(--color-blue)",
        neutral: "var(--color-neutral)",
      },
    },
  },
  plugins: [],
};
