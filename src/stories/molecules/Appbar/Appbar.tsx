import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";

import { useNavigate } from "react-router-dom";

export const Appbar = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/login");
  };
  const handleSignUp = () => {
    navigate("/sign-up");
  };
  const handleHome = () => {
    navigate("/");
  };
  return (
    <AppBar
      position="static"
      color="default"
      elevation={0}
      sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}
    >
      <Toolbar sx={{ flexWrap: "wrap" }}>
        <Typography
          variant="h6"
          color="inherit"
          noWrap
          sx={{ flexGrow: 1 }}
          onClick={handleHome}
        >
          Social Pro
        </Typography>
        <nav>
          <Link
            variant="button"
            color="text.primary"
            href="#"
            sx={{ my: 1, mx: 1.5 }}
          >
            Features
          </Link>
          <Link
            variant="button"
            color="text.primary"
            href="#"
            sx={{ my: 1, mx: 1.5 }}
          >
            Enterprise
          </Link>
          <Link
            variant="button"
            color="text.primary"
            href="#"
            sx={{ my: 1, mx: 1.5 }}
          >
            Support
          </Link>
        </nav>
        <Button
          variant="outlined"
          sx={{ my: 1, mx: 1.5 }}
          onClick={handleLogin}
        >
          Login
        </Button>
        <Button
          variant="outlined"
          sx={{ my: 1, mx: 1.5 }}
          onClick={handleSignUp}
        >
          Sign Up
        </Button>
      </Toolbar>
    </AppBar>
  );
};
