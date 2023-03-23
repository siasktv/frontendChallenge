import React, { useEffect, useState } from "react";

// react-router components
import { useLocation, Link } from "react-router-dom";

// @material-ui core components
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Icon from "@mui/material/Icon";

// Material Dashboard 2 PRO React TS components
import MDBox from "../../molecules/MDBox";
import MDInput from "../../molecules/MDInput";

// Material Dashboard 2 PRO React TS examples components
import Breadcrumbs from "../Breadcrumbs";

// Custom styles for DashboardNavbar
import { navbar, navbarContainer, navbarRow, navbarIconButton } from "./styles";
import { Menu } from "@mui/material";
import NotificationItem from "../Items/NotificationItem";
import MDBadge from "../../molecules/MDBadge";

// Declaring prop types for DashboardNavbar
interface Props {
  absolute?: boolean;
  light?: boolean;
  isMini?: boolean;
}

function DashboardNavbar({ absolute, light, isMini }: Props): JSX.Element {
  const [navbarType, setNavbarType] = useState<
    "fixed" | "absolute" | "relative" | "static" | "sticky"
  >();

  const [openMenu, setOpenMenu] = useState<any>(false);
  const route = useLocation().pathname.split("/").slice(1);

  useEffect(() => {
    // Setting the navbar type
    setNavbarType("sticky");

    // // A function that sets the transparent state of the navbar.
    // function handleTransparentNavbar() {
    //   setTransparentNavbar(
    //     dispatch,
    //     (fixedNavbar && window.scrollY === 0) || !fixedNavbar
    //   );
    // }

    /** 
   The event listener that's calling the handleTransparentNavbar function when 
   scrolling the window.
  */
    // window.addEventListener("scroll", handleTransparentNavbar);

    // Call the handleTransparentNavbar function to set the state with the initial value.
    // handleTransparentNavbar();

    // Remove event listener on cleanup
    // return () => window.removeEventListener("scroll", handleTransparentNavbar);
  }, []);

  const handleOpenMenu = (event: any) => setOpenMenu(event.currentTarget);
  const handleCloseMenu = () => setOpenMenu(false);

  // Render the notifications menu
  const renderMenu = () => (
    <Menu
      anchorEl={openMenu}
      anchorReference={undefined}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "left",
      }}
      open={Boolean(openMenu)}
      onClose={handleCloseMenu}
      sx={{ mt: 2 }}
    >
      <NotificationItem icon={<Icon>email</Icon>} title="Check new messages" />
      <NotificationItem
        icon={<Icon>podcasts</Icon>}
        title="Manage Podcast sessions"
      />
      <NotificationItem
        icon={<Icon>shopping_cart</Icon>}
        title="Payment successfully completed"
      />
    </Menu>
  );
  // Styles for the navbar icons
  const iconsStyle = ({
    palette: { white },
    functions: { rgba },
  }: {
    palette: any;
    functions: any;
  }) => ({
    color: () => {
      return white.main;
    },
  });

  return (
    <AppBar
      position={"sticky"}
      color="inherit"
      sx={(theme) => navbar(theme, { absolute, light })}
    >
      <Toolbar sx={navbarContainer}>
        <MDBox
          color="inherit"
          mb={{ xs: 1, md: 0 }}
          sx={(theme) => navbarRow(theme, { isMini })}
        >
          <img src="logo.webp" alt="main logo" />
        </MDBox>

        <MDBox sx={(theme) => navbarRow(theme, { isMini })}>
          <MDBox pr={1}>
            <MDInput label="Search here" />
          </MDBox>
          <MDBox color={light ? "white" : "inherit"}>
            <Link to="/authentication/sign-in/basic">
              <IconButton sx={navbarIconButton} size="small" disableRipple>
                <Icon sx={iconsStyle}>account_circle</Icon>
              </IconButton>
            </Link>
            <IconButton
              size="small"
              color="inherit"
              sx={navbarIconButton}
              onClick={handleOpenMenu}
            >
              <MDBadge badgeContent={9} color="error" size="xs" circular>
                <Icon sx={iconsStyle}>notifications</Icon>
              </MDBadge>
            </IconButton>
            {renderMenu()}
          </MDBox>
        </MDBox>
      </Toolbar>
    </AppBar>
  );
}

// Declaring default props for DashboardNavbar
DashboardNavbar.defaultProps = {
  absolute: false,
  light: false,
  isMini: false,
};

export default DashboardNavbar;
