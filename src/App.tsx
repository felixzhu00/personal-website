import React from 'react'
import { SectionRefsProvider } from './components/util/SectionRefsContext'
import Navigation from './components/Navigation'
import Home from './components/Home'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import ScrollToSection from './components/util/ScrollToSection'

const App: React.FC = () => (
  <Navigation />
  // <SectionRefsProvider>
  //     <ScrollToSection />
  //     <div className="flex h-screen">
        
  //       <div className="flex-1 overflow-auto">
  //         <Home />
  //         <About />
  //         <Skills />
  //         <Projects />
  //         <Contact />
  //       </div>
  //     </div>
  // </SectionRefsProvider>
)

export default App
