import { useParams } from "react-router-dom";
import { makeStyles, createStyles } from "@mui/styles";
import { decks } from "../config/firebase/firebaseSetup";
import { FieldPath, documentId, doc } from "firebase/firestore";
import { query, where } from "firebase/firestore";
import { useCollectionDataOnce } from "react-firebase-hooks/firestore";
import { Grid, Typography } from "@mui/material";
import EditDeckForm from "../components/EditDeckForm";
import { getDeckRef } from "../config/decks";
import Loading from "../components/Loading";

const useStyles = makeStyles((theme) =>
  createStyles({
    pageContent: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      paddingTop: "10vh",
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
  const { id } = useParams();
  const [values, loading, error] = useCollectionDataOnce(
    query(decks, where(documentId(), "==", id))
  );
  if (loading) {
    return <Loading />;
  } else if (error) {
    return <div>Something Went Wrong</div>;
  } else if (values.length === 0) {
    return <div>Deck Doesn't Exist</div>;
  } else {
    const deck = values[0];
    const deckRef = getDeckRef(id);
    console.log(deckRef);
    return (
      <main>
        <Grid container className={styles.pageContent} direction="column">
          <Grid item className={styles.sectionTitle} marginBottom="20px">
            <Typography variant="h5" textAlign={"left"}>
              Edit Your Study Deck
            </Typography>
          </Grid>
          <EditDeckForm deck={deck} deckRef={deckRef} />
        </Grid>
      </main>
    );
  }
}

export default EditDeckPage;
