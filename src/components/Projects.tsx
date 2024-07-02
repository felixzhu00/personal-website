import { useState } from 'react'
import ProjectCard from './util/ProjectCard'
import SectionHeader from './util/SectionHeader'


const projects = [
  {
    link: 'https://github.com/felixzhu00/computer-vision-projects',
    title: 'Computer Vision Projects',
    description:
      "Various projects covering image gradient calculation, filtering, iterative active contour segmentation, path finding with Dijkstra's algorithm, corner detection using Harris method, image warping via homography, line fitting with parameter estimation, and stereo reconstruction with Disparity Space Image computation",
    techStack: ['MATLAB'],
  },
  {
    link: 'https://github.com/felixzhu00/machine-learning-from-scratch',
    title: 'Machine Learning From Scratch',
    description:
      'Collection of projects spanning basic utilities, linear algebra operations, regression models, and neural network implementations, providing a comprehensive introduction to machine learning concepts and practical implementations',
    techStack: ['Python', 'Jupyter Notebook', 'Pandas'],
  },
  {
    link: 'https://github.com/felixzhu00/scripting-languages-assignments',
    title: 'Scripting Language Assignments',
    description:
      'Explore Python fundamentals, advanced programming challenges, shell scripting tasks, PowerShell scripting, Python GUI development, and Django projects',
    techStack: ['Python', 'Bash Script', 'PowerShell', 'Django'],
  },
  {
    link: 'https://github.com/felixzhu00/system-fundamentals-memory-manager',
    title: 'Dynamic Memory Allocator',
    description: 'Robust memory allocator supporting operations like malloc, free, realloc, and memalign. Designed to optimize memory usage',
    techStack: ['C'],
  },
  {
    link: 'https://github.com/felixzhu00/data-science',
    title: 'Data Science Assignments',
    description: 'Assignments exploring NYC Airbnb data analysis and electricity usage prediction based on weather conditions',
    techStack: ['Python', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'Scikit-learn', 'Jupyter Notebook'],
  },
  {
    link: 'https://github.com/felixzhu00/computer-networks-assignments',
    title: 'Computer Networks Assignments',
    description:
      'Assignments covering fundamental and advanced socket programming, network protocols including TCP/IP, UDP, and HTTP, and development of ICMP-based Ping applications to test network connectivity and measure round-trip times.',
    techStack: ['Python'],
  },
  {
    link: 'https://github.com/felixzhu00/fake-stack-overflow',
    title: 'Fake Stack Overflow',
    description:
      'Learning fundamental of Full-Stack web development through imitation of a popular forum website that many coders visit to ask and answer questions',
    techStack: ['HTML', 'CSS', 'Javascript', 'React', 'Node.js', 'MongoDB', 'MySQL', 'Express'],
  },
  {
    link: 'https://github.com/felixzhu00/mips-assembly-assignments',
    title: 'MIPS Assembly Assignments',
    description: 'Master MIPS assembly programming from fundamentals to advanced data structures',
    techStack: ['MIPS Assembly'],
  },
  {
    link: 'https://github.com/felixzhu00/programming-abstractions-assignments',
    title: 'Programming Abstractions Assignments',
    description: 'Grasping functional programming and abstraction across various languages',
    techStack: ['OCaml', 'Python', 'Java'],
  },
  {
    link: 'https://github.com/felixzhu00/notable',
    title: 'Notable',
    description: 'Simple markdown notepad editor application available across all platform(IOS, Andriod, Windows, Linux, MacOS)',
    techStack: ['React', 'Node.js', 'Electron', 'Jotai', 'Tailwind'],
  },
  {
    link: 'https://github.com/felixzhu00/fake-stack-overflow',
    title: 'CyanNav',
    description: 'Collaborative project building full stack map editing appliaction utilizing software engineering processes',
    techStack: ['React', 'Node.js', 'MongoDB', 'Express', 'Leaflet.js'],
  },
  {
    link: 'https://github.com/felixzhu00/World_Happiness_Report',
    title: 'World Happiness Report',
    description:
      'Data analytics that assesses the state of global happiness by ranking countries based on how happy their citizens perceive themselves to be',
    techStack: ['Python', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'Scikit-learn', 'Jupyter Notebook'],
  },
  {
    link: 'https://github.com/felixzhu00/introductory-java-oop-exercises',
    title: 'Introductory Java OOP Showcase',
    description: 'Learning basic object oriented Java through simple exercises',
    techStack: ['Java'],
  },
]

const Projects = () => {
  const [showMore, setShowMore] = useState(false)

  const handleShowMore = () => {
    setShowMore(!showMore)
  }

  return (
    <section id="projects" className="section flex flex-col">
      <SectionHeader number="03" title="My Projects" />
      <div className="grid gap-3 pt-5 md:grid-cols-2 lg:grid-cols-3">
        {projects.slice(0, showMore ? projects.length : 6).map((project, index) => (
          <ProjectCard key={index} link={project.link} title={project.title} description={project.description} techStack={project.techStack} />
        ))}
      </div>
      <button onClick={handleShowMore} className="mx-auto mb-16 mt-10 rounded border border-secondary px-4 py-3 font-mono text-secondary">
        {showMore ? 'Show Less' : 'Show More'}
      </button>
    </section>
  )
}

export default Projects
