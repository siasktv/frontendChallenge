import { Layout } from "./Layout";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { Stack } from "@mui/system";

import { ConditionSummary } from "../../organisms/Summary/ConditionSummary";
import { ConditionTable } from "../../organisms/Tables/ConditionTable";

export const Conditions = (): JSX.Element => {
  return (
    <Layout>
      <Stack>
        <Container component="main" sx={{ mt: 4, mb: 2 }} maxWidth="lg">
          <Typography variant="h3" component="h1" gutterBottom>
            Conditions
          </Typography>
        </Container>
        <ConditionSummary />
        <ConditionTable />
      </Stack>
    </Layout>
  );
};
