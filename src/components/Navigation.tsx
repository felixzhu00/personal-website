import React from 'react'
import Avatar from './util/Avatar'
import SVGIcon from './util/SVGIcon'
import GitHubIcon from '../assets/svg/github.svg?react'
import Logo from '../assets/logo.svg?react'
import LinkedInIcon from '../assets/svg/linkedin.svg?react'

const Navigation: React.FC = () => {
  const navItems = [
    { id: '01', label: 'About', href: '#about' },
    { id: '02', label: 'Skills', href: '#skills' },
    { id: '03', label: 'Projects', href: '#projects' },
    { id: '04', label: 'Contact', href: '#contact' },
  ]

  return (
    <header className="fixed top-0 h-[100px] w-full items-center px-[5vw] text-sm">
      <nav className="flex h-full w-full flex-row items-center justify-between bg-primary font-mono text-textBase">
        <SVGIcon SvgComponent={Logo} className="aspect-square w-[45px]" />
        <div className="flex flex-row items-center">
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
