import Sidebar from "./Sidebar";
import Header from "./Header";
import { Outlet } from "react-router-dom";

function Layout() {
    return (
        <div className="flex flex-col md:flex-row h-screen w-screen bg-gradient-to-br from-black to-gray-950">
            <Sidebar />
            <main className="w-full">
                <Header />
                <Outlet />
            </main>
        </div>
    )
}

export default Layout