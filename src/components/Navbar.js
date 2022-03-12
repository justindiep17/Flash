import { Button, Grid } from "@mui/material";
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
      display: "flex",
      flexDirection: "row",
      justifyContent: "flex-end",
      alignItems: "center",
      padding: "20px 20px",
    },
  })
);

function Navbar() {
  const styles = useStyles();
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();

  return (
    <Grid item xs={12}>
      <nav className={styles.navbar}>
        {!user && (
          <div>
            <Button
              variant={"text"}
              sx={{ marginRight: "24px", marginLeft: "12px" }}
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
          <div>
            <Button
              variant={"text"}
              sx={{ marginRight: "24px", marginLeft: "12px" }}
              onClick={() => {
                navigate("/", { replace: true });
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
      </nav>
    </Grid>
  );
}

export default Navbar;
