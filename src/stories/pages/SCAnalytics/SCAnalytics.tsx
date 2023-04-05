import { Grid, Paper } from "@mui/material";
import Title from "../../atoms/Title/Title";

export const SCAnalytics = () => {
  return (
    <Grid item xs={12}>
      <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
        <Title>SC Analytics</Title>
      </Paper>
    </Grid>
  );
};
