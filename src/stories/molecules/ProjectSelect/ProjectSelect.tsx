import PostAdd from "@mui/icons-material/PostAdd";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { useNavigate } from "react-router-dom";

export const ProjectSelect = () => {
  const navigate = useNavigate();
  const projects = ["Project 1", "Project 2", "Project 3", "Project 4"];

  const handleChange = () => {};
  const createProject = () => {
    navigate("/create-project");
  };
  return (
    <>
      <FormControl>
        <InputLabel id="current-project">Current Project</InputLabel>
        <Select
          labelId="current-project"
          id="currentProject"
          name="currentProject"
          value={"Project 1"}
          onChange={handleChange}
          label="Current Project"
        >
          {projects.map((p, index) => (
            <MenuItem key={`${p}-${index}`} value={p}>
              {p}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <Button
        variant="contained"
        onClick={createProject}
        style={{ textTransform: "none" }}
        endIcon={<PostAdd />}
      >
        New Permit
      </Button>
    </>
  );
};
