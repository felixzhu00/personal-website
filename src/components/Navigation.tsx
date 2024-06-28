import React from 'react'
import Avatar from './util/Avatar'
import SVGIcon from './util/SVGIcon'
import GitHubIcon from '../assets/github.svg?react';
import LinkedInIcon from '../assets/linkedin.svg?react';


const Navigation: React.FC = () => {
  const imageUrl = '' // Placeholder or actual image src

  return (
    <nav className="fixed left-0 flex h-full w-1/5 flex-col gap-0.5 border-r-8 border-r-secondary bg-primary p-16 text-xl font-semibold text-textBase">
      <div className="flex flex-1 flex-grow-0 items-center justify-center">
        <Avatar name="Felix Zhu" imageUrl={imageUrl} />
      </div>
      <ul className="block max-h-full overflow-y-auto pt-10 text-3xl leading-[1.7]">
        <li>
          
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#skills">Skills</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="absolute bottom-10 right-10 mt-auto flex justify-end space-x-4">
        <a
          href="https://github.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block"
        >
          <SVGIcon SvgComponent={GitHubIcon} ariaLabel="GitHub" color="var(--color-text-base)" />
        </a>

        <a
          href="https://linkedin.com/in/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block"
        >
          <SVGIcon SvgComponent={LinkedInIcon} ariaLabel="Linkedin" color="var(--color-text-base)" />
        </a>
      </div>
    </nav>
  )
}

export default Navigation
