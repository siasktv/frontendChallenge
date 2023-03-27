import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { MailTable } from "../Tables/MailTable";

export const ConditionMail = (): JSX.Element => {
  return (
    <Container sx={{ marginTop: 10 }}>
      <Typography variant="h3" component="h1" gutterBottom>
        Mail
      </Typography>
      <MailTable />
    </Container>
  );
};
