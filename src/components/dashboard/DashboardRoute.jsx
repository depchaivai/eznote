import { Route, Routes, useRoutes } from 'react-router-dom';
import dashboardRoute from '../../routes/dashboardRoute';
import Dashboard from './Dashboard';
import Preview from '../../pages/dashboard/Preview';

export default function DashboardRoute() {
    const nestedOutlet = useRoutes(dashboardRoute);
    return <Dashboard/>
}
