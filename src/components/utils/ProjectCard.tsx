import { motion } from 'framer-motion'
import SVGIcon from './SVGIcon'
import { ArrowUpRight } from 'lucide-react'

interface ProjectCardProps {
  title: string
  description: string
  techStack: string[]
  iconStack: React.FunctionComponent[]
  className?: string
  link: string
  href: string
}

export default function ProjectCard({ title, description, techStack, iconStack, className, href }: ProjectCardProps) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      <motion.div
        className={`relative flex h-96 w-full flex-col justify-between rounded-md bg-background-100 p-8 shadow-lg placeholder:transition-all ${className}`}
        whileHover={{ y: -8 }}
        transition={{ duration: 0.1 }}
      >
        <div className="absolute right-0 top-0 h-0 w-0 border-l-[50px] border-t-[50px] border-l-transparent border-t-secondary-300"></div>
        <ArrowUpRight className="absolute right-0.5 top-0.5" />

        <header className="mb-6 w-full">
          <div className="sub-heading mb-4 mt-2 flex-row">{title}</div>
          <p className="paragraph">{description}</p>
        </header>

        <ul className="flex list-none flex-wrap items-end gap-0.5 p-0">
          {iconStack.map((tech, index) => (
            <li key={index} className="rounded-md bg-secondary-300 p-2">
              <SVGIcon SvgComponent={tech} className={`h-6 w-6 grow`} />
              {/* {tech} */}
            </li>
          ))}
        </ul>
      </motion.div>
    </a>
  )
}
