import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

import Logo from '../assets/logo.svg?react'
import SVGIcon from './utils/SVGIcon'
import HoverButton from './utils/HoverButton'

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrollingUp, setIsScrollingUp] = useState(true) // Initial state: assume scrolling up
  const [lastScrollY, setLastScrollY] = useState(0)
  const [isAtTop, setIsAtTop] = useState(true)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
    //handleScroll
  }

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ]

  const topVariants = {
    closed: { rotate: 0, y: 0 },
    open: { rotate: 45, y: 10.5 },
  }

  const centerVariants = {
    closed: { opacity: 1 },
    open: { opacity: 0 },
  }

  const bottomVariants = {
    closed: { rotate: 0, y: 0 },
    open: { rotate: -45, y: -10.5 },
  }
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, href: string): void => {
    e.preventDefault()
    const targetElement = document.querySelector(href)
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
      })
    }
  }

  useEffect(() => {
    const handleResize = () => {
      setIsOpen(false) // Reset isOpen to false when viewport size changes
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      setIsScrollingUp(currentScrollY < lastScrollY)
      setLastScrollY(currentScrollY)
      setIsAtTop(currentScrollY === 0)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [lastScrollY]) // Only re-run if lastScrollY changes

  // Motion variants for navigation animation
  const navVariants = {
    hidden: { y: '-100%', transition: { duration: 0.3 } },
    visible: { y: 0, transition: { duration: 0.3 } },
  }

  return (
    <motion.div
      initial={isScrollingUp ? 'visible' : 'hidden'} // Initial state based on scroll direction
      animate={isScrollingUp || isOpen ? 'visible' : 'hidden'} // Animate based on scroll and menu open state
      variants={navVariants}
      className="fixed top-0 z-20 w-full bg-transparent"
    >
      <header className={`h-25 flex items-center px-[3vw] text-sm ${isAtTop ? '' : 'shadow-xl'} backdrop-blur`}>
        {isOpen && (
          <div
            className="fixed inset-0 h-[100vh] bg-black bg-opacity-30 backdrop-blur-lg backdrop-filter"
            onClick={toggleMenu} // Close menu when clicking on the backdrop
          />
        )}

        <motion.div
          initial={{ x: '100%' }} // Initial position outside the viewport
          animate={{ x: isOpen ? 0 : '100%' }} // Slide in when isVisible is true
          transition={{ type: 'tween', duration: 0.5 }} // Animation configuration
          className="fixed right-0 top-0 h-screen w-[min(75vw,400px)] items-center justify-center bg-secondary-300 p-[50px_10px] shadow-md shadow-[shadow-lg] outline-none"
        >
          <div className="m-[30%] flex h-[60%] flex-col items-center gap-10 text-center">
            <ul className="flex flex-col justify-between gap-7">
              {navItems.map((item) => (
                <li key={item.label} className="mx-[5px]">
                  <a href={item.href} className="flex flex-row p-[10px] text-xl" onClick={toggleMenu}>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
            <a
              href="https://drive.google.com/file/d/1FUKJi0uXk9PQvnMKYq1G6piZmli6d22z/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="border-secondary text-secondary mt-[10px] w-[150px] rounded border px-4 py-3"
            >
              Resume
            </a>
          </div>
        </motion.div>

        <nav className="flex h-full w-full flex-row items-center justify-between bg-transparent p-8 font-sans">
          <a href="#home" className="items-center" onClick={(e) => handleScroll(e, '#home')}>
            <SVGIcon iconName="logo" SvgComponent={Logo} className="aspect-square w-8" />
          </a>

          <button className="relative flex h-6 w-8 flex-col items-center justify-center sm:hidden" onClick={toggleMenu}>
            <motion.div
              className="absolute top-0 h-0.5 w-full bg-text-950"
              variants={topVariants}
              animate={isOpen ? 'open' : 'closed'}
              transition={{ duration: 0.3 }}
            />
            <motion.div
              className="absolute h-0.5 w-full bg-text-950"
              variants={centerVariants}
              animate={isOpen ? 'open' : 'closed'}
              transition={{ duration: 0.3 }}
            />
            <motion.div
              className="absolute bottom-0 h-0.5 w-full bg-text-950"
              variants={bottomVariants}
              animate={isOpen ? 'open' : 'closed'}
              transition={{ duration: 0.3 }}
            />
          </button>

          <div className="hidden flex-row sm:flex">
            <ul className="flex flex-row items-center justify-center">
              {navItems.map((item) => (
                <li key={item.label} className="mx-2">
                  <a href={item.href} className="p-4" onClick={(e) => handleScroll(e, item.href)}>
                    <span className="text-text-950">{item.label}</span>
                  </a>
                </li>
              ))}
              <li>
                <HoverButton innerClass="px-4 py-2 text-text-950" outerClass="mx-2">
                  <a href="https://drive.google.com/file/d/1GYqgT9MtA4hKbMf8SwGLxWn2VqIPLRTx/view" target="_blank" rel="noopener noreferrer">
                    Resume
                  </a>
                </HoverButton>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </motion.div>
  )
}

export default Navigation
