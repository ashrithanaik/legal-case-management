import {
  Paper,
  Typography,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";

import cases from "../../data/cases";

function Notifications() {

  return (

    <Paper sx={{ p: 4 }}>

      <Typography variant="h4" gutterBottom>
        Notifications
      </Typography>

      <List>

        {cases.map((item)=>(

          <ListItem key={item.id}>

            <ListItemText
              primary={`${item.id} - Hearing on ${item.hearing}`}
              secondary={`${item.client} | ${item.status}`}
            />

          </ListItem>

        ))}

      </List>

    </Paper>

  );

}

export default Notifications;