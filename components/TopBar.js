import React from 'react';
import { Truck } from 'lucide-react';

export default function TopBar() {
  return (
    <div style={{
      background: '#1A1A1A',
      color: 'white',
      padding: '0.3rem',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '0.5rem',
      fontSize: '0.85rem',
      fontWeight: '500'
    }}>
      <Truck size={16} color="var(--accent-gold)" />
      <span>Free Delivery on Orders Above ₹199</span>
    </div>
  );
}
