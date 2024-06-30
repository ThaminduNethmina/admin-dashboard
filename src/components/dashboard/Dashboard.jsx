import DashboardFirstRow from "./DashboardFirstRow"
import DashboardSecondRow from "./DashboardSecondRow"
import DashboardThirdRow from "./DashboardThirdRow"
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Dashboard() {

  const [statsData, setStatsData] = useState([])
  const [barchartData, setBarchartData] = useState([])
  const [piechartData, setPiechartData] = useState([])
  const [userData, setUserData] = useState([])
  const [eventData, setEventData] = useState([])

  useEffect(() => {
    axios.get("/data.json")
      .then(response => {
        setStatsData(response.data[0])
        setBarchartData(response.data[1])
        setPiechartData(response.data[2])
        setUserData(response.data[3])
        setEventData(response.data[4])
      })
      .catch(error => {
        console.log(error)
      })
  }, [])


  return (
    <div className="flex flex-col gap-4 p-4 mb-3 md:h-[36rem] md:overflow-scroll no-scrollbar scroll-smooth">
      <DashboardFirstRow statsData={statsData} />
      <DashboardSecondRow barchartData={barchartData} piechartData={piechartData} />
      <DashboardThirdRow userData={userData} eventData={eventData} />
    </div>
  )
}

export default Dashboard