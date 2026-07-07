import { useState } from "react";
import {
  Container,
  Paper,
  Typography,
  TextField,
  Button,
  MenuItem,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { login } from "../services/auth";

function Login() {
  const navigate = useNavigate();

  const [role, setRole] = useState("Admin");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    login(role);

    switch (role) {
      case "Admin":
        navigate("/admin");
        break;

      case "Lawyer":
        navigate("/lawyer");
        break;

      case "Client":
        navigate("/client-dashboard");
        break;

      default:
        navigate("/");
    }
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 8 }}>
      <Paper elevation={6} sx={{ p: 4, borderRadius: 3 }}>
        <Typography
          variant="h4"
          align="center"
          gutterBottom
          fontWeight="bold"
        >
          Cloud Legal Case Management
        </Typography>

        <Typography
          align="center"
          color="text.secondary"
          sx={{ mb: 3 }}
        >
          Login to continue
        </Typography>

        <TextField
          fullWidth
          label="Email"
          margin="normal"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <TextField
          fullWidth
          type="password"
          label="Password"
          margin="normal"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <TextField
          select
          fullWidth
          label="Role"
          margin="normal"
          value={role}
          onChange={(e) => setRole(e.target.value)}
        >
          <MenuItem value="Admin">Admin</MenuItem>
          <MenuItem value="Lawyer">Lawyer</MenuItem>
          <MenuItem value="Client">Client</MenuItem>
        </TextField>

        <Button
          fullWidth
          variant="contained"
          size="large"
          sx={{ mt: 3 }}
          onClick={handleLogin}
        >
          Login
        </Button>
      </Paper>
    </Container>
  );
}

export default Login;