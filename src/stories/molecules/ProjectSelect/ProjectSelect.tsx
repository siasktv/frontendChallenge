import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const ProjectSelect = () => {
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
    <>
      <Select
        labelId="current-project"
        id="currentProject"
        name="currentProject"
        value={selectedProject}
        onChange={handleChange}
        sx={{ backgroundColor: "white", color: "black", width: "25vw" }}
      >
        {projects.map((p, index) => (
          <MenuItem key={p} value={p}>
            {p}
          </MenuItem>
        ))}
        <MenuItem>Create new project</MenuItem>
      </Select>
    </>
  );
};
