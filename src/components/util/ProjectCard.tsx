import Folder from '../../assets/folder.svg?react'
import Open from '../../assets/open.svg?react'
import SVGIcon from './SVGIcon'

interface ProjectCardProps {
  title: string
  description: string
  techStack: string[]
  className?: string
  link: string
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, techStack, className }) => {
  return (
    <div
      className={`bg-light-navy relative flex h-full flex-col items-start justify-between overflow-auto rounded bg-tri p-8 pt-7 shadow-lg transition-all ${className}`}
    >
      <header className="w-full">
        <div className="mb-9 flex items-center justify-between">
          <div>
            <SVGIcon SvgComponent={Folder} className="h-[40px] w-[40px]" />
          </div>
          <div>
            <a aria-label="External Link" target="_blank" rel="noopener noreferrer">
              <SVGIcon SvgComponent={Open} className="mt-neg-4 h-[22px] w-[22px]" />
            </a>
          </div>
        </div>
        <h3>
          <a target="_blank" rel="noopener noreferrer" className="mb-2.5 text-[22px] text-textBase">
            {title}
          </a>
        </h3>
        <div>
          <p className="text-[17px] text-textAccent">{description}</p>
        </div>
      </header>
      <footer>
        <ul className="mt-5 flex flex-grow list-none flex-wrap items-end p-0 text-[#8892b0]">
          {techStack.map((tech, index) => (
            <li key={index} className="mr-3.5">
              {tech}
            </li>
          ))}
        </ul>
      </footer>
    </div>
  )
}

export default ProjectCard
