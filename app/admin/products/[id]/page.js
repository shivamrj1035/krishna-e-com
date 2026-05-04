'use client';

import { useState, useEffect } from 'react';
import { useRouter, useParams } from 'next/navigation';
import { motion } from 'framer-motion';
import { ArrowLeft, Save, Trash2 } from 'lucide-react';
import styles from '../products.module.css';
import { products } from '@/data/products';

export default function EditProduct() {
  const router = useRouter();
  const { id } = useParams();
  const [formData, setFormData] = useState(null);

  useEffect(() => {
    const product = products.find(p => p.id === parseInt(id));
    if (product) {
      setFormData({
        ...product,
        stock: product.stock || 50 // fallback for mock
      });
    } else {
      router.push('/admin/products');
    }
  }, [id, router]);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Product updated successfully!');
    router.push('/admin/products');
  };

  const categories = ['Dress', 'Jewelry', 'Accessories', 'Idols', 'Decor'];

  if (!formData) return <div className={styles.container}>Loading...</div>;

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <button onClick={() => router.back()} className={styles.backBtn}>
          <ArrowLeft size={20} />
          <span>Back</span>
        </button>
        <h1 className={styles.title}>Edit Product</h1>
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
                value={formData.price}
                onChange={(e) => setFormData({...formData, price: e.target.value})}
              />
            </div>

            <div className={styles.formGroup}>
              <label>Stock Quantity</label>
              <input 
                type="number" 
                required 
                value={formData.stock}
                onChange={(e) => setFormData({...formData, stock: e.target.value})}
              />
            </div>

            <div className={`${styles.formGroup} ${styles.fullWidth}`}>
              <label>Description</label>
              <textarea 
                rows="4" 
                value={formData.description || ''}
                onChange={(e) => setFormData({...formData, description: e.target.value})}
              ></textarea>
            </div>

            <div className={`${styles.formGroup} ${styles.fullWidth}`}>
              <label>Product Image URL</label>
              <input 
                type="text" 
                value={formData.image}
                onChange={(e) => setFormData({...formData, image: e.target.value})}
              />
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
            <button type="button" className={styles.deleteBtnForm}>
              <Trash2 size={18} />
              <span>Delete</span>
            </button>
            <div style={{ flex: 1 }}></div>
            <button type="button" onClick={() => router.back()} className={styles.cancelBtn}>
              Cancel
            </button>
            <button type="submit" className={styles.submitBtn}>
              <Save size={18} />
              <span>Update Product</span>
            </button>
          </div>
        </form>
      </motion.div>
    </div>
  );
}
