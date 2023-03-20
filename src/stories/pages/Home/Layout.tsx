import React from "react";

export interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }: LayoutProps) => {
  return <>{children}</>;
};

export default Layout;
