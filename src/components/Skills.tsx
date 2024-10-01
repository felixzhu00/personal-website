import SkillsIcon from './utils/SkillsIcon'
import SectionHeader from './utils/SectionHeader'

interface SkillsObject {
  [key: string]: {
    [key: string]: string // Adjust the type as per your SkillsIcon component
  }
}

const skills: SkillsObject = {
  'Programming Languages': {
    Java: 'java',
    Python: 'python',
    C: 'c',
    'MIPS Assembly': 'mips',
  },
  'Web Development': {
    HTML: 'html',
    CSS: 'css',
    JavaScript: 'javascript',
    TypeScript: 'typescript',
    'React.js': 'react',
    'Node.js': 'node',
    Tailwind: 'tailwind',
    Express: 'express',
    Electron: 'electron',
    Jotai: 'jotai',
  },
  Databases: {
    MongoDB: 'mongodb',
    MySQL: 'mysql',
  },
  'Data Science': {
    'Jupyter Notebook': 'jupyter',
    Pandas: 'pandas',
    Matplotlib: 'matplotlib',
    Seaborn: 'seaborn',
    'Scikit-learn': 'scikit',
  },
  Scripting: {
    'Bash Script': 'bash',
    PowerShell: 'powershell',
    MATLAB: 'matlab',
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
        <div key={category} className="mx-auto flex h-full w-full flex-col items-center justify-between">
          <p className={`sub-heading pb-4 ${category === 'Programming Languages' ? '' : 'pt-6'}`}>{category}</p>
          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-3 sm:grid-cols-3 md:grid-cols-3 xl:grid-cols-4">{skillItems}</div>
        </div>
      )
    }
  }

  return skillSections
}

const Skills = () => {
  return (
    <div id="skills" className="section-spacing flex flex-col">
      <SectionHeader number="02" title="My Skills" />
      <div className="section-inner flex flex-col">{renderSkills()}</div>
    </div>
  )
}

export default Skills
