import Container from "@mui/material/Container";
import FormControl from "@mui/material/FormControl";
import Grid from "@mui/material/Grid";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import { useFormik } from "formik";
import * as yup from "yup";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export const CreateProjectForm = () => {
  const validationSchema = yup.object({
    projectName: yup.string().required("Project name is required"),
    projectSector: yup.string().required("Last name is required"),
  });
  const formik = useFormik({
    initialValues: {
      projectName: "",
      projectSector: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  const projectSector = ["Residential"];
  return (
    <Container component="main" sx={{ mt: 15 }} maxWidth="lg">
      <Typography variant="h3" component="h1" gutterBottom>
        Create Project
      </Typography>
      <form onSubmit={formik.handleSubmit}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={12}>
            <TextField
              required
              id="projectName"
              name="projectName"
              label="Project name"
              fullWidth
              variant="standard"
              onChange={formik.handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth>
              <InputLabel id="country-select">Project Sector</InputLabel>
              <Select
                labelId="country-select"
                id="projectSector"
                name="projectSector"
                value={formik.values.projectSector}
                onChange={formik.handleChange}
                error={
                  formik.touched.projectSector &&
                  Boolean(formik.errors.projectSector)
                }
                label="Project Sector"
              >
                {projectSector.map((s, index) => (
                  <MenuItem key={s} value={s}>
                    {s}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6}></Grid>
          <Grid item xs={12} sm={2}>
            <Button color="primary" variant="contained" fullWidth type="submit">
              Submit
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
};
