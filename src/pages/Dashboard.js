import { Grid } from "@mui/material";
import { makeStyles, createStyles } from "@mui/styles";
import AddDeckButton from "../components/AddDeckButton";
import { useAuthStatus } from "../auth";
import { getDocs, query, where } from "firebase/firestore";
import { decks } from "../config/firebase/firebaseSetup";
import DeckButton from "../components/DeckButton";
import { useState } from "react";
import { useCollectionDataOnce } from "react-firebase-hooks/firestore";

const useStyles = makeStyles((theme) =>
  createStyles({
    pageContent: {
      display: "flex",
      width: "100vw",
      justifyContent: "center",
      alignItems: "center",
    },
    decksArray: {
      maxWidth: 350,
      display: "flex",
      [theme.breakpoints.up("sm")]: {
        maxWidth: 700,
      },
      [theme.breakpoints.up("md")]: {
        maxWidth: 1050,
      },
    },
  })
);

function Dashboard() {
  const styles = useStyles();
  const user = useAuthStatus();
  const [values, loading, error, snapshot] = useCollectionDataOnce(
    query(decks, where("uid", "==", `${user.uid}`))
  );

  if (loading) {
    return <div>Loading</div>;
  } else {
    return (
      <main>
        <Grid item xs={12} className={styles.pageContent}>
          <Grid container className={styles.decksArray}>
            <AddDeckButton />
            {values.map((doc) => (
              <DeckButton name={doc.title}></DeckButton>
            ))}
          </Grid>
        </Grid>
      </main>
    );
  }
}

export default Dashboard;
