import {
  Collapse,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  useTheme,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
// import "react-pro-sidebar/dist/css/styles.css";
import FolderCopy from "@mui/icons-material/FolderCopy";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import Summarize from "@mui/icons-material/Summarize";
import AccessTime from "@mui/icons-material/AccessTime";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import BusinessCenterOutlined from "@mui/icons-material/BusinessCenterOutlined";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { styled, Theme, CSSObject } from "@mui/material/styles";
import MuiDrawer from "@mui/material/Drawer";

import ListItemText from "@mui/material/ListItemText";
import MailIcon from "@mui/icons-material/Mail";
import { useState } from "react";
import {
  Assessment,
  Business,
  Engineering,
  ExpandLess,
  ExpandMore,
  FolderShared,
  Home,
  Insights,
  PeopleAlt,
  SocialDistance,
} from "@mui/icons-material";
import { ContractorMenu } from "../ContractorMenu/ContractorMenu";
import { SubContractorMenu } from "../SubContractorMenu/SubContractorMenu";

const drawerWidth = 240;

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});
const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

interface SideBarProps {
  open?: boolean;
  handleDrawerOpen: () => void;
}

export const SidebarMenu = ({ open, handleDrawerOpen }: SideBarProps) => {
  const theme = useTheme();

  return (
    <Drawer variant="permanent" open={open}>
      <DrawerHeader>
        <IconButton onClick={handleDrawerOpen}>
          {theme.direction === "rtl" ? (
            <ChevronRightIcon />
          ) : (
            <ChevronLeftIcon />
          )}
        </IconButton>
      </DrawerHeader>
      <Divider />
      <ContractorMenu open={open} />
      <Divider />
      <SubContractorMenu open={open} />
    </Drawer>
  );
};
