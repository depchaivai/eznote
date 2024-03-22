import { lazy } from "react";
import PathConstants from "./pathContants";
import Login from "../pages/Login";
import DashboardRoute from "../components/dashboard/DashboardRoute";
import Dashboard from "../components/dashboard/Dashboard";
const Home = lazy(() => import("../pages/home"));

const routes = [
    {
        path: PathConstants.HOME,
        element: <Home/>,
    },
    {
        path: PathConstants.SIGNIN,
        element: <Login signIn={true}/>,
    },
    {
        path: PathConstants.SIGNUP,
        element: <Login signIn={false}/>,
    },
    {
        path: PathConstants.DASHBOARD,
        element: <Dashboard/>,
    }
];
export default routes;