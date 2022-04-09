import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { makeStyles, createStyles } from "@mui/styles";
import { decks, users } from "../config/firebase/firebaseSetup";
import { FieldPath, documentId, getDoc, getDocs } from "firebase/firestore";
import { query, where } from "firebase/firestore";
import { useCollectionDataOnce } from "react-firebase-hooks/firestore";
import { Grid, Typography, Badge, Modal, Button } from "@mui/material";
import EditDeckForm from "../components/EditDeckForm";
import { getDeckRef } from "../config/decks";
import Loading from "../components/Loading";
import PublicFlashCard from "../components/PublicFlashCard";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import EditIcon from "@mui/icons-material/Edit";
import { useAuthStatus } from "../auth";
import { deleteDeck } from "../config/decks";
import StudyImage from "../assets/study.jpg";

const useStyles = makeStyles((theme) =>
  createStyles({
    pageContent: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-start",
      alignItems: "center",
      paddingBottom: "8vh",
      minHeight: "100vh",
    },
    image: {
      width: "100vw",
      objectFit: "cover",
      maxHeight: "100vh",
    },
  })
);

function Home() {
  const styles = useStyles();
  const user = useAuthStatus();

  return (
    <main style={{ background: "#F5F5F5" }}>
      <Grid
        className={styles.pageContent}
        container
        display="flex"
        flexDirection="column"
      >
        <img src={StudyImage} className={styles.image} />
      </Grid>
    </main>
  );
}

export default Home;
