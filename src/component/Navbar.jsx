import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import { useState } from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <div className='absolute z-50'>
  <div className='absolute inset-x-0 top-0'>
    <div className='bg-white  fixed  w-screen  top-0  '>
    <div className=' lg:mx-0 xl:mx-56 mx-7 mt-6 h-full   '>
      <div className='hidden xl:grid xl:grid-cols-3 gap-24'>
      <div className=" hidden md:flex md:items-center ">
        <img src="/img/LOGO.png" alt="Company Logo" className='  xl:w-[190px] xl:h-[77px] ' />
      </div>


      <div className={`md:flex hidden mt-5 gap-9`}>
      <NavLink 
      to="/" 
      className={({ isActive }) => isActive ? 'text-2xl font-bold relative' : 'text-2xl relative'}
    >
      {({ isActive }) => (
        <motion.div 
          initial={{ borderBottomWidth: isActive ? '' : '0px', borderColor: isActive ? '#ff6600' : 'transparent', width: isActive ? '50%' : '0%' }} // Full line if active, none if inactive
          whileHover={{ borderBottomWidth: '2px', borderColor: '#ff6600', width: '50%' }} 
          transition={{ duration: 0.4 }}
          style={{ borderBottomStyle: 'solid' }} 
        >
          Home
        </motion.div>
      )}
    </NavLink>
    <NavLink 
      to="/about" 
      className={({ isActive }) => isActive ? 'text-2xl font-bold relative' : 'text-2xl relative'}
    >
      {({ isActive }) => (
        <motion.div 
          initial={{ borderBottomWidth: isActive ? '' : '0px', borderColor: isActive ? '#ff6600' : 'transparent', width: isActive ? '50%' : '0%' }} // Full line if active, none if inactive
          whileHover={{ borderBottomWidth: '2px', borderColor: '#ff6600', width: '50%' }} 
          transition={{ duration: 0.4 }}
          style={{ borderBottomStyle: 'solid' }} 
        >
          About
        </motion.div>
      )}
    </NavLink>
    <NavLink 
      to="/Education" 
      className={({ isActive }) => isActive ? 'text-2xl font-bold relative' : 'text-2xl relative'}
    >
      {({ isActive }) => (
        <motion.div 
          initial={{ borderBottomWidth: isActive ? '' : '0px', borderColor: isActive ? '#ff6600' : 'transparent', width: isActive ? '50%' : '0%' }} // Full line if active, none if inactive
          whileHover={{ borderBottomWidth: '2px', borderColor: '#ff6600', width: '50%' }} 
          transition={{ duration: 0.4 }}
          style={{ borderBottomStyle: 'solid' }} 
        >
          Education
        </motion.div>
      )}
    </NavLink>
    <NavLink 
      to="/Service" 
      className={({ isActive }) => isActive ? 'text-2xl font-bold relative' : 'text-2xl relative'}
    >
      {({ isActive }) => (
        <motion.div 
          initial={{ borderBottomWidth: isActive ? '' : '0px', borderColor: isActive ? '#ff6600' : 'transparent', width: isActive ? '50%' : '0%' }} // Full line if active, none if inactive
          whileHover={{ borderBottomWidth: '2px', borderColor: '#ff6600', width: '50%' }} 
          transition={{ duration: 0.4 }}
          style={{ borderBottomStyle: 'solid' }} 
        >
          Service
        </motion.div>
      )}
    </NavLink>
      </div>

     
      <motion.button
      className='hidden lg:block xl:h-[54px] xl:w-[171px] xl:border-2 xl:ml-32 xl:mt-3 xl:border-customOrange xl:text-customOrange'
      whileHover={{ 
        backgroundColor: 'rgba(255, 102, 0, 1)', 
        color: '#ffffff' 
      }}
      transition={{ duration: 0.5 }} 
    >
      Contact
    </motion.button>
      </div>
     

      <div className='lg:hidden mx-0 md:mx-10 flex items-center gap-24 md:gap-[500px] '>
        <img src="/img/LOGO.png" alt="Logo" className=' w-[172px]  h-[65px] md:w-[200px] md:h-[80px]' />
        <button onClick={handleOpen} className='bg-white shadow-md  p-2 rounded-md'>
          {open ? <FaTimes  className=' size-8 md:size-12' /> : <FaBars  className=' z-50 size-8 md:size-12 ' />}
        </button>
      </div>

   
      {open && (
        <div className="lg:hidden   top-0 inset-0 bg-white w-screen h-56 z-30 flex flex-col p-5 gap-5 mt-[20px] ml-0">
          <NavLink
            to="/"
            className={({ isActive }) => isActive ? 'text-2xl font-bold' : 'text-2xl'}
            onClick={() => setOpen(false)}
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) => isActive ? 'text-2xl font-bold' : 'text-2xl'}
            onClick={() => setOpen(false)}
          >
            About
          </NavLink>
          <NavLink
            to="/education"
            className={({ isActive }) => isActive ? 'text-2xl font-bold' : 'text-2xl'}
            onClick={() => setOpen(false)}
          >
            Education
          </NavLink>
          <NavLink
            to="/service"
            className={({ isActive }) => isActive ? 'text-2xl font-bold' : 'text-2xl'}
            onClick={() => setOpen(false)}
          >
            Service
          </NavLink>
        </div>
      )}
      </div>
    </div>
    </div>
    </div>
  );
};

export default Navbar;
