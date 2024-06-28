import { Outlet } from "react-router-dom";

function Layout() {
    return (
        <div>
            {/* <Sidebar /> */}
            {/* <Header /> */}
            <main>
                <Outlet />
            </main>
        </div>
    )
}

export default Layout