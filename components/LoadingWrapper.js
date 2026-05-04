'use client';
import { useState, useEffect } from 'react';
import Loading from './Loading';

export default function LoadingWrapper({ children }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Initial load animation duration
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 4500); // 4.5 seconds to match the animation sequence
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isLoading && <Loading />}
      <div style={{ visibility: isLoading ? 'hidden' : 'visible' }}>
        {children}
      </div>
    </>
  );
}
