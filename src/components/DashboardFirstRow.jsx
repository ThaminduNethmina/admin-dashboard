import { FcComboChart } from "react-icons/fc";
import { FcConferenceCall } from "react-icons/fc";
import { FcCalendar } from "react-icons/fc";
import { FcAlarmClock } from "react-icons/fc";
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const icons = [
    <FcComboChart size={50} />,
    <FcConferenceCall size={50} />,
    <FcCalendar size={50} />,
    <FcAlarmClock size={50} />,
]


function DashboardFirstRow() {
    const [statsData, setStatsData] = useState([])
    useEffect(() => {
        axios.get("/data.json")
            .then(response => {
                setStatsData(response.data[0])
            })
            .catch(error => {
                console.log(error)
            })
    }, [])

  return (
    <div className="flex gap-4 w-full">
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
    <div className="bg-gradient-to-br from-sky-950 to-slate-950 rounded-lg flex-1 flex items-center border border-sky-950 p-4 transition ease-out duration-300 hover:scale-110 hover:shadow-inner  hover:shadow-sky-100">
      {children}
    </div>
  )
}