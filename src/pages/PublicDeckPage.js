import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { makeStyles, createStyles } from "@mui/styles";
import { decks, users } from "../config/firebase/firebaseSetup";
import { documentId, getDoc, getDocs } from "firebase/firestore";
import { query, where } from "firebase/firestore";
import { useCollectionDataOnce } from "react-firebase-hooks/firestore";
import { Grid, Typography, Badge, Modal, Button } from "@mui/material";
import Loading from "../components/Loading";
import PublicFlashCard from "../components/PublicFlashCard";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import EditIcon from "@mui/icons-material/Edit";
import { useAuthStatus } from "../auth";
import { deleteDeck } from "../config/decks";
import Navbar from "../components/NavbarDefault";
import DeleteIcon from "@mui/icons-material/Delete";
import Footer from "../components/Footer";

const useStyles = makeStyles((theme) =>
  createStyles({
    pageContent: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      paddingTop: "16vh",
      paddingBottom: "8vh",
      minHeight: "100vh",
    },
    navigateBar: {
      background: "blue",
      boxShadow: "5px 5px 12px 5px rgb(60 64 67 / 15%)",
    },
    deckInfo: {
      width: 350,
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      alignItems: "flex-start",
      [theme.breakpoints.up("sm")]: {
        width: 650,
        flexDirection: "row",
      },
      [theme.breakpoints.up("md")]: {
        width: 900,
      },
    },
    infoText: {
      display: "flex",
      flexDirection: "column",
      maxWidth: "100%",
      [theme.breakpoints.up("sm")]: {
        maxWidth: "60%",
        marginBottom: "0px",
      },
      marginBottom: "8px",
    },
    descriptionText: {
      margin: "8px 0px",
      fontSize: "1.1rem",
      fontFamily: "Pontano Sans",
    },
    linkCopiedAlert: {
      background: "#424242",
      color: "white",
      position: "fixed",
      bottom: "3vh",
      left: "3vh",
      padding: "9px 18px",
      borderRadius: 6,
      fontSize: "0.85rem",
      transition: "opacity 4s cubic-bezier(.79,.04,1,-0.1)",
    },
    actionBtn: {
      "&:hover": {
        cursor: "pointer",
      },
    },
    deleteModal: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      height: "100vh",
    },
    deleteModalCard: {
      background: "white",
      padding: "20px",
      width: 350,
      [theme.breakpoints.up("sm")]: {
        width: 550,
      },
      [theme.breakpoints.up("md")]: {
        width: 800,
      },
    },
  })
);

function PublicDeckPage() {
  const styles = useStyles();
  const { id } = useParams();
  const [values, loading, error] = useCollectionDataOnce(
    query(decks, where(documentId(), "==", id))
  );
  const [deckAuthor, setDeckAuthor] = useState(null);
  const [currCardIndex, setCurrCardIndex] = useState(null);
  const navigate = useNavigate();
  const user = useAuthStatus();
  const [linkCopied, setLinkCopied] = useState(false);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const handleClose = () => {
    setDeleteModalOpen(false);
  };
  const handleOpen = () => {
    setDeleteModalOpen(true);
  };

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

    if (deckAuthor === null) {
      const userQuery = query(users, where(documentId(), "==", deck.uid));
      getDocs(userQuery).then((data) => {
        if (data.docs.length !== 0) {
          setDeckAuthor(
            data.docs[0]._document.data.value.mapValue.fields.username
              .stringValue
          );
        }
      });
    }

    const handleNext = () => {
      if (currCardIndex !== cards.length - 1) {
        setCurrCardIndex(currCardIndex + 1);
      }
    };

    const handlePrevious = () => {
      if (currCardIndex !== 0) {
        setCurrCardIndex(currCardIndex - 1);
      }
    };

    return (
      <main
        style={{ background: "#F5F5F5" }}
        onClick={() => {
          if (linkCopied) setLinkCopied(false);
        }}
      >
        <Navbar />
        <Grid
          className={styles.pageContent}
          container
          display="flex"
          flexDirection="column"
        >
          <Grid item xs={12}>
            <PublicFlashCard
              card={cards[currCardIndex]}
              handleNext={handleNext}
              handlePrevious={handlePrevious}
              enableNextBtn={currCardIndex !== cards.length - 1}
              enablePreviousBtn={currCardIndex !== 0}
            />
          </Grid>
          <Grid
            item
            xs={12}
            display="flex"
            justifyContent="center"
            marginTop="20px"
          >
            <div className={styles.deckInfo}>
              <div className={styles.infoText}>
                <div>
                  <Typography variant="h5" display="inline">
                    {deck.title}
                  </Typography>
                  {deckAuthor && (
                    <span style={{ fontSize: "1.1rem" }}>
                      &nbsp; by{" "}
                      <span style={{ color: "#0047AB" }}>{deckAuthor}</span>
                    </span>
                  )}
                </div>
                <p className={styles.descriptionText}>{deck.description}</p>
              </div>
              <div>
                <ContentCopyIcon
                  className={styles.actionBtn}
                  onClick={() => {
                    navigator.clipboard.writeText(
                      `http://localhost:3000/deck/${deck.id}`
                    );
                    setLinkCopied(true);
                  }}
                />
                {user && user.uid === deck.uid && (
                  <EditIcon
                    className={styles.actionBtn}
                    sx={{ marginLeft: "15px" }}
                    onClick={() => navigate(`/edit/${deck.id}`)}
                  />
                )}
                {user && user.uid === deck.uid && (
                  <DeleteIcon
                    className={styles.actionBtn}
                    sx={{ marginLeft: "15px" }}
                    onClick={() => {
                      handleOpen();
                    }}
                  />
                )}
              </div>
            </div>
            <Modal open={deleteModalOpen} onClose={handleClose}>
              <Grid className={styles.deleteModal}>
                <div container className={styles.deleteModalCard}>
                  <Typography sx={{ color: "#BF0000", marginBottom: "15px" }}>
                    Are you sure you want to delete this?
                  </Typography>
                  <Typography sx={{ marginBottom: "15px" }}>
                    By pressing delete, you will <b>permanently</b> lose access
                    to all information related to {deck.title}.
                  </Typography>
                  <Grid container display="flex" justifyContent="flex-start">
                    <Button
                      variant="outlined"
                      color="info"
                      sx={{ marginRight: 2.5 }}
                      onClick={handleClose}
                    >
                      Cancel
                    </Button>
                    <Button
                      variant="outlined"
                      color="error"
                      onClick={async () => {
                        await deleteDeck(deck.id);
                        navigate("/dashboard");
                      }}
                    >
                      Delete
                    </Button>
                  </Grid>
                </div>
              </Grid>
            </Modal>
          </Grid>
        </Grid>
        <div
          className={styles.linkCopiedAlert}
          style={
            linkCopied
              ? { visibility: "visible", opacity: 0 }
              : { visibility: "hidden", opacity: 1 }
          }
        >
          The deck URL has been copied to your clipboard.
        </div>
        <Footer />
      </main>
    );
  }
}

export default PublicDeckPage;
