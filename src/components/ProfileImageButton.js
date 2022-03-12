import { styled } from "@mui/system";
import { Button } from "@mui/material";

const ProfileImageButtonStyled = styled(Button)(({ theme }) => ({
  display: "flex",
  minWidth: "40px",
  minHeight: "40px",
  maxWidth: "40px",
  maxHeight: "40px",
  borderRadius: "50%",
  objectFit: "cover",
  padding: "0",
  display: "inline-block",
}));

const ImageStyled = styled("img")(({ theme }) => ({
  width: "100%",
  height: "auto",
  aspectRatio: "1/1",
  objectFit: "cover",
  borderRadius: "50%",
}));

function ProfileImageButton({ src, onClick }) {
  return (
    <ProfileImageButtonStyled onClick={onClick}>
      <ImageStyled src={src} />
    </ProfileImageButtonStyled>
  );
}

export default ProfileImageButton;
