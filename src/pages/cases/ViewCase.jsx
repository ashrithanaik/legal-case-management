import {
  Paper,
  Typography,
  Divider,
  Chip,
  Box,
} from "@mui/material";

import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";

import cases from "../../data/cases";

function ViewCase() {

  // Demo: Display the first case
  const item = cases[0];

  return (
    <Paper sx={{ p: 4 }}>

      <Typography variant="h4" gutterBottom>
        Case Details
      </Typography>

      <Divider sx={{ mb: 3 }} />

      <Typography><b>Case ID:</b> {item.id}</Typography>

      <Typography><b>Title:</b> {item.title}</Typography>

      <Typography><b>Client:</b> {item.client}</Typography>

      <Typography><b>Lawyer:</b> {item.lawyer}</Typography>

      <Typography><b>Court:</b> {item.court}</Typography>

      <Typography><b>Hearing:</b> {item.hearing}</Typography>

      <Typography sx={{ mt: 2 }}>
        <b>Status:</b>{" "}
        <Chip
          label={item.status}
          color={
            item.status === "Closed"
              ? "success"
              : item.status === "Open"
              ? "primary"
              : "warning"
          }
        />
      </Typography>

      <Typography sx={{ mt: 2 }}>
        <b>Priority:</b>{" "}
        <Chip
          label={item.priority}
          color={
            item.priority === "High"
              ? "error"
              : item.priority === "Medium"
              ? "warning"
              : "success"
          }
        />
      </Typography>

      <Typography sx={{ mt: 3 }}>
        <b>Description</b>
      </Typography>

      <Typography>{item.description}</Typography>

      <Box sx={{ mt: 5 }}>

        <Typography variant="h5" gutterBottom>
          Case Timeline
        </Typography>

        <Timeline position="right">

          {item.timeline.map((step, index) => (

            <TimelineItem key={index}>

              <TimelineSeparator>

                <TimelineDot color="primary" />

                {index !== item.timeline.length - 1 && (
                  <TimelineConnector />
                )}

              </TimelineSeparator>

              <TimelineContent>

                {step}

              </TimelineContent>

            </TimelineItem>

          ))}

        </Timeline>

      </Box>

    </Paper>
  );
}

export default ViewCase;