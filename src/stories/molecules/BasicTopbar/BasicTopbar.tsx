import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import { styled, Toolbar } from "@mui/material";

import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import Badge from "@mui/material/Badge";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
const drawerWidth = 240;

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

interface BasicTopBarProps {}

export const BasicTopBar = ({}: BasicTopBarProps) => {
  return (
    <AppBar position="fixed" open={false}>
      <Toolbar>
        <Box
          component="img"
          src={"../logo.png"}
          alt="logo"
          sx={{ display: { xs: "none", md: "flex", maxHeight: "5vh" }, mr: 1 }}
        />
        <Box sx={{ flexGrow: 1 }}></Box>
      </Toolbar>
    </AppBar>
  );
};
