import React ,{useState} from 'react'
import {
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaLinkedinIn,
} from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import Logo from '../assets/logo3.png'
import{Link} from 'react-scroll'

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);


 
  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-5 bg-[#000000] text-white'>
      <div>
        <img src={Logo} alt="logo image" style={{width:'95px'}}/>
       </div>
       {/* menu */}
        <div>
         <ul className='hidden md:flex'>
            <li>
            <Link  to="home" smooth={true}  duration={500} >
          Home
        </Link>
            </li>
            <li>
            <Link  to="about" smooth={true}  duration={500} >
              About
            </Link>
            </li>
            <li><Link  to="skills" smooth={true}  duration={500} >
              Skills
            </Link>
            </li>
            <li><Link  to="work" smooth={true}  duration={500} >
              Work
            </Link>
            </li>
            <li><Link  to="contact" smooth={true}  duration={500} >
              Contact
            </Link>
            </li>
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
        <div className='hidden lg:flex fixed flex-col top-[35%] left-0 '>
        <ul className='font-light'>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='https://www.linkedin.com/dennis_shakava'
            >
              Linkedin <FaLinkedin size={25} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='https://github.com/shai9'
            >
              Github <FaGithub size={25} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='https://github.com/'
            >
              Email <HiOutlineMail size={25} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 '>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='/'
            >
              Resume <BsFillPersonLinesFill size={25} />
            </a>
          </li>
        </ul>
       
          
      </div>
    </div>
  );
}

export default Navbar