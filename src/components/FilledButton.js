import { styled } from "@mui/system";
import { Button } from "@mui/material";

const FilledButtonStyled = styled(Button)(({ theme }) => ({
  color: "white",
  backgroundColor: theme.palette.primary.main,
  borderRadius: 0,
}));

function FilledButton({ text, onClick }) {
  return <FilledButtonStyled onClick={onClick}>{text}</FilledButtonStyled>;
}

export default FilledButton;
