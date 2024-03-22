import DashboardPath from "./dashboardPath";
import Preview from "../pages/dashboard/Preview";

const routes = [
    {
        path: DashboardPath.DASHBOARD,
        element: <Preview/>,
    },
];
export default routes;