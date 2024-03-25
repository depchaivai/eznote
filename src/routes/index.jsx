import { lazy } from "react";
import PathConstants from "./pathContants";
import Login from "../pages/Login";
import Dashboard from "../components/dashboard/Dashboard";
import DashboardRoute from "./dashboardRoute";
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
        children: DashboardRoute
    }
];
export default routes;