import { Button, Grid } from "@mui/material";
import { auth } from "../config/firebase/firebaseSetup";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { makeStyles, createStyles } from "@mui/styles";
import { useAuthState } from "react-firebase-hooks/auth";
import LandingPage from "../pages/LandingPage";
import Navbar from "../components/Navbar";

const useStyles = makeStyles((theme) => createStyles({}));

function Home() {
  const provider = new GoogleAuthProvider();
  const styles = useStyles();
  const [user, loading, error] = useAuthState(auth);
  if (loading) {
    return <div>loading</div>;
  }
  return (
    <div>
      <Grid>
        <Navbar />
      </Grid>
    </div>
  );
}

export default Home;
