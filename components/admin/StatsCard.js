'use client';
import { TrendingUp, TrendingDown } from 'lucide-react';
import styles from './AdminComponents.module.css';

export default function StatsCard({ title, value, trend, trendValue, icon: Icon, color }) {
  const isPositive = trend === 'up';

  return (
    <div className={styles.statsCard}>
      <div className={styles.statsIconBox} style={{ backgroundColor: `${color}15`, color: color }}>
        <Icon size={24} />
      </div>
      <div className={styles.statsContent}>
        <p className={styles.statsTitle}>{title}</p>
        <h3 className={styles.statsValue}>{value}</h3>
        <div className={styles.statsTrend}>
          <span className={isPositive ? styles.trendUp : styles.trendDown}>
            {isPositive ? <TrendingUp size={14} /> : <TrendingDown size={14} />}
            {trendValue}
          </span>
          <span className={styles.trendPeriod}>vs last month</span>
        </div>
      </div>
    </div>
  );
}
