import { useState } from 'react'
import ProjectCard from './util/ProjectCard'
import SectionHeader from './util/SectionHeader'

const tags = ['python', 'java', 'CSS']

const projects = [
  { link: '', title: 'Sample Project 1', description: 'This is a sample project description.', techStack: tags },
  { link: '', title: 'Sample Project 2', description: 'This is a sample project description.', techStack: tags },
  { link: '', title: 'Sample Project 3', description: 'This is a sample project description.', techStack: tags },
  { link: '', title: 'Sample Project 4', description: 'This is a sample project description.', techStack: tags },
  { link: '', title: 'Sample Project 5', description: 'This is a sample project description.', techStack: tags },
  { link: '', title: 'Sample Project 6', description: 'This is a sample project description.', techStack: tags },
  { link: '', title: 'Sample Project 7', description: 'This is a sample project description.', techStack: tags },
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
