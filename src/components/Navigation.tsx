import React from 'react';
import { Link } from 'react-router-dom';
import Avatar from './util/Avatar';

const Navigation: React.FC = () => {
  const imageUrl = ''; // Placeholder or actual image src

  return (
    <nav className="fixed left-0 flex h-full w-1/5 flex-col border-8 border-red-400 p-14 pt-36">
      <Avatar name="Felix Zhu" imageUrl={imageUrl} />
      <ul className="mt-6 max-h-full overflow-y-auto">
        <li><Link to="/home" className="block mb-4">Home</Link></li>
        <li><Link to="/about" className="block mb-4">About</Link></li>
        <li><Link to="/skills" className="block mb-4">Skills</Link></li>
        <li><Link to="/projects" className="block mb-4">Projects</Link></li>
        <li><Link to="/contact" className="block mb-4">Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Navigation;
