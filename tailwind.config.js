/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#38bdf8",
        tint: "#73d0fa",
        shade: "#2c97c6",
        darkbg: "#121212",
      },
      fontFamily: {
        bpg: "bpg",
        arial: "arial",
      },
      keyframes: {
        fallFromTop: {
          from: { transform: "translateY(-30px)" },
          to: { transform: "translateY(0)" },
        },
        fallFromBottom: {
          from: { transform: "translateY(30px)" },
          to: { transform: "translateY(0)" },
        },
        lengthGrower: {
          from: { width: "0" },
          to: { width: "200px" },
        },
        heightGrower: {
          from: { height: "0" },
          to: { height: "240px" },
        },
        textAppear: {
          from: { height: "0" },
          to: { height: "110px" },
        },
        textAppearForMinHeight: {
          from: { height: "0" },
          to: { height: "80px" },
        },
        textAppearForKaFont: {
          from: { height: "0" },
          to: { height: "150px" },
        },
      },
      animation: {
        smoothFallFromTop: "fallFromTop 0.2s ease forwards",
        smoothFallFromBottom: "fallFromBottom 0.2s ease forwards",
        smoothLengthGrow: "lengthGrower 0.2s ease forwards",
        smoothHeightGrow: "heightGrower 0.2s ease forwards",
        smoothTextAppear: "textAppear 1s ease forwards",
        smoothTextAppearka: "textAppearForKaFont 1s ease forwards",
        smoothTextAppearForThreeCategory:
          "textAppearForMinHeight 1s ease forwards",
      },
    },
    screens: {
      xl: { max: "1279px" },
      lg: { max: "1023px" },
      md: { max: "800px" },
      sm: { max: "639px" },
    },
  },
  plugins: [],
};
