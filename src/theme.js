import { createTheme } from "@mui/material/styles";

const theme = createTheme({

  palette:{

      primary:{
          main:"#1976d2",
      },

      secondary:{
          main:"#26a69a",
      },

      background:{
          default:"#f4f6f8"
      }

  },

  typography:{

      fontFamily:"Roboto"

  }

});

export default theme;