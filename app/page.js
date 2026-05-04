'use client';
import Navbar from '@/components/Navbar';
import TopBar from '@/components/TopBar';
import Footer from '@/components/Footer';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ShoppingCart, Heart, Star, ChevronRight, Sparkles } from 'lucide-react';
import styles from './page.module.css';

import { categories, products } from '@/data/products';

const trendingProducts = products.filter(p => p.isTrending).slice(0, 3);
const newArrivals = products.filter(p => p.isNew).slice(0, 6);
const bestSellers = products.filter(p => p.badge === 'BEST SELLER').slice(0, 4);
const youMayLike = products.slice(0, 4);

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }
};

const staggerContainer = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  viewport: { once: true },
  transition: { staggerChildren: 0.1 }
};

export default function Home() {
  return (
    <main className={styles.main}>
      <TopBar />
      <Navbar />

      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.heroContainer}>
          <div className={styles.heroContent}>
            <span className={styles.heroLabel}>DIVINE COLLECTIONS</span>
            <h1 className={styles.heroTitle}>
              Experience the Grace of <span>Shree Krishna</span>
            </h1>
            <p className={styles.heroDesc}>
              Discover a curated collection of spiritual essentials and aesthetic products inspired by the eternal wisdom and love of Laddu Gopal.
            </p>
            <div className={styles.heroButtons}>
              <button className={styles.primaryBtn}>EXPLORE COLLECTION</button>
              <button className={styles.secondaryBtn}>SHOP NOW <ChevronRight size={18} /></button>
            </div>
          </div>

          <div className={styles.heroImage}>
            <Image
              src="/Gen-laddu-gopal.png"
              alt="Laddu Gopal"
              width={650}
              height={650}
              className={styles.ladduGopal}
              priority
            />
          </div>
        </div>

        {/* Curved Divider */}
        <div className={styles.heroCurve}>
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V0C73.47,15.74,149.96,25.83,222.75,39.38C256.4,45.62,289.47,50.56,321.39,56.44Z" className={styles.shapeFill}></path>
          </svg>
        </div>
      </section>

      {/* Categories */}
      <section className={styles.categoriesSection}>
        <motion.div
          className={styles.categoriesContainer}
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true, margin: "-50px" }}
        >
          {categories.map((cat) => (
            <motion.div
              key={cat.id}
              className={styles.categoryItem}
              variants={fadeInUp}
            >
              <div className={styles.categoryCircle}>
                <Image src={cat.image} alt={cat.name} width={80} height={80} className={styles.categoryImg} />
              </div>
              <span className={styles.categoryName}>{cat.name}</span>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Trending Products */}
      <section className={styles.contentSection}>
        <motion.div className={styles.sectionHeader} {...fadeInUp}>
          <div className={styles.dividerLine}></div>
          <div className={styles.titleWrapper}>
            <Sparkles size={20} className={styles.titleIcon} />
            <h2 className={styles.sectionTitle}>Trending Divine Picks</h2>
          </div>
          <div className={styles.dividerLine}></div>
        </motion.div>

        <div className={styles.viewAllWrapper}>
          <a href="#" className={styles.viewAll}>Explore All Trending <ChevronRight size={16} /></a>
        </div>

        <motion.div
          className={styles.productsGrid}
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
        >
          {trendingProducts.map((prod) => (
            <motion.div key={prod.id} className={styles.productCard} variants={fadeInUp}>
              <span className={styles.productBadge}>{prod.badge}</span>
              <div className={styles.productImgWrapper}>
                <Image src={prod.image} alt={prod.name} width={400} height={400} className={styles.productImg} />
              </div>
              <div className={styles.productInfo}>
                <h3 className={styles.productTitle}>{prod.name}</h3>
                <div className={styles.productRating}>
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} fill={i < prod.rating ? "var(--accent-gold)" : "transparent"} color="var(--accent-gold)" />
                  ))}
                  <span className={styles.ratingText}>({prod.reviews})</span>
                </div>
                <div className={styles.productPriceRow}>
                  <span className={styles.productPrice}>₹{prod.price.toLocaleString()}</span>
                  <div className={styles.productActions}>
                    <button className={styles.actionBtn}><Heart size={18} /></button>
                    <button className={`${styles.actionBtn} ${styles.cartBtn}`}><ShoppingCart size={18} /></button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* New Arrivals */}
      <section className={styles.contentSection} style={{ backgroundColor: 'rgba(202, 169, 88, 0.03)' }}>
        <motion.div className={styles.sectionHeader} {...fadeInUp}>
          <div className={styles.dividerLine}></div>
          <div className={styles.titleWrapper}>
            <h2 className={styles.sectionTitle}>Newly Blessed Arrivals</h2>
          </div>
          <div className={styles.dividerLine}></div>
        </motion.div>

        <motion.div
          className={styles.productsGridSmall}
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
        >
          {newArrivals.map((item) => (
            <motion.div key={item.id} className={styles.productCard} style={{ borderRadius: '12px' }} variants={fadeInUp}>
              <div className={styles.productImgWrapper} style={{ height: '120px' }}>
                <Image src={item.image} alt={item.name} width={200} height={180} className={styles.productImg} />
              </div>
              <div className={styles.productInfo} style={{ padding: '1rem' }}>
                <h3 className={styles.productTitle} style={{ fontSize: '0.9rem', marginBottom: '0.5rem' }}>{item.name}</h3>
                <div className={styles.productPriceRow}>
                  <span className={styles.productPrice} style={{ fontSize: '1.1rem' }}>₹{item.price.toLocaleString()}</span>
                  <button className={styles.miniCartBtn}><ShoppingCart size={14} /></button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Two Column Section */}
      <section className={styles.contentSection}>
        <div className={styles.twoColumnLayout}>
          <motion.div {...fadeInUp}>
            <div className={styles.subSectionHeader}>
              <h2 className={styles.subSectionTitle}>Best Sellers</h2>
              <a href="#" className={styles.viewAll}>View All <ChevronRight size={16} /></a>
            </div>
            <div className={styles.miniGrid}>
              {bestSellers.map((item) => (
                <div key={item.id} className={styles.miniProductCard}>
                  <div className={styles.miniImgWrapper}>
                    <Image src={item.image} alt={item.name} width={100} height={100} className={styles.productImg} />
                  </div>
                  <div className={styles.miniInfo}>
                    <h4 className={styles.miniTitle}>{item.name}</h4>
                    <span className={styles.miniPrice}>₹{item.price.toLocaleString()}</span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div {...fadeInUp}>
            <div className={styles.subSectionHeader}>
              <h2 className={styles.subSectionTitle}>Curated for You</h2>
              <a href="#" className={styles.viewAll}>View All <ChevronRight size={16} /></a>
            </div>
            <div className={styles.miniGrid}>
              {youMayLike.map((item) => (
                <div key={item.id} className={styles.miniProductCard}>
                  <div className={styles.miniImgWrapper}>
                    <Image src={item.image} alt={item.name} width={100} height={100} className={styles.productImg} />
                  </div>
                  <div className={styles.miniInfo}>
                    <h4 className={styles.miniTitle}>{item.name}</h4>
                    <span className={styles.miniPrice}>₹{item.price.toLocaleString()}</span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
