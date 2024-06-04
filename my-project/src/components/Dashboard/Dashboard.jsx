import React from 'react';
import { FaMoneyBillAlt, FaShoppingCart, FaBox } from 'react-icons/fa';
import { PieChart, Pie, BarChart, Bar, ResponsiveContainer, Cell } from 'recharts';

function Dashboard() {
    const data01 = [
        { name: 'Group A', value: 400 },
        { name: 'Group B', value: 300 },
        { name: 'Group C', value: 300 },
        { name: 'Group D', value: 200 },
    ];
    const data02 = [
        { name: 'A1', value: 100 },
        { name: 'A2', value: 300 },
        { name: 'B1', value: 100 },
        { name: 'B2', value: 80 },
        { name: 'B3', value: 40 },
        { name: 'B4', value: 30 },
        { name: 'B5', value: 50 },
        { name: 'C1', value: 100 },
        { name: 'C2', value: 200 },
        { name: 'D1', value: 150 },
        { name: 'D2', value: 50 },
    ];

    const barChartData = [
        { name: 'Page A', uv: 4000, pv: 2400, amt: 2400 },
        { name: 'Page B', uv: 3000, pv: 1398, amt: 2210 },
        { name: 'Page C', uv: 2000, pv: 9800, amt: 2290 },
        { name: 'Page D', uv: 2780, pv: 3908, amt: 2000 },
        { name: 'Page E', uv: 1890, pv: 4800, amt: 2181 },
        { name: 'Page F', uv: 2390, pv: 3800, amt: 2500 },
        { name: 'Page G', uv: 3490, pv: 4300, amt: 2100 },
    ];

    const RADIAN = Math.PI / 180;
    const pieData = [
        { name: 'A', value: 80, color: '#ff0000' },
        { name: 'B', value: 45, color: '#00ff00' },
        { name: 'C', value: 25, color: '#0000ff' },
    ];
    const cx = 150;
    const cy = 200;
    const iR = 50;
    const oR = 100;
    const value = 50;

    const needle = (value, data, cx, cy, iR, oR, color) => {
        let total = 0;
        data.forEach((v) => {
            total += v.value;
        });
        const ang = 180.0 * (1 - value / total);
        const length = (iR + 2 * oR) / 3;
        const sin = Math.sin(-RADIAN * ang);
        const cos = Math.cos(-RADIAN * ang);
        const r = 5;
        const x0 = cx + 5;
        const y0 = cy + 5;
        const xba = x0 + r * sin;
        const yba = y0 - r * cos;
        const xbb = x0 - r * sin;
        const ybb = y0 + r * cos;
        const xp = x0 + length * cos;
        const yp = y0 + length * sin;

        return [
            <circle cx={x0} cy={y0} r={r} fill={color} stroke="none" />,
            <path d={`M${xba} ${yba}L${xbb} ${ybb} L${xp} ${yp} L${xba} ${yba}`} stroke="none" fill={color} />,
        ];

    };
    const data = [
        { name: 'John Doe', number: '123-456-7890', city: 'New York', delivered: true },
        { name: 'Jane Smith', number: '987-654-3210', city: 'Los Angeles', delivered: false },
        { name: 'Alice Johnson', number: '456-789-0123', city: 'Chicago', delivered: true },
        { name: 'Bob Williams', number: '789-012-3456', city: 'Houston', delivered: false },
    ];

    return (
        <>
            <div className="md:flex md:justify-between m-4">
                <div className="w-full md:w-1/3 mb-4 m-3 h-auto font-serif flex items-center bg-blue-500 text-white p-4 rounded-lg shadow-lg">
                    <FaMoneyBillAlt className="mr-4 text-4xl" />
                    <p className='text-lg'>Total Sales</p>
                </div>
                <div className="w-full md:w-1/3 mb-4 m-3 h-auto font-serif flex items-center bg-green-500 text-white p-4 rounded-lg shadow-lg">
                    <FaShoppingCart className="mr-4 text-4xl" />
                    <p className='text-lg'>Total Orders</p>
                </div>
                <div className="w-full md:w-1/3 mb-4 m-3 h-auto font-serif flex items-center bg-yellow-500 text-white p-4 rounded-lg shadow-lg">
                    <FaBox className="mr-4 text-4xl" />
                    <p className='text-lg'>Total Products</p>
                </div>
            </div>

            {/* GRAPHS */}
            <div className="w-full flex justify-center items-center   mt-12">
                <div className='ml-16 m-32'>
                    <h2 className="text-2xl font-bold mb-4">Sales Trend</h2>
                    <ResponsiveContainer width="90%" height={400}>
                        <BarChart width={500} height={400} data={barChartData}>
                            <Bar dataKey="uv" fill="#8884d8" />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
                
                <div className='w-full mr-16 m-32'>
                    <h2 className="text-2xl font-bold mb-4">Sales Distribution</h2>
                    <ResponsiveContainer width="90%" height={400}>
                        <PieChart>
                            <Pie data={data01} dataKey="value" cx="50%" cy="50%" outerRadius={60} fill="#8884d8" />
                            <Pie data={data02} dataKey="value" cx="50%" cy="50%" innerRadius={70} outerRadius={90} fill="#82ca9d" label />
                        </PieChart>
                    </ResponsiveContainer>
                </div>
            </div>

            <div className="overflow-x-auto">
            <h2 className="text-2xl font-bold font-serif mb-4 text-center">Customer Records</h2>
            <table className="min-w-full bg-white shadow-md rounded">
                <thead>
                    <tr className="bg-gray-800 text-white">
                        <th className="text-left py-3 px-4 uppercase font-semibold">Name</th>
                        <th className="text-left py-3 px-4 uppercase font-semibold">Number</th>
                        <th className="text-left py-3 px-4 uppercase font-semibold">City</th>
                        <th className="text-left py-3 px-4 uppercase font-semibold">Delivered</th>
                    </tr>
                </thead>
                <tbody className="text-gray-700">
                    {data.map((item, index) => (
                        <tr key={index} className={index % 2 === 0 ? 'bg-gray-200' : 'bg-white'}>
                            <td className="text-left py-3 px-4">{item.name}</td>
                            <td className="text-left py-3 px-4">{item.number}</td>
                            <td className="text-left py-3 px-4">{item.city}</td>
                            <td className="text-left py-3 px-4">{item.delivered ? 'Yes' : 'No'}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
</>
    );
                            }

                            export default Dashboard;