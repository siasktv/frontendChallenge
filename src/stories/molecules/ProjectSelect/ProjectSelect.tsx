import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { useFormik } from "formik";
import * as yup from "yup";

export const ProjectSelect = () => {
  const projects = ["Project 1", "Project 2", "Project 3", "Project 4"];

  const validationSchema = yup.object({
    currentProject: yup.string().required("Project is required"),
  });
  const formik = useFormik({
    initialValues: {
      currentProject: "Project 1",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <FormControl fullWidth>
        <InputLabel id="current-project">Current Project</InputLabel>
        <Select
          labelId="current-project"
          id="currentProject"
          name="currentProject"
          value={formik.values.currentProject}
          onChange={formik.handleChange}
          error={
            formik.touched.currentProject &&
            Boolean(formik.errors.currentProject)
          }
          label="Current Project"
        >
          {projects.map((p, index) => (
            <MenuItem key={`${p}-${index}`} value={p}>
              {p}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </form>
  );
};
