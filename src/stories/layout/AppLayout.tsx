import * as React from "react";
import { ContractorLayout } from "./ContractorLayout";
import { BasicLayout } from "./BasicLayout";

interface AppLayoutProps {
  authenticated: boolean;
  children: React.ReactNode;
  isOpen: boolean;
  handleDrawerOpen: () => void;
}

export const AppLayout = (props: AppLayoutProps) => {
  const { children, authenticated, isOpen, handleDrawerOpen } = props;
  if (authenticated) {
    return (
      <ContractorLayout handleDrawerOpen={handleDrawerOpen} isOpen={isOpen}>
        {children}
      </ContractorLayout>
    );
  }
  return <BasicLayout>{children}</BasicLayout>;
};
