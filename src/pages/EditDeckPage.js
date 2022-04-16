import { useParams, useNavigate } from "react-router-dom";
import { makeStyles, createStyles } from "@mui/styles";
import { decks } from "../config/firebase/firebaseSetup";
import { FieldPath, documentId, doc } from "firebase/firestore";
import { query, where } from "firebase/firestore";
import { useCollectionDataOnce } from "react-firebase-hooks/firestore";
import { Grid, Typography } from "@mui/material";
import EditDeckForm from "../components/EditDeckForm";
import { getDeckRef } from "../config/decks";
import Loading from "../components/Loading";
import NotFoundPage from "./NotFoundPage";
import { useAuthStatus } from "../auth";
import Navbar from "../components/NavbarDefault";
import Footer from "../components/Footer";

const useStyles = makeStyles((theme) =>
  createStyles({
    pageContent: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      paddingTop: "16vh",
      paddingBottom: "8vh",
      minHeight: "100vh",
    },
    sectionTitle: {
      width: 350,
      display: "flex",
      justifyContent: "flex-start",
      [theme.breakpoints.up("sm")]: {
        width: 700,
      },
      [theme.breakpoints.up("md")]: {
        width: 1050,
      },
    },
  })
);

function EditDeckPage() {
  const styles = useStyles();
  const user = useAuthStatus();
  const { id } = useParams();
  const [values, loading, error] = useCollectionDataOnce(
    query(decks, where(documentId(), "==", id))
  );

  if (loading) {
    return <Loading />;
  } else if (error) {
    return <NotFoundPage />;
  } else if (!values || values.length === 0) {
    return <NotFoundPage />;
  } else if (!user || user.uid !== values[0].uid) {
    console.log("here");
    console.log(values[0].uid === user.uid);
    console.log(user);
    return <NotFoundPage />;
  } else {
    const deck = values[0];
    const deckRef = getDeckRef(id);
    return (
      <main>
        <Navbar />
        <Grid container className={styles.pageContent} direction="column">
          <Grid item className={styles.sectionTitle} marginBottom="20px">
            <Typography variant="h4" textAlign={"left"}>
              Edit Your Study Deck
            </Typography>
          </Grid>
          <EditDeckForm deck={deck} deckRef={deckRef} />
        </Grid>
        <Footer />
      </main>
    );
  }
}

export default EditDeckPage;
