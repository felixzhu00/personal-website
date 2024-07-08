import Folder from '../../assets/folder.svg?react'
import Open from '../../assets/open.svg?react'
import SVGIcon from './SVGIcon'
import { motion } from 'framer-motion'
import { useState } from 'react'

interface ProjectCardProps {
  title: string
  description: string
  techStack: string[]
  className?: string
  link: string
  href: string
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, techStack, className, href }) => {
  const [isHovered, setIsHovered] = useState(false)
  const [isHoveredIcon, setIsHoveredIcon] = useState(false)



  return (
    <motion.div
      className={`bg-light-navy relative flex h-full flex-col items-start justify-between overflow-auto rounded bg-tri p-8 pt-7 shadow-lg transition-all ${className}`}
      whileHover={{ y: -8 }}
      transition={{ duration: 0.1 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <header className="w-full">
        <div className="mb-9 flex items-center justify-between">
          <div>
            <SVGIcon SvgComponent={Folder} className="h-[40px] w-[40px]" strokeColor="var(--color-secondary)" />
          </div>
          <div>
            <motion.a
              aria-label="External Link"
              target="_blank"
              href={href}
              rel="noopener noreferrer"
              onMouseEnter={() => {setIsHoveredIcon(true)}}
              onMouseLeave={() => {setIsHoveredIcon(false)}}
            >
              <SVGIcon
                SvgComponent={Open}
                className="mt-neg-4 h-[22px] w-[22px]"
                strokeColor={isHoveredIcon ? 'var(--color-secondary)' : 'var(--color-text-accent)'}
              />
            </motion.a>
          </div>
        </div>
        <h3>
          <a
            target="_blank"
            rel="noopener noreferrer"
            className={`mb-2.5 text-[22px] ${isHovered && !isHoveredIcon ? 'text-secondary' : 'text-textBase'}`}
          >
            {title}
          </a>
        </h3>
        <div>
          <p className="text-[17px] text-textAccent">{description}</p>
        </div>
      </header>
      <footer>
        <ul className="mt-5 flex flex-grow list-none flex-wrap items-end p-0 text-textAccent">
          {techStack.map((tech, index) => (
            <li key={index} className="mr-3.5">
              {tech}
            </li>
          ))}
        </ul>
      </footer>
    </motion.div>
  )
}

export default ProjectCard
