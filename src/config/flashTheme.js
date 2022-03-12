import { createTheme } from "@mui/material/styles";
const flashTheme = createTheme({
  palette: {
    primary: {
      main: "#004299",
    },
    secondary: {
      main: "#ffc130",
    },
  },
  typography: {
    allVariants: {
      fontFamily: `"Raleway", "Helvetica", "Arial", sans-serif`,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          boxShadow: "none",
          borderRadius: "0",
          fontWeight: "700",
        },
      },
      defaultProps: {
        variant: "contained",
      },
    },
  },
  spacing: {},
});

export default flashTheme;
