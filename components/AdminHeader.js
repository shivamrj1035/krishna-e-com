'use client';
import { Search, Bell, MessageSquare, User, Menu } from 'lucide-react';
import Image from 'next/image';
import styles from './AdminHeader.module.css';

export default function AdminHeader() {
  return (
    <header className={styles.header}>
      <div className={styles.left}>
        <button className={styles.menuToggle}>
          <Menu size={24} />
        </button>
        <div className={styles.welcome}>
          <h1>Welcome back, Admin 🙏</h1>
          <p>Here's what's happening with your store today.</p>
        </div>
      </div>

      <div className={styles.center}>
        <div className={styles.searchBar}>
          <Search size={18} className={styles.searchIcon} />
          <input type="text" placeholder="Search products, orders, customers..." />
          <span className={styles.shortcut}>Ctrl + K</span>
        </div>
      </div>

      <div className={styles.right}>
        <button className={styles.iconBtn}>
          <Bell size={20} />
          <span className={styles.dot}></span>
        </button>
        <button className={styles.iconBtn}>
          <MessageSquare size={20} />
        </button>
        
        <div className={styles.profile}>
          <div className={styles.profileInfo}>
            <span className={styles.name}>Admin</span>
            <span className={styles.role}>Super Admin</span>
          </div>
          <div className={styles.avatar}>
            <Image src="https://ui-avatars.com/api/?name=Admin&background=CAA958&color=fff" alt="Profile" width={40} height={40} />
          </div>
        </div>
      </div>
    </header>
  );
}
