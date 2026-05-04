'use client';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import styles from './AdminComponents.module.css';

const data = [
  { name: '01 May', current: 4000, previous: 2400 },
  { name: '05 May', current: 3000, previous: 1398 },
  { name: '10 May', current: 2000, previous: 9800 },
  { name: '15 May', current: 2780, previous: 3908 },
  { name: '20 May', current: 1890, previous: 4800 },
  { name: '25 May', current: 2390, previous: 3800 },
  { name: '30 May', current: 3490, previous: 4300 },
];

export default function ActivityChart() {
  return (
    <div className={styles.chartBox}>
      <div className={styles.chartHeader}>
        <h3>Sales Overview</h3>
        <select className={styles.chartSelect}>
          <option>This Month</option>
          <option>Last Month</option>
        </select>
      </div>
      <div className={styles.chartBody}>
        <ResponsiveContainer width="100%" height={300}>
          <AreaChart data={data}>
            <defs>
              <linearGradient id="colorCurrent" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#0a4b78" stopOpacity={0.1}/>
                <stop offset="95%" stopColor="#0a4b78" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
            <XAxis 
              dataKey="name" 
              axisLine={false} 
              tickLine={false} 
              tick={{ fontSize: 12, fill: '#888' }} 
              dy={10}
            />
            <YAxis 
              axisLine={false} 
              tickLine={false} 
              tick={{ fontSize: 12, fill: '#888' }}
              tickFormatter={(value) => `₹${value/1000}k`}
            />
            <Tooltip 
              contentStyle={{ borderRadius: '10px', border: 'none', boxShadow: '0 4px 20px rgba(0,0,0,0.1)' }}
            />
            <Area 
              type="monotone" 
              dataKey="current" 
              stroke="#0a4b78" 
              strokeWidth={3}
              fillOpacity={1} 
              fill="url(#colorCurrent)" 
            />
            <Area 
              type="monotone" 
              dataKey="previous" 
              stroke="#ccc" 
              strokeWidth={2}
              strokeDasharray="5 5"
              fill="transparent" 
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
