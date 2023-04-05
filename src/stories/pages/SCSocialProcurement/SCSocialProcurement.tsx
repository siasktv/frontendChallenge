import { Grid, Paper } from "@mui/material";
import Title from "../../atoms/Title/Title";

export const SCSocialProcurement = () => {
  return (
    <Grid item xs={12}>
      <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
        <Title>SC Social Procurement</Title>
      </Paper>
    </Grid>
  );
};
