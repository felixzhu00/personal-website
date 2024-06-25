import React from 'react'
import { Link } from 'react-router-dom'
import Avatar from './util/Avatar'
import githubIcon from '../assets/github.svg'
import linkedinIcon from '../assets/linkedin.svg'

const Navigation: React.FC = () => {
  const imageUrl = '' // Placeholder or actual image src

  return (
    <nav className="text-textBase fixed left-0 flex h-full w-1/5 flex-col gap-0.5 border-r-8 border-r-secondary bg-primary p-16 text-xl font-semibold">
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
      <div className="mt-auto flex justify-end space-x-4 absolute bottom-10 right-10">
        <a
          href="https://github.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="h-8 w-8 svg-icon"
            aria-label="GitHub"
          >
            <path d="M12 0C5.4 0 0 5.4 0 12c0 5.3 3.4 9.8 8.1 11.4.6.1.8-.2.8-.6v-2.2c-3.3.7-4-1.6-4-1.6-.5-1.3-1.1-1.7-1.1-1.7-.9-.6.1-.6.1-.6 1 .1 1.5 1 1.5 1 .9 1.6 2.3 1 2.9.9.1-.7.4-1 .7-1.3-2.7-.3-5.5-1.3-5.5-5.9 0-1.2.5-2.2 1.2-3-.1-.4-.4-1.4.1-2.9 0 0 1-.3 3.3 1.2a11.2 11.2 0 0 1 5.9 0c2.3-1.7 3.3-1.2 3.3-1.2.6 1.5.2 2.5.1 2.9.8.8 1.2 1.8 1.2 3 0 4.6-2.9 5.5-5.6 5.7.4.3.8 1 .8 2v2.5c0 .3.2.6.7.6 4.6-1.5 8.1-5.7 8.1-10.5C24 5.4 18.6 0 12 0z" />
          </svg>
        </a>

        <a
          href="https://linkedin.com/in/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block"
        >
          <svg
            viewBox="0 0 512 512"
            xmlns="http://www.w3.org/2000/svg"
            className="svg-icon h-8 w-8"
            aria-label="LinkedIn"
          >
            <path d="M256 0c141.29 0 256 114.71 256 256 0 141.29-114.71 256-256 256C114.71 512 0 397.29 0 256 0 114.71 114.71 0 256 0Zm-80.037 399.871V199.95h-66.464v199.921h66.464Zm239.62 0V285.225c0-61.409-32.787-89.976-76.509-89.976-35.255 0-51.047 19.389-59.889 33.007V199.95h-66.447c.881 18.757 0 199.921 0 199.921h66.446v-111.65c0-5.976.43-11.95 2.191-16.221 4.795-11.935 15.737-24.299 34.095-24.299 24.034 0 33.663 18.34 33.663 45.204v106.966h66.45ZM143.18 103.55c-22.74 0-37.597 14.95-37.597 34.545 0 19.182 14.405 34.544 36.717 34.544h.429c23.175 0 37.6-15.362 37.6-34.544-.43-19.595-14.424-34.545-37.149-34.545Z"></path>
          </svg>
        </a>
      </div>
    </nav>
  )
}

export default Navigation
