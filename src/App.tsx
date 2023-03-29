import React from "react";
import "./App.css";
import CssBaseline from "@mui/material/CssBaseline";

import { AuthProvider, useAuth } from "./hooks/useAuth";
import ErrorBoundary from "./views/ErrorBoundary/ErrorBoundary";
import { theme } from "./theme/Theme";
import ThemeProvider from "@mui/material/styles/ThemeProvider";

import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

import { HomeView } from "./views/Pages/Home/HomeView";
import { Route, Routes } from "react-router-dom";
import { DashboardView } from "./views/Pages/Dashboard/DashboardView";
import { PricingView } from "./views/Pages/Home/PricingView";
import { LoginView } from "./views/Pages/Authenticate/LoginView";
import { SignUpView } from "./views/Pages/Authenticate/SignUpView";

const AuthenticatedRouter = () => {
  const { loggedIn } = useAuth();

  if (loggedIn) {
    return (
      <Routes>
        <Route path="/" element={<DashboardView />} />
      </Routes>
    );
  }
  return (
    <Routes>
      <Route index path="/" element={<HomeView />} />
      <Route path="/pricing" element={<PricingView />} />
      <Route path="/dashboard" element={<DashboardView />} />
      <Route path="/login" element={<LoginView />} />
      <Route path="/sign-up" element={<SignUpView />} />
    </Routes>
  );
};

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider theme={theme}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <CssBaseline />
          <AuthProvider>
            <AuthenticatedRouter />
          </AuthProvider>
        </LocalizationProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
