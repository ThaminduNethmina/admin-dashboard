import { HiOutlineSearch } from "react-icons/hi"
import { HiUser } from "react-icons/hi2"
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'

function Header() {
    return (
        <header className="bg-gradient-to-r from-black to-gray-950 text-white px-4 h-16 flex justify-between items-center">
            <div className="relative">
                <HiOutlineSearch className="absolute top-1/2 left-2 transform -translate-y-1/2 text-white" />
                <input type="text" placeholder="Search" className="bg-neutral-900 text-sm focus:outline-none text-white border border-gray-400 ps-8 px-2 py-1 rounded-full" />
            </div>
            <div className="">
                <Menu>
                    <MenuButton className="p-2 rounded-full transition ease-out duration-300 hover:bg-gray-800">
                        <div className="flex items-center gap-4">
                            <div className="flex flex-col justify-center items-center">
                                <span className="text-sm">John Doe</span>
                                <span className="text-xs text-neutral-300">Web Master</span>
                            </div>
                            <HiUser className="text-neutral-300 text-4xl rounded-full border border-neutral-100 p-2" />
                        </div>
                    </MenuButton>
                    <MenuItems
                        transition
                        anchor="bottom start"
                        className="w-40 origin-top-right rounded-xl border border-white/5 bg-white/30 p-1 text-sm/6 text-white transition duration-100 ease-out [--anchor-gap:var(--spacing-3)] focus:outline-none data-[closed]:scale-95 data-[closed]:opacity-0"
                    >
                        <MenuItem>
                            <button className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/10">
                                Profile
                            </button>
                        </MenuItem>
                        <MenuItem>
                            <button className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/10">
                                Settings
                            </button>
                        </MenuItem>
                        <MenuItem>
                            <button className="group flex w-full items-center gap-2 rounded-lg text-red-300 py-1.5 px-3 data-[focus]:bg-white/10">
                                Sign Out
                            </button>
                        </MenuItem>
                    </MenuItems>
                </Menu>
            </div>
        </header>
    )
}

export default Header