import { Suspense } from "react"
import { Outlet, useLocation } from "react-router-dom"
import Header from "./Header"
import Footer from "./Footer"
import Loading from "./Loading"

// const hiddenHeaderFooter = ['/', '/signin', '/signup'];

export default function Layout() {
    // let location = useLocation();
    // const pathName = location.pathname;
    // const show = hiddenHeaderFooter.includes(pathName) ? false : true;
    return (
        <>
            {/* {show && <Header/>} */}
            <main className="">
                <Suspense fallback={<Loading/>}>
                    <Outlet/>
                </Suspense>
            </main>
            {/* { show && <Footer/>} */}
        </>
    )
}
