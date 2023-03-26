import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { SummaryCard } from "../../molecules/SummaryCard/SummaryCard";
import FormatListNumberedIcon from "@mui/icons-material/FormatListNumbered";
import Block from "@mui/icons-material/Block";
import AutorenewIcon from "@mui/icons-material/Autorenew";
import PendingActions from "@mui/icons-material/PendingActions";
import WarningAmber from "@mui/icons-material/WarningAmber";
import CheckCircleOutline from "@mui/icons-material/CheckCircleOutline";
import { Typography } from "@mui/material";

export const TaskSummary = () => {
  return (
    <Container>
      <Typography sx={{ fontSize: 20 }} color="text.secondary" gutterBottom>
        Tasks Status
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={2}>
          <SummaryCard
            title="All Tasks"
            count={10}
            colour={"#D3D3D3"}
            icon={<FormatListNumberedIcon fontSize="small" />}
          />
        </Grid>
        <Grid item xs={2}>
          <SummaryCard
            title="Not Assigned"
            count={10}
            colour={"#FEFFCA"}
            icon={<Block fontSize="small" />}
          />
        </Grid>
        <Grid item xs={2}>
          <SummaryCard
            title="In Progress"
            count={10}
            colour={"#E2F1FF"}
            icon={<AutorenewIcon fontSize="small" />}
          />
        </Grid>
        <Grid item xs={2}>
          <SummaryCard
            title="Pending"
            count={10}
            colour={"#FEE8D3"}
            icon={<PendingActions fontSize="small" />}
          />
        </Grid>
        <Grid item xs={2}>
          <SummaryCard
            title="Overdue"
            count={10}
            colour={"#FFE0E0"}
            icon={<WarningAmber fontSize="small" />}
          />
        </Grid>
        <Grid item xs={2}>
          <SummaryCard
            title="Approved"
            count={10}
            colour={"#DAFED1"}
            icon={<CheckCircleOutline />}
          />
        </Grid>
      </Grid>
    </Container>
  );
};
