import React from 'react'

let Home = () => {
  return (
    <div name ='home' className='w-full h-screen bg-black'>
      {/* container */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full '>
        <p className='text-white text-2xl'> Hello there, my name is, </p>
        <h1 className='text-6xl sm:text-7xl font-extrabold text-[#092bc2]'>Dennis Shakava</h1>
        <h2 className='text-4xl sm:text-4xl font-semicold text-white '>I'm a Full-Stack Developer.</h2>
        <p className='text-2xl sm:text-2xl font-light text-white '>Im a passionate Kenyan Software Developer. I'm a weird guy who likes   making weird things   with Web Languages.Currently, I'm focussed on building responsive full-stack web applications.When not working or futzing around with code, I study how we as humans function.</p>
    <div>
      <button className='text-white border-2 px-9 py-3 my-2 flex items-center hover:bg-[#0b31d8] hover:border-blue-600'>Work</button>
    </div>
      </div>
    </div>
  )
}

export default Home