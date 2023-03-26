import { Layout } from "./Layout";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { Stack } from "@mui/system";
import { TaskSummary } from "../../organisms/Summary/TaskSummary";
import { PermitSummary } from "../../organisms/Summary/PermitSummary";
import { ConditionSummary } from "../../organisms/Summary/ConditionSummary";

export const SignUp = (): JSX.Element => {
  return (
    <Layout>
      <Stack>
        <Container component="main" sx={{ mt: 4, mb: 2 }} maxWidth="lg">
          <Typography variant="h3" component="h1" gutterBottom>
            Sign Up
          </Typography>
        </Container>
        <PermitSummary />
        <ConditionSummary />
        <TaskSummary />
      </Stack>
    </Layout>
  );
};
