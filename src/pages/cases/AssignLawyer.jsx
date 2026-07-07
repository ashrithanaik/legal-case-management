import {
  Paper,
  Typography,
  TextField,
  MenuItem,
  Button,
} from "@mui/material";
import { useState } from "react";

function AssignLawyer() {
  const [lawyer, setLawyer] = useState("");

  return (
    <Paper sx={{ p: 4 }}>
      <Typography variant="h4" gutterBottom>
        Assign Lawyer
      </Typography>

      <TextField
        fullWidth
        label="Case ID"
        sx={{ mb: 3 }}
      />

      <TextField
        select
        fullWidth
        label="Select Lawyer"
        value={lawyer}
        onChange={(e) => setLawyer(e.target.value)}
        sx={{ mb: 3 }}
      >
        <MenuItem value="John Smith">John Smith</MenuItem>
        <MenuItem value="David Lee">David Lee</MenuItem>
        <MenuItem value="Robert">Robert</MenuItem>
      </TextField>

      <Button variant="contained">
        Assign Lawyer
      </Button>
    </Paper>
  );
}

export default AssignLawyer;