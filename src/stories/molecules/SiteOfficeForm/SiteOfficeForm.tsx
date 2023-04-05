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
import { City, Country, State } from "country-state-city";
import Box from "@mui/material/Box";

interface SiteOfficeFormProps {
  setActiveStep: (step: number) => void;
}

export const SiteOfficeForm = ({ setActiveStep }: SiteOfficeFormProps) => {
  const validationSchema = yup.object({
    projectName: yup.string().required("Project name is required"),
    projectAddress: yup.string().required("Project Address is required"),
    projectShortName: yup.string().required("Project short name is required"),
    phoneNumber: yup.number().required("Phone number is required"),
    faxNumber: yup.string().required("Fax number is required"),
    addressLine1: yup.string().required("Address Line 1 is required"),
    addressLine2: yup.string().required("Address Line 2 is required"),
    country: yup.string().required("Country is required"),
    state: yup.string().required("State is required"),
    city: yup.string().required("City is required"),
    postCode: yup.string().required("Post code is required"),
    siteContactPhone: yup.string().required("Site phone is required"),
    reportingDueDate: yup.string().required("Reporting due date is required"),
  });
  const formik = useFormik({
    initialValues: {
      projectName: "",
      projectAddress: "",
      projectShortName: "",
      phoneNumber: 0,
      faxNumber: "",
      addressLine1: "",
      addressLine2: "",
      city: "",
      postCode: "",
      country: "",
      state: "",
      siteContactPhone: "",
      reportingDueDate: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
      setActiveStep(1);
    },
  });

  const countries = Country.getAllCountries();
  const states = State.getStatesOfCountry(formik.values.country);
  const cities = City.getCitiesOfState(
    formik.values.country,
    formik.values.state
  );
  return (
    <Box>
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
          <Grid item xs={12} sm={12}>
            <TextField
              required
              id="projectShortName"
              name="projectShortName"
              label="Project Short Name"
              fullWidth
              variant="standard"
              onChange={formik.handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="Project Address"
              name="projectAddress"
              label="Project Address"
              fullWidth
              variant="standard"
              onChange={formik.handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="Project Phone Number"
              name="projectPhoneNumber"
              label="Project Phone Number"
              fullWidth
              variant="standard"
              onChange={formik.handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="faxNumber"
              name="faxNumber"
              label="Project Fax Number"
              fullWidth
              variant="standard"
              onChange={formik.handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="siteContactPhone"
              name="siteContactPhone"
              label="Site Contact Phone"
              fullWidth
              variant="standard"
              onChange={formik.handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="addressLine1"
              name="addressLine1"
              label="Address Line 1"
              fullWidth
              variant="standard"
              onChange={formik.handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="addressLine2"
              name="addressLine2"
              label="Address Line 2"
              fullWidth
              variant="standard"
              onChange={formik.handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="postCode"
              name="postCode"
              label="Post Code"
              fullWidth
              variant="standard"
              onChange={formik.handleChange}
            />
          </Grid>
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
              <InputLabel id="state-select">State</InputLabel>
              <Select
                labelId="state-select"
                id="state"
                name="state"
                value={formik.values.state}
                onChange={formik.handleChange}
                error={formik.touched.state && Boolean(formik.errors.state)}
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
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth>
              <InputLabel id="city-select">City</InputLabel>
              <Select
                labelId="city-select"
                id="city"
                name="city"
                value={formik.values.city}
                onChange={formik.handleChange}
                error={formik.touched.city && Boolean(formik.errors.city)}
                label="City"
              >
                {cities.map((c, index) => (
                  <MenuItem key={c.name} value={c.name}>
                    {c.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={12} sm={6}>
            <DatePicker
              onChange={(value) =>
                formik.setFieldValue("reportingDueDate", value, true)
              }
              label="Reporting Due Date"
              value={formik.values.reportingDueDate}
              inputRef={(params: any) => (
                <TextField
                  error={Boolean(
                    formik.touched.reportingDueDate &&
                      formik.errors.reportingDueDate
                  )}
                  helperText={
                    formik.touched.reportingDueDate &&
                    formik.errors.reportingDueDate
                  }
                  label="Reporting Due Date"
                  margin="normal"
                  name="reportingDueDate"
                  variant="standard"
                  fullWidth
                  {...params}
                />
              )}
            />
          </Grid>
          <Grid item xs={12} sm={6}></Grid>
          <Grid item xs={12} sm={2}>
            <Button color="primary" variant="contained" fullWidth type="submit">
              Submit
            </Button>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
};
