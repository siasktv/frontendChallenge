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
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import Typography from "@mui/material/Typography";
import InputAdornment from "@mui/material/InputAdornment";

export const CreateConditionForm = () => {
  const validationSchema = yup.object({
    firstName: yup.string().required("First name is required"),
    lastName: yup.string().required("Last name is required"),
    phone: yup.string().required("Last name is required"),
    organisation: yup.string().required("Organisation is required"),
    country: yup.string().required("Country is required"),
    state: yup.string().required("State is required"),
  });
  const formik = useFormik({
    initialValues: {
      permitName: "",
      valueOfWork: 0,
      permitManager: "",
      permitType: "",
      permitTypeOther: "",
      permitApprover: "",
      permitStartDate: "",
      permitCompletionDate: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  const permitTypes = ["Residential"];
  return (
    <Container component="main" sx={{ mt: 15 }} maxWidth="lg">
      <Typography variant="h3" component="h1" gutterBottom>
        Create Condition
      </Typography>
      <form onSubmit={formik.handleSubmit}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={12}>
            <TextField
              required
              id="permitName"
              name="permitName"
              label="Permit name"
              fullWidth
              variant="standard"
              onChange={formik.handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth>
              <InputLabel id="country-select">Permit Type</InputLabel>
              <Select
                labelId="country-select"
                id="permitType"
                name="permitType"
                value={formik.values.permitType}
                onChange={formik.handleChange}
                error={
                  formik.touched.permitType && Boolean(formik.errors.permitType)
                }
                label="Permit Type"
              >
                {permitTypes.map((s, index) => (
                  <MenuItem key={s} value={s}>
                    {s}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="permitTypeOther"
              name="permitTypeOther"
              label="If other, please specify"
              fullWidth
              variant="standard"
              onChange={formik.handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="valueOfWork"
              name="valueOfWork"
              label="Value of Permit Work"
              type="number"
              fullWidth
              variant="standard"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">$</InputAdornment>
                ),
              }}
              onChange={formik.handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}></Grid>
          <Grid item xs={6}>
            <TextField
              required
              id="permitManager"
              name="permitManager"
              label="Permit Manager"
              fullWidth
              variant="standard"
              onChange={formik.handleChange}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              required
              id="permitApprover"
              name="permitApprover"
              label="Permit Approver"
              fullWidth
              variant="standard"
              onChange={formik.handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <DatePicker
              onChange={(value) => formik.setFieldValue("dob", value, true)}
              label="Start Date"
              value={formik.values.permitStartDate}
              inputRef={(params: any) => (
                <TextField
                  error={Boolean(
                    formik.touched.permitStartDate &&
                      formik.errors.permitStartDate
                  )}
                  helperText={
                    formik.touched.permitStartDate &&
                    formik.errors.permitStartDate
                  }
                  label="Start Date"
                  margin="normal"
                  name="permitStartDate"
                  variant="standard"
                  fullWidth
                  {...params}
                />
              )}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <DatePicker
              onChange={(value) => formik.setFieldValue("dob", value, true)}
              label="Permit End Date"
              value={formik.values.permitCompletionDate}
              inputRef={(params: any) => (
                <TextField
                  error={Boolean(
                    formik.touched.permitCompletionDate &&
                      formik.errors.permitCompletionDate
                  )}
                  helperText={
                    formik.touched.permitCompletionDate &&
                    formik.errors.permitCompletionDate
                  }
                  label="D.O.B."
                  margin="normal"
                  name="permitCompletionDate"
                  variant="standard"
                  fullWidth
                  {...params}
                />
              )}
            />
          </Grid>
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
