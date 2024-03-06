import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import UserSignUp from "../Pages/UserSignUP/UserSignUp";
import VendorSignUp from "../Pages/VendorSignUp/VendorSignUp";

const myCreatedRoute = createBrowserRouter([
    {
        path:"/",
        element:<Main></Main>,
        children:[
            {
                path:"/",
                element:<Home></Home>
            },
        ]
    },
    {
        path:"/login",
        element:<Login></Login>
    },
    {
        path:"/user-sign-up",
        element:<UserSignUp></UserSignUp>
    },
    {
        path:"/vendor-sign-up",
        element:<VendorSignUp></VendorSignUp>
    },
    
])

export default myCreatedRoute;