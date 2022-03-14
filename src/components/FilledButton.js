import { styled } from "@mui/system";
import { Button } from "@mui/material";

const FilledButtonStyled = styled(Button)(({ theme }) => ({
  color: "black",
  background: theme.palette.primary.secondary,
  "&:hover": {
    background: "rgba(255, 204, 0, 0.8)",
  },
}));

function FilledButton({ text, onClick }) {
  return (
    <FilledButtonStyled secondary onClick={onClick}>
      {text}
    </FilledButtonStyled>
  );
}

export default FilledButton;
