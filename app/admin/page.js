'use client';
import { motion } from 'framer-motion';
import { 
  ShoppingBag, 
  Users, 
  Package, 
  IndianRupee,
  Eye,
  ArrowUpRight
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './admin.module.css';
import StatsCard from '@/components/admin/StatsCard';
import ActivityChart from '@/components/admin/ActivityChart';
import OrderStatusChart from '@/components/admin/OrderStatusChart';

export default function AdminDashboard() {
  const stats = [
    { title: 'Total Revenue', value: '₹12,45,680', trend: 'up', trendValue: '18.6%', icon: IndianRupee, color: '#CAA958' },
    { title: 'Total Orders', value: '1,248', trend: 'up', trendValue: '14.8%', icon: ShoppingBag, color: '#4299E1' },
    { title: 'Total Customers', value: '3,592', trend: 'up', trendValue: '21.3%', icon: Users, color: '#805AD5' },
    { title: 'Total Products', value: '256', trend: 'up', trendValue: '5.7%', icon: Package, color: '#48BB78' },
  ];

  const recentOrders = [
    { id: '#10025', customer: 'Radhika Sharma', date: '25 May, 2024', amount: '₹1,799', status: 'Delivered' },
    { id: '#10024', customer: 'Meera Gupta', date: '25 May, 2024', amount: '₹899', status: 'Processing' },
    { id: '#10023', customer: 'Dev Sharma', date: '24 May, 2024', amount: '₹2,299', status: 'Shipped' },
    { id: '#10022', customer: 'Sohan Lal', date: '24 May, 2024', amount: '₹1,499', status: 'Pending' },
    { id: '#10021', customer: 'Preeti Verma', date: '23 May, 2024', amount: '₹999', status: 'Delivered' },
  ];

  const topSelling = [
    { name: 'Laddu Gopal Shringar Set', price: '₹1,799', sales: '305', image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200' },
    { name: 'Premium Mor Pankh', price: '₹899', sales: '280', image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200' },
    { name: 'Laddu Gopal Dress', price: '₹1,499', sales: '245', image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200' },
  ];

  const getStatusColor = (status) => {
    switch(status) {
      case 'Delivered': return '#48BB78';
      case 'Processing': return '#4299E1';
      case 'Shipped': return '#ECC94B';
      case 'Pending': return '#ED8936';
      default: return '#A0AEC0';
    }
  };

  return (
    <div className={styles.dashboard}>
      <motion.div 
        className={styles.statsGrid}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        {stats.map((stat, idx) => (
          <StatsCard key={idx} {...stat} />
        ))}
      </motion.div>

      <div className={styles.mainGrid}>
        <div className={styles.leftCol}>
          <div className={styles.row}>
            <div className={styles.salesChart}>
              <ActivityChart />
            </div>
            <div className={styles.statusChart}>
              <OrderStatusChart />
            </div>
          </div>

          <div className={styles.ordersCard}>
            <div className={styles.cardHeader}>
              <h3>Latest Orders</h3>
              <Link href="/admin/orders" className={styles.viewAll}>View All</Link>
            </div>
            <div className={styles.tableWrapper}>
              <table className={styles.table}>
                <thead>
                  <tr>
                    <th>Order ID</th>
                    <th>Customer</th>
                    <th>Date</th>
                    <th>Amount</th>
                    <th>Status</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {recentOrders.map((order, idx) => (
                    <tr key={idx}>
                      <td className={styles.orderId}>{order.id}</td>
                      <td className={styles.customerName}>{order.customer}</td>
                      <td>{order.date}</td>
                      <td className={styles.amount}>{order.amount}</td>
                      <td>
                        <span 
                          className={styles.statusBadge}
                          style={{ backgroundColor: `${getStatusColor(order.status)}15`, color: getStatusColor(order.status) }}
                        >
                          {order.status}
                        </span>
                      </td>
                      <td>
                        <button className={styles.actionBtn}><Eye size={16} /></button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className={styles.rightCol}>
          <div className={styles.widgetCard}>
            <div className={styles.cardHeader}>
              <h3>Top Selling Products</h3>
              <Link href="/admin/products" className={styles.viewAll}>View All</Link>
            </div>
            <div className={styles.productList}>
              {topSelling.map((product, idx) => (
                <div key={idx} className={styles.productItem}>
                  <div className={styles.productImg}>
                    <Image src={product.image} alt={product.name} width={50} height={50} />
                  </div>
                  <div className={styles.productInfo}>
                    <h4>{product.name}</h4>
                    <p>{product.price}</p>
                  </div>
                  <div className={styles.productStats}>
                    <span className={styles.salesCount}><ArrowUpRight size={14} /> {product.sales}</span>
                    <span className={styles.salesLabel}>Sales</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.widgetCard} style={{ marginTop: '1.5rem' }}>
            <div className={styles.cardHeader}>
              <h3>Customer Growth</h3>
              <select className={styles.smallSelect}><option>This Month</option></select>
            </div>
            <div className={styles.growthChart}>
              {/* Simplified Growth Indicator */}
              <div className={styles.growthValue}>
                <h4>3,592</h4>
                <span>Total Customers</span>
              </div>
              <div className={styles.growthGraphic}>
                <svg width="100%" height="60" viewBox="0 0 200 60">
                  <path d="M0 50 Q50 40 100 45 T200 10" fill="none" stroke="#48BB78" strokeWidth="3" />
                  <path d="M0 50 Q50 40 100 45 T200 10 V60 H0 Z" fill="url(#growthGradient)" />
                  <defs>
                    <linearGradient id="growthGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#48BB78" stopOpacity="0.2" />
                      <stop offset="100%" stopColor="#48BB78" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
