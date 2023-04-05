import { ReactNode, useState } from "react";
import { SidebarMenu } from "../molecules/SidebarMenu/SidebarMenu";
import { TopBar } from "../molecules/Topbar/Topbar";
import {
  Box,
  Container,
  Grid,
  SelectChangeEvent,
  Toolbar,
} from "@mui/material";

import { useNavigate } from "react-router-dom";
import { ProjectSelect } from "../molecules/ProjectSelect/ProjectSelect";
interface ContractorLayoutProps {
  children: ReactNode;
  isOpen: boolean;
  handleDrawerOpen: () => void;
}

export const ContractorLayout = (props: ContractorLayoutProps) => {
  const { children, isOpen, handleDrawerOpen } = props;
  const navigate = useNavigate();
  const projects = ["Project 1", "Project 2", "Project 3", "Project 4"];

  const [selectedProject, setSelectedProject] = useState(projects[0]);
  const handleChange = (event: SelectChangeEvent) => {
    if (event.target.value) {
      setSelectedProject(event.target.value);
    } else {
      navigate("/create-project");
    }
  };
  return (
    <Box sx={{ display: "flex" }}>
      <SidebarMenu open={isOpen} handleDrawerOpen={handleDrawerOpen} />
      <TopBar open={isOpen} handleDrawerOpen={handleDrawerOpen} />
      <Box
        component="main"
        sx={{
          backgroundColor: (theme) =>
            theme.palette.mode === "light"
              ? theme.palette.grey[100]
              : theme.palette.grey[900],
          flexGrow: 1,
          height: "100vh",
          overflow: "auto",
        }}
      >
        <Toolbar />
        <Container maxWidth="xl" sx={{ mt: 4, mb: 4 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={12} lg={12}>
              <ProjectSelect />
            </Grid>
            {children}
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};
