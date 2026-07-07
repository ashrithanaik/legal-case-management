import {
  Paper,
  Typography,
  TextField,
  Button,
} from "@mui/material";

function EditCase() {
  return (
    <Paper sx={{ p: 4 }}>
      <Typography variant="h4" gutterBottom>
        Edit Case
      </Typography>

      <TextField
        fullWidth
        label="Case Title"
        defaultValue="Property Dispute"
        sx={{ mb: 3 }}
      />

      <TextField
        fullWidth
        multiline
        rows={5}
        label="Description"
        defaultValue="Update the case information here."
        sx={{ mb: 3 }}
      />

      <Button variant="contained">
        Save Changes
      </Button>
    </Paper>
  );
}

export default EditCase;