import SkillsIcon from './util/SkillsIcon'
import {
  JavaIcon,
  PythonIcon,
  CIcon,
  MIPSIcon,
  HTMLIcon,
  CSSIcon,
  JavaScriptIcon,
  TypeScriptIcon,
  ReactIcon,
  NodeIcon,
  TailwindIcon,
  ExpressIcon,
  ElectronIcon,
  JotaiIcon,
  MongoDBIcon,
  MySQLIcon,
  JupyterIcon,
  PandasIcon,
  MatplotlibIcon,
  SeabornIcon,
  ScikitIcon,
  BashIcon,
  PowerShellIcon,
  MATLABIcon,
} from '../assets/svg'
import SectionHeader from './util/SectionHeader'

interface SkillsObject {
  [key: string]: {
    [key: string]: React.FunctionComponent<React.SVGProps<SVGSVGElement>> // Adjust the type as per your SkillsIcon component
  }
}

const skills: SkillsObject = {
  'Programming Languages': {
    Java: JavaIcon,
    Python: PythonIcon,
    C: CIcon,
    'MIPS Assembly': MIPSIcon,
  },
  'Web Development': {
    HTML: HTMLIcon,
    CSS: CSSIcon,
    JavaScript: JavaScriptIcon,
    TypeScript: TypeScriptIcon,
    'React.js': ReactIcon,
    'Node.js': NodeIcon,
    Tailwind: TailwindIcon,
    Express: ExpressIcon,
    Electron: ElectronIcon,
    Jotai: JotaiIcon,
  },
  Databases: {
    MongoDB: MongoDBIcon,
    MySQL: MySQLIcon,
  },
  'Data Science': {
    'Jupyter Notebook': JupyterIcon,
    Pandas: PandasIcon,
    Matplotlib: MatplotlibIcon,
    Seaborn: SeabornIcon,
    'Scikit-learn': ScikitIcon,
  },
  Scripting: {
    'Bash Script': BashIcon,
    PowerShell: PowerShellIcon,
    MATLAB: MATLABIcon,
  },
}

const renderSkills = () => {
  const skillSections = []

  // Iterate over each category in skills
  for (const category in skills) {
    if (skills.hasOwnProperty(category)) {
      const skillsInCategory = skills[category]

      // Generate header and skills for each category
      const skillItems = []
      for (const skill in skillsInCategory) {
        if (skillsInCategory.hasOwnProperty(skill)) {
          const SkillIcon = skillsInCategory[skill]
          skillItems.push(<SkillsIcon key={skill} icon={SkillIcon} color="var(--color-text-accent)" text={skill} />)
        }
      }

      // Push the generated section to skillSections array
      skillSections.push(
        <div key={category} className="flex h-full w-full flex-col">
          <h3 className="pl-2 pt-5 text-2xl text-textAccent">{category}</h3>
          <div className="flex flex-col justify-center gap-2 p-2 sm:flex-row sm:flex-wrap sm:justify-start">{skillItems}</div>
        </div>
      )
    }
  }

  return skillSections
}

const Skills = () => {
  return (
    <section id="skills" className="section flex flex-col">
      <SectionHeader number="02" title="My Skills" />
      <div className="flex flex-col">{renderSkills()}</div>
    </section>
  )
}

export default Skills
