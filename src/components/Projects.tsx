import { useState } from 'react'
import SectionHeader from './utils/SectionHeader'
import FadeInSection from './utils/FadeInSection'
import ProjectCard from './utils/ProjectCard'
import HoverButton from './utils/HoverButton'

const projects = [
  {
    link: 'https://github.com/felixzhu00/fake-stack-overflow',
    title: 'CyanNav',
    description: 'A collaborative project in building a full stack map editing application utilizing software engineering processes and principles',
    techStack: ['React', 'Node.js', 'MongoDB', 'Express', 'Leaflet.js', 'Docker', 'Cypress'],
    iconStack: ['react', 'node', 'mongodb', 'express', 'docker'],
  },
  {
    link: 'https://github.com/felixzhu00/computer-vision-projects',
    title: 'Computer Vision Projects',
    description: 'Algorithm based projects covering computer vision fundamentals',
    techStack: ['MATLAB'],
    iconStack: ['matlab'],
  },
  {
    link: 'https://github.com/felixzhu00/system-fundamentals-memory-manager',
    title: 'Dynamic Memory Allocator',
    description: 'Robust memory allocator mimicking the built-in C memory manager',
    techStack: ['C'],
    iconStack: ['c'],
  },
  {
    link: 'https://github.com/felixzhu00/machine-learning-from-scratch',
    title: 'Machine Learning From Scratch',
    description: 'Comprehensive introduction to machine learning concepts and implementation',
    techStack: ['Python', 'Jupyter Notebook', 'Pandas'],
    iconStack: ['python', 'pandas', 'numpy', 'jupyter'],
  },
  {
    link: 'https://github.com/felixzhu00/scripting-languages-assignments',
    title: 'Scripting Language Assignments',
    description: 'Exercises exploring Python scripting, bash shell scripting, PowerShell scripting, Python GUI development, and Django',
    techStack: ['Python', 'Bash Script', 'PowerShell', 'Django'],
    iconStack: ['python', 'bash', 'powershell', 'django'],
  },

  {
    link: 'https://github.com/felixzhu00/data-science',
    title: 'Data Science Assignments',
    description: 'Data analytic assignments dealing with large data sets obtained from Kaggle',
    techStack: ['Python', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'Scikit-learn', 'Jupyter Notebook'],
    iconStack: ['python', 'pandas', 'numpy', 'matplotlib', 'seaborn', 'scikit', 'jupyter'],
  },
  {
    link: 'https://github.com/felixzhu00/computer-networks-assignments',
    title: 'Computer Networks Assignments',
    description: 'Assignments covering socket programming, network protocols(TCP/UDP), and network testing application',
    techStack: ['Python'],
    iconStack: ['python'],
  },
  {
    link: 'https://github.com/felixzhu00/fake-stack-overflow',
    title: 'Fake Stack Overflow',
    description: 'Introduction to full-stack web development by imitating Stack Overflow',
    techStack: ['HTML', 'CSS', 'Javascript', 'React', 'Node.js', 'MongoDB', 'MySQL', 'Express'],
    iconStack: ['react', 'node', 'mongodb', 'express', 'mysql'],
  },
  {
    link: 'https://github.com/felixzhu00/mips-assembly-assignments',
    title: 'MIPS Assembly Assignments',
    description: 'Master MIPS assembly programming from fundamentals to advanced data structures.',
    techStack: ['MIPS Assembly'],
    iconStack: ['mips'],
  },
  {
    link: 'https://github.com/felixzhu00/programming-abstractions-assignments',
    title: 'Programming Abstractions Assignments',
    description: 'Grasping functional programming and abstraction across various languages.',
    techStack: ['OCaml', 'Python', 'Java'],
    iconStack: ['python', 'java', 'ocaml'],
  },
  {
    link: 'https://github.com/felixzhu00/notable',
    title: 'Notable',
    description: 'Simple markdown notepad editor application',
    techStack: ['React', 'Node.js', 'Electron', 'Jotai', 'Tailwind'],
    iconStack: ['react', 'node', 'electron', 'jotai', 'tailwind'],
  },
  {
    link: 'https://github.com/felixzhu00/World_Happiness_Report',
    title: 'World Happiness Report',
    description: 'Data analytics that assesses the state of global happiness',
    techStack: ['Python', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'Scikit-learn', 'Jupyter Notebook'],
    iconStack: ['python', 'pandas', 'numpy', 'matplotlib', 'seaborn', 'scikit', 'jupyter'],
  },
  {
    link: 'https://github.com/felixzhu00/introductory-java-oop-exercises',
    title: 'Introductory Java OOP Showcase',
    description: 'Learning basic object oriented Java through simple exercises.',
    techStack: ['Java'],
    iconStack: ['java'],
  },
]

export default function Projects() {
  const [showMore, setShowMore] = useState(false)

  const handleShowMore = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    if (showMore) {
      e.preventDefault()
      window.location.href = '/#projects'
    }

    setShowMore(!showMore)
  }

  return (
    <section id="projects" className="section-spacing flex flex-col">
      <SectionHeader number="03" title="My Projects" />

      <div className="section-inner mx-auto flex flex-col items-center">
        <div className="grid gap-3 md:grid-cols-2 md:grid-rows-2 xl:grid-cols-3">
          {projects.slice(0, showMore ? projects.length : 6).map((project, index) => (
            <FadeInSection key={index}>
              <ProjectCard
                link={project.link}
                title={project.title}
                description={project.description}
                iconStack={project.iconStack}
                href={project.link}
              />
            </FadeInSection>
          ))}
        </div>

        <HoverButton
          onClick={(e) => {
            handleShowMore(e)
          }}
          outerClass="mx-auto mt-6"
          innerClass="px-4 py-3 font-mono"
        >
          {showMore ? 'Show Less' : 'Show More'}
        </HoverButton>
      </div>
    </section>
  )
}
