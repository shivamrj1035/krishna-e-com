'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Eye, Filter, Download } from 'lucide-react';
import styles from './orders.module.css';
import { orders } from '@/data/orders';

export default function AdminOrders() {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('All');

  const filteredOrders = orders.filter(order => {
    const matchesSearch = order.id.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         order.customer.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'All' || order.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const getStatusColor = (status) => {
    switch (status) {
      case 'Delivered': return '#48BB78';
      case 'Processing': return '#4299E1';
      case 'Shipped': return '#ECC94B';
      case 'Cancelled': return '#F56565';
      default: return '#718096';
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>Order Management</h1>
        <button className={styles.exportBtn}>
          <Download size={18} />
          <span>Export CSV</span>
        </button>
      </div>

      <div className={styles.controls}>
        <div className={styles.searchBar}>
          <Search size={18} />
          <input 
            type="text" 
            placeholder="Search by Order ID or Customer..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className={styles.filterGroup}>
          <Filter size={18} />
          <select 
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
          >
            <option value="All">All Status</option>
            <option value="Processing">Processing</option>
            <option value="Shipped">Shipped</option>
            <option value="Delivered">Delivered</option>
            <option value="Cancelled">Cancelled</option>
          </select>
        </div>
      </div>

      <motion.div 
        className={styles.tableCard}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div className={styles.tableWrapper}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Order ID</th>
                <th>Customer</th>
                <th>Date</th>
                <th>Amount</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredOrders.map((order) => (
                <tr key={order.id}>
                  <td className={styles.orderId}>{order.id}</td>
                  <td>
                    <div className={styles.customerInfo}>
                      <span className={styles.customerName}>{order.customer.name}</span>
                      <span className={styles.customerEmail}>{order.customer.email}</span>
                    </div>
                  </td>
                  <td>{new Date(order.date).toLocaleDateString()}</td>
                  <td className={styles.amount}>₹{order.total}</td>
                  <td>
                    <span 
                      className={styles.statusBadge}
                      style={{ 
                        backgroundColor: `${getStatusColor(order.status)}15`,
                        color: getStatusColor(order.status)
                      }}
                    >
                      {order.status}
                    </span>
                  </td>
                  <td>
                    <button className={styles.viewBtn}>
                      <Eye size={16} />
                      <span>Details</span>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>
    </div>
  );
}
