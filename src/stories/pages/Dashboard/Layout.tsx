import React from "react";
import { Stack } from "react-daisyui";
import NavBar from "../../organisms/Navbar/Navbar";
import PageFooter from "../../organisms/PageFooter/PageFooter";

export interface LayoutProps {
  loading: boolean;
}

const Layout: React.FC<LayoutProps> = ({ loading }: LayoutProps) => {
  return (
    <Stack>
      <NavBar />
      <PageFooter />
    </Stack>
  );
};

export default Layout;
