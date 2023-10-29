/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // primary: "#1e549f",
        primary: "#163969",
        // tint: "#2e79ba",
        tint: "#1e549f",
        shade: "#5fc9f3",
        darkBlue: "#1C2434",
        darkLightBlue: "#333A48",
        darkbg: "#121212",
        greyforText: "#373D3F",
        greyForBorder: "#D8D9CF",
        darkWhiteForText: "#E1D9D1",
        adminBgWhite: "#F1F5F9",
        adminBgDark: "#1A222C",
        adminBgLightDark: "#24303F",
        adminBgLightDark2: "#313D4A",
      },
      backgroundImage: {
        interStellar:
          "linear-gradient(to right bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0)),url('/images/techbg.jpg')",
        profileGradient:
          "linear-gradient(to right bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0)),url('/images/cover.png')",
        contactGradient:
          "linear-gradient(to right bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0)),url('/images/contact-bg.jpg')",
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
