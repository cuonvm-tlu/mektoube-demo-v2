import  React from  "react";
import { Route, Redirect } from  "react-router-dom";

const  PrivateRoute: React.FC<{
        component: React.FC;
        path: string;
    }> = ({component ,path}) => {
    
    return   localStorage.getItem("token") !== null ? (<Route  path={path} component={component} />) : 
        (<Redirect  to="/404/" />);
};

export  default  PrivateRoute;




