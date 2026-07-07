import {
  Paper,
  Typography,
  Table,
  TableHead,
  TableBody,
  TableCell,
  TableRow,
  TableContainer,
} from "@mui/material";

import cases from "../../data/cases";

function HearingSchedule() {

  return (

    <Paper sx={{ p: 4 }}>

      <Typography variant="h4" gutterBottom>
        Hearing Schedule
      </Typography>

      <TableContainer>

        <Table>

          <TableHead>

            <TableRow>

              <TableCell>Case ID</TableCell>

              <TableCell>Client</TableCell>

              <TableCell>Lawyer</TableCell>

              <TableCell>Hearing</TableCell>

              <TableCell>Court</TableCell>

            </TableRow>

          </TableHead>

          <TableBody>

            {cases.map((item)=>(

              <TableRow key={item.id}>

                <TableCell>{item.id}</TableCell>

                <TableCell>{item.client}</TableCell>

                <TableCell>{item.lawyer}</TableCell>

                <TableCell>{item.hearing}</TableCell>

                <TableCell>{item.court}</TableCell>

              </TableRow>

            ))}

          </TableBody>

        </Table>

      </TableContainer>

    </Paper>

  );

}

export default HearingSchedule;