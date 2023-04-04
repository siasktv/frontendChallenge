import {
  Collapse,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
// import "react-pro-sidebar/dist/css/styles.css";
import AccessTime from "@mui/icons-material/AccessTime";

import ListItemText from "@mui/material/ListItemText";
import { useState } from "react";
import {
  Assessment,
  Business,
  ExpandLess,
  ExpandMore,
  FolderShared,
  Home,
  Insights,
  PeopleAlt,
  SocialDistance,
  TrackChanges,
} from "@mui/icons-material";

interface SideBarProps {
  open?: boolean;
}

export const SubContractorMenu = ({ open }: SideBarProps) => {
  const navigate = useNavigate();

  const handleMenuButtonClick = (path: string) => {
    navigate(path);
  };

  const [reportingOpen, setReportingOpen] = useState(false);
  const [directoryOpen, setDirectoryOpen] = useState(false);

  const handleOpenReporting = () => {
    setReportingOpen(!reportingOpen);
  };
  const handleOpenDirectory = () => {
    setDirectoryOpen(!directoryOpen);
  };
  return (
    <List>
      <ListItem key={"Home"} disablePadding sx={{ display: "block" }}>
        <ListItemButton
          onClick={() => handleMenuButtonClick("/s/dashboard")}
          sx={{
            minHeight: 48,
            justifyContent: open ? "initial" : "center",
            px: 2.5,
          }}
        >
          <ListItemIcon
            sx={{
              minWidth: 0,
              mr: open ? 3 : "auto",
              justifyContent: "center",
            }}
          >
            <Home />
          </ListItemIcon>
          <ListItemText primary={"Home"} sx={{ opacity: open ? 1 : 0 }} />
        </ListItemButton>
      </ListItem>
      <ListItem key={"Targets"} disablePadding sx={{ display: "block" }}>
        <ListItemButton
          onClick={() => handleMenuButtonClick("/s/portal")}
          sx={{
            minHeight: 48,
            justifyContent: open ? "initial" : "center",
            px: 2.5,
          }}
        >
          <ListItemIcon
            sx={{
              minWidth: 0,
              mr: open ? 3 : "auto",
              justifyContent: "center",
            }}
          >
            <TrackChanges />
          </ListItemIcon>
          <ListItemText primary={"Targets"} sx={{ opacity: open ? 1 : 0 }} />
        </ListItemButton>
      </ListItem>
      <ListItem key={"Analytics"} disablePadding sx={{ display: "block" }}>
        <ListItemButton
          onClick={() => handleMenuButtonClick("/s/analytics")}
          sx={{
            minHeight: 48,
            justifyContent: open ? "initial" : "center",
            px: 2.5,
          }}
        >
          <ListItemIcon
            sx={{
              minWidth: 0,
              mr: open ? 3 : "auto",
              justifyContent: "center",
            }}
          >
            <Insights />
          </ListItemIcon>
          <ListItemText primary={"Analytics"} sx={{ opacity: open ? 1 : 0 }} />
        </ListItemButton>
      </ListItem>
      <ListItemButton onClick={handleOpenReporting}>
        <ListItemIcon>
          <Assessment />
        </ListItemIcon>
        <ListItemText primary="Reporting" />
        {reportingOpen ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={reportingOpen} timeout="auto" unmountOnExit>
        <ListItem key={"Labour Hours"} disablePadding sx={{ display: "block" }}>
          <ListItemButton
            onClick={() => handleMenuButtonClick("/s/labour-hours")}
            sx={{
              minHeight: 48,
              justifyContent: open ? "initial" : "center",
              px: 2.5,
            }}
          >
            <ListItemIcon
              sx={{
                minWidth: 0,
                mr: open ? 3 : "auto",
                justifyContent: "center",
              }}
            >
              <AccessTime />
            </ListItemIcon>
            <ListItemText
              primary={"Labour Hours"}
              sx={{ opacity: open ? 1 : 0 }}
            />
          </ListItemButton>
        </ListItem>
        <ListItem
          key={"Social Procurement"}
          disablePadding
          sx={{ display: "block" }}
        >
          <ListItemButton
            onClick={() => handleMenuButtonClick("/s/social-procurement")}
            sx={{
              minHeight: 48,
              justifyContent: open ? "initial" : "center",
              px: 2.5,
            }}
          >
            <ListItemIcon
              sx={{
                minWidth: 0,
                mr: open ? 3 : "auto",
                justifyContent: "center",
              }}
            >
              <SocialDistance />
            </ListItemIcon>
            <ListItemText
              primary={"Social Procurement"}
              sx={{ opacity: open ? 1 : 0 }}
            />
          </ListItemButton>
        </ListItem>
      </Collapse>
      <ListItemButton onClick={handleOpenDirectory}>
        <ListItemIcon>
          <FolderShared />
        </ListItemIcon>
        <ListItemText primary="Directory" />
        {directoryOpen ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={directoryOpen} timeout="auto" unmountOnExit>
        <ListItem key={"Employees"} disablePadding sx={{ display: "block" }}>
          <ListItemButton
            onClick={() => handleMenuButtonClick("/s/employees")}
            sx={{
              minHeight: 48,
              justifyContent: open ? "initial" : "center",
              px: 2.5,
            }}
          >
            <ListItemIcon
              sx={{
                minWidth: 0,
                mr: open ? 3 : "auto",
                justifyContent: "center",
              }}
            >
              <PeopleAlt />
            </ListItemIcon>
            <ListItemText
              primary={"Employees"}
              sx={{ opacity: open ? 1 : 0 }}
            />
          </ListItemButton>
        </ListItem>

        <ListItem key={"Companies"} disablePadding sx={{ display: "block" }}>
          <ListItemButton
            onClick={() => handleMenuButtonClick("/s/companies")}
            sx={{
              minHeight: 48,
              justifyContent: open ? "initial" : "center",
              px: 2.5,
            }}
          >
            <ListItemIcon
              sx={{
                minWidth: 0,
                mr: open ? 3 : "auto",
                justifyContent: "center",
              }}
            >
              <Business />
            </ListItemIcon>
            <ListItemText
              primary={"Companies"}
              sx={{ opacity: open ? 1 : 0 }}
            />
          </ListItemButton>
        </ListItem>
      </Collapse>
    </List>
  );
};
