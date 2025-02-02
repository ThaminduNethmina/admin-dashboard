import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Rectangle, PieChart, Pie } from 'recharts';

function DashboardSecondRow({ barchartData, piechartData }) {
    return (
        <div className="bg-transparent flex flex-col md:flex-row gap-4 w-full md:h-[22rem]">
            <div className="flex text-xs w-full h-[22rem]  md:w-3/4 flex-col items-start bg-gradient-to-br from-sky-950 to-slate-950 rounded-lg border border-sky-950 p-3 transition ease-out duration-300 hover:shadow-inner hover:shadow-sky-100">
                <h2 className="text-white text-sm px-5 pb-4 font-semibold">Daily Visitors Count</h2>
                <Barchart data={barchartData} />
            </div>
            <div className="flex h-[22rem] text-sm w-full md:w-1/4 flex-col items-start bg-gradient-to-br from-sky-950 to-slate-950 rounded-lg border border-sky-950 p-3 transition ease-out duration-300 hover:shadow-inner hover:shadow-sky-100">
                <h2 className="text-white text-sm px-5  font-semibold">Users by Faculty</h2>
                <Piechart data={piechartData} />
            </div>
        </div>
    );
}

export default DashboardSecondRow


function Barchart({ data }) {
    console.log(data)
    return (
        <ResponsiveContainer width="100%" height="100%">
            <BarChart
                width={500}
                height={300}
                data={data}
                margin={{
                    top: 5,
                    right: 20,
                    left: 10,
                    bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="day" stroke="white" />
                <YAxis stroke="white" />
                <Tooltip />
                <Bar dataKey="value" barSize={30} fill="#8884d8" activeBar={<Rectangle fill="gray" stroke="gray" />} />
            </BarChart>
        </ResponsiveContainer>
    );
}

function Piechart({ data }) {
    return (
        <ResponsiveContainer width="100%" height="100%">
            <PieChart width={500} height={500}>
                <Pie
                    dataKey="value"
                    isAnimationActive={true}
                    data={data}
                    cx="50%"
                    cy="50%"
                    outerRadius={100}
                    fill="#3a8dab"
                    stroke='white'
                    label
                />
                <Tooltip />
            </PieChart>
        </ResponsiveContainer>
    );
}