import { forwardRef } from 'react';

interface HomeProps {
}

const Home = forwardRef<HTMLElement, HomeProps>((props, ref) => (
  <section id="home" ref={ref} className="section">
    <h2>Home Section</h2>
  </section>
));

export default Home;

