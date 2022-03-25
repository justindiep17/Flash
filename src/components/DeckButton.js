import { Button, Grid } from "@mui/material";
import { styled } from "@mui/system";
import { useAuthStatus } from "../auth";
import { useNavigate } from "react-router-dom";

const DeckButtonStyled = styled(Button)(({ theme }) => ({
  background: "white",
  color: "black",
  boxShadow:
    "0 1px 2px 0 rgb(60 64 67 / 30%), 0 1px 3px 1px rgb(60 64 67 / 15%)",
  height: "100%",
  width: "100%",
  "&:hover": {
    background: "#e6e6e6",
    boxShadow:
      "0 1px 2px 0 rgb(60 64 67 / 30%), 0 1px 3px 1px rgb(60 64 67 / 15%)",
  },
}));

function DeckButton({ deck }) {
  const authStatus = useAuthStatus();
  const navigate = useNavigate();
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
      <DeckButtonStyled
        onClick={() => {
          if (authStatus) {
            navigate(`/deck/${deck.id}`);
          } else {
            console.error("null user");
          }
        }}
      >
        {deck.title}
      </DeckButtonStyled>
    </Grid>
  );
}

export default DeckButton;
