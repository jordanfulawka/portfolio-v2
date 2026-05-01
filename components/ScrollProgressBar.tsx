import { useEffect, useState } from 'react';

export default function ScrollProgressBar() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const updateScroll = () => {
      const scrollY = window.scrollY;
      const height = document.body.scrollHeight - window.innerHeight;

      if (height > 0) {
        setScrollProgress((scrollY / height) * 100);
      }
    };

    window.addEventListener('scroll', updateScroll);

    return () => window.removeEventListener('scroll', updateScroll);
  }, []);

  useEffect(() => {
    console.log(scrollProgress);
  }, [scrollProgress]);

  return (
    <div
      className={`fixed left-0 top-16 bg-accent h-1`}
      style={{ width: `${scrollProgress}%` }}
    />
  );
}
