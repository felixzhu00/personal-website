import { forwardRef } from 'react';

interface SkillsProps {
}

const Skills = forwardRef<HTMLElement, SkillsProps>((props, ref) => (
  <section id="skills" ref={ref} className="section">
    <h2>Skills Section</h2>
  </section>
));

export default Skills;
