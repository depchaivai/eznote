import { useRoutes } from 'react-router-dom';
import dashboardRoute from '../../routes/dashboardRoute';

export default function DashboardRoute() {
    const nestedOutlet = useRoutes(dashboardRoute);
    return nestedOutlet
}