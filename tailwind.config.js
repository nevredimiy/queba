/** @type {import('tailwindcss').Config} */
export default {
  future: {
    hoverOnlyWhenSupported: true,
  },
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      scale: {
        "-100": "-1",
      },
      dropShadow: {
        "3xl": "2px 2px 4px rgb(0 0 0 / 0.4)",
        whiteSnow: "0px 0px 15px rgb(255 255 255)",
        redSnow: "0px 0px 15px rgb(255 0 0)",
      },
      keyframes: {
        heartPulse: {
          "50%": { transform: "scale(1.2)" },
        },
        whiteHeart: {
          "0%, 100%": { transform: "opacity:0)"},
          "50%": { transform: "scale(1.2)" },
        },
        squish: {
          "50%": { transform: "scale(1.1, 0.9)" },
        },
      },
      animation: {
        squish: "squish 0.5s ease-in-out",
        heartPulse: "heartPulse 0.5s ease-in-out",
        whiteHeart: "whiteHeart 1s ease-in-out",
      },
      screens: {
        ssm: "396px",
      },
      colors: {
        baseWhite: "#F5F5F5",
        baseBrown: "#79624F",
        whiteCoffe1: "#FDFCFA",
        whiteCoffe2: "#FAFAF7",
        whiteCoffe3: "#F8F6F3",
        whiteCoffe4: "#F2EDE7",
        whiteCoffe5: "#E7E1D8",
        whiteCoffe6: "#CDC4B7",
        whiteCoffe7: "#947B65",
        umber1: "#A48B78",
        umber2: "#625348",
        blue3: "#00205F",
        coolBlue1: "#6D93DF",
        coolBlue2: "#1C3D7F",
        coolBlue3: "#00205F",
        coolBlue4: "#001339",
        coolBlue5: "#000613",
      },
    },
  },
  plugins: [],
};

