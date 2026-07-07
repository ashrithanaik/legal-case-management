import {Navigate} from "react-router-dom";
import {getRole} from "../services/auth";

function ProtectedRoute({children}){

const role=getRole();

return role ? children : <Navigate to="/" />;

}

export default ProtectedRoute;