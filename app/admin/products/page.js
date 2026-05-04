'use client';

import { useState } from 'react';
import Link from 'next/link';
import { products, categories } from '@/data/products';
import styles from './products.module.css';
import { Search, Plus, Edit2, Trash2, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

export default function AdminProducts() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.titleSection}>
          <h1>Products</h1>
          <p style={{ color: 'var(--text-dim)' }}>Manage your divine inventory of {products.length} items</p>
        </div>
        <Link href="/admin/products/new" className={styles.addBtn}>
          <Plus size={20} />
          Add New Product
        </Link>
      </header>

      <div className={`${styles.controls} glass`} style={{ padding: '1rem', border: 'none' }}>
        <div className={styles.searchWrapper}>
          <Search className={styles.searchIcon} size={18} />
          <input 
            type="text" 
            placeholder="Search products..." 
            className={styles.searchInput}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        
        <select 
          className={styles.filterSelect}
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option value="All">All Categories</option>
          {categories.map(cat => (
            <option key={cat.id} value={cat.name}>{cat.name}</option>
          ))}
        </select>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className={`${styles.tableWrapper} glass`}
        style={{ border: 'none' }}
      >
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Product</th>
              <th>Category</th>
              <th>Price</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredProducts.map((product) => (
              <tr key={product.id}>
                <td>
                  <div className={styles.productCell}>
                    <img src="/api/image?data=..." alt={product.name} className={styles.productImg} />
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                      <span className={styles.productName}>{product.name}</span>
                      <span style={{ fontSize: '0.75rem', color: 'var(--text-dim)' }}>ID: #{product.id}</span>
                    </div>
                  </div>
                </td>
                <td>
                  <span className={styles.category}>{product.category}</span>
                </td>
                <td>
                  <span className={styles.price}>₹{product.price.toLocaleString()}</span>
                </td>
                <td>
                  <div style={{ display: 'flex', gap: '0.5rem' }}>
                    {product.isTrending && <span className={styles.badge}>TRENDING</span>}
                    {product.isNew && <span className={styles.badge} style={{ background: 'rgba(56, 161, 105, 0.1)', color: '#38A169' }}>NEW</span>}
                    {!product.isTrending && !product.isNew && <span style={{ fontSize: '0.8rem', color: 'var(--text-dim)' }}>Standard</span>}
                  </div>
                </td>
                <td>
                  <div className={styles.actions}>
                    <Link href={`/admin/products/${product.id}`} className={`${styles.actionBtn} ${styles.editBtn}`}>
                      <Edit2 size={14} />
                    </Link>
                    <button className={`${styles.actionBtn} ${styles.deleteBtn}`}>
                      <Trash2 size={14} />
                    </button>
                    <Link href="/" className={styles.actionBtn}>
                      <ExternalLink size={14} />
                    </Link>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        
        {filteredProducts.length === 0 && (
          <div style={{ padding: '4rem', textAtllign: 'center', color: 'var(--text-dim)' }}>
            No products found matching your search.
          </div>
        )}
      </motion.div>
    </div>
  );
}
