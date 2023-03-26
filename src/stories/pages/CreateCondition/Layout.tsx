import { ReactNode } from "react";
import { DashboardNavBar } from "../../organisms/AppBars/DashboardNavBar";
import { Footer } from "../../organisms/Footers/Footer";

interface LayoutProps {
  children: ReactNode;
}

export const Layout = (props: LayoutProps): JSX.Element => {
  const { children } = props;
  return (
    <>
      <DashboardNavBar />
      {children}
      <Footer />
    </>
  );
};
