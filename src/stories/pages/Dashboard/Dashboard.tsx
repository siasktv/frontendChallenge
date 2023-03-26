import { Layout } from "./Layout";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { TaskSummary } from "../../organisms/Summary/TaskSummary";
import { PermitSummary } from "../../organisms/Summary/PermitSummary";
import { ConditionSummary } from "../../organisms/Summary/ConditionSummary";

export const Dashboard = (): JSX.Element => {
  return (
    <Layout>
      <Container component="main" sx={{ mt: 4, mb: 2 }} maxWidth="lg">
        <Typography variant="h3" component="h1" gutterBottom>
          My Dashboard
        </Typography>
      </Container>
      <PermitSummary />
      <div style={{ marginTop: "20px" }}>
        <ConditionSummary />
      </div>
      <div style={{ marginTop: "20px" }}>
        <TaskSummary />
      </div>
    </Layout>
  );
};
