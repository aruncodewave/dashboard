import Dashboard from "../pages/Dashboard";
import Home from "../pages/Home";
import Login from "../pages/Login";
import ProtectedRoute from "./ProtectedRoute";

export const appRoutes = [

    {
        element: <ProtectedRoute />,
        children: [
            {
                path: '/dashboard',
                element: <Dashboard />
            }
        ]
    },
    {
        path: '/',
        element: <Home />
    },
    {
        path: '/login',
        element: <Login />,
    },

]