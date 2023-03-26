import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { SummaryCard } from "../../molecules/SummaryCard/SummaryCard";
import FormatListNumberedIcon from "@mui/icons-material/FormatListNumbered";
import CheckCircleOutline from "@mui/icons-material/CheckCircleOutline";
import Block from "@mui/icons-material/Block";
import { Typography } from "@mui/material";

export const PermitSummary = () => {
  return (
    <Container>
      <Typography sx={{ fontSize: 20 }} color="text.secondary" gutterBottom>
        Permit Status
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={2}>
          <SummaryCard
            title="All Permits"
            count={10}
            colour={"#D3D3D3"}
            icon={<FormatListNumberedIcon fontSize="small" />}
          />
        </Grid>
        <Grid item xs={2}>
          <SummaryCard
            title="Not Active"
            count={10}
            colour={"#FFE0E0"}
            icon={<Block fontSize="small" />}
          />
        </Grid>
        <Grid item xs={2}>
          <SummaryCard
            title="Archived"
            count={10}
            colour={"#DAFED1"}
            icon={<CheckCircleOutline fontSize="small" />}
          />
        </Grid>
      </Grid>
    </Container>
  );
};
