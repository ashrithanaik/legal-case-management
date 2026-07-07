import {
  Paper,
  Typography,
  TextField,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  TableContainer,
  Chip,
} from "@mui/material";
import { useState } from "react";

import cases from "../../data/cases";

function SearchCase() {
  const [search, setSearch] = useState("");

  const filteredCases = cases.filter(
    (item) =>
      item.id.toLowerCase().includes(search.toLowerCase()) ||
      item.client.toLowerCase().includes(search.toLowerCase()) ||
      item.lawyer.toLowerCase().includes(search.toLowerCase()) ||
      item.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Paper sx={{ p: 4 }}>
      <Typography variant="h4" gutterBottom>
        Search Cases
      </Typography>

      <TextField
        fullWidth
        label="Search by Case ID, Client, Lawyer or Title"
        sx={{ mb: 3 }}
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <TableContainer>
        <Table>

          <TableHead>

            <TableRow>
              <TableCell>Case ID</TableCell>
              <TableCell>Title</TableCell>
              <TableCell>Client</TableCell>
              <TableCell>Lawyer</TableCell>
              <TableCell>Status</TableCell>
            </TableRow>

          </TableHead>

          <TableBody>

            {filteredCases.map((item) => (

              <TableRow key={item.id}>

                <TableCell>{item.id}</TableCell>

                <TableCell>{item.title}</TableCell>

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

              </TableRow>

            ))}

          </TableBody>

        </Table>
      </TableContainer>

    </Paper>
  );
}

export default SearchCase;