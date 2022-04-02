import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { makeStyles, createStyles, StylesContext } from "@mui/styles";
import { decks } from "../config/firebase/firebaseSetup";
import { FieldPath, documentId, doc } from "firebase/firestore";
import { query, where } from "firebase/firestore";
import { useCollectionDataOnce } from "react-firebase-hooks/firestore";
import { Grid, Typography, IconButton } from "@mui/material";
import EditDeckForm from "../components/EditDeckForm";
import { getDeckRef } from "../config/decks";
import Loading from "../components/Loading";
import ReactCardFlip from "react-card-flip";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

const useStyles = makeStyles((theme) =>
  createStyles({
    flashCard: {
      background: "white",
      width: 350,
      aspectRatio: "1.5 / 1",
      borderRadius: "5px",
      display: "flex",
      alignItems: "stretch",
      justifyContent: "center",
      [theme.breakpoints.up("sm")]: {
        width: 650,
        aspectRatio: "2 / 1",
      },
      [theme.breakpoints.up("md")]: {
        width: 900,
      },
      boxShadow: "5px 5px 12px 5px rgb(60 64 67 / 15%)",
      position: "relative",
      "&:hover": {
        cursor: "pointer",
      },
    },
    flashCardText: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: "1.8rem !important",
      textAlign: "center",
      fontWeight: 500,
      flexGrow: 1,
    },
    arrowBtn: {
      "&:hover": {
        backgroundColor: "white !important",
      },
      width: 80,
    },
  })
);

function PublicFlashCard({
  card,
  handleNext,
  handlePrevious,
  enableNextBtn,
  enablePreviousBtn,
}) {
  const styles = useStyles();
  const [showTerm, setShowTerm] = useState(true);
  const [hideDef, setHideDef] = useState(false);
  const [handleAction, setHandleAction] = useState("default");

  const handleClick = () => {
    setShowTerm(!showTerm);
    setHideDef(false);
  };

  console.log(showTerm);
  return (
    <ReactCardFlip isFlipped={showTerm} flipDirection="vertical">
      <Grid className={styles.flashCard}>
        {card && (
          <Grid
            container
            display="flex"
            flexDirection="row"
            justifyContent="space-between"
            alignItems="stretch"
          >
            <IconButton
              disableRipple
              className={styles.arrowBtn}
              onClick={() => {
                setShowTerm(true);
                setHideDef(true);
                handlePrevious();
              }}
            >
              {enablePreviousBtn && <ArrowBackIosIcon fontSize="large" />}
            </IconButton>

            <Typography className={styles.flashCardText} onClick={handleClick}>
              {!hideDef && `${card.definition}`}
            </Typography>

            <IconButton
              disableRipple
              className={styles.arrowBtn}
              onClick={() => {
                setShowTerm(true);
                setHideDef(true);
                handleNext();
              }}
            >
              {enableNextBtn && <ArrowForwardIosIcon fontSize="large" />}
            </IconButton>
          </Grid>
        )}
      </Grid>
      <Grid className={styles.flashCard}>
        {card && (
          <Grid
            container
            display="flex"
            flexDirection="row"
            justifyContent="space-between"
            alignItems="stretch"
          >
            <IconButton
              disableRipple
              className={styles.arrowBtn}
              onClick={() => {
                setShowTerm(true);
                setHideDef(true);
                handlePrevious();
              }}
            >
              {enablePreviousBtn && <ArrowBackIosIcon fontSize="large" />}
            </IconButton>

            <Typography className={styles.flashCardText} onClick={handleClick}>
              {card.term}
            </Typography>
            <IconButton
              disableRipple
              className={styles.arrowBtn}
              onClick={() => {
                setShowTerm(true);
                setHideDef(true);
                handleNext();
              }}
            >
              {enableNextBtn && <ArrowForwardIosIcon fontSize="large" />}
            </IconButton>
          </Grid>
        )}
      </Grid>
    </ReactCardFlip>
  );
}

export default PublicFlashCard;
