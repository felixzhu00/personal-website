import SVGIcon from './util/SVGIcon'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

import Logo from '../assets/logo.svg?react'

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const navItems = [
    { id: '01', label: 'About', href: '#about' },
    { id: '02', label: 'Skills', href: '#skills' },
    { id: '03', label: 'Projects', href: '#projects' },
    { id: '04', label: 'Contact', href: '#contact' },
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

  useEffect(() => {
    const handleResize = () => {
      setIsOpen(false) // Reset isOpen to false when viewport size changes
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <header className="fixed top-0 z-10 h-[100px] w-full items-center px-[5vw] text-sm">
      {/* <aside
        className="bg-light-navy z-9 visible fixed right-0 top-0 h-screen w-[min(75vw,400px)] items-center justify-center border p-[50px_10px] shadow-[shadow-lg] outline-none"
      >
        
      </aside> */}
      <motion.div
        initial={{ x: '100%' }} // Initial position outside the viewport
        animate={{ x: isOpen ? 0 : '100%' }} // Slide in when isVisible is true
        transition={{ type: 'tween', duration: 0.5 }} // Animation configuration
        className="fixed right-0 top-0 h-screen w-[min(75vw,400px)] items-center justify-center bg-[#112240] p-4 p-[50px_10px] shadow-md shadow-[shadow-lg] outline-none"
      >
        <div className="flex flex-col items-center h-[60%] m-[30%] text-textBase font-mono gap-10 text-center ">
          <ul className="flex flex-col justify-between gap-7">
            {navItems.map((item) => (
              <li key={item.id} className="mx-[5px]">
                <a href={item.href} className="flex flex-col p-[10px] text-xl" onClick={toggleMenu}>
                  <span className="text-secondary">{item.id}.</span>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <a href="" className="rounded mt-[10px] border w-[150px] border-secondary px-4 py-3 text-secondary">
            Resume
          </a>
        </div>
      </motion.div>

      <nav className="flex h-full w-full flex-row items-center justify-between bg-primary font-mono text-textBase">
        <SVGIcon SvgComponent={Logo} className="aspect-square w-[45px]" />
        <button className="relative flex h-[24px] w-[30px] flex-col items-center justify-center sm:hidden" onClick={toggleMenu}>
          <motion.div
            className="absolute top-0 h-[3px] w-full bg-secondary"
            variants={topVariants}
            animate={isOpen ? 'open' : 'closed'}
            transition={{ duration: 0.3 }}
          />
          <motion.div
            className="absolute h-[3px] w-full bg-secondary"
            variants={centerVariants}
            animate={isOpen ? 'open' : 'closed'}
            transition={{ duration: 0.3 }}
          />
          <motion.div
            className="absolute bottom-0 h-[3px] w-full bg-secondary"
            variants={bottomVariants}
            animate={isOpen ? 'open' : 'closed'}
            transition={{ duration: 0.3 }}
          />
        </button>

        <div className="hidden flex-row items-center sm:flex">
          <ul className="flex flex-row">
            {navItems.map((item) => (
              <li key={item.id} className="mx-[5px]">
                <a href={item.href} className="p-[10px]">
                  <span className="mr-[5px] text-secondary">{item.id}.</span>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <a href="" className="ml-[15px] rounded border border-secondary px-4 py-3 text-secondary">
            Resume
          </a>
        </div>
      </nav>
    </header>
  )
}

export default Navigation
// <nav className="fixed left-0 flex h-full w-1/5 flex-col gap-0.5 border-r-8 border-r-secondary bg-primary p-16 text-xl font-semibold text-textBase hidden sm:block">
//   <div className="flex flex-1 flex-grow-0 items-center justify-center">
//     <Avatar name="Felix Zhu" imageUrl={imageUrl} />
//   </div>
// <ul className="flex flex-col gap-2 max-h-full overflow-y-auto pt-10 text-3xl">
//   <li>

//     <a href="#home">Home</a>
//   </li>
//   <li>
//     <a href="#about">About</a>
//   </li>
//   <li>
//     <a href="#skills">Skills</a>
//   </li>
//   <li>
//     <a href="#projects">Projects</a>
//   </li>
//   <li>
//     <a href="#contact">Contact</a>
//   </li>
// </ul>
//   <div className="absolute bottom-10 right-10 mt-auto flex justify-end space-x-4">
//     <a
//       href="https://github.com/yourusername"
//       target="_blank"
//       rel="noopener noreferrer"
//       className="inline-block"
//     >
//       <SVGIcon SvgComponent={GitHubIcon} color="var(--color-text-base)" />
//     </a>

//     <a
//       href="https://linkedin.com/in/yourusername"
//       target="_blank"
//       rel="noopener noreferrer"
//       className="inline-block"
//     >
//       <SVGIcon SvgComponent={LinkedInIcon} color="var(--color-text-base)" />
//     </a>
//   </div>
// </nav>

// <nav className="">
//   <ul className='flex flex-row justify-end gap-0.5 border-r-8 border-r-secondary bg-primary p-8 gap-4 text-xl font-semibold text-textBase'>
//     <li>
//       <a href="#home">
//         Home
//       </a>
//     </li>
//     <li>
//       <a href="#about">
//         About
//       </a>
//     </li>
//     <li>
//       <a href="#skills">
//         Skills
//       </a>
//     </li>
//     <li>
//       <a href="#projects">
//         Projects
//       </a>
//     </li>
//     <li>
//       <a href="#contact">
//         Contact
//       </a>
//     </li>
//   </ul>

{
  /* <ul className="flex flex-col gap-2 max-h-full overflow-y-auto pt-10 text-3xl">
        
      </ul>
      <div className="absolute bottom-10 right-10 mt-auto flex justify-end space-x-4">
        <a
          href="https://github.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block"
        >
          <SVGIcon SvgComponent={GitHubIcon} color="var(--color-text-base)" />
        </a>

        <a
          href="https://linkedin.com/in/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block"
        >
          <SVGIcon SvgComponent={LinkedInIcon} color="var(--color-text-base)" />
        </a>
      </div> */
}
// </nav>
