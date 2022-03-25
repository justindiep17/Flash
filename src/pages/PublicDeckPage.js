import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { makeStyles, createStyles } from "@mui/styles";
import { decks } from "../config/firebase/firebaseSetup";
import { FieldPath, documentId, doc } from "firebase/firestore";
import { query, where } from "firebase/firestore";
import { useCollectionDataOnce } from "react-firebase-hooks/firestore";
import { Grid, Typography } from "@mui/material";
import EditDeckForm from "../components/EditDeckForm";
import { getDeckRef } from "../config/decks";
import Loading from "../components/Loading";
import PublicFlashCard from "../components/PublicFlashCard";

const useStyles = makeStyles((theme) =>
  createStyles({
    pageContent: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      paddingTop: "10vh",
    },
  })
);

function PublicDeckPage() {
  const styles = useStyles();
  const { id } = useParams();
  const [values, loading, error] = useCollectionDataOnce(
    query(decks, where(documentId(), "==", id))
  );
  const [currCardIndex, setCurrCardIndex] = useState(null);

  useEffect(() => {
    if (values && values[0] && values[0].cards) {
      setCurrCardIndex(0);
    }
  }, [values]);

  if (loading) {
    return <Loading />;
  } else if (error) {
    return <div>Something Went Wrong</div>;
  } else if (values.length === 0) {
    return <div>Deck Doesn't Exist</div>;
  } else {
    const deck = values[0];
    const cards = deck.cards;
    return (
      <main>
        <Grid
          className={styles.pageContent}
          container
          display="flex"
          flexDirection="column"
        >
          <Grid item xs={12}>
            <PublicFlashCard card={cards[currCardIndex]} />
          </Grid>
          {/* <Grid item xs={12}>
            <Typography variant="h2">{deck.title}</Typography>
          </Grid> */}
        </Grid>
      </main>
    );
  }
}

export default PublicDeckPage;
