'use client';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';
import styles from './AdminComponents.module.css';

const data = [
  { name: 'Delivered', value: 685, color: '#48BB78' },
  { name: 'Processing', value: 302, color: '#4299E1' },
  { name: 'Shipped', value: 155, color: '#ECC94B' },
  { name: 'Pending', value: 76, color: '#ED8936' },
  { name: 'Cancelled', value: 30, color: '#F56565' },
];

export default function OrderStatusChart() {
  return (
    <div className={styles.chartBox}>
      <div className={styles.chartHeader}>
        <h3>Order Status</h3>
        <select className={styles.chartSelect}>
          <option>This Month</option>
        </select>
      </div>
      <div className={styles.pieContainer}>
        <div className={styles.pieWrapper}>
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={80}
                paddingAngle={5}
                dataKey="value"
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
          <div className={styles.pieCenter}>
            <span className={styles.pieTotal}>1,248</span>
            <span className={styles.pieLabel}>Orders</span>
          </div>
        </div>
        <div className={styles.pieLegend}>
          {data.map((item, idx) => (
            <div key={idx} className={styles.legendItem}>
              <div className={styles.legendDot} style={{ backgroundColor: item.color }}></div>
              <span className={styles.legendName}>{item.name}</span>
              <span className={styles.legendValue}>{item.value} ({((item.value/1248)*100).toFixed(1)}%)</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
