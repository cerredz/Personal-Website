"use client"
import { NavbarLinks } from '@/data';
import { useState, useEffect } from 'react';

const Navbar = () => {
  const [links, setLinks] = useState([]);

  // load the links upon render
  useEffect(() => {
    setLinks(NavbarLinks);
  }, []);

  return (
    <nav className='w-full p-0 m-0 relative'>
      <div className='w-full flex flex-col sm:flex-row justify-between align-center p-4 sm:p-2 md:p-4 lg:pt-6 lg:pb-6'>
        
        <div className='flex gap-4 w-full align-center justify-start'>
          <img className='hidden md:block' src='logo' alt='logo'></img>
          {/* NAVBAR LINKS */}
          <div className='flex flex-col sm:flex-row align-center justify-center gap-4 flex-wrap'>
            {links.map((link, index) => (
              <a key={index} href={link.link} 
              className='tracking-widest font-semibold text-sm sm:text-base md:text-lg'>
                {link.title}
              </a>
            ))}
          </div>
          
        </div>
        {/* NAVBAR WIDGETS */}
        <div className='flex  bg-red-100 justify-end align-center'>
          <h1>Second</h1>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
