import DashboardPath from "./dashboardPath";
import Preview from "../pages/dashboard/Preview";
import Notes from "../pages/Notes";

const routes = [
    {
        index: true,
        element: <Preview/>,
    },
    {
        path: DashboardPath.NOTE,
        element: <Notes/>,
    },
];
export default routes;