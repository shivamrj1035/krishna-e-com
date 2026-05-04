'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { ArrowLeft, Save, Upload, X } from 'lucide-react';
import Image from 'next/image';
import styles from '../products.module.css';

export default function NewProduct() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: '',
    price: '',
    category: 'Dress',
    description: '',
    image: '',
    stock: '',
    featured: false
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, this would be an API call
    alert('Product added successfully!');
    router.push('/admin/products');
  };

  const categories = ['Dress', 'Jewelry', 'Accessories', 'Idols', 'Decor'];

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <button onClick={() => router.back()} className={styles.backBtn}>
          <ArrowLeft size={20} />
          <span>Back</span>
        </button>
        <h1 className={styles.title}>Add New Product</h1>
      </div>

      <motion.div 
        className={styles.formCard}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.formGrid}>
            <div className={styles.formGroup}>
              <label>Product Name</label>
              <input 
                type="text" 
                required 
                placeholder="Enter product name"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
              />
            </div>

            <div className={styles.formGroup}>
              <label>Category</label>
              <select 
                value={formData.category}
                onChange={(e) => setFormData({...formData, category: e.target.value})}
              >
                {categories.map(cat => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
            </div>

            <div className={styles.formGroup}>
              <label>Price (₹)</label>
              <input 
                type="number" 
                required 
                placeholder="0.00"
                value={formData.price}
                onChange={(e) => setFormData({...formData, price: e.target.value})}
              />
            </div>

            <div className={styles.formGroup}>
              <label>Stock Quantity</label>
              <input 
                type="number" 
                required 
                placeholder="0"
                value={formData.stock}
                onChange={(e) => setFormData({...formData, stock: e.target.value})}
              />
            </div>

            <div className={`${styles.formGroup} ${styles.fullWidth}`}>
              <label>Description</label>
              <textarea 
                rows="4" 
                placeholder="Enter product description..."
                value={formData.description}
                onChange={(e) => setFormData({...formData, description: e.target.value})}
              ></textarea>
            </div>

            <div className={`${styles.formGroup} ${styles.fullWidth}`}>
              <label>Product Image URL</label>
              <div className={styles.urlInputGroup}>
                <input 
                  type="text" 
                  placeholder="https://..."
                  value={formData.image}
                  onChange={(e) => setFormData({...formData, image: e.target.value})}
                />
              </div>
              <p className={styles.helpText}>Enter a valid image URL. We'll use the fallback if empty.</p>
            </div>

            <div className={styles.checkboxGroup}>
              <input 
                type="checkbox" 
                id="featured"
                checked={formData.featured}
                onChange={(e) => setFormData({...formData, featured: e.target.checked})}
              />
              <label htmlFor="featured">Mark as Featured Product</label>
            </div>
          </div>

          <div className={styles.formActions}>
            <button type="button" onClick={() => router.back()} className={styles.cancelBtn}>
              Cancel
            </button>
            <button type="submit" className={styles.submitBtn}>
              <Save size={18} />
              <span>Save Product</span>
            </button>
          </div>
        </form>
      </motion.div>
    </div>
  );
}
