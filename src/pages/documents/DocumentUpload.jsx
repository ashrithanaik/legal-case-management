import {
  Paper,
  Typography,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

const documents = [

  {
    name:"PropertyProof.pdf",
    size:"2.4 MB"
  },

  {
    name:"CourtOrder.pdf",
    size:"1.2 MB"
  },

  {
    name:"Evidence.zip",
    size:"5.8 MB"
  }

];

function DocumentUpload(){

return(

<Paper sx={{p:4}}>

<Typography
variant="h4"
gutterBottom
>

Document Management

</Typography>

<Button
variant="contained"
component="label"
sx={{mb:3}}
>

Upload Document

<input
hidden
type="file"
/>

</Button>

<TableContainer>

<Table>

<TableHead>

<TableRow>

<TableCell>Name</TableCell>

<TableCell>Size</TableCell>

<TableCell>Download</TableCell>

</TableRow>

</TableHead>

<TableBody>

{documents.map((doc,index)=>(

<TableRow key={index}>

<TableCell>

{doc.name}

</TableCell>

<TableCell>

{doc.size}

</TableCell>

<TableCell>

<Button
variant="outlined"
>

Download

</Button>

</TableCell>

</TableRow>

))}

</TableBody>

</Table>

</TableContainer>

</Paper>

);

}

export default DocumentUpload;