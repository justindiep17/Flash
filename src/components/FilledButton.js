import { styled } from "@mui/system";
import { Button } from "@mui/material";

const FilledButtonStyled = styled(Button)(({ theme }) => ({
  color: theme.palette.primary.contrastText,
  background: theme.palette.primary.secondary,
  "&:hover": {
    background: "rgba(255, 204, 0, 0.8)",
  },
  padding: "5px 12px",
}));

function FilledButton({ text, onClick }) {
  return (
    <FilledButtonStyled secondary onClick={onClick}>
      {text}
    </FilledButtonStyled>
  );
}

export default FilledButton;
