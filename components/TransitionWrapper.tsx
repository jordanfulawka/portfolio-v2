'use client';

import { usePerformance } from '@/context/PerformanceProvider';
import { useInView } from 'react-intersection-observer';

export default function TransitionWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const { ref, inView } = useInView({
    threshold: 0,
    rootMargin: '0px 0px -15% 0px',
    triggerOnce: true,
  });

  const { performanceMode } = usePerformance();

  if (performanceMode) {
    return <div>{children}</div>;
  }
  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${inView ? 'translate-x-0 opacity-100' : 'translate-x-4 sm:translate-x-16 opacity-0'} overflow-x-clip`}
    >
      {children}
    </div>
  );
}
