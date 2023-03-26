import { Layout } from "./Layout";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { Stack } from "@mui/system";
import { MailTable } from "../../organisms/Tables/MailTable";

export const Mail = (): JSX.Element => {
  return (
    <Layout>
      <Stack>
        <Container component="main" sx={{ mt: 4, mb: 2 }} maxWidth="lg">
          <Typography variant="h3" component="h1" gutterBottom>
            Mail
          </Typography>
        </Container>
        <MailTable />
      </Stack>
    </Layout>
  );
};
