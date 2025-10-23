import { createBrowserRouter } from "react-router";
import Homelayout from "../Layout/Homelayout";
import Home from "../Component/HomeLayout/Home";
import Servicedetails from "../Component/HomeLayout/Servicedetails";
import Authenticationlayout from "../Layout/Authenticationlayout";
import Login from "../Component/Auth/Login";
import Register from "../Component/Auth/Register";

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
                element: <Servicedetails></Servicedetails>,
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
            }
        ]
    }
])

export default router;