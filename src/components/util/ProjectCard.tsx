import Folder from '../../assets/folder.svg?react'
import Open from '../../assets/open.svg?react'
import SVGIcon from './SVGIcon';


interface ProjectCardProps {
  title: string;
  description: string;
  techStack: string[];
  className?: string;
  link: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  techStack,
  className,
}) => {
  return (
    <div className={`bg-[#112240] shadow-lg flex justify-between items-start flex-col relative h-full p-8 pt-7 rounded bg-light-navy transition-all overflow-auto ${className}`}>
      <header className='w-full'>
        <div className="flex justify-between items-center mb-9">
          <div>
          <SVGIcon SvgComponent={Folder} className='h-[40px] w-[40px]'/>
          </div>
          <div>
            <a aria-label="External Link" target="_blank" rel="noopener noreferrer">
              <SVGIcon SvgComponent={Open} className='h-[22px] w-[22px] mt-neg-4' />
            </a>
          </div>
        </div>
        <h3>
          <a target="_blank" rel="noopener noreferrer" className="text-textBase mb-2.5 text-[22px]">{title}</a>
        </h3>
        <div>
          <p className="text-textAccent text-[17px]">{description}</p>
        </div>
      </header>
      <footer>
        <ul className="flex items-end flex-grow flex-wrap p-0 mt-5 list-none text-[#8892b0]">
          {techStack.map((tech, index) => (
            <li key={index} className="mr-3.5">{tech}</li>
          ))}
        </ul>
      </footer>
    </div>
  );
};

export default ProjectCard;