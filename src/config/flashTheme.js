import { createTheme } from "@mui/material/styles";

const flashTheme = createTheme({
  palette: {
    primary: {
      main: "#0047AB",
      secondary: "#ffd500",
      contrastText: "black",
      warning: "green",
    },
    secondary: {
      main: "#ffc130",
    },
    error: {
      main: "#BF0000",
    },
    info: {
      main: "#000000",
    },
  },
  typography: {
    allVariants: {
      fontFamily: `"Roboto", "Helvetica", "Arial", sans-serif`,
    },
    h1: {
      fontSize: "2.25rem",
      fontWeight: "700",
    },
    h2: {
      fontSize: "1.75rem",
      fontWeight: "700",
    },
    h3: {
      fontSize: "1.75rem",
      fontWeight: "700",
    },
    h4: {
      fontSize: "1.5rem",
      fontWeight: "700",
    },
    h5: {
      fontSize: "1.3rem",
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
          borderRadius: 0,
          fontSize: "0.9rem",
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
      defaultProps: {
        inputProps: {
          style: {
            fontFamily: "Pontano Sans",
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
