import React from 'react'

let About = ()=> {
  return (
    <div name='about' className='w-full h-screen bg-black text-gray-200'>
    <div className='flex flex-col justify-center items-center w-full h-full'>
      <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
        <div className='sm:text-right pb-8 pl-4'>
          <p className='text-4xl font-bold inline border-b-4 border-blue-600'>
            About
          </p>
        </div>
        <div></div>
        </div>
        <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
          <div className='sm:text-4xl font-bold text-white'>
            <p>Hi. I'm Dennis, nice to meet you.Please take a look around.</p>
          </div>
          <div >
            <p className='text-justify text-2xl font-light'>I don't like to define myself by the work I've Done. I define myself by the work I want to do. What would you do if you had
            a software expert available at your fingertips?</p>  
          </div>
        </div>
    </div>
  </div>
);
};

export default About;