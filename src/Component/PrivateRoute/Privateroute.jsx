import React, { use } from 'react';
import { Authcontext } from '../Authprovider/Authprovider';
import { Navigate, useLocation } from 'react-router';
import Loading from '../HomeLayout/Loading';

const Privateroute = ({children}) => {
       const {user,loading} = use(Authcontext);
       const location = useLocation();

       if(loading){
        return <Loading></Loading>
       }
       
       if(user){
        return children;
       }

    return <Navigate state={location.pathname} to='/auth/login'></Navigate>;
};

export default Privateroute;