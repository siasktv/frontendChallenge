import * as React from "react";
import { ContractorLayout } from "./ContractorLayout";
import { BasicLayout } from "./BasicLayout";
import { CreateProjectLayout } from "./CreateProjectLayout";
import { useLocation } from "react-router-dom";

interface AppLayoutProps {
  children: React.ReactNode;
  isOpen: boolean;
  handleDrawerOpen: () => void;
}

export const AppLayout = (props: AppLayoutProps) => {
  const { children, isOpen, handleDrawerOpen } = props;

  const location = useLocation();
  if (location.pathname.includes("/create-project")) {
    return <CreateProjectLayout>{children}</CreateProjectLayout>;
  }

  if (location.pathname.includes("/c/") || location.pathname.includes("/s/")) {
    return (
      <ContractorLayout handleDrawerOpen={handleDrawerOpen} isOpen={isOpen}>
        {children}
      </ContractorLayout>
    );
  }
  return <BasicLayout>{children}</BasicLayout>;
};
