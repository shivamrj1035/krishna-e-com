'use client';
import { motion } from 'framer-motion';
import styles from './Loading.module.css';

export default function Loading() {
  return (
    <motion.div
      className={styles.container}
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.05, filter: "blur(10px)" }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      <div className={styles.animationWrapper}>
        <motion.img
          src="/peacock-feather.png"
          alt="Peacock Feather"
          loading='eager'
          className={styles.feather}
          initial={{ x: -200, y: -200, rotate: -45, opacity: 0 }}
          animate={{ x: 0, y: 0, rotate: 0, opacity: 0.8 }}
          transition={{ duration: 2, type: "spring", bounce: 0.2 }}
        />
        <motion.img
          src="/Gen-laddu-gopal.png"
          alt="Laddu Gopal"
          className={styles.avatar}
          initial={{ opacity: 0, scale: 0.8, filter: "blur(10px)" }}
          animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          transition={{ duration: 2, delay: 1.2, ease: "easeOut" }}
        />
      </div>

      <motion.h2
        className={styles.text}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: [0, 1, 0.7, 1], y: 0 }}
        transition={{
          y: { duration: 1, delay: 1.5, ease: "easeOut" },
          opacity: { duration: 3, delay: 1.5, repeat: Infinity, repeatType: "reverse" }
        }}
      >
        HARE KRISHNA
      </motion.h2>

      <div className={styles.progressContainer}>
        <motion.div
          className={styles.progressBar}
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ duration: 4, ease: "easeInOut" }}
        />
      </div>
    </motion.div>
  );
}
