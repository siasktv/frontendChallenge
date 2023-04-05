import { Grid, Paper } from "@mui/material";
import Title from "../../atoms/Title/Title";

export const Companies = () => {
  return (
    <>
      <Grid item xs={12}>
        <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
          <Title>Companies</Title>
        </Paper>
      </Grid>
    </>
  );
};
