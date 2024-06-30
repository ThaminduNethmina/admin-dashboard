import { Link, useLocation } from 'react-router-dom'
import navigations from '../../lib/consts/navigations'
import { HiOutlineArrowLeftStartOnRectangle } from "react-icons/hi2";
import { HiMiniBars3BottomRight } from "react-icons/hi2";
import { useState } from 'react';

function Sidebar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };
    const { pathname } = useLocation()
    return (
        <div className="bg-gradient-to-b from-black to-gray-950 w-full md:w-40 flex flex-col md:h-screen">
            <div className="hidden md:flex">
                <img src="/images/seds-logo.png" />
            </div>
            <div className="flex md:hidden items-center flex-row justify-between bg-black h-16 p-2 px-4 w-100">
                <div>
                    <img src="/images/seds-logo.png" className="w-14" />
                </div>
                <div>
                    <button onClick={toggleMenu} id="menuBtn" className="text-white rounded-sm text-2xl p-3 transition ease-out duration-200 hover:text-neutral-400">
                        <HiMiniBars3BottomRight />
                    </button>
                </div>
            </div>
            <div id="top-menu" className={`flex-1 md:py-2 transition-all duration-300 ease-out transform ${menuOpen ? 'max-h-screen opacity-100 visible' : 'max-h-0 opacity-0 py-0 invisible'} md:max-h-none md:opacity-100 md:visible`}>
                {
                    navigations.map(nav => (
                        <Link to={nav.to} key={nav.key} className={`flex items-center justify-start ${pathname === nav.to ? "text-white bg-slate-700" : "text-neutral-400"}  hover:bg-slate-700 text-lg py-3 px-5 transition ease-out duration-500`}>
                            {nav.icon}
                            <span className="ms-1 text-sm">{nav.name}</span>
                        </Link>
                    ))
                }
            </div>
            <div id="bottom-menu" className={`flex border-t-2 transition-all duration-300 ease-out transform ${menuOpen ? 'max-h-screen opacity-100 visible' : 'max-h-0 min-h-0 opacity-0 py-0 invisible'} md:max-h-none md:opacity-100 md:visible`}>
                <button className="flex justify-center items-center w-full text-center text-red-300 hover:bg-slate-700 text-sm py-3 px-5 transition ease-out duration-500">
                    <HiOutlineArrowLeftStartOnRectangle className="text-lg me-1" />
                    Logout
                </button>
            </div>
        </div>
    )
}

export default Sidebar