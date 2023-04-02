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
import { SubContractorsView } from "./views/Pages/SubContractorsView/SubContractorsView";
import { AnalyticsView } from "./views/Pages/AnalyticsView/AnalyticsView";
import { LabourHoursView } from "./views/Pages/LabourHoursView/LabourHoursView";
import { SocialProcurementView } from "./views/Pages/SocialProcurementView/SocialProcurementView";
import { ProjectUsersView } from "./views/Pages/ProjectUsersView/ProjectUsersView";
import { CompaniesView } from "./views/Pages/CompaniesView/CompaniesView";
import { CreateProjectView } from "./views/Pages/CreateProjectView/CreateProjectView";

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
      <Route path="/create-project" element={<CreateProjectView />} />
      <Route path="/dashboard" element={<DashboardView />} />
      <Route path="/login" element={<LoginView />} />
      <Route path="/sign-up" element={<SignUpView />} />
      <Route path="/dashboard" element={<DashboardView />} />
      <Route path="/subcontractors" element={<SubContractorsView />} />
      <Route path="/analytics" element={<AnalyticsView />} />
      <Route path="/labour-hours" element={<LabourHoursView />} />
      <Route path="/social-procurement" element={<SocialProcurementView />} />
      <Route path="/project-users" element={<ProjectUsersView />} />
      <Route path="/companies" element={<CompaniesView />} />
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
