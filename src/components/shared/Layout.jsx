import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";

function Layout() {
    return (
        <div className="flex flex-row h-screen w-screen">
            <Sidebar />
            <main>
                <h1>Header</h1>
                <Outlet />
            </main>
        </div>
    )
}

export default Layout