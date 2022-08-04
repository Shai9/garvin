import React ,{useState} from 'react'
import {FaBars, FaTimes} from 'react-icons/fa'
import Logo from '../assets/logo1.png'

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);


 
  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-5 bg-[#0e284f] text-white'>
      <div>
        <img src={Logo} alt="logo image" style={{width:'95px'}}/>
       </div>
       {/* menu */}
        <div>
         <ul className='hidden md:flex'>
            <li>Home</li>
            <li>About</li>
            <li>Skills</li>
            <li>Work</li>
            <li>Contact</li>
         </ul>
        </div>
       {/* icons */}
       <div onClick = {handleClick} className='md:hidden z-10'>
        {!nav ? <FaBars /> : <FaTimes/>}
       </div>
       {/* mobile-menu*/}
       <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'}>
          <li className='py-6 text-4xl'>Home</li>
          <li className='py-6 text-4xl'>About</li>
          <li className='py-6 text-4xl'>Skills</li>
          <li className='py-6 text-4xl'>Work</li>
          <li className='py-6 text-4xl'>Contact</li>
       </ul> 
        {/*socials  */}
        <div className='hidden'>
          
      </div>
    </div>
  );
}

export default Navbar