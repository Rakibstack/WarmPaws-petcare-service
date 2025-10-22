import { createBrowserRouter } from "react-router";
import Homelayout from "../Layout/Homelayout";
import Home from "../Component/HomeLayout/Home";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Homelayout></Homelayout>,
        children:[
            {
                path: '/', 
                element: <Home></Home>,
                loader: () => fetch('/AllServicedata.json')
            }
        ]
    }
])

export default router;