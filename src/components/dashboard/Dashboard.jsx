import { Outlet, Routes, useRoutes } from "react-router-dom"
import Loading from "../Loading"
import Navmenu from "./Navmenu"
import { Suspense } from "react"

const Dashboard = () => {
    return (
        <div className="">
            <div className="flex flex-nowrap">
                <Navmenu />
                <div className="flex-1">
                    <Suspense fallback={<Loading />}>
                        <Outlet />
                    </Suspense>
                </div>
            </div>
        </div>
    );
}

export default Dashboard