import {AppBar,Toolbar,Typography,Button} from "@mui/material";

import {logout} from "../services/auth";

import {useNavigate} from "react-router-dom";

function Navbar(){

const navigate=useNavigate();

const handleLogout=()=>{

logout();

navigate("/");

};

return(

<AppBar position="static">

<Toolbar>

<Typography sx={{flexGrow:1}} variant="h6">

Legal Case Management

</Typography>

<Button color="inherit" onClick={handleLogout}>

Logout

</Button>

</Toolbar>

</AppBar>

);

}

export default Navbar;