import ProjectCard from './util/ProjectCard'
import CV from '../assets/img/CV.png'
import SectionHeader from './util/SectionHeader'

const tags = ['python', 'java', 'CSS']

const Projects = () => (
  <section id="projects" className="section flex flex-col">
    <SectionHeader number="03" title="My Projects" />
    <div className="grid grid-cols-3 gap-3">
      <ProjectCard link="" title="Sample Project" description="This is a sample project description." techStack={tags} />
      <ProjectCard link="" title="Sample Project" description="This is a sample project description." techStack={tags} />
      <ProjectCard link="" title="Sample Project" description="This is a sample project description." techStack={tags} />
      <ProjectCard link="" title="Sample Project" description="This is a sample project description." techStack={tags} />
      <ProjectCard link="" title="Sample Project" description="This is a sample project description." techStack={tags} />
      <ProjectCard link="" title="Sample Project" description="This is a sample project description." techStack={tags} />
      <ProjectCard link="" title="Sample Project" description="This is a sample project description." techStack={tags} />



    </div>
  </section>
)

export default Projects
