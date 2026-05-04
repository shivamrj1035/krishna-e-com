import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Truck, ShieldCheck, RefreshCw, HeadphonesIcon, Instagram, Facebook, Twitter, Youtube, MessageCircle } from 'lucide-react';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footerWrapper}>
      {/* Instagram Section */}
      <div className={styles.instagramSection}>
        <div className={styles.instaHeader}>
          <Instagram size={24} />
          <h2>Follow Us on Instagram</h2>
        </div>
        <p>Join our community for daily inspiration and a closer look at our creations</p>

        <div className={styles.instaGrid}>
          {[1, 2, 3, 4, 5].map((item) => (
            <div key={item} className={styles.instaItem}>
              <div style={{ width: '100%', height: '100%', background: 'rgba(255,255,255,0.1)', borderRadius: '12px' }}></div>
              <div className={styles.instaIcon}><Instagram size={16} color="white" /></div>
            </div>
          ))}
        </div>

        <button className={styles.followBtn}>
          <Instagram size={16} /> Follow Us @shyam.collections
        </button>
      </div>

      {/* Features Bar */}
      <div className={styles.featuresBar}>
        <div className={styles.feature}>
          <div className={styles.featureIcon}><Truck size={24} color="var(--accent-gold)" /></div>
          <div>
            <h4>Fast & Free Delivery</h4>
            <p>On orders above ₹199</p>
          </div>
        </div>
        <div className={styles.feature}>
          <div className={styles.featureIcon}><ShieldCheck size={24} color="var(--accent-gold)" /></div>
          <div>
            <h4>Authentic Products</h4>
            <p>Handpicked with devotion</p>
          </div>
        </div>
        <div className={styles.feature}>
          <div className={styles.featureIcon}><RefreshCw size={24} color="var(--accent-gold)" /></div>
          <div>
            <h4>Easy Returns</h4>
            <p>Hassle-free returns</p>
          </div>
        </div>
        <div className={styles.feature}>
          <div className={styles.featureIcon}><HeadphonesIcon size={24} color="var(--accent-gold)" /></div>
          <div>
            <h4>Customer Support</h4>
            <p>24/7 WhatsApp Support</p>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className={styles.mainFooter}>
        <div className={styles.footerContainer}>
          <div className={styles.footerBrand}>
            <div className={styles.logo}>
              <Image src="/peacock-feather.png" alt="Logo" width={40} height={40} />
              <div>
                <h3 className={styles.logoTitle}>SHYAM</h3>
                <span className={styles.logoSubtitle}>DIVINE COLLECTIONS</span>
              </div>
            </div>
            <p className={styles.brandDesc}>
              Bringing devotion to your doorstep. Curated with love for Laddu Gopal and every Krishna devotee.
            </p>
            <div className={styles.socials}>
              <button><Instagram size={18} /></button>
              <button><Facebook size={18} /></button>
              <button><Twitter size={18} /></button>
              <button><Youtube size={18} /></button>
              <button><MessageCircle size={18} /></button>
            </div>
          </div>

          <div className={styles.footerLinks}>
            <h4>Quick Links</h4>
            <Link href="/">Home</Link>
            <Link href="/shop">Shop</Link>
            <Link href="/collections">Collections</Link>
            <Link href="/new-arrivals">New Arrivals</Link>
            <Link href="/best-sellers">Best Sellers</Link>
            <Link href="/contact">Contact Us</Link>
          </div>

          <div className={styles.footerLinks}>
            <h4>Customer Service</h4>
            <Link href="/account">My Account</Link>
            <Link href="/orders">Orders</Link>
            <Link href="/returns">Returns & Refunds</Link>
            <Link href="/shipping">Shipping Policy</Link>
            <Link href="/privacy">Privacy Policy</Link>
            <Link href="/terms">Terms & Conditions</Link>
          </div>

          <div className={styles.footerLinks}>
            <h4>Categories</h4>
            <Link href="/cat/dresses">Laddu Gopal Dresses</Link>
            <Link href="/cat/mor-pankh">Mor Pankh</Link>
            <Link href="/cat/jewellery">Jewellery</Link>
            <Link href="/cat/jhula">Jhula & Decor</Link>
            <Link href="/cat/bhog">Bhog & Prasad</Link>
            <Link href="/cat/flutes">Flutes & Accessories</Link>
          </div>

          <div className={styles.footerContact}>
            <h4>Contact Us</h4>
            <p>+91 8700619070</p>
            <p>support@shyam.com</p>
            <p>Vrindavan, Uttar Pradesh<br />India - 281121</p>
          </div>
        </div>

        <div className={styles.copyright}>
          <p>© 2026 Shyam Divine Collections. All rights reserved.</p>
        </div>
      </div>

      {/* WhatsApp FAB */}
      <button className={styles.whatsappFab}>
        <MessageCircle size={28} color="white" fill="white" />
      </button>
    </footer>
  );
}
