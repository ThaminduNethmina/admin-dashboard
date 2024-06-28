import { Link, useLocation } from 'react-router-dom'
import navigations from '../../lib/consts/navigations'
import { HiOutlineArrowLeftStartOnRectangle } from "react-icons/hi2";

function Sidebar() {
    const { pathname } = useLocation()
    return (
        <div className="bg-slate-800 w-full md:w-36 flex flex-col">
            <div className="flex">
                <img src="/images/seds-logo.png" />
            </div>
            <div className="flex-1 py-5">
                {
                    navigations.map(nav => (
                        <Link to={nav.to} key={nav.key} className={`flex items-center justify-start ${pathname === nav.to ? "text-white bg-slate-700" : "text-neutral-400"}  hover:bg-slate-700 text-lg py-3 px-5 transition ease-out duration-500`}>
                            {nav.icon}
                            <span className="ms-1 text-sm">{nav.name}</span>
                        </Link>
                    ))
                }
            </div>
            <div className="flex border-t-2 border-t-gray-400">
                <button className="flex justify-center items-center w-full text-center text-red-300 hover:bg-slate-700 text-sm py-3 px-5 transition ease-out duration-500">
                    <HiOutlineArrowLeftStartOnRectangle className="text-lg me-1" />
                    Logout
                </button>
            </div>
        </div>
    )
}

export default Sidebar