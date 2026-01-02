import { createBrowserRouter } from "react-router";
import Homelayout from "../Layout/Homelayout";
import Home from "../Component/HomeLayout/Home";
import Servicedetails from "../Component/HomeLayout/Servicedetails";
import Authenticationlayout from "../Layout/Authenticationlayout";
import Login from "../Component/Auth/Login";
import Register from "../Component/Auth/Register";
import Privateroute from "../Component/PrivateRoute/Privateroute";
import Forgotpassword from "../Component/Auth/Forgotpassword";
import Myprofile from "../Component/Myprofile/Myprofile";
import Loading from "../Component/HomeLayout/Loading";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Homelayout></Homelayout>,
        children:[
            {
                path: '/', 
                element: <Home></Home>,
                loader: () => fetch('/AllServicedata.json'),
                hydrateFallbackElement: <Loading></Loading>
            },
            {
                path: '/servicedetails/:id',
                element: 
                     <Servicedetails></Servicedetails>,
                loader: () => fetch('/AllServicedata.json'),
                 hydrateFallbackElement: <Loading></Loading>
            }
        ],
    },
    {
        path: '/auth',
        element: <Authenticationlayout></Authenticationlayout>,
        children: [
            {
                path: '/auth/login',
                element: <Login></Login>
            },
            {
                path: '/auth/register',
                element: <Register></Register>
            },
            {
                path: '/auth/forgotpassword',
                element: <Forgotpassword></Forgotpassword>
            }
        ]
    },
    {
        path: '/myprofile',
        element: <Privateroute>
            <Myprofile></Myprofile>
        </Privateroute>
    }
])

export default router;