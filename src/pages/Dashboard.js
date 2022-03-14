import { Grid } from "@mui/material";
import DeckButton from "../components/DeckButton";
import { makeStyles, createStyles } from "@mui/styles";
import AddDeckButton from "../components/AddDeckButton";

const useStyles = makeStyles((theme) =>
  createStyles({
    pageContent: {
      display: "flex",
      width: "100vw",
      justifyContent: "center",
      alignItems: "center",
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
  })
);

function Dashboard() {
  const styles = useStyles();
  return (
    <main>
      <Grid item xs={12} className={styles.pageContent}>
        <Grid container className={styles.decksArray}>
          <AddDeckButton />
          <DeckButton name={"title"} />
          <DeckButton name={"title"} />
          <DeckButton name={"title"} />
          <DeckButton name={"title"} />
        </Grid>
      </Grid>
    </main>
  );
}

export default Dashboard;
