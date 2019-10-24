import { createMuiTheme } from "@material-ui/core";

export const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#A3C3CA",
      light: "#E1F2F6",
      dark: "#87A9B0",
      contrastText: "##454545"
    },
    secondary: {
      main: "#E39292",
      light: "#F7B8B8",
      dark: "#A05757",
      contrastText: "#454545"
    }
  },
  typography: {
    fontFamily: ["Barlow", "sans-serif"].join(",")
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920
    }
  }
});
