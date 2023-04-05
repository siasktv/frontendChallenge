import React, { useState } from "react";
import "./App.css";
import CssBaseline from "@mui/material/CssBaseline";

import { AuthProvider, useAuth } from "./hooks/useAuth";
import ErrorBoundary from "./views/ErrorBoundary/ErrorBoundary";
import { theme } from "./theme/Theme";
import ThemeProvider from "@mui/material/styles/ThemeProvider";

import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

import { HomeView } from "./views/Pages/Home/HomeView";
import { Route, Routes, useLocation } from "react-router-dom";
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
import { SCPortalView } from "./views/Pages/SCPortalView/SCPortalView";
import { SCAnalyticsView } from "./views/Pages/SCAnalyticsView/SCAnalyticsView";
import { SCSocialProcurementView } from "./views/Pages/SCSocialProcurementView/SCSocialProcurementView";
import { SCLabourHoursView } from "./views/Pages/SCLabourHoursView/SCLabourHoursView";
import { SCEmployeesView } from "./views/Pages/SCEmployeesView/SCEmployeesView";
import { SCCompaniesView } from "./views/Pages/SCCompaniesView/SCCompaniesView";
import { AppLayout } from "./stories/layout/AppLayout";
import { SCDashboardView } from "./views/Pages/SCDashboard/SCDashboard";

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
      <Route path="/login" element={<LoginView />} />
      <Route path="/sign-up" element={<SignUpView />} />

      <Route path="/c/dashboard" element={<DashboardView />} />
      <Route path="/c/subcontractors" element={<SubContractorsView />} />
      <Route path="/c/analytics" element={<AnalyticsView />} />
      <Route path="/c/labour-hours" element={<LabourHoursView />} />
      <Route path="/c/social-procurement" element={<SocialProcurementView />} />
      <Route path="/c/project-users" element={<ProjectUsersView />} />
      <Route path="/c/companies" element={<CompaniesView />} />

      <Route path="/s/dashboard" element={<SCDashboardView />} />
      <Route path="/s/portal" element={<SCPortalView />} />
      <Route path="/s/analytics" element={<SCAnalyticsView />} />
      <Route path="/s/labour-hours" element={<SCLabourHoursView />} />
      <Route
        path="/s/social-procurement"
        element={<SCSocialProcurementView />}
      />
      <Route path="/s/employees" element={<SCEmployeesView />} />
      <Route path="/s/companies" element={<SCCompaniesView />} />
    </Routes>
  );
};

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const handleDrawerOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <ErrorBoundary>
      <ThemeProvider theme={theme}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <CssBaseline />
          <AuthProvider>
            <AppLayout handleDrawerOpen={handleDrawerOpen} isOpen={isOpen}>
              <AuthenticatedRouter />
            </AppLayout>
          </AuthProvider>
        </LocalizationProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
