'use client';

import { usePerformance } from '@/context/PerformanceProvider';
import { useEffect } from 'react';

export default function CursorSpotlight() {
  const { performanceMode } = usePerformance();

  useEffect(() => {
    const move = (e: MouseEvent) => {
      document.body.style.setProperty('--x', `${e.clientX}px`);
      document.body.style.setProperty('--y', `${e.clientY}px`);
    };
    if (!performanceMode) {
      window.addEventListener('mousemove', move);
    }
    return () => window.removeEventListener('mousemove', move);
  }, [performanceMode]);

  if (performanceMode) {
    return null;
  }

  return (
    <div
      className='pointer-events-none fixed inset-0 z-30'
      style={{
        background: `radial-gradient(600px circle at var(--x, 50%) var(--y, 50%), rgba(0,212,255,0.06), transparent 70%)`,
      }}
    />
  );
}
