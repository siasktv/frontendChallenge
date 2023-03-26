import { Layout } from "./Layout";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { Stack } from "@mui/system";
import { PermitSummary } from "../../organisms/Summary/PermitSummary";
import { PermitTable } from "../../organisms/Tables/PermitTable";

export const Permits = (): JSX.Element => {
  return (
    <Layout>
      <Stack>
        <Container component="main" sx={{ mt: 4, mb: 2 }} maxWidth="lg">
          <Typography variant="h3" component="h1" gutterBottom>
            Permits
          </Typography>
        </Container>
        <PermitSummary />
        <PermitTable />
      </Stack>
    </Layout>
  );
};
