import { useState } from "react";
import { makeStyles, createStyles, StylesContext } from "@mui/styles";
import { Grid, Typography, IconButton } from "@mui/material";
import ReactCardFlip from "react-card-flip";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

const useStyles = makeStyles((theme) =>
  createStyles({
    flashCard: {
      background: "white",
      width: 350,
      minHeight: 233.33,
      borderRadius: "5px",
      display: "flex",
      alignItems: "stretch",
      justifyContent: "center",
      [theme.breakpoints.up("sm")]: {
        width: 650,
        minHeight: 325,
      },
      [theme.breakpoints.up("md")]: {
        width: 900,
        minHeight: 450,
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
      textAlign: "center",
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
  const theme = useTheme();
  const notSmallScreen = useMediaQuery(theme.breakpoints.up("sm"));
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
            <Grid
              item
              display="flex"
              alignItem="center"
              justifyContent="center"
              xs={2}
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
                {enablePreviousBtn && (
                  <ArrowBackIosIcon
                    fontSize={notSmallScreen ? "large" : "small"}
                  />
                )}
              </IconButton>
            </Grid>
            <Grid
              item
              display="flex"
              alignItem="center"
              justifyContent="center"
              xs={8}
            >
              <Typography
                className={styles.flashCardText}
                onClick={handleClick}
              >
                {!hideDef && `${card.definition}`}
              </Typography>
            </Grid>
            <Grid
              item
              display="flex"
              alignItem="center"
              justifyContent="center"
              xs={2}
            >
              <IconButton
                disableRipple
                className={styles.arrowBtn}
                onClick={() => {
                  setShowTerm(true);
                  setHideDef(true);
                  handleNext();
                }}
              >
                {enableNextBtn && (
                  <ArrowForwardIosIcon
                    fontSize={notSmallScreen ? "large" : "small"}
                  />
                )}
              </IconButton>
            </Grid>
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
            alignItems="center"
          >
            <Grid
              item
              display="flex"
              alignItem="center"
              justifyContent="center"
              xs={2}
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
                {enablePreviousBtn && (
                  <ArrowBackIosIcon
                    fontSize={notSmallScreen ? "large" : "small"}
                  />
                )}
              </IconButton>
            </Grid>
            <Grid
              item
              display="flex"
              alignItem="center"
              justifyContent="center"
              xs={8}
            >
              <Typography
                className={styles.flashCardText}
                onClick={handleClick}
              >
                {card.term}
              </Typography>
            </Grid>
            <Grid
              item
              display="flex"
              alignItem="center"
              justifyContent="center"
              xs={2}
            >
              <IconButton
                disableRipple
                className={styles.arrowBtn}
                onClick={() => {
                  setShowTerm(true);
                  setHideDef(true);
                  handleNext();
                }}
              >
                {enableNextBtn && (
                  <ArrowForwardIosIcon
                    fontSize={notSmallScreen ? "large" : "small"}
                  />
                )}
              </IconButton>
            </Grid>
          </Grid>
        )}
      </Grid>
    </ReactCardFlip>
  );
}

export default PublicFlashCard;
