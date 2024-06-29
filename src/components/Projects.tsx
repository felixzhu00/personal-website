import ProjectCard from './util/ProjectCard'
import CV from '../assets/img/CV.png'

const tags = ['python', 'java', 'CSS']

const Projects = () => (
  <section id="projects" className="pg-style flex flex-col">
    <h2 className="header">Projects</h2>
    <div className="grid grid-cols-4 gap-3">
      <ProjectCard
        image={CV}
        title="Sample Project"
        description="This is a sample project description."
        tags={tags}
      />
      <ProjectCard
        image={CV}
        title="Sample Project"
        description="This is a sample project description."
        tags={tags}
      />
      <ProjectCard
        image={CV}
        title="Sample Project"
        description="This is a sample project description."
        tags={tags}
      />
      <ProjectCard
        image={CV}
        title="Sample Project"
        description="This is a sample project description."
        tags={tags}
      />
            <ProjectCard
        image={CV}
        title="Sample Project"
        description="This is a sample project description."
        tags={tags}
      />
      <ProjectCard
        image={CV}
        title="Sample Project"
        description="This is a sample project description."
        tags={tags}
      />
      <ProjectCard
        image={CV}
        title="Sample Project"
        description="This is a sample project description."
        tags={tags}
      />
      <ProjectCard
        image={CV}
        title="Sample Project"
        description="This is a sample project description."
        tags={tags}
      />
            <ProjectCard
        image={CV}
        title="Sample Project"
        description="This is a sample project description."
        tags={tags}
      />
      <ProjectCard
        image={CV}
        title="Sample Project"
        description="This is a sample project description."
        tags={tags}
      />
      <ProjectCard
        image={CV}
        title="Sample Project"
        description="This is a sample project description."
        tags={tags}
      />
      <ProjectCard
        image={CV}
        title="Sample Project"
        description="This is a sample project description."
        tags={tags}
      />
    </div>
  </section>
)

export default Projects
