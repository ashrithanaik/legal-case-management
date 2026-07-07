import {
  Paper,
  Typography,
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineDot,
  TimelineConnector,
  TimelineContent,
} from "@mui/lab";

function CaseHistory() {
  return (
    <Paper sx={{ p: 4 }}>
      <Typography variant="h4" gutterBottom>
        Case History
      </Typography>

      <Timeline>

        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            Case Created
          </TimelineContent>
        </TimelineItem>

        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot color="primary" />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            Lawyer Assigned
          </TimelineContent>
        </TimelineItem>

        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot color="success" />
          </TimelineSeparator>
          <TimelineContent>
            Hearing Scheduled
          </TimelineContent>
        </TimelineItem>

      </Timeline>
    </Paper>
  );
}

export default CaseHistory;