import {
  Paper,
  Typography,
  Grid,
  TextField,
  Button,
  MenuItem,
} from "@mui/material";
import { useState } from "react";

function CreateCase() {
  const [caseData, setCaseData] = useState({
    caseId: "",
    title: "",
    client: "",
    lawyer: "",
    type: "",
    status: "Open",
    hearingDate: "",
    description: "",
  });

  const handleChange = (e) => {
    setCaseData({
      ...caseData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    alert("Case Created Successfully!");
    console.log(caseData);
  };

  return (
    <Paper sx={{ p: 4 }}>
      <Typography variant="h4" gutterBottom>
        Create New Case
      </Typography>

      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <TextField
            fullWidth
            label="Case ID"
            name="caseId"
            value={caseData.caseId}
            onChange={handleChange}
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <TextField
            fullWidth
            label="Case Title"
            name="title"
            value={caseData.title}
            onChange={handleChange}
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <TextField
            fullWidth
            label="Client Name"
            name="client"
            value={caseData.client}
            onChange={handleChange}
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <TextField
            fullWidth
            label="Assign Lawyer"
            name="lawyer"
            value={caseData.lawyer}
            onChange={handleChange}
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <TextField
            select
            fullWidth
            label="Case Type"
            name="type"
            value={caseData.type}
            onChange={handleChange}
          >
            <MenuItem value="Civil">Civil</MenuItem>
            <MenuItem value="Criminal">Criminal</MenuItem>
            <MenuItem value="Property">Property</MenuItem>
            <MenuItem value="Family">Family</MenuItem>
          </TextField>
        </Grid>

        <Grid item xs={12} md={6}>
          <TextField
            select
            fullWidth
            label="Status"
            name="status"
            value={caseData.status}
            onChange={handleChange}
          >
            <MenuItem value="Open">Open</MenuItem>
            <MenuItem value="In Progress">In Progress</MenuItem>
            <MenuItem value="Closed">Closed</MenuItem>
          </TextField>
        </Grid>

        <Grid item xs={12}>
          <TextField
            fullWidth
            type="date"
            name="hearingDate"
            InputLabelProps={{ shrink: true }}
            label="Hearing Date"
            value={caseData.hearingDate}
            onChange={handleChange}
          />
        </Grid>

        <Grid item xs={12}>
          <TextField
            fullWidth
            multiline
            rows={5}
            label="Case Description"
            name="description"
            value={caseData.description}
            onChange={handleChange}
          />
        </Grid>

        <Grid item xs={12}>
          <Button
            variant="contained"
            size="large"
            onClick={handleSubmit}
          >
            Create Case
          </Button>
        </Grid>
      </Grid>
    </Paper>
  );
}

export default CreateCase;