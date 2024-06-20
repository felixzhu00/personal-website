import { forwardRef } from 'react';

interface AboutProps {
}

const About = forwardRef<HTMLElement, AboutProps>((props, ref) => (
  <section id="about" ref={ref} className="section">
    <h2>About Section</h2>
  </section>
));

export default About;
