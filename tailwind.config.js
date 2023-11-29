/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        baseWhite: "#F5F5F5",
        baseBrown: "#79624F",
        whiteCoffe1: "#FDFCFA",
        whiteCoffe2: "#FAFAF7",
        whiteCoffe3: "#F8F6F3",
        whiteCoffe4: "#F2EDE7",
        whiteCoffe5: "#E7E1D8",
        whiteCoffe6: "#CDC4B7",
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

