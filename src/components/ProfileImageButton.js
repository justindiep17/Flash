import { styled } from "@mui/system";
import { Button, Menu, MenuItem, Typography } from "@mui/material";
import { useState } from "react";
import EditIcon from "@mui/icons-material/Edit";
import LogoutIcon from "@mui/icons-material/Logout";
import { logoutUser } from "../auth.js";
import { useNavigate } from "react-router-dom";

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

function ProfileImageButton({ src }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const navigate = useNavigate();
  const handleOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <ProfileImageButtonStyled onClick={handleOpen}>
        <ImageStyled src={src} />
      </ProfileImageButtonStyled>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        sx={{ marginTop: "10px" }}
        keepMounted
      >
        <MenuItem
          display="flex"
          justifyContent="center"
          alignItems="center"
          sx={{ padding: "10px 20px" }}
          onClick={() => {
            navigate("/editProfile");
          }}
        >
          <EditIcon />
          <Typography sx={{ marginLeft: "8px" }}>Edit Profile</Typography>
        </MenuItem>
        <MenuItem
          display="flex"
          justifyContent="center"
          alignItems="center"
          sx={{ padding: "10px 20px" }}
          onClick={() => {
            logoutUser();
            navigate("/");
          }}
        >
          <LogoutIcon />
          <Typography style={{ marginLeft: "8px" }}>Log Out</Typography>
        </MenuItem>
      </Menu>
    </div>
  );
}

export default ProfileImageButton;
