import {
    HiOutlinePresentationChartBar,
    HiOutlineUsers,
    HiOutlineCalendar,
} from 'react-icons/hi';

export default [
    {
        key: "dashboard",
        name: "Dashboard",
        to: "/",
        icon: <HiOutlinePresentationChartBar/>
    },
    {
        key: "users",
        name: "Users",
        to: "/users",
        icon: <HiOutlineUsers />
    },
    {
        key: "events",
        name: "Events",
        to: "/events",
        icon: <HiOutlineCalendar />
    }
]