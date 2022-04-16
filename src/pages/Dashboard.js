import { Grid, Typography } from "@mui/material";
import { makeStyles, createStyles } from "@mui/styles";
import AddDeckButton from "../components/AddDeckButton";
import { useAuthStatus } from "../auth";
import { query, where } from "firebase/firestore";
import { decks } from "../config/firebase/firebaseSetup";
import DeckButton from "../components/DeckButton";
import { useState } from "react";
import { useCollectionDataOnce } from "react-firebase-hooks/firestore";
import Loading from "../components/Loading";
import Navbar from "../components/NavbarDefault";
import NotFoundPage from "./NotFoundPage";
import Footer from "../components/Footer";

const useStyles = makeStyles((theme) =>
  createStyles({
    pageContent: {
      display: "flex",
      width: "100vw",
      justifyContent: "flex-start",
      alignItems: "center",
      paddingTop: "16vh",
      paddingBottom: "8vh",
      minHeight: "100vh",
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
  let userID;
  if (user) {
    userID = user.uid;
  } else {
    userID = "";
  }
  const [values, loading, error] = useCollectionDataOnce(
    query(decks, where("uid", "==", userID))
  );
  if (loading) {
    return <Loading />;
  } else if (!user || error) {
    return <NotFoundPage />;
  } else {
    if (values) {
      values.sort((a, b) => {
        if (a.lastModified.isEqual(b.lastModified)) {
          return 0;
        } else if (a.lastModified < b.lastModified) {
          return -1;
        } else {
          return 1;
        }
      });
    }
    return (
      <main style={{ background: "#F5F5F5" }}>
        <Navbar />
        <Grid container className={styles.pageContent} direction="column">
          <Grid item className={styles.sectionTitle} padding="0px 20px">
            <Typography variant="h4" textAlign={"left"}>
              Recent Decks
            </Typography>
          </Grid>
          <Grid container className={styles.decksArray}>
            <AddDeckButton />
            {values &&
              values
                .slice(0, 5)
                .map((doc) => <DeckButton deck={doc}></DeckButton>)}
          </Grid>
        </Grid>
        <Footer />
      </main>
    );
  }
}

export default Dashboard;
