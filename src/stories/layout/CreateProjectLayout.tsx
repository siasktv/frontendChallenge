import { ReactNode } from "react";
import { Box, Container, Grid, Toolbar } from "@mui/material";
import { BasicTopBar } from "../molecules/BasicTopbar/BasicTopbar";
interface CreateProjectLayoutProps {
  children: ReactNode;
}

export const CreateProjectLayout = (props: CreateProjectLayoutProps) => {
  const { children } = props;

  return (
    <Box sx={{ display: "flex" }}>
      <BasicTopBar />
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
            {children}
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};
