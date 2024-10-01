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
    <div className="font-sans text-text-950">
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
