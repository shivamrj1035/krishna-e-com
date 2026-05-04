'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from './login.module.css';
import { Sparkles, Lock } from 'lucide-react';
import { motion } from 'framer-motion';

export default function AdminLogin() {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleLogin = (e) => {
    e.preventDefault();
    // For now, use a hardcoded password or simple check
    // In a real app, this would be a server action or API call
    if (password === 'shyam123') {
      // Set a cookie (simple version)
      document.cookie = 'admin_auth=true; path=/';
      router.push('/admin');
    } else {
      setError('Invalid divine credentials. Please try again.');
    }
  };

  return (
    <div className={styles.loginContainer}>
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className={`${styles.loginCard} glass`}
      >
        <div className={styles.logo}>
          <Sparkles className="titleIcon" size={32} style={{ color: 'var(--accent-gold)', marginBottom: '1rem' }} />
          <h1 className={`${styles.title} gold-gradient-text`}>Shyam Admin</h1>
          <p className={styles.subtitle}>Enter the sanctuary to manage your store</p>
        </div>

        <form className={styles.form} onSubmit={handleLogin}>
          <div className={styles.inputGroup}>
            <label className={styles.label}>Divine Password</label>
            <div style={{ position: 'relative' }}>
              <input 
                type="password" 
                className={styles.input}
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <Lock 
                size={18} 
                style={{ 
                  position: 'absolute', 
                  right: '15px', 
                  top: '50%', 
                  transform: 'translateY(-50%)',
                  color: 'var(--text-dim)'
                }} 
              />
            </div>
          </div>

          {error && <div className={styles.error}>{error}</div>}

          <button type="submit" className={styles.loginBtn}>
            Enter Sanctuary
          </button>
        </form>

        <div style={{ marginTop: '2rem', fontSize: '0.8rem', color: 'var(--text-dim)' }}>
          <p>© 2024 Shyam E-Commerce. All rights reserved.</p>
        </div>
      </motion.div>
    </div>
  );
}
