import { styled } from "@mui/system";
import { Button } from "@mui/material";

const FilledButtonStyled = styled(Button)(({ theme }) => ({
  color: "black",
  background: theme.palette.primary.secondary,
  "&:hover": {
    background: "#fdc500",
  },
  padding: "5px 12px",
  fontFamily: "Pontano Sans",
  fontSize: "1rem",
}));

function FilledButton({ text, onClick, sx }) {
  return (
    <FilledButtonStyled secondary onClick={onClick} sx={sx}>
      {text}
    </FilledButtonStyled>
  );
}

export default FilledButton;
