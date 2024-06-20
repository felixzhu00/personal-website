// About.tsx
import { forwardRef } from 'react';

interface AboutProps {
  // Define any additional props if needed
}

const About = forwardRef<HTMLElement, AboutProps>((props, ref) => (
  <section id="about" ref={ref} className="section">
    <h2>About Section</h2>
    {/* Add content for About section */}
  </section>
));

export default About;
