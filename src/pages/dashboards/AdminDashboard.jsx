import { useEffect, useState } from "react";
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

import { getCases } from "../../services/caseService";
import { getToken } from "../../services/auth";

function AdminDashboard() {
  const [cases, setCases] = useState([]);

  useEffect(() => {
    loadCases();
  }, []);

  const loadCases = async () => {
    try {
      const data = await getCases(getToken());
      setCases(data.cases || []);
    } catch (err) {
      console.log(err);
    }
  };

  const totalCases = cases.length;

  const activeCases = cases.filter((c) => c.status === "In Progress").length;

  const openCases = cases.filter((c) => c.status === "Open").length;

  const closedCases = cases.filter((c) => c.status === "Closed").length;

  return (
    <>
      <Typography variant="h4" gutterBottom>
        Admin Dashboard
      </Typography>

      <Grid container spacing={3} sx={{ mb: 4 }}>
        <Grid item xs={12} md={3}>
          <Card>
            <CardContent>
              <Typography variant="h6">Total Cases</Typography>

              <Typography variant="h3">{totalCases}</Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={3}>
          <Card>
            <CardContent>
              <Typography variant="h6">Active Cases</Typography>

              <Typography variant="h3">{activeCases}</Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={3}>
          <Card>
            <CardContent>
              <Typography variant="h6">Open Cases</Typography>

              <Typography variant="h3">{openCases}</Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={3}>
          <Card>
            <CardContent>
              <Typography variant="h6">Closed Cases</Typography>

              <Typography variant="h3">{closedCases}</Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      <Paper sx={{ p: 3 }}>
        <Typography variant="h5" gutterBottom>
          Recent Cases
        </Typography>

        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Title</TableCell>
              <TableCell>Client</TableCell>
              <TableCell>Lawyer</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Hearing Date</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {cases.map((item) => (
              <TableRow key={item._id}>
                <TableCell>{item.title}</TableCell>

                <TableCell>{item.clientName}</TableCell>

                <TableCell>{item.lawyerName}</TableCell>

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
                  {item.hearingDate
                    ? new Date(item.hearingDate).toLocaleDateString()
                    : "-"}
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
