import { useContext } from "react"
import { AuthContext } from "../../context/AuthContext"
import { Navigate, useLocation } from "react-router-dom"

const PrivateRoute = ({children}) => {
    const { user } = useContext(AuthContext);
    const currentLocation = useLocation();

    if(!user) {
        return <Navigate to="/login" state={{from: currentLocation.pathname}} replace/>
    }
    return children;
}

export default PrivateRoute;