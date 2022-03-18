import { Button, Grid } from "@mui/material";
import { styled } from "@mui/system";
import AddIcon from "@mui/icons-material/Add";
import { createDeck } from "../config/decks";
import { useAuthStatus } from "../auth";
import { useNavigate } from "react-router-dom";

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

function AddDeckButton({ name = "New Deck" }) {
  const navigate = useNavigate();
  const authStatus = useAuthStatus();
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
      <AddDeckButtonStyled
        onClick={() => {
          if (authStatus) {
            createDeck(name, authStatus.uid).then((id) =>
              navigate(`/edit/${id}`)
            );
          } else {
            console.error("null user");
          }
        }}
      >
        <AddIcon sx={{ marginBottom: "5px" }} />
        <div>Add Deck</div>
      </AddDeckButtonStyled>
    </Grid>
  );
}

export default AddDeckButton;
