import { Grid, Typography } from "@mui/material";
import { makeStyles, createStyles } from "@mui/styles";
import AddDeckButton from "../components/AddDeckButton";
import { useAuthStatus } from "../auth";
import { query, where } from "firebase/firestore";
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
      paddingTop: "10vh",
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
    sectionTitle: {
      width: 350,
      display: "flex",
      [theme.breakpoints.up("sm")]: {
        width: 700,
      },
      [theme.breakpoints.up("md")]: {
        width: 1050,
      },
    },
  })
);

function Dashboard() {
  const styles = useStyles();
  const user = useAuthStatus();
  const [values, loading, error] = useCollectionDataOnce(
    query(decks, where("uid", "==", `${user.uid}`))
  );

  if (loading) {
    return <div>Loading</div>;
  } else {
    values.sort((a, b) => {
      if (a.lastModified.isEqual(b.lastModified)) {
        return 0;
      } else if (a.lastModified < b.lastModified) {
        return -1;
      } else {
        return 1;
      }
    });
    return (
      <main>
        <Grid item xs={12} className={styles.pageContent} direction="column">
          <Grid item className={styles.sectionTitle} padding="0px 20px">
            <Typography variant="h6" textAlign={"left"}>
              Recent Decks
            </Typography>
          </Grid>
          <Grid container className={styles.decksArray}>
            <AddDeckButton />
            {values.slice(0, 5).map((doc) => (
              <DeckButton name={doc.title}></DeckButton>
            ))}
          </Grid>
        </Grid>
      </main>
    );
  }
}

export default Dashboard;
