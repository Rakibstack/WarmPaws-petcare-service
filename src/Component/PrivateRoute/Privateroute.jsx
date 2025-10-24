import React, { use } from 'react';
import { Authcontext } from '../Authprovider/Authprovider';
import { Navigate, useLocation } from 'react-router';

const Privateroute = ({children}) => {
       const {user} = use(Authcontext);
       const location = useLocation();
       console.log(location);
       
       if(user){
        return children;
       }

    return <Navigate state={location.pathname} to='/auth/login'></Navigate>;
};

export default Privateroute;