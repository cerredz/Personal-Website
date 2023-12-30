"use client"
import { NavbarLinks } from '@/data';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { useSelector } from 'react-redux';
import { setLightMode, setDarkMode } from '@/app/Redux/store';
const Navbar = () => {
  const [links, setLinks] = useState([]);
  const dark = useSelector((state) => state.auth.dark);
  // load the links upon render
  useEffect(() => {
    setLinks(NavbarLinks);
  }, []);

  return (
    <nav className={`w-full p-0 m-0 relative ${dark ? 'bg-primary-dark' : 'bg-primary-light'} `}>
      <div className='w-full flex flex-col sm:flex-row justify-between align-center p-3 sm:p-4 md:p-7 lg:p-11'>
        
        <div className='flex p-6 sm:p-0 gap-4 w-full align-center justify-start'>
          <Image className='hidden md:block' src='/logo.png' width={45} height={100} alt='logo'></Image>
          
          {/* NAVBAR LINKS */}
          <div className='flex sm:flex-row align-center justify-center gap-4 flex-wrap'>
            {links.map((link, index) => (
              <a key={index} href={link.link} 
              className='tracking-wider font-extrabold text-sm sm:text-base md:text-lg '>
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
