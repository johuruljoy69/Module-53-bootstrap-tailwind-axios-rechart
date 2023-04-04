import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Dashboard = () => {
    let students = [
        { id: 1, name: "John Doe", physics: 85, chemistry: 75, math: 90 },
        { id: 2, name: "Jane Smith", physics: 70, chemistry: 80, math: 65 },
        { id: 3, name: "Mark Johnson", physics: 80, chemistry: 90, math: 75 },
        { id: 4, name: "Lisa Davis", physics: 75, chemistry: 85, math: 80 },
        { id: 5, name: "David Wilson", physics: 90, chemistry: 75, math: 85 },
        { id: 6, name: "Emily Brown", physics: 80, chemistry: 80, math: 70 },
        { id: 7, name: "Chris Lee", physics: 85, chemistry: 75, math: 65 },
        { id: 8, name: "Sarah Taylor", physics: 70, chemistry: 80, math: 75 },
        { id: 9, name: "Mike Miller", physics: 75, chemistry: 90, math: 85 },
        { id: 10, name: "Karen Clark", physics: 90, chemistry: 75, math: 80 },
        { id: 11, name: "Tom Brown", physics: 80, chemistry: 70, math: 75 },
        { id: 12, name: "Amy Lee", physics: 75, chemistry: 80, math: 90 },
    ];

    return (
        <div className='mx-10 mt-5'>
            <LineChart
                width={1400}
                height={300}
                data={students}
            >
                <Line stroke='#8884d8' dataKey='math'></Line>
                <Line dataKey='physics'></Line>
                <Line dataKey='chemistry'></Line>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
            </LineChart>
        </div>
    );
};

export default Dashboard;