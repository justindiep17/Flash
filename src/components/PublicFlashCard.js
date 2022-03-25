import { useParams } from "react-router-dom";
import { useState } from "react";
import { makeStyles, createStyles, StylesContext } from "@mui/styles";
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
    flashCard: {
      background: "#e8f4ff",
      width: 350,
      aspectRatio: "1.5 / 1",
      borderRadius: 30,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      [theme.breakpoints.up("sm")]: {
        width: 650,
        aspectRatio: "2 / 1",
      },
      [theme.breakpoints.up("md")]: {
        width: 900,
      },
    },
  })
);

function PublicFlashCard({ card }) {
  console.log(card);
  const styles = useStyles();

  return (
    <div className={styles.flashCard}>
      {card && (
        <Typography fontSize={"1.8rem"} fontWeight="500">
          {card.term}
        </Typography>
      )}
    </div>
  );
}

export default PublicFlashCard;
