import { Link, useLocation } from 'react-router-dom'
import navigations from '../../lib/consts/navigations'
import { HiOutlineArrowLeftStartOnRectangle } from "react-icons/hi2";
import { Tooltip } from 'flowbite-react';

function Sidebar() {
    const { pathname } = useLocation()
    return (
        <div className="bg-slate-800 w-full md:w-16 flex flex-col">
            <div className="flex">
                <img src="/images/seds-logo.png" />
            </div>
            <div className="flex-1 py-5">
                {
                    navigations.map(nav => (
                        <Link to={nav.to} key={nav.key} className={`flex items-center justify-center ${pathname === nav.to ? "text-white bg-slate-700" : "text-neutral-400"}  hover:bg-slate-700 text-2xl p-3 transition ease-out duration-500`}>
                            <Tooltip content={nav.name} placement="right" className="ms-5">
                                {nav.icon}
                            </Tooltip>
                        </Link>
                    ))
                }
            </div>
            <div className="flex justify-center border-t-2 border-t-gray-400">
                <Tooltip content="Logout" placement="right">
                    <button title="Logout" className="text-center px-5 text-red-300 hover:bg-slate-700 text-2xl p-3 transition ease-out duration-500">
                        <HiOutlineArrowLeftStartOnRectangle className="mx-auto" />
                    </button>
                </Tooltip>
            </div>
        </div>
    )
}

export default Sidebar