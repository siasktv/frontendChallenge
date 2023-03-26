import { Layout } from "./Layout";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { Stack } from "@mui/system";
import { DirectoryTable } from "../../organisms/Tables/DirectoryTable";

export const Directory = (): JSX.Element => {
  return (
    <Layout>
      <Stack>
        <Container component="main" sx={{ mt: 4, mb: 2 }} maxWidth="lg">
          <Typography variant="h3" component="h1" gutterBottom>
            Directory
          </Typography>
        </Container>
        <DirectoryTable />
      </Stack>
    </Layout>
  );
};
