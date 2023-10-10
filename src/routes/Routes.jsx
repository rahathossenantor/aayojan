import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import Register from "../pages/Register";
import Login from "../pages/Login";
import AuthProvider from "../providers/AuthProvider";
import EventDetails from "../pages/EventDetails";
import PrivateRoutes from "./PrivateRoutes";
import Profile from "../pages/Profile";
import BookedParties from "../pages/BookedParties";

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
                path: "/register",
                element: <Register></Register>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/event-details/:eventId",
                loader: () => fetch("/eventData.json"),
                element: <PrivateRoutes><EventDetails></EventDetails></PrivateRoutes>
            },
            {
                path: "/profile",
                element: <PrivateRoutes><Profile></Profile></PrivateRoutes>
            },
            {
                path: "/booked-parties",
                element: <PrivateRoutes><BookedParties></BookedParties></PrivateRoutes>
            }
        ]
    }
]);

export default router;
