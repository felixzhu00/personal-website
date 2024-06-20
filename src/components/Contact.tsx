import { forwardRef } from 'react';

interface ContactProps {
}

const Contact = forwardRef<HTMLElement, ContactProps>((props, ref) => (
  <section id="contact" ref={ref} className="section">
    <h2>Contact Section</h2>
  </section>
));

export default Contact;
