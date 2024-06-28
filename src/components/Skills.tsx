import { forwardRef } from 'react'

interface SkillsProps {}

const Skills = forwardRef<HTMLElement, SkillsProps>((props, ref) => (
  <section id="skills" ref={ref} className="pg-style">
    <h2>Skills Section</h2>

    <div className="flex flex-col">
      <div className=''>
        <h3></h3>
        <div></div>
      </div>
    </div>
  </section>
))

export default Skills
