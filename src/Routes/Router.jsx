import { createBrowserRouter } from "react-router";
import Homelayout from "../Layout/Homelayout";
import Home from "../Component/HomeLayout/Home";
import Servicedetails from "../Component/HomeLayout/Servicedetails";
import Authenticationlayout from "../Layout/Authenticationlayout";
import Login from "../Component/Auth/Login";
import Register from "../Component/Auth/Register";
import Privateroute from "../Component/PrivateRoute/Privateroute";
import Forgotpassword from "../Component/Auth/Forgotpassword";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Homelayout></Homelayout>,
        children:[
            {
                path: '/', 
                element: <Home></Home>,
                loader: () => fetch('/AllServicedata.json')
            },
            {
                path: '/servicedetails/:id',
                element: <Privateroute>
                     <Servicedetails></Servicedetails>
                </Privateroute>,
                loader: () => fetch('/AllServicedata.json')
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
    }
])

export default router;