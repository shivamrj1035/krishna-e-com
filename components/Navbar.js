'use client';
import Link from 'next/link';
import Image from 'next/image';
import { Search, Heart, ShoppingCart, ChevronDown } from 'lucide-react';
import styles from './Navbar.module.css';

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          <Image src="/peacock-feather.png" alt="Shyam Logo" width={30} height={30} />
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <h1 className={styles.logoTitle}>SHYAM</h1>
            <span className={styles.logoSubtitle}>DIVINE COLLECTIONS</span>
          </div>
        </Link>
        
        <div className={styles.links}>
          <Link href="/" className={`${styles.link} ${styles.activeLink}`}>Home</Link>
          <Link href="/shop" className={styles.link}>Shop</Link>
          <div className={styles.dropdownLink}>
            <Link href="/collections" className={styles.link}>Collections</Link>
            <ChevronDown size={14} className={styles.dropdownIcon} />
          </div>
          <Link href="/new-arrivals" className={styles.link}>New Arrivals</Link>
          <Link href="/best-sellers" className={styles.link}>Best Sellers</Link>
          <Link href="/about" className={styles.link}>Our Story</Link>
          <Link href="/contact" className={styles.link}>Contact</Link>
        </div>

        <div className={styles.actions}>
          <button className={styles.iconBtn}><Search size={20} /></button>
          <button className={styles.iconBtn}><Heart size={20} /></button>
          <button className={styles.iconBtn} style={{ position: 'relative' }}>
            <ShoppingCart size={20} />
            <span className={styles.cartBadge}>0</span>
          </button>
          <Link href="/login" className={styles.loginBtn}>Login / Sign Up</Link>
        </div>
      </div>
    </nav>
  );
}
