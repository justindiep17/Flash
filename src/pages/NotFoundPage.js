import { useNavigate } from "react-router-dom";
import { makeStyles, createStyles } from "@mui/styles";
import { Grid, Typography } from "@mui/material";
import FilledButton from "../components/FilledButton";
import Navbar from "../components/NavbarDefault";
import Footer from "../components/Footer";

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
      <Navbar />
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
      <Footer />
    </main>
  );
}

export default NotFoundPage;
