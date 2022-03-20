import { createTheme } from "@mui/material/styles";

const flashTheme = createTheme({
  palette: {
    primary: {
      main: "#004182",
      secondary: "#FFCC00",
    },
    secondary: {
      main: "#ffc130",
    },
  },
  typography: {
    allVariants: {
      fontFamily: `"Raleway", "Helvetica", "Arial", sans-serif`,
    },
    h2: {
      fontSize: "2rem",
      fontWeight: "700",
    },
    h5: {
      fontSize: "1.4rem",
      fontWeight: "700",
    },
    h6: {
      fontSize: "1rem",
      fontWeight: "600",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          boxShadow: "none",
          fontWeight: "700",
          borderRadius: "5px",
          fontSize: "1rem",
          "&:hover": {
            boxShadow: "none",
          },
        },
      },
      defaultProps: {
        variant: "contained",
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          textTransform: "none",
          boxShadow: "none",
          fontWeight: "700",
          borderRadius: "5px",
          fontSize: "1rem",
          "&:hover": {
            boxShadow: "none",
          },
        },
      },
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 700,
      md: 1050,
      lg: 1400,
      xl: 1750,
    },
  },
});

export default flashTheme;
