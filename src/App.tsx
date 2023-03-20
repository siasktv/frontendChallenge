import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeView from "./views/Pages/Home/HomeView";
import SignUpView from "./views/Pages/Authenticate/SignUpView";
import LoginView from "./views/Pages/Authenticate/LoginView";
import DashboardView from "./views/Pages/Dashboard/DashboardView";
import AnalyticsView from "./views/Pages/Dashboard/AnalyticsView";
import ReportingView from "./views/Pages/Dashboard/ReportingView";
import DirectoryView from "./views/Pages/Dashboard/DirectoryView";
import { AuthProvider, useAuth } from "./hooks/useAuth";
import ErrorBoundary from "./views/ErrorBoundary/ErrorBoundary";

const AuthenticatedRouter = () => {
  const { loggedIn } = useAuth();

  if (loggedIn) {
    return (
      <Routes>
        <Route path="/" element={<DashboardView />} />
        <Route path="analytics" element={<AnalyticsView />} />
        <Route path="reporting" element={<ReportingView />} />
        <Route path="directory" element={<DirectoryView />} />

        <Route path="signup" element={<SignUpView />} />
        <Route path="login" element={<LoginView />} />
      </Routes>
    );
  }
  return (
    <Routes>
      <Route path="/" element={<HomeView />} />
      <Route path="signup" element={<SignUpView />} />
      <Route path="login" element={<LoginView />} />

      <Route path="analytics" element={<AnalyticsView />} />
      <Route path="reporting" element={<ReportingView />} />
      <Route path="directory" element={<DirectoryView />} />
    </Routes>
  );
};

function App() {
  return (
    <ErrorBoundary>
      <BrowserRouter>
        <AuthProvider>
          <AuthenticatedRouter />
        </AuthProvider>
      </BrowserRouter>
    </ErrorBoundary>
  );
}

export default App;
