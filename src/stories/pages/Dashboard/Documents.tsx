import { Layout } from "./Layout";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { Stack } from "@mui/system";
import { DocumentTable } from "../../organisms/Tables/DocumentTable";

export const Documents = (): JSX.Element => {
  return (
    <Layout>
      <Stack>
        <Container component="main" sx={{ mt: 4 }} maxWidth="lg">
          <Typography variant="h3" component="h1" gutterBottom>
            Documents
          </Typography>
        </Container>
        <DocumentTable />
      </Stack>
    </Layout>
  );
};
