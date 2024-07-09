import { useRef, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';

interface FadeInSectionProps {
  children: React.ReactNode;
  delay?: number;
}

const FadeInSection = ({ children, delay = 100 }: FadeInSectionProps) => {
  const controls = useAnimation();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              controls.start({ opacity: 1 });
            }, delay); // Apply delay before starting animation
            observer.unobserve(entry.target);
          } else {
            // If not intersecting, animate exit (unmount)
            controls.start({ opacity: 0 });
          }
        });
      },
      { threshold: 0.2 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [controls, delay]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={controls}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      exit={{ opacity: 0 }}
    >
      {children}
    </motion.div>
  );
};

export default FadeInSection;
