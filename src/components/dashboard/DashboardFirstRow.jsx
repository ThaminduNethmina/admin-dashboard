import { FcComboChart } from "react-icons/fc";
import { FcConferenceCall } from "react-icons/fc";
import { FcCalendar } from "react-icons/fc";
import { FcAlarmClock } from "react-icons/fc";

const icons = [
  <FcComboChart size={50} />,
  <FcConferenceCall size={50} />,
  <FcCalendar size={50} />,
  <FcAlarmClock size={50} />,
]

function DashboardFirstRow({ statsData }) {
  return (
    <div className="flex justify-center flex-col md:flex-row gap-4 w-full">
      {
        statsData.map((item, index) => (
          <BoxWrapper key={index}>
            {icons[index]}
            <div className="ms-3">
              <h2 className="text-2xl text-white font-semibold">{item.value}</h2>
              <p className="text-gray-400 text-sm">{item.name}</p>
            </div>
          </BoxWrapper>
        ))
      }
    </div>
  )
}

export default DashboardFirstRow


function BoxWrapper({ children }) {
  return (
    <div className="bg-gradient-to-br from-sky-950 to-slate-950 rounded-lg flex-1 flex items-center border border-sky-950 p-4 transition ease-out duration-300 hover:scale-105 hover:shadow-inner  hover:shadow-sky-100">
      {children}
    </div>
  )
}