import {
  Paper,
  Typography,
  Grid,
  TextField,
  Button,
  MenuItem,
} from "@mui/material";
import { useState } from "react";
import { createCase } from "../../services/caseService";
import { getToken } from "../../services/auth";

function CreateCase() {
  const [caseData, setCaseData] = useState({
    title: "",
    clientName: "",
    lawyerName: "",
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

  const handleSubmit = async () => {
    try {
      await createCase(caseData, getToken());

      alert("Case Created Successfully!");

      setCaseData({
        title: "",
        clientName: "",
        lawyerName: "",
        status: "Open",
        hearingDate: "",
        description: "",
      });
    } catch (err) {
      alert(err.response?.data?.message || "Failed to create case");
    }
  };

  return (
    <Paper sx={{ p: 4 }}>
      <Typography variant="h4" gutterBottom>
        Create New Case
      </Typography>

      <Grid container spacing={3}>
        <Grid item xs={12}>
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
            name="clientName"
            value={caseData.clientName}
            onChange={handleChange}
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <TextField
            fullWidth
            label="Lawyer Name"
            name="lawyerName"
            value={caseData.lawyerName}
            onChange={handleChange}
          />
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

        <Grid item xs={12} md={6}>
          <TextField
            fullWidth
            type="date"
            label="Hearing Date"
            name="hearingDate"
            value={caseData.hearingDate}
            onChange={handleChange}
            InputLabelProps={{ shrink: true }}
          />
        </Grid>

        <Grid item xs={12}>
          <TextField
            fullWidth
            multiline
            rows={5}
            label="Description"
            name="description"
            value={caseData.description}
            onChange={handleChange}
          />
        </Grid>

        <Grid item xs={12}>
          <Button variant="contained" size="large" onClick={handleSubmit}>
            Create Case
          </Button>
        </Grid>
      </Grid>
    </Paper>
  );
}

export default CreateCase;
