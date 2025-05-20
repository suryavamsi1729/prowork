import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../pages/error/ErrorPage";
import Home from "../pages/home/Home";
import LoginPage from "../pages/Login/LoginPage";
import SignupPage from "../pages/signup/SignUPPage";
export const AppRouter = createBrowserRouter([
    {
        path:"/signin",
        element:<LoginPage/>,
        errorElement:<ErrorPage/>
    },
    {
        path:"/signup",
        element:<SignupPage/>,
        errorElement:<ErrorPage/>
    },
    {
        path:"/",
        element:<Home/>,
        errorElement:<ErrorPage/>
    },
    {
        path:"*",
        element:<ErrorPage/>,
    }
]);