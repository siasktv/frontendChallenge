import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

export const ConditionProperties = (): JSX.Element => {
  return (
    <Container sx={{ marginTop: 10 }}>
      <Typography variant="h3" component="h1" gutterBottom>
        Properties
      </Typography>
      <Grid>
        <Grid sx={{ marginTop: "10px" }}>
          <Typography variant="h6">Permit Item #</Typography>
          <Typography>123</Typography>
        </Grid>
        <Grid sx={{ marginTop: "10px" }}>
          <Typography variant="h6">Name of Condition or Requirement</Typography>
          <Typography>Structural Certificate</Typography>
        </Grid>
        <Grid sx={{ marginTop: "10px" }}>
          <Typography variant="h6">Action Required</Typography>
          <Typography>Yes</Typography>
        </Grid>
        <Grid sx={{ marginTop: "10px" }}>
          <Typography variant="h6">Project Name</Typography>
          <Typography>Alt 90 Bed Aged Care</Typography>
        </Grid>
        <Grid sx={{ marginTop: "10px" }}>
          <Typography variant="h6">Project Type</Typography>
          <Typography>Residential</Typography>
        </Grid>
        <Grid sx={{ marginTop: "10px" }}>
          <Typography variant="h6">Pemrit Name</Typography>
          <Typography>Alt 90 Bed Aged Care</Typography>
        </Grid>
        <Grid sx={{ marginTop: "10px" }}>
          <Typography variant="h6">Permit Type</Typography>
          <Typography>Building Permit</Typography>
        </Grid>
        <Grid sx={{ marginTop: "10px" }}>
          <Typography variant="h6">Value of Works</Typography>
          <Typography>$100000</Typography>
        </Grid>
        <Grid sx={{ marginTop: "10px" }}>
          <Typography variant="h6">Permit Manager</Typography>
          <Typography>Smith</Typography>
        </Grid>
        <Grid sx={{ marginTop: "10px" }}>
          <Typography variant="h6">Permit Approver</Typography>
          <Typography>John</Typography>
        </Grid>
        <Grid sx={{ marginTop: "10px" }}>
          <Typography variant="h6">Responsible Assignee</Typography>
          <Typography>William</Typography>
        </Grid>
        <Grid sx={{ marginTop: "10px" }}>
          <Typography variant="h6">Discipline</Typography>
          <Typography>Structural</Typography>
        </Grid>
        <Grid sx={{ marginTop: "10px" }}>
          <Typography variant="h6">Due Date</Typography>
          <Typography>11/11/2023</Typography>
        </Grid>
        <Grid sx={{ marginTop: "10px" }}>
          <Typography variant="h6">Status</Typography>
          <Typography>Assigned</Typography>
        </Grid>
      </Grid>
    </Container>
  );
};
