import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Register from "../pages/Register";
import Login from "../pages/Login";
import AuthProvider from "../providers/AuthProvider";

const router = createBrowserRouter([
    {
        path: "/",
        element: <AuthProvider><Root></Root></AuthProvider>,
        errorElement: <NotFound></NotFound>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/about",
                element: <About></About>
            },
            {
                path: "/contact",
                element: <Contact></Contact>
            },
            {
                path: "/register",
                element: <Register></Register>
            },
            {
                path: "/login",
                element: <Login></Login>
            }
        ]
    }
]);

export default router;
