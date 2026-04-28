'use client';

import { useInView } from 'react-intersection-observer';

export default function TransitionWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const { ref, inView } = useInView({
    threshold: 0.5,
  });
  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${inView ? 'translate-x-0 opacity-100' : 'translate-x-16 opacity-0'} overflow-x-hidden`}
    >
      {children}
    </div>
  );
}
