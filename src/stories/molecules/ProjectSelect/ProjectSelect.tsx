import { ReactNode, useState } from "react";
import {
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  SelectChangeEvent,
} from "@mui/material";

interface ProjectSelectProps {}

export const ProjectSelect = () => {
  const projects = ["Project 1", "Project 2", "Project 3", "Project 4"];

  const [selectedProject, setSelectedProject] = useState(projects[0]);
  const handleChange = (event: SelectChangeEvent) => {
    setSelectedProject(event.target.value);
  };
  return (
    <Paper
      sx={{
        p: 2,
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Grid container spacing={2} alignItems="center" justifyContent="center">
        <Grid item xs={6} md={8} lg={10}>
          <FormControl fullWidth>
            <InputLabel id="current-project">Project</InputLabel>
            <Select
              labelId="current-project"
              label="Project"
              id="currentProject"
              name="currentProject"
              value={selectedProject}
              onChange={handleChange}
              sx={{
                backgroundColor: "white",
                color: "black",
              }}
            >
              {projects.map((p, index) => (
                <MenuItem key={p} value={p}>
                  {p}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={6} md={4} lg={2}>
          <Button variant="contained">Add Project</Button>
        </Grid>
      </Grid>
    </Paper>
  );
};
