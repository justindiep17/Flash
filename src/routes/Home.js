import { Button, Grid } from "@mui/material";
import { auth } from "../config/firebase/firebaseSetup";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { makeStyles, createStyles } from "@mui/styles";
import { useAuthState } from "react-firebase-hooks/auth";
import LandingPage from "../pages/LandingPage";
import Navbar from "../components/Navbar";

const useStyles = makeStyles((theme) =>
  createStyles({
    page: {
      height: "100vh",
      width: "100vw",
      // background:
      //   "url(https://peoplescience.maritz.com/-/media/Maritz/Project/PeopleScience/Articles/studying_student_library.ashx?h=900&w=1200&la=en&hash=9915CBACFC502B0D5A17609E5912912F622626FF)",
      // backgroundRepeat: "no-repeat",
      // backgroundSize: "100vw 100vh",
    },
    image: {
      width: "100%",
      height: "auto",
      objectFit: "cover",
    },
    description: {
      background: "green",
      width: "100%",
      height: "100%",
    },
    imageDescriptionRow: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "stretch",
    },
  })
);

function Home() {
  const provider = new GoogleAuthProvider();
  const styles = useStyles();
  const [user, loading, error] = useAuthState(auth);
  if (loading) {
    return <div>loading</div>;
  }
  return <div className={styles.page}></div>;
}

export default Home;
