// src/contexts/SectionRefsContext.tsx
import React, { createContext, useContext, MutableRefObject, useRef, ReactNode } from 'react';

interface SectionRefs {
  [key: string]: HTMLElement | null;
}

const SectionRefsContext = createContext<MutableRefObject<SectionRefs> | null>(null);

interface SectionRefsProviderProps {
  children: ReactNode;
}

export const SectionRefsProvider: React.FC<SectionRefsProviderProps> = ({ children }) => {
  const sectionsRef = useRef<SectionRefs>({
    home: null,
    about: null,
    skills: null,
    projects: null,
    contact: null,
  });

  return (
    <SectionRefsContext.Provider value={sectionsRef}>
      {children}
    </SectionRefsContext.Provider>
  );
};

export const useSectionRefs = () => {
  const context = useContext(SectionRefsContext);
  if (!context) {
    throw new Error('useSectionRefs must be used within a SectionRefsProvider');
  }
  return context;
};
