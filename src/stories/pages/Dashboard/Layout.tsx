import { ReactNode } from "react";
import { ProSidebarProvider } from "react-pro-sidebar";
import { SidebarMenu } from "../../global/SidebarMenu";
import { TopBar } from "../../global/Topbar";

interface LayoutProps {
  children: ReactNode;
}

export const Layout = (props: LayoutProps) => {
  const { children } = props;
  return (
    <ProSidebarProvider>
      <div className="app">
        <SidebarMenu />
        <main className="content">
          <TopBar />
          {children}
        </main>
      </div>
    </ProSidebarProvider>
  );
};
