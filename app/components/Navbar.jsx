import { assets } from '../../assets/assets.js';

import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'

const Navbar = () => {

  const [isScroll,setIsScroll] = useState(false);
  const sideMenuRef = useRef();

  const openMenu = ()=>{
    sideMenuRef.current.style.transform = "translateX(-16rem)"
  }

  const closeMenu = ()=>{
    sideMenuRef.current.style.transform = "translateX(16rem)"
  }

 useEffect(() => { 
  const handleScroll = () => {
    if (window.scrollY > 50) {
      setIsScroll(true);
    } else {
      setIsScroll(false);  // This was set to true for both conditions
    }
  };

  window.addEventListener('scroll', handleScroll);
  return () => window.removeEventListener('scroll', handleScroll);
}, []);




  return (
    <>
    
    <div className='fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%]'>
    <Image 
  src={assets.logo
  } 
  className="w-18 cursor-pointer mr-14"
  alt="logo"
  
/>
    </div>
    <nav className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 ${isScroll ? "bg-white/25 backdrop-blur-lg shadow-sm" : ""}`}>
      <a href='#top'>
        <Image src={assets.logo} className = 'w-18  cursor-pointer mr-14' alt = "logo"/>      
      
        </a>

        <ul className='hidden md:flex items-center gap-6 lg:gap-8
        rounded-full px-12 py-3 bg-white shadow-sm bg-opacity-25 '>
          
          <li><a href="#about"  className='font-Ovo'>About me</a></li>
          <li><a href="#services"  className='font-Ovo'>Services</a></li>
          <li><a href="#work"  className='font-Ovo'>My work</a></li>
          <li><a href="#contact"  className='font-Ovo'>Contact me</a></li>
        </ul>


        <div className='flex items-center gap-4 '>

          <button> 
            <Image src={assets.moon_icon} alt = '' className='w-6'/>
          </button>
          <a href="#contact" className='hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4
          font-Ovo'
          > Contact 
            <Image src={assets.arrow_icon} alt="" className="w-3" onClick={openMenu}/></a>

            <button className='block md:hidden ml-3' onClick={openMenu}>
            <Image src={assets.menu_black} alt="" className='w-6' />
            </button>
        </div>

        {/* mobile menu*/}
        <ul ref={sideMenuRef}className="flex md:hidden flex-col gap-4  py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 transition duration-500 ">
          
          <div className="absolute right-6 top-5" onClick={closeMenu}>
            <Image src={assets.close_black} alt="" className='w-5 cursor-pointer'/>
          </div>

          <li><a href="#about"  className='font-Ovo' onClick={closeMenu} >About me</a></li>
          <li><a href="#services"  className='font-Ovo' onClick={closeMenu}>Services</a></li>
          <li><a href="#work"  className='font-Ovo' onClick={closeMenu}>My work</a></li>
          <li><a href="#contact"  className='font-Ovo' onClick={closeMenu}>Contact me</a></li>

        </ul>
        
    </nav>
    </>
  )
}

export default Navbar