import { Button } from "@mui/material";
import { auth } from "../firebase.js";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { makeStyles, createStyles } from "@mui/styles";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";
import LandingPage from "../pages/LandingPage.js";

const useStyles = makeStyles((theme) => createStyles({}));

function Home() {
  const provider = new GoogleAuthProvider();
  const styles = useStyles();
  const [user, loading, error] = useAuthState(auth);
  if (loading) {
    return <div>loading</div>;
  }
  if (user) {
    return (
      <div>
        <Button
          onClick={() => {
            signOut(auth);
          }}
        >
          Log out
        </Button>
      </div>
    );
  } else {
    return <LandingPage></LandingPage>;
  }
}

export default Home;
