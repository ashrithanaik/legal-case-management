import {
  Grid,
  Card,
  CardContent,
  Typography,
  Paper,
  Chip,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@mui/material";

import cases from "../../data/cases";

function LawyerDashboard() {

  const myCases = cases.filter(
    (item) => item.lawyer === "John Smith"
  );

  const activeCases = myCases.filter(
    (item) => item.status === "In Progress"
  );

  return (
    <>
      <Typography variant="h4" gutterBottom>
        Lawyer Dashboard
      </Typography>

      <Grid container spacing={3} sx={{ mb: 4 }}>

        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h6">
                Assigned Cases
              </Typography>

              <Typography variant="h3">
                {myCases.length}
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h6">
                Active Cases
              </Typography>

              <Typography variant="h3">
                {activeCases.length}
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h6">
                Upcoming Hearings
              </Typography>

              <Typography variant="h3">
                {myCases.length}
              </Typography>
            </CardContent>
          </Card>
        </Grid>

      </Grid>

      <Paper sx={{ p: 3 }}>

        <Typography variant="h5" gutterBottom>
          My Cases
        </Typography>

        <Table>

          <TableHead>

            <TableRow>

              <TableCell>Case ID</TableCell>

              <TableCell>Client</TableCell>

              <TableCell>Status</TableCell>

              <TableCell>Hearing</TableCell>

            </TableRow>

          </TableHead>

          <TableBody>

            {myCases.map((item) => (

              <TableRow key={item.id}>

                <TableCell>{item.id}</TableCell>

                <TableCell>{item.client}</TableCell>

                <TableCell>
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
                </TableCell>

                <TableCell>{item.hearing}</TableCell>

              </TableRow>

            ))}

          </TableBody>

        </Table>

      </Paper>
    </>
  );
}

export default LawyerDashboard;