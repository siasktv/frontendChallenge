import { Box, Grid, Paper } from "@mui/material";
import Title from "../../atoms/Title/Title";

export const LabourHours = () => {
  return (
    <Grid item xs={12}>
      <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
        <Title>Labour Hours</Title>
      </Paper>
    </Grid>
  );
};
