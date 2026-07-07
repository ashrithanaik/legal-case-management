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

function AdminDashboard() {
  const activeCases = cases.filter(
    (c) => c.status === "In Progress"
  ).length;

  const openCases = cases.filter(
    (c) => c.status === "Open"
  ).length;

  const closedCases = cases.filter(
    (c) => c.status === "Closed"
  ).length;

  return (
    <>
      <Typography
        variant="h4"
        gutterBottom
      >
        Admin Dashboard
      </Typography>

      <Grid container spacing={3} sx={{ mb: 4 }}>

        <Grid item xs={12} md={3}>
          <Card>
            <CardContent>
              <Typography variant="h6">
                Total Cases
              </Typography>

              <Typography variant="h3">
                {cases.length}
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={3}>
          <Card>
            <CardContent>
              <Typography variant="h6">
                Active Cases
              </Typography>

              <Typography variant="h3">
                {activeCases}
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={3}>
          <Card>
            <CardContent>
              <Typography variant="h6">
                Open Cases
              </Typography>

              <Typography variant="h3">
                {openCases}
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={3}>
          <Card>
            <CardContent>
              <Typography variant="h6">
                Closed Cases
              </Typography>

              <Typography variant="h3">
                {closedCases}
              </Typography>
            </CardContent>
          </Card>
        </Grid>

      </Grid>

      <Paper sx={{ p: 3 }}>

        <Typography
          variant="h5"
          gutterBottom
        >
          Recent Cases
        </Typography>

        <Table>

          <TableHead>

            <TableRow>

              <TableCell>Case ID</TableCell>

              <TableCell>Client</TableCell>

              <TableCell>Lawyer</TableCell>

              <TableCell>Status</TableCell>

              <TableCell>Priority</TableCell>

            </TableRow>

          </TableHead>

          <TableBody>

            {cases.map((item) => (

              <TableRow key={item.id}>

                <TableCell>{item.id}</TableCell>

                <TableCell>{item.client}</TableCell>

                <TableCell>{item.lawyer}</TableCell>

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

                <TableCell>

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

                </TableCell>

              </TableRow>

            ))}

          </TableBody>

        </Table>

      </Paper>
    </>
  );
}

export default AdminDashboard;