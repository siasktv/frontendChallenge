import Container from "@mui/material/Container";
import FormControl from "@mui/material/FormControl";
import Grid from "@mui/material/Grid";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import { useFormik } from "formik";
import * as yup from "yup";
import { Country, State } from "country-state-city";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import Typography from "@mui/material/Typography";

export const ProfileForm = () => {
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
      firstName: "",
      lastName: "",
      phone: "",
      orgatisation: "",
      dob: "",
      country: "",
      state: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  const countries = Country.getAllCountries();
  const states = State.getStatesOfCountry(formik.values.country);
  return (
    <Container component="main" sx={{ mt: 15 }} maxWidth="lg">
      <Typography variant="h3" component="h1" gutterBottom>
        Profile Settings
      </Typography>
      <form onSubmit={formik.handleSubmit}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="firstName"
              name="firstName"
              label="First name"
              fullWidth
              autoComplete="given-name"
              variant="standard"
              onChange={formik.handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="lastName"
              name="lastName"
              label="Last Name"
              fullWidth
              autoComplete="family-name"
              variant="standard"
              onChange={formik.handleChange}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              required
              id="phone"
              name="phone"
              label="Phone"
              fullWidth
              variant="standard"
              onChange={formik.handleChange}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              required
              id="organisation"
              name="organisation"
              label="Organisation"
              fullWidth
              variant="standard"
              onChange={formik.handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <DatePicker
              onChange={(value) => formik.setFieldValue("dob", value, true)}
              label="D.O.B."
              value={formik.values.dob}
              inputRef={(params: any) => (
                <TextField
                  error={Boolean(formik.touched.dob && formik.errors.dob)}
                  helperText={formik.touched.dob && formik.errors.dob}
                  label="D.O.B."
                  margin="normal"
                  name="dob"
                  variant="standard"
                  fullWidth
                  {...params}
                />
              )}
            />
          </Grid>
          <Grid item xs={12} sm={6}></Grid>
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth>
              <InputLabel id="country-select">Country</InputLabel>
              <Select
                labelId="country-select"
                id="country"
                name="country"
                value={formik.values.country}
                onChange={formik.handleChange}
                error={formik.touched.country && Boolean(formik.errors.country)}
                label="Country"
              >
                {countries.map((c, index) => (
                  <MenuItem key={c.isoCode} value={c.isoCode}>
                    {c.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth>
              <InputLabel id="country-select">State</InputLabel>
              <Select
                labelId="country-select"
                id="state"
                name="state"
                value={formik.values.state}
                onChange={formik.handleChange}
                error={formik.touched.state && Boolean(formik.errors.country)}
                label="State"
              >
                {states.map((s, index) => (
                  <MenuItem key={s.isoCode} value={s.isoCode}>
                    {s.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
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
