import Container from "@mui/material/Container";
import { ReactNode } from "react";
import { ProjectSelect } from "../../molecules/ProjectSelect/ProjectSelect";
import { DashboardNavBar } from "../../organisms/AppBars/DashboardNavBar";
import { Footer } from "../../organisms/Footers/Footer";

interface LayoutProps {
  children: ReactNode;
  showProjectSelect?: boolean;
}

export const Layout = ({
  showProjectSelect = true,
  children,
}: LayoutProps): JSX.Element => {
  return (
    <>
      <DashboardNavBar />
      {showProjectSelect ? (
        <Container sx={{ mt: 12 }}>
          <ProjectSelect />
        </Container>
      ) : null}
      {children}
      <Footer />
    </>
  );
};
