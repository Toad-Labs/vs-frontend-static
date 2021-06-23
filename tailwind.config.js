const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  theme: {
    screens: {
      'xs': '376px',
      ...defaultTheme.screens,
    },
    extend: {
      fontFamily: {
        heading: ["Lato", "sans-serif"],
        body: ["Noto sans", "sans-serif"],
      },
      backgroundImage: (theme) => ({
        "banner-img": "url('../../assets/v-c-banner.jpg')",
        "banner-img-lg": "url('../../assets/vc-banner-large.png')",
      }),
      colors: {
        blue: {
          primary: "#4F5b8B",
          light: "#C7CFEF",
          selected: "#E6E9F7",
          link: "#284162",
          deep: "#26374A"
        },
        gray: {
          dark: "#252525",
          medium: "#636367",
          light: "#8c8c8c",
          infomd: "#DEDEDE",
          infolt: "#F8F8F8",
        },
        alert: {
          main: "#2698BA",
          light: "#BBEFFF",
        },
        secondary: {
          main: "#F07031",
          medium: "#CB5319",
          light: "#FFC7AC",
        },
        success: {
          main: "#4CAF50",
          light: "#BFF0BE",
        },
        warning: {
          main: "#FFC107",
          light: "#FFECB3",
        },
        error: {
          main: "#F44336",
          light: "#FFC7BD",
        },
      },
      height:{
        "vh-1/2": "50vh",
        "vh-2/3": "66vh",
        "vh-1/3": "calc(100vh / 3)",
        "vh-1/4": "calc(100vh / 4)",
        "vh-1/5": "calc(100vh / 5)",
      },
      minWidth: {
        "7/2r": "3.5rem"
      }
    },
  },
  variants: {},
  plugins: [],
};
