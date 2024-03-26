import DashboardPath from "./dashboardPath";
import Preview from "../pages/dashboard/Preview";
import Notes from "../pages/Notes";
import Settings from "../pages/dashboard/Settings";

const routes = [
    {
        index: true,
        element: <Preview/>,
    },
    {
        path: DashboardPath.NOTE,
        element: <Notes/>,
    },
    {
        path: DashboardPath.SETTINGS,
        element: <Settings/>,
    },
];
export default routes;