import { useContext } from "react";
import { authContext } from "../Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({children}) => {
   const location = useLocation();
    const {user, loading}= useContext(authContext);
    if(loading){
        return <span className="loading loading-bars loading-lg"></span>
    }
    if(user){
        return children;
    }

    return <Navigate to="/login" state={{ from: location }} replace ></Navigate>
};

export default PrivateRoute;