module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        nunito: ["nunito"],
        poppins: ["Poppins"],
      },
      fontSize: {
        "7.5xl": "5rem",
        "5.5xl": "3.5rem",
        "4.5xl": "2.5rem",
        "3.5xl": "2rem",
      },
      lineHeight: {
        20: "6.25rem",
      },
      colors: {
        logoColor: "#202029",
        navLink: "#42414B",
        navLinkActive: "#1089FF",
        courseBg: "#f7f7fa",
        navGray: "#8F8FA3",
        greenButton: "#00AF91",
        "black-1": "#EBEBF2",
        "black-2": "#908FA5",
        "black-3": "#666575",
        "black-4": "#42414B",
        "black-5": "#202029",
        primary: "#1089FF",
        secondary: "#0264ED",
        tertiary: "#FF7A1A",
        success: "#00AF91",
        warning: "#FFC91B",
        error: "#F15C4C",
        reasonBackground: "#f1f1f6",
      },
      zIndex: {
        negative1: -1,
      },
      borderWidth: {
        3: "3px",
        6: "6px",
      },
      spacing: {
        102: "30rem",
        110: "32rem",
        115: "35rem",
      },
      maxHeight: {
        limit: "61rem",
      },
      backgroundImage: {
        hero: 'url("/BACKGROUND.svg")',
        // "gray-slanted": 'url("/gray-bg-slanted.svg")',
        // "green-quad": 'url("/green-quad-bg.svg")',
      },
      boxShadow: (theme) => ({
        primary: "0px 10px 20px rgba(2, 100, 237, 0.25)",
      }),
    },
  },
  plugins: [],
}
