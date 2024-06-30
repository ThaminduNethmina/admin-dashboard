import { HiUser } from "react-icons/hi2"
import { FcCalendar } from "react-icons/fc";

function DashboardThirdRow({ userData, eventData }) {
    return (
        <div className="flex flex-col md:flex-row gap-4 w-full">
            <BoxWrapper name="Director Board">
                <DirectorBoard data={userData} />
            </BoxWrapper>
            <BoxWrapper name="Volunteers">
                <Volunteers data={userData} />
            </BoxWrapper>
            <BoxWrapper name="Upcoming Events">
                <UpcomingEvents data={eventData} />
            </BoxWrapper>
        </div>
    )
}

export default DashboardThirdRow

function BoxWrapper({ children, name }) {
    return (
        <div className="bg-gradient-to-br from-sky-950 to-slate-950 rounded-lg flex-1 flex flex-col  border border-sky-950 p-3 transition ease-out duration-300 hover:scale-105 hover:shadow-inner  hover:shadow-sky-100">
            <strong className="text-sm text-white px-5">{name}</strong>
            <div className="mt-4 mx-7 flex-col gap-1 h-40 overflow-y-scroll no-scrollbar">
                {children}
            </div>
        </div>
    )
}

function DirectorBoard({ data }) {
    return (
        data.map((item) => (
            <div className="flex items-center transition ease-out duration-300 hover:bg-slate-900 px-3 py-1 rounded-md">
                <HiUser className="text-4xl text-white border rounded-full p-2" />
                <div className="ms-4 mt-2">
                    <h2 className="text-lg text-white font-semibold">{item.name}</h2>
                    <p className="text-gray-400 text-sm">{item.position}</p>
                </div>
            </div>
        ))
    )

}

function Volunteers({ data }) {
    return (
        data.map((item) => (
            <div className="flex items-center transition ease-out duration-300 hover:bg-slate-900 px-3 py-1 rounded-md">
                <HiUser className="text-4xl text-white border rounded-full p-2" />
                <div className="ms-4 mt-2">
                    <h2 className="text-lg text-white font-semibold">{item.name}</h2>
                    <p className="text-gray-400 text-sm">{item.division}</p>
                </div>
            </div>
        ))
    )
}

function UpcomingEvents({ data }) {
    return (
        data.map((item) => (
            <div className="flex items-center transition ease-out duration-300 hover:bg-slate-900 px-3 py-1 rounded-md">
                <FcCalendar className="text-4xl text-white" />
                <div className="ms-4 mt-2">
                    <h2 className="text-lg text-white font-semibold">{item.name}</h2>
                    <p className="text-gray-400 text-sm">{item.date} / {item.venue}</p>
                </div>
            </div>
        ))
    )
}