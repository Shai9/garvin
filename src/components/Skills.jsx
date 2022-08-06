import React from 'react'
import Css from '../assets/css.png'
import Github from '../assets/github.png'
import HtmlImg from '../assets/htmlImg.png'
import Node from '../assets/node.png'
import ReactImg from '../assets/reactImg.png'
import Tailwind from '../assets/tailwind.png'



const Skills = () => {
  return (
   <div name = 'skills' className='bg-black text-white '>
    {/* wrapper */}
     <div className='max-w[1000px] mx-auto p-4 flex-col justify-center w-full h-full' >
      <div className=''>
        <p className='text-4xl font-bold inline border-b-4 border-blue-600'>Experience</p>
        <p className='py-4'>// These are some of the technologies I've used</p>
      </div>
      <div className='w-full grid grid-cold-2 sm:grid-cols-4 gap-4 text-center py-8'>
        <div className='shadow-md shadow-black hover:scale-110 duration-400'>
          <img className='w-20 mx-auto' src= {HtmlImg} alt="Html icon" />
          <p>Html</p>
        </div>
      </div>
     </div>
   </div>
  )
}

export default Skills