import { Button, Grid, Typography, AppBar } from "@mui/material";
import { makeStyles, createStyles } from "@mui/styles";
import { loginUser, logoutUser } from "../auth.js";
import { auth } from "../config/firebase/firebaseSetup.js";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import FilledButton from "./FilledButton";
import ProfileImageButton from "./ProfileImageButton";

const useStyles = makeStyles((theme) =>
  createStyles({
    navbar: {
      display: "flex !important",
      flexDirection: "row !important",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "10px 15px !important",
      background: "white !important",
      borderBottom: "0.5px solid #303030",
      boxShadow: "none !important",
      minHeight: "10vh",
      maxHeight: "10vh",
      [theme.breakpoints.up("sm")]: {
        padding: "10px 50px !important",
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
  })
);

function Navbar() {
  const styles = useStyles();
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();

  return (
    <Grid item xs={12}>
      <AppBar className={styles.navbar}>
        <Typography item variant="h4">
          Flash
        </Typography>
        {!user && (
          <div className={styles.navButtons}>
            <Button
              variant={"text"}
              sx={{
                marginRight: "18px",
                marginLeft: "18px",
                color: "black",
              }}
              onClick={() => {
                navigate("/", { replace: true });
              }}
            >
              Home
            </Button>
            <FilledButton text={"Sign In"} onClick={loginUser} />
          </div>
        )}
        {user && (
          <div className={styles.navButtons}>
            <Button
              variant={"text"}
              sx={{ marginRight: "36px", marginLeft: "18px", color: "black" }}
              onClick={() => {
                navigate("/dashboard", { replace: true });
              }}
            >
              Dashboard
            </Button>
            <ProfileImageButton
              onClick={logoutUser}
              src="https://t4.ftcdn.net/jpg/00/64/67/63/360_F_64676383_LdbmhiNM6Ypzb3FM4PPuFP9rHe7ri8Ju.jpg"
            ></ProfileImageButton>
          </div>
        )}
      </AppBar>
    </Grid>
  );
}

export default Navbar;
