import React from "react";

export interface LayoutProps {
  loading: boolean;
}

const Layout: React.FC<LayoutProps> = ({ loading }: LayoutProps) => {
  return <div className="">{loading}</div>;
};

export default Layout;
