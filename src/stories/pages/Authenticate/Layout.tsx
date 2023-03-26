import Container from "@mui/material/Container";
import { ReactNode } from "react";
import { ProjectSelect } from "../../molecules/ProjectSelect/ProjectSelect";
import { DashboardNavBar } from "../../organisms/AppBars/DashboardNavBar";
import { Footer } from "../../organisms/Footers/Footer";

export const Layout = ({ children }: { children: ReactNode }): JSX.Element => {
  return (
    <>
      <DashboardNavBar />
      <Container sx={{ mt: 4 }} maxWidth="lg">
        <ProjectSelect />
      </Container>
      {children}
      <Footer />
    </>
  );
};
