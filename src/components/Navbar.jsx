import React from 'react';
import { FaBars } from 'react-icons/fa';
import { useGlobalContext } from '../context';
import Navlinks from './Navlinks';

const Navbar = () => {
  const { openSidebar, setPageId } = useGlobalContext();

  const handleSubmit = (e) => {
    if (!e.target.classList.contains('nav-link')) {
      setPageId(null);
    }
  };
  return (
    <nav onMouseOver={handleSubmit}>
      <div className='nav-center'>
        <h3 className='logo'>strapi</h3>
        <button className='toggle-btn' onClick={openSidebar}>
          <FaBars />
        </button>
        <Navlinks />
      </div>
    </nav>
  );
};

export default Navbar;
