import { styled } from "@mui/system";
import {
  Button,
  Menu,
  MenuItem,
  Typography,
  IconButton,
  Grid,
} from "@mui/material";
import { useState } from "react";
import HomeIcon from "@mui/icons-material/Home";
import LogoutIcon from "@mui/icons-material/Logout";
import { logoutUser, loginUser } from "../auth.js";
import { useNavigate } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import { useAuthStatus } from "../auth.js";
import DashboardIcon from "@mui/icons-material/Dashboard";
import LoginIcon from "@mui/icons-material/Login";

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

function MobileMenu() {
  const [anchorEl, setAnchorEl] = useState(null);
  const user = useAuthStatus();
  const navigate = useNavigate();
  const handleOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton onClick={handleOpen}>
        <MenuIcon sx={{ color: "white" }} />
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        sx={{ marginTop: "10px" }}
        keepMounted
      >
        <MenuItem
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          onClick={() => {
            navigate("/");
          }}
        >
          <Grid item display="flex" alignItems="center">
            <HomeIcon size="small" />
          </Grid>
          <Grid item display="flex" alignItems="center">
            <Typography
              sx={{
                marginLeft: "8px",
                fontSize: "0.95rem",
                fontFamily: "Pontano Sans",
                textAlign: "left",
              }}
            >
              Home
            </Typography>
          </Grid>
        </MenuItem>
        {user && (
          <MenuItem
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            onClick={() => {
              navigate("/dashboard");
            }}
          >
            <Grid item display="flex" alignItems="center">
              <DashboardIcon size="small" />
            </Grid>
            <Grid item display="flex" alignItems="center">
              <Typography
                sx={{
                  marginLeft: "8px",
                  fontSize: "0.95rem",
                  fontFamily: "Pontano Sans",
                  textAlign: "left",
                }}
              >
                Dashboard
              </Typography>
            </Grid>
          </MenuItem>
        )}
        <MenuItem
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          onClick={
            !user
              ? loginUser
              : () => {
                  logoutUser();
                  navigate("/");
                }
          }
        >
          <Grid item display="flex" alignItems="center">
            {user && <LoginIcon />}
            {!user && <LogoutIcon />}
          </Grid>
          <Grid item display="flex" alignItems="center">
            {user && (
              <Typography
                style={{
                  marginLeft: "8px",
                  fontSize: "0.95rem",
                  fontFamily: "Pontano Sans",
                  textAlign: "left",
                }}
              >
                Sign Out
              </Typography>
            )}
            {!user && (
              <Typography
                style={{
                  marginLeft: "8px",
                  fontSize: "0.95rem",
                  fontFamily: "Pontano Sans",
                  textAlign: "left",
                }}
              >
                Sign In
              </Typography>
            )}
          </Grid>
        </MenuItem>
      </Menu>
    </div>
  );
}

export default MobileMenu;
