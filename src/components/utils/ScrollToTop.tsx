import { useEffect, useState } from 'react'
import { ChevronUp } from 'lucide-react'

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      // if the user scrolls down, show the button
      window.scrollY > 300 ? setIsVisible(true) : setIsVisible(false)
    }
    // listen for scroll events
    window.addEventListener('scroll', toggleVisibility)

    // clear the listener on component unmount
    return () => {
      window.removeEventListener('scroll', toggleVisibility)
    }
  }, [])

  // handles the animation when scrolling to the top
  const scrollToTop = () => {
    isVisible &&
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      })
  }

  return (
    <button
      className={`fixed bottom-10 right-5 flex aspect-square w-12 items-center justify-center rounded-full bg-secondary-300 shadow-lg transition-all hover:scale-[1.15] active:scale-105 ${
        isVisible ? 'opacity-100' : 'hidden'
      }`}
      onClick={scrollToTop}
    >
      <ChevronUp className="text-textAccent h-6 w-6" />
    </button>
  )
}

export default ScrollToTop
