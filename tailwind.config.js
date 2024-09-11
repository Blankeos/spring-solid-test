import daisyui from "daisyui";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./pages/**/*.tsx", "./components/**/*.tsx"],
  theme: {
    extend: {},
  },
  plugins: [daisyui],
};
