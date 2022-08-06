import React from 'react'
import Prj from '../assets/prj1.png'
import Prj2 from '../assets/prj2.png'

const Work= ()=> {
  return (
    <div name='work' className='w-full md:h-screen text-white bg-black'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-4'> 
          <p className='text-4xl font-bold inline border-b-4 text-white border-blue-600'>Work</p>
          <p className='py-6 font-light text-2xl'>Recent Work</p>
        </div>
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
          <div className='shado
          w-large shadow-blue-600 group container rounded-md flex justfy-center items-center mx-auto'>
            
            <div style={{backgroundImage: `url(${Prj})`}} className='shadow-lg shadow-black group container rounded-md flex justify-center items-center mx-auto content-div'>
              {/* hover */}
              <div className='opacity-0 group-hover:opacity-100'>
                <span className='text-2xl font-bold text-white tracking-wider'>JavaScript Application</span>
                  <div className='pt-8 text-center'>
                    <a href="/">
                      <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-blue-600 font-semibold  text-lg'>Demo</button>
                    </a>
                    <a href="/">
                      <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-blue-600 font-semibold text-lg'>Code</button>
                    </a>
                  </div>
              </div>
            </div>
            
          </div>
        </div>
      </div>


    </div>
  )
}

export default Work            