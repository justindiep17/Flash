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
import Navbar from "../components/NavbarHome";
import DeleteIcon from "@mui/icons-material/Delete";
import FilledButton from "../components/FilledButton";

const useStyles = makeStyles((theme) =>
  createStyles({
    pageContent: {
      display: "flex",
      width: "100vw",
      justifyContent: "center",
      alignItems: "center",
      paddingTop: "16vh",
      paddingBottom: "8vh",
      minHeight: "100vh",
    },
  })
);

function NotFoundPage() {
  const navigate = useNavigate();
  const styles = useStyles();
  return (
    <main style={{ background: "#F5F5F5" }}>
      <Grid container className={styles.pageContent} direction="column">
        <Typography variant="h1" sx={{ marginBottom: "16px" }}>
          Page Not Found
        </Typography>
        <Typography variant="h6" sx={{ marginBottom: "16px" }}>
          The page you are looking for does not exist.
        </Typography>
        <FilledButton
          text="Return Home"
          onClick={() => navigate("/")}
        ></FilledButton>
      </Grid>
    </main>
  );
}

export default NotFoundPage;
