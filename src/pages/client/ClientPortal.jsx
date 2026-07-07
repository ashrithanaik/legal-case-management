import {
  Paper,
  Typography,
  Grid,
  Card,
  CardContent,
  LinearProgress,
  Chip,
} from "@mui/material";

import cases from "../../data/cases";

function ClientPortal() {
  const myCases = cases.filter(
    (item) => item.client === "Rahul Sharma"
  );

  return (
    <Paper sx={{ p: 4 }}>
      <Typography variant="h4" gutterBottom>
        Client Portal
      </Typography>

      <Grid container spacing={3}>

        {myCases.map((item) => (

          <Grid item xs={12} md={6} key={item.id}>

            <Card>

              <CardContent>

                <Typography variant="h6">
                  {item.title}
                </Typography>

                <Typography>
                  Case ID : {item.id}
                </Typography>

                <Typography>
                  Lawyer : {item.lawyer}
                </Typography>

                <Typography>
                  Court : {item.court}
                </Typography>

                <Typography>
                  Hearing : {item.hearing}
                </Typography>

                <Chip
                  sx={{ mt: 2 }}
                  label={item.status}
                  color={
                    item.status === "Closed"
                      ? "success"
                      : item.status === "Open"
                      ? "primary"
                      : "warning"
                  }
                />

                <Typography sx={{ mt: 3 }}>
                  Progress
                </Typography>

                <LinearProgress
                  variant="determinate"
                  value={
                    item.status === "Closed"
                      ? 100
                      : item.status === "In Progress"
                      ? 70
                      : 25
                  }
                />

              </CardContent>

            </Card>

          </Grid>

        ))}

      </Grid>

    </Paper>
  );
}

export default ClientPortal;