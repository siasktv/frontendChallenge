import { ReactNode } from "react";
import { SidebarMenu } from "../molecules/SidebarMenu/SidebarMenu";
import { TopBar } from "../molecules/Topbar/Topbar";

interface ContractorLayoutProps {
  children: ReactNode;
  isOpen: boolean;
  handleDrawerOpen: () => void;
}

export const ContractorLayout = (props: ContractorLayoutProps) => {
  const { children, isOpen, handleDrawerOpen } = props;

  return (
    <div className="app">
      <SidebarMenu open={isOpen} handleDrawerOpen={handleDrawerOpen} />
      <main className="content">
        <TopBar open={isOpen} handleDrawerOpen={handleDrawerOpen} />
        {children}
      </main>
    </div>
  );
};
