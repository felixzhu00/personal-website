import { motion } from 'framer-motion'
import SVGIcon from './SVGIcon'
import { ArrowUpRight } from 'lucide-react'
import { iconMap } from '../../assets/svg'

interface ProjectCardProps {
  title: string
  description: string
  iconStack: string[]
  className?: string
  link: string
  href: string
}

export default function ProjectCard({ title, description, iconStack, className, href }: ProjectCardProps) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      <motion.div
        className={`relative flex h-[28rem] sm:h-96 w-full flex-col justify-between rounded-md bg-background-100 p-8 shadow-lg placeholder:transition-all ${className}`}
        whileHover={{ y: -8 }}
        transition={{ duration: 0.1 }}
      >
        <div className="absolute right-0 top-0 h-0 w-0 rounded-tr-md border-l-[56px] border-t-[56px] border-l-transparent border-t-secondary-300"></div>
        <ArrowUpRight className="absolute right-1 top-1" />

        <header className="mb-6 mt-[30px] w-full">
          <div className="sub-heading mb-4 mt-2 flex-row">{title}</div>
          <p className="paragraph text-text-800">{description}</p>
        </header>

        <ul className="flex list-none flex-wrap items-end gap-1 p-0">
          {iconStack.map((tech, index) => (
            <li key={index} className="rounded-md bg-text-200 p-1.5">
              <SVGIcon iconName={tech} SvgComponent={iconMap[tech]} className={`h-5 w-5`} />
            </li>
          ))}
        </ul>
      </motion.div>
    </a>
  )
}
