import { makeStyles, createStyles } from "@mui/styles";
import { Grid, Typography, Badge, Modal, Button } from "@mui/material";
import { useAuthStatus } from "../auth";
import StudyImage from "../assets/laptop2.webp";
import FilledButton from "../components/FilledButton";
import { white } from "material-ui/styles/colors";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import AddIcon from "@mui/icons-material/Add";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import ShareIcon from "@mui/icons-material/Share";
import Navbar from "../components/NavbarHome";
import Footer from "../components/Footer";
import { loginUser } from "../auth";
import { useNavigate } from "react-router-dom";

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
    homeText: {
      width: "100%",
      marginTop: "4vh",
      textAlign: "center",
      [theme.breakpoints.up("sm")]: {
        textAlign: "left",
      },
    },
    homeTextMain: {
      color: "white",
      width: "auto",
      textAlign: "center",
      [theme.breakpoints.up("sm")]: {
        width: "55vw",
        textAlign: "left",
      },
    },
    homePanel: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "100vw",
      minHeight: "100vh",
      backgroundSize: "cover",
      backgroundPosition: "center",
      paddingLeft: "8vw",
      paddingRight: "8vw",
      [theme.breakpoints.up("sm")]: {
        justifyContent: "flex-start",
      },
    },
    highlightedText: {
      color: white,
      backgroundColor: "rgba(0,41,107,0.85)",
      padding: "3px 6px",
    },
    iconInfoCardArray: {
      display: "flex",
      flexDirection: "column !important",
      alignItems: "center",
      marginTop: "8vh",
      padding: "8vh 8vw",
      [theme.breakpoints.up("md")]: {
        flexDirection: "row !important",
        justifyContent: "space-between",
      },
    },
    iconInfoCard: {
      width: "calc(100%-80px)",
      maxWidth: "350px",
      background: "white",
      boxShadow: "5px 5px 12px 5px rgb(60 64 67 / 15%)",
      height: "300px",
      display: "flex",
      padding: "40px",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      [theme.breakpoints.up("md")]: {
        minWidth: "0px",
        width: "100%",
        height: "330px",
      },
      "& svg": {
        fontSize: "80px",
        marginBottom: "15px",
      },
      color: "#00245e",
    },
    infoCardTitle: {
      fontSize: "1.3rem !important",
      fontWeight: "700 !important",
      marginBottom: "15px !important",
    },
    infoCardDescription: {
      fontFamily: "Pontano Sans !important",
      fontSize: "1rem !important",
      textAlign: "center",
    },
  })
);

function Home() {
  const styles = useStyles();
  // const user = useAuthStatus();
  const theme = useTheme();
  const notSmallScreen = useMediaQuery(theme.breakpoints.up("sm"));
  const mediumScreenUp = useMediaQuery(theme.breakpoints.up("md"));
  const navigate = useNavigate();

  const titleStyles = {
    fontWeight: "900",
    fontSize: notSmallScreen ? "4.25rem" : "2.2rem",
    marginBottom: "3vh",
    letterSpacing: "0.25px",
    fontFamily: "Roboto",
    lineHeight: "1.2",
    margin: 0,
  };

  return (
    <main style={{ background: "#F5F5F5" }}>
      <Navbar />
      <Grid
        className={styles.pageContent}
        container
        display="flex"
        flexDirection="column"
      >
        <Grid
          container
          className={styles.homePanel}
          sx={{
            backgroundImage: `url(${StudyImage})`,
          }}
        >
          <Grid item>
            <Grid className={styles.homeText}>
              <Typography sx={titleStyles} className={styles.homeTextMain}>
                Studying Is <mark className={styles.highlightedText}>Hard</mark>
                .
              </Typography>
              <Typography sx={titleStyles} className={styles.homeTextMain}>
                Why Face It Alone?
              </Typography>
              <Typography
                sx={{
                  fontWeight: "400",
                  fontSize: notSmallScreen ? "1.55rem" : "1.2rem",
                  marginBottom: "2vh",
                  fontFamily: "Pontano Sans",
                  marginTop: "2vh",
                }}
                className={styles.homeTextMain}
              >
                StudyBuddy is your ultimate studying companion. Access our full
                suite of studying tools to improve your studying today.
              </Typography>
              <FilledButton
                text="Get Started"
                onClick={() => {
                  loginUser().then(navigate("/dashboard"));
                }}
                sx={{ padding: notSmallScreen ? "17.5px 35px" : "10px 20px" }}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid container item xs={12} className={styles.iconInfoCardArray}>
          <Grid
            md={4}
            item
            sx={
              mediumScreenUp
                ? {
                    display: "flex",
                    justifyContent: "flex-start",
                    paddingRight: "25px",
                  }
                : { paddingBottom: "25px" }
            }
          >
            <div className={styles.iconInfoCard}>
              <AddIcon />
              <Typography className={styles.infoCardTitle}>CREATE</Typography>
              <Typography className={styles.infoCardDescription}>
                Create and personalize your very own study sets contained with
                all the information you need to review.
              </Typography>
            </div>
          </Grid>
          <Grid
            md={4}
            sx={
              mediumScreenUp
                ? {
                    display: "flex",
                    justifyContent: "center",
                    paddingLeft: "12.5px",
                    paddingRight: "12.5px",
                  }
                : { paddingBottom: "12.5px", paddingTop: "12.5px" }
            }
          >
            <div className={styles.iconInfoCard}>
              <MenuBookIcon />
              <Typography className={styles.infoCardTitle}>STUDY</Typography>
              <Typography className={styles.infoCardDescription}>
                Study and keep track of your progress by directly reviewing
                study sets on StudyBuddy.
              </Typography>
            </div>
          </Grid>
          <Grid
            md={4}
            sx={
              mediumScreenUp
                ? {
                    display: "flex",
                    justifyContent: "flex-end",
                    paddingLeft: "25px",
                  }
                : { paddingTop: "25px" }
            }
          >
            <div className={styles.iconInfoCard}>
              <ShareIcon />
              <Typography className={styles.infoCardTitle}>SHARE</Typography>
              <Typography className={styles.infoCardDescription}>
                Share and allow others to review your study sets to spread the
                knowledge. A great way to help buddies in need.
              </Typography>
            </div>
          </Grid>
        </Grid>
        <FilledButton
          text="Get Started"
          onClick={() => {
            loginUser().then(navigate("/dashboard"));
          }}
          sx={{ padding: notSmallScreen ? "17.5px 35px" : "10px 20px" }}
        />
      </Grid>
      <Footer />
    </main>
  );
}

export default Home;
