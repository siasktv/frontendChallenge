import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { DocumentTable } from "../Tables/DocumentTable";

export const ConditionDocuments = (): JSX.Element => {
  return (
    <Container sx={{ marginTop: 10 }}>
      <Typography variant="h3" component="h1" gutterBottom>
        Documents
      </Typography>
      <DocumentTable allowUpload={true} />
    </Container>
  );
};
