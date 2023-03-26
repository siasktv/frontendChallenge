import * as React from "react";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import { SearchInput } from "../../molecules/SearchInput/SearchInput";
import Badge from "@mui/material/Badge";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { useNavigate } from "react-router-dom";

const pages = [
  { name: "Summary", path: "/" },
  { name: "Permits", path: "/permits" },
  { name: "Tasks", path: "/tasks" },
  { name: "Mail", path: "/mail" },
  { name: "Documents", path: "/documents" },
  { name: "Directory", path: "/directory" },
];

export const DashboardNavBar = () => {
  const navigate = useNavigate();
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const redirectToPage = (path: string) => {
    navigate(path);
  };

  const handleGoToAccount = () => {
    handleCloseUserMenu();
    redirectToPage("/profile");
  };

  const handleLogout = () => {
    handleCloseUserMenu();
  };
  return (
    <AppBar
      position="fixed"
      sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box
            component="img"
            sx={{
              height: 50,
            }}
            alt="The house from the offer."
            src="logo.png"
          />
          <SearchInput />
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page.name}
                onClick={() => redirectToPage(page.path)}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                {page.name}
              </Button>
            ))}
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Will Singer" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              <MenuItem key={"account"} onClick={handleGoToAccount}>
                <Typography textAlign="center">{"Account"}</Typography>
              </MenuItem>
              <MenuItem key={"logout"} onClick={handleLogout}>
                <Typography textAlign="center">{"Logout"}</Typography>
              </MenuItem>
            </Menu>
            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
            >
              <Badge badgeContent={17} color="error">
                <NotificationsIcon />
              </Badge>
            </IconButton>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
