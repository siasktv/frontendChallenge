import { Layout } from "./Layout";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { Stack } from "@mui/system";
import { TaskSummary } from "../../organisms/Summary/TaskSummary";
import { TaskTable } from "../../organisms/Tables/TaskTable";

export const Tasks = (): JSX.Element => {
  return (
    <Layout>
      <Stack>
        <Container component="main" sx={{ mt: 4, mb: 2 }} maxWidth="lg">
          <Typography variant="h3" component="h1" gutterBottom>
            Tasks
          </Typography>
        </Container>
        <TaskSummary />
        <TaskTable />
      </Stack>
    </Layout>
  );
};
