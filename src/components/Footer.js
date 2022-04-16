import CopyrightIcon from "@mui/icons-material/Copyright";
import { makeStyles, createStyles } from "@mui/styles";
import { Grid, Typography, Badge, Modal, Button } from "@mui/material";
import { black } from "material-ui/styles/colors";

const useStyles = makeStyles((theme) =>
  createStyles({
    footer: {
      color: black,
      padding: "1.5vh 0",
      "& svg": {
        fontSize: "1.1rem",
        marginRight: "8px",
      },
      background: "white",
    },
    text: {
      fontFamily: "Pontano Sans !important",
      fontSize: "1rem !important",
      textAlign: "center",
    },
  })
);

function Footer() {
  const styles = useStyles();
  return (
    <Grid
      xs={12}
      className={styles.footer}
      display="flex"
      flexDirection="row"
      justifyContent="center"
      alignItems="center"
    >
      <CopyrightIcon />
      <Typography className={styles.text}>StudyBuddy, 2022</Typography>
    </Grid>
  );
}

export default Footer;
