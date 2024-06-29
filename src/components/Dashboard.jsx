import DashboardFirstRow from "./DashboardFirstRow"
import DashboardSecondRow from "./DashboardSecondRow"

function Dashboard() {
  return (
    <div className="flex flex-col gap-4 p-4">
      <DashboardFirstRow />
      <DashboardSecondRow />
    </div>
  )
}

export default Dashboard