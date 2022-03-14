import { Button, Grid } from "@mui/material";
import { styled } from "@mui/system";
import AddIcon from "@mui/icons-material/Add";

const AddDeckButtonStyled = styled(Button)(({ theme }) => ({
  background: "white",
  color: "black",
  boxShadow:
    "0 1px 2px 0 rgb(60 64 67 / 30%), 0 1px 3px 1px rgb(60 64 67 / 15%)",
  height: "100%",
  width: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  "&:hover": {
    background: "#e6e6e6",
    boxShadow:
      "0 1px 2px 0 rgb(60 64 67 / 30%), 0 1px 3px 1px rgb(60 64 67 / 15%)",
  },
}));

function AddDeckButton({ name }) {
  return (
    <Grid
      item
      sx={{
        height: "230px",
        width: "350px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px",
      }}
    >
      <AddDeckButtonStyled>
        <AddIcon sx={{ marginBottom: "5px" }} />
        <div>Add Deck</div>
      </AddDeckButtonStyled>
    </Grid>
  );
}

export default AddDeckButton;
