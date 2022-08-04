import React from 'react'
import {FaBars, FaTimes} from 'react-icons/fa'
import Logo from '../assets/logo1.png'


function Navbar() {
  return (
    <div className='fixed w-full h-[180px] justify-between items-center px-4 bg bg-white text-gray-400'>
       <div>
        <img src={Logo} alt="logo image" style={{width:'95px'}}/>
       </div>
       {/* menu */}
       <div>
        <ul>
            <li>Home</li>
            <li>About</li>
            <li>Skills</li>
            <li>Work</li>
            <li>Contact</li>
        </ul>
       </div>
       {/* icons */}
       <div>
        <FaBars />
       </div>
    </div>
  )
}

export default Navbar