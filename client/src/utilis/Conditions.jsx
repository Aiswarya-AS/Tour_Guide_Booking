import Cookies from "js-cookie";
import { Navigate, Outlet } from "react-router-dom";

export const RequireLoginUser = () => {
    const token = Cookies.get("jwt");
    return(
        
    
        token ? <Outlet /> : <Navigate to="/login" />

    )

    
    
};

export const RequireLoginGuide=()=>{
    const token = Cookies.get("guide_jwt");
    return(
        
    
        token ? <Outlet /> : <Navigate to="/guide_login" />

    )

    
    
};