// src/components/ScrollToSection.tsx
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useSectionRefs } from './SectionRefsContext';

const ScrollToSection: React.FC = () => {
  const { pathname } = useLocation();
  const sectionsRef = useSectionRefs();

  useEffect(() => {
    const sectionId = pathname.substring(1);
    const section = sectionsRef.current[sectionId];
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }, [pathname, sectionsRef]);

  return null;
};

export default ScrollToSection;
