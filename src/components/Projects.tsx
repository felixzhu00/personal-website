import { forwardRef } from 'react';

interface ProjectsProps {
}

const Projects = forwardRef<HTMLElement, ProjectsProps>((props, ref) => (
  <section id="projects" ref={ref} className="section">
    <h2>Projects Section</h2>
  </section>
));

export default Projects;
