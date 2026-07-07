import {
  Paper,
  Typography,
  Avatar,
  TextField,
  Button,
} from "@mui/material";

function Profile() {
  return (
    <Paper sx={{ p: 4 }}>

      <Typography variant="h4" gutterBottom>
        User Profile
      </Typography>

      <Avatar
        sx={{
          width: 90,
          height: 90,
          mb: 3,
        }}
      >
        A
      </Avatar>

      <TextField
        fullWidth
        label="Name"
        defaultValue="Admin User"
        sx={{ mb: 3 }}
      />

      <TextField
        fullWidth
        label="Email"
        defaultValue="admin@gmail.com"
        sx={{ mb: 3 }}
      />

      <Button variant="contained">
        Save Profile
      </Button>

    </Paper>
  );
}

export default Profile;