import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { ReactNode } from "react";
import { DashboardNavBar } from "../../organisms/AppBars/DashboardNavBar";
import { Footer } from "../../organisms/Footer/Footer";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import Language from "@mui/icons-material/Language";
import FolderSharedIcon from "@mui/icons-material/FolderShared";
import Toolbar from "@mui/material/Toolbar";

const drawerWidth = 240;

interface LayoutProps {
  setAccountView: (name: string) => void;
  children: ReactNode;
}

export const Layout = (props: LayoutProps): JSX.Element => {
  const { setAccountView, children } = props;
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
            key={"profile"}
            disablePadding
            onClick={() => {
              setAccountView("profile");
            }}
          >
            <ListItemButton>
              <ListItemIcon>
                <AccountBoxIcon />
              </ListItemIcon>
              <ListItemText primary={"Profile Info"} />
            </ListItemButton>
          </ListItem>
          <ListItem
            key={"membership"}
            disablePadding
            onClick={() => {
              setAccountView("membership");
            }}
          >
            <ListItemButton>
              <ListItemIcon>
                <FolderSharedIcon />
              </ListItemIcon>
              <ListItemText primary={"Membership Info"} />
            </ListItemButton>
          </ListItem>
          <ListItem
            key={"language"}
            disablePadding
            onClick={() => {
              setAccountView("language");
            }}
          >
            <ListItemButton>
              <ListItemIcon>
                <Language />
              </ListItemIcon>
              <ListItemText primary={"Language Info"} />
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>
      {children}
      <Footer />
    </>
  );
};
