import { Outlet, useRoutes } from "react-router-dom"
import Loading from "../Loading"
import Navmenu from "./Navmenu"
import { Suspense } from "react"

const Dashboard = () => {
    const nestedOutlet = useRoutes(dashboardRoute);
    return (
        <div className="flex min-w-screen h-screen">
            {nestedOutlet}
        </div>
    )
}

export default Dashboard