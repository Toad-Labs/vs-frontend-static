module.exports = {
  theme: {
    extend: {
      fontFamily: {
        heading: ["Lato", "sans-serif"],
        body: ["Noto sans", "sans-serif"],
      },
      backgroundImage: (theme) => ({
        "banner-img": "url('../../assets/v-c-banner.jpg')",
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
        "vh-1/2": "50vh"
      }
    },
  },
  variants: {},
  plugins: [],
};
