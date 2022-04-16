import {
  Button,
  Grid,
  Typography,
  AppBar,
  Menu,
  MenuItem,
} from "@mui/material";
import { makeStyles, createStyles } from "@mui/styles";
import { loginUser, logoutUser, useAuthStatus } from "../auth.js";
import { auth } from "../config/firebase/firebaseSetup.js";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import MobileMenu from "./MobileMenu";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import { useScrollTrigger } from "@mui/material";

const useStyles = makeStyles((theme) =>
  createStyles({
    navbar: {
      display: "flex !important",
      flexDirection: "row !important",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "10px 8vw !important",
      background: "none !important",
      boxShadow: "none !important",
      minHeight: "8vh",
      maxHeight: "8vh",
      [theme.breakpoints.up("sm")]: {
        padding: "10px 8vw !important",
      },
    },
    navButtons: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "flex-end",
      alignItems: "center",
      padding: "0",
    },
    title: {
      fontWeight: 800,
      fontSize: "2.5rem",
      color: theme.palette.primary.main,
    },
    buttonText: {
      fontFamily: "Pontano Sans",
      fontSize: "1rem",
    },
    navButton: {
      margin: "0px 12px !important",
      color: "white !important",
      borderBottom: "2px solid #ffd500",
      "&:hover": {
        transform: "translate(0, -5%)",
        borderBottom: "2px solid #ffd500",
      },
    },
  })
);

function Navbar() {
  const styles = useStyles();
  const user = useAuthStatus();
  const navigate = useNavigate();
  const theme = useTheme();
  const notSmallScreen = useMediaQuery(theme.breakpoints.up("sm"));
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return (
    <Grid item xs={12}>
      <AppBar
        className={styles.navbar}
        sx={
          trigger === true
            ? { background: "#24292f !important" }
            : { background: "none" }
        }
      >
        <Typography item sx={{ color: "white" }} variant="h4">
          StudyBuddy
        </Typography>
        {notSmallScreen && (
          <div className={styles.navButtons}>
            <Button
              variant={"text"}
              className={styles.navButton}
              onClick={() => {
                navigate("/", { replace: true });
              }}
            >
              <Typography className={styles.buttonText}>Home</Typography>
            </Button>
            {!user && (
              <Button
                variant={"text"}
                className={styles.navButton}
                onClick={loginUser}
              >
                <Typography className={styles.buttonText}>Sign In</Typography>
              </Button>
            )}
            {user && (
              <Button
                variant={"text"}
                className={styles.navButton}
                onClick={() => {
                  navigate("/dashboard", { replace: true });
                }}
              >
                <Typography className={styles.buttonText}>Dashboard</Typography>
              </Button>
            )}
            {user && (
              <Button
                variant={"text"}
                className={styles.navButton}
                onClick={() => {
                  logoutUser();
                  navigate("/");
                }}
                sx={{ marginRight: "0px !important" }}
              >
                <Typography className={styles.buttonText}>Sign Out</Typography>
              </Button>
            )}
          </div>
        )}
        {!notSmallScreen && <MobileMenu />}
      </AppBar>
    </Grid>
  );
}

export default Navbar;
