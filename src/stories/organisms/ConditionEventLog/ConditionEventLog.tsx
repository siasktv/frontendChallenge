import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";

import RepeatIcon from "@mui/icons-material/Repeat";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import AddCircleOutline from "@mui/icons-material/AddCircleOutline";
import CheckCircleOutline from "@mui/icons-material/CheckCircleOutline";
export const ConditionEventLog = (): JSX.Element => {
  return (
    <Container sx={{ marginTop: 10 }}>
      <Typography variant="h3" component="h1" gutterBottom>
        Event Log
      </Typography>
      <Timeline position="alternate">
        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: "auto 0" }}
            align="right"
            variant="body2"
            color="text.secondary"
          >
            01/11/2023
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot>
              <AddCircleOutline />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: "12px", px: 2 }}>
            <Typography variant="h6" component="span">
              Created
            </Typography>
            <Typography>Condition created</Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: "auto 0" }}
            variant="body2"
            color="text.secondary"
          >
            02/12/2023
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot color="primary">
              <RepeatIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: "12px", px: 2 }}>
            <Typography variant="h6" component="span">
              Updated
            </Typography>
            <Typography>Assgined to Will</Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: "auto 0" }}
            variant="body2"
            color="text.secondary"
          >
            02/12/2023
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot color="primary">
              <CloudUploadIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: "12px", px: 2 }}>
            <Typography variant="h6" component="span">
              Uploaded Document
            </Typography>
            <Typography>Assgined to Will</Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: "auto 0" }}
            variant="body2"
            color="text.secondary"
          >
            02/12/2023
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot color="primary">
              <RepeatIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: "12px", px: 2 }}>
            <Typography variant="h6" component="span">
              Updated
            </Typography>
            <Typography>Assgined to Taylor</Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: "auto 0" }}
            variant="body2"
            color="text.secondary"
          >
            02/12/2023
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot color="success">
              <CheckCircleOutline />
            </TimelineDot>
          </TimelineSeparator>
          <TimelineContent sx={{ py: "12px", px: 2 }}>
            <Typography variant="h6" component="span">
              Updated
            </Typography>
            <Typography>Status accepted</Typography>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </Container>
  );
};
