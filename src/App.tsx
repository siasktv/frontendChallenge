import React from "react";
import "./App.css";
import CssBaseline from "@mui/material/CssBaseline";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUpView from "./views/Pages/Authenticate/SignUpView";
import LoginView from "./views/Pages/Authenticate/LoginView";
import DashboardView from "./views/Pages/Dashboard/DashboardView";
import { AuthProvider, useAuth } from "./hooks/useAuth";
import ErrorBoundary from "./views/ErrorBoundary/ErrorBoundary";
import { theme } from "./theme/Theme";
import ThemeProvider from "@mui/material/styles/ThemeProvider";
import DirectoryView from "./views/Pages/Dashboard/DirectoryView";
import PermitsView from "./views/Pages/Dashboard/PermitsView";
import TasksView from "./views/Pages/Dashboard/TasksView";
import MailView from "./views/Pages/Dashboard/MailView";
import DocumentsView from "./views/Pages/Dashboard/DocumentsView";
import ProfileView from "./views/Pages/Account/ProfileView";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import CreatePermitView from "./views/Pages/Permit/CreatePermitView";
import CreateConditionsView from "./views/Pages/Dashboard/CreateConditionsView";
import ConditionView from "./views/Pages/Dashboard/ConditionView";
import ListConditionsView from "./views/Pages/Dashboard/ListConditionsView";

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
      <Route index path="/" element={<DashboardView />} />
      <Route path="/directory" element={<DirectoryView />} />
      <Route path="/documents" element={<DocumentsView />} />
      <Route path="/permits" element={<PermitsView />} />
      <Route path="/tasks" element={<TasksView />} />
      <Route path="/conditions" element={<ListConditionsView />} />
      <Route path="/create-condition" element={<CreateConditionsView />} />
      <Route path="/condition" element={<ConditionView />} />
      <Route path="/mail" element={<MailView />} />
      <Route path="/profile" element={<ProfileView />} />
      <Route path="/create-permit" element={<CreatePermitView />} />
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
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <CssBaseline />
            <AuthProvider>
              <AuthenticatedRouter />
            </AuthProvider>
          </LocalizationProvider>
        </ThemeProvider>
      </BrowserRouter>
    </ErrorBoundary>
  );
}

export default App;
