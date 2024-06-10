import React from 'react';
import arrow from "../assets/arrow_icon.png";

const NavBar = () => {

  return (
    <nav className='flex sm:justify-between items-center mt-6 pb-6 sm:px-32 xs:px-12 border-b-2 border-gray-600'>
       <a href="/"><img src="logo.png" className='sm:mr-4' alt='logo'/></a>
    
       <ul className='sm:flex xs:hidden text-white text-center'>
        <li className='pr-10'><a href="/">Home</a></li>
        <li><a href="#pricing">Pricing</a></li>
       </ul>

       <div className='flex xs:items-center'>

       <button className=' bg-white flex items-center p-2 sm:px-6 xs:px-3 ml-3 sm:rounded-3xl xs:rounded-xl
        transition-all duration-1000 hover:bg-transparent hover:text-white border-2 border-white' >
         Sign Up <img className='ml-3 xs:hidden sm:block' src={arrow} alt="" />
       </button>
       
       </div>

    </nav>
  )
}

export default NavBar 