import React from "react";
import "./App.css";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUpView from "./views/Pages/Authenticate/SignUpView";
import LoginView from "./views/Pages/Authenticate/LoginView";
import DashboardView from "./views/Pages/Dashboard/DashboardView";
import { AuthProvider, useAuth } from "./hooks/useAuth";
import ErrorBoundary from "./views/ErrorBoundary/ErrorBoundary";
import theme from "./assets/theme";

const AuthenticatedRouter = () => {
  const { loggedIn } = useAuth();

  if (loggedIn) {
    return (
      <Routes>
        <Route path="/" element={<DashboardView />} />

        <Route path="signup" element={<SignUpView />} />
        <Route path="login" element={<LoginView />} />
      </Routes>
    );
  }
  return (
    <Routes>
      <Route path="/" element={<DashboardView />} />
      <Route path="signup" element={<SignUpView />} />
      <Route path="login" element={<LoginView />} />
    </Routes>
  );
};

function App() {
  return (
    <ErrorBoundary>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <AuthProvider>
            <AuthenticatedRouter />
          </AuthProvider>
        </ThemeProvider>
      </BrowserRouter>
    </ErrorBoundary>
  );
}

export default App;
