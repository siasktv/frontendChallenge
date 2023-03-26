import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

import { ReactNode } from "react";
import { DashboardNavBar } from "../../organisms/AppBars/DashboardNavBar";
import { Footer } from "../../organisms/Footers/Footer";
import FolderCopy from "@mui/icons-material/FolderCopy";
import InfoIcon from "@mui/icons-material/Info";
import AttachEmail from "@mui/icons-material/AttachEmail";
import Diversity3 from "@mui/icons-material/Diversity3";
import EventRepeat from "@mui/icons-material/EventRepeat";
import Preview from "@mui/icons-material/Preview";
import Toolbar from "@mui/material/Toolbar";

const drawerWidth = 240;

interface LayoutProps {
  setConditionView: (name: string) => void;
  children: ReactNode;
}

export const Layout = (props: LayoutProps): JSX.Element => {
  const { setConditionView, children } = props;
  return (
    <>
      <DashboardNavBar />
      <Drawer
        variant="permanent"
        anchor="left"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
      >
        <Toolbar />
        <Divider />
        <List>
          <ListItem
            key={"properties"}
            disablePadding
            onClick={() => {
              setConditionView("properties");
            }}
          >
            <ListItemButton>
              <ListItemIcon>
                <InfoIcon />
              </ListItemIcon>
              <ListItemText primary={"Properties"} />
            </ListItemButton>
          </ListItem>
          <ListItem
            key={"Document"}
            disablePadding
            onClick={() => {
              setConditionView("documents");
            }}
          >
            <ListItemButton>
              <ListItemIcon>
                <FolderCopy />
              </ListItemIcon>
              <ListItemText primary={"Documents"} />
            </ListItemButton>
          </ListItem>
          <ListItem
            key={"mail"}
            disablePadding
            onClick={() => {
              setConditionView("mail");
            }}
          >
            <ListItemButton>
              <ListItemIcon>
                <AttachEmail />
              </ListItemIcon>
              <ListItemText primary={"Mail"} />
            </ListItemButton>
          </ListItem>
          <ListItem
            key={"Collaborators"}
            disablePadding
            onClick={() => {
              setConditionView("collaborators");
            }}
          >
            <ListItemButton>
              <ListItemIcon>
                <Diversity3 />
              </ListItemIcon>
              <ListItemText primary={"collaborators"} />
            </ListItemButton>
          </ListItem>
          <ListItem
            key={"review"}
            disablePadding
            onClick={() => {
              setConditionView("review");
            }}
          >
            <ListItemButton>
              <ListItemIcon>
                <Preview />
              </ListItemIcon>
              <ListItemText primary={"review"} />
            </ListItemButton>
          </ListItem>
          <ListItem
            key={"eventlog"}
            disablePadding
            onClick={() => {
              setConditionView("eventlog");
            }}
          >
            <ListItemButton>
              <ListItemIcon>
                <EventRepeat />
              </ListItemIcon>
              <ListItemText primary={"Event Log"} />
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>
      {children}
      <Footer />
    </>
  );
};
