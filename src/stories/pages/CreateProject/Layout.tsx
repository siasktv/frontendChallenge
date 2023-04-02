import { Box } from "@mui/material";
import { ReactNode, useState } from "react";
import { SidebarMenu } from "../../molecules/SidebarMenu/SidebarMenu";
import { TopBar } from "../../molecules/Topbar/Topbar";

interface LayoutProps {
  children: ReactNode;
}

export const Layout = (props: LayoutProps) => {
  const { children } = props;
  const [isOpen, setIsOpen] = useState(false);
  const handleDrawerOpen = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="app">
      <SidebarMenu open={isOpen} handleDrawerOpen={handleDrawerOpen} />
      <main className="content">
        <TopBar open={isOpen} handleDrawerOpen={handleDrawerOpen} />
        <Box m="20px">{children}</Box>
      </main>
    </div>
  );
};
