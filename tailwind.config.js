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
        "splash-img": "url('../../assets/sp-bg-2.jpg')",
      }),
      colors: {
        blue: {
          primary: "#4F5b8B",
          medium: "#083C6C",
          light: "#C7CFEF",
          selected: "#E6E9F7",
          link: "#284162",
          deep: "#26374A",
          hover: "#1c578a",
          mild: "#335075",
        },
        gray: {
          dark: "#252525",
          medium: "#636367",
          mediumlt: "#767676",
          light: "#8c8c8c",
          infomd: "#DEDEDE",
          infolt: "#F8F8F8",
          mild: "#e1e4e7",
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
        "vh-3/5": "60vh",
        "vh-1/3": "calc(100vh / 3)",
        "vh-1/4": "calc(100vh / 4)",
        "vh-1/5": "calc(100vh / 5)",
      },
      width: {
        "138px": "8.625rem",
        "300px": "18.75rem",
        "500px": "31.25rem",
      },
      minWidth: {
        "7/2r": "3.5rem"
      },
      minHeight: {
        "12": "3rem"
      },
      outline: {
        white: '2px solid #FFFFFF',
      }
    },
  },
  variants: {
    extend: {
      backgroundColor: ['active'],
      borderRadius: ['active'],
      padding: ['focus'],
      ringColor: ['focus-visible'],
      ringWidth: ['focus-visible'],
    }
  },
  plugins: [],
  purge: ["./src/**/*.vue", "./src/**/*.jsx"],
};
