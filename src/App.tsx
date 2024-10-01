import Navigation from './components/Navigation'
import Home from './components/Home'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import ScrollToTop from './components/utils/ScrollToTop'
import Footer from './components/Footer'
import FadeInSection from './components/utils/FadeInSection'
const App = () => {
  return (
    <div className="relative min-h-screen font-sans text-text-950">
      <div className="absolute top-0 z-[-2] h-screen w-full bg-transparent bg-[radial-gradient(ellipse_60%_100%_at_30%_-10%,var(--background-200),rgba(255,255,255,0))]"></div>
      <Navigation />
      <Home />
      <FadeInSection>
        <About />
      </FadeInSection>
      <FadeInSection>
        <Skills />
      </FadeInSection>
      <FadeInSection>
        <Projects />
      </FadeInSection>
      <FadeInSection>
        <Contact />
      </FadeInSection>

      <Footer />
      {/* <ThemeToggleButton /> */}
      <ScrollToTop />
    </div>
  )
}
export default App
