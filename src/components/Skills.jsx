import React from 'react'
import Css from '../assets/css.png'
import GitHub from '../assets/github.png'
import HtmlImg from '../assets/htmlImg.png'
import Node from '../assets/node.png'
import ReactImg from '../assets/reactImg.png'
import Tailwind from '../assets/tailwind.png'
import Javascript from '../assets/javascript.png'

const Skills = () => {
  return (
    <div name='skills' className='w-full h-screen bg-black text-gray-300'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
          <div>
              <p className='text-4xl font-bold inline border-b-4 border-blue-600 '>Skills</p>
              <p className='py-4 text-justify text-2xl font-light'>These are some of the technologies I've worked with;</p>
          </div>

          <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
              <div className='shadow-md hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={HtmlImg} alt="HTML icon" />
                  <p className='my-4 font-light'>Html</p>
              </div>
              <div className='shadow-md hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={Css} alt="Css icon" />
                  <p className='my-4 font-light'>Css</p>
              </div>
              <div className='shadow-md hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={Javascript} alt="JavaScript icon" />
                  <p className='my-4 font-light'>JavaScript</p>
              </div>
              <div className='shadow-md hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={ReactImg} alt="React icon" />
                  <p className='my-4 font-light'>ReactJs</p>
              </div>
              <div className='shadow-md hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={Tailwind} alt="Tailwind icon" />
                  <p className='my-4 font-light'>Tailwind Css</p>
              </div>
              <div className='shadow-md hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={Node} alt="Node icon" />
                  <p className='my-4 font-light'>NodeJs</p>
              </div>
              <div className='shadow-md hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={GitHub} alt="GitHub icon" />
                  <p className='my-4 font-light'>GitHub</p>
              </div>
          </div>
      </div>
    </div>
  );
};

export default Skills;




