import React from 'react'

const  Contact = () => {
  return (
    <div name= 'contact' className='w-full h-screen bg-black flex justify-center items-center px-2'>
       <form method='POST' action='https://getform.io/f/ee34d153-01f4-49b9-97d9-f0f1524195f7' className='flex flex-col max-w-[950px] w-full'>
        <div className='pb-3'>
          <p className='text-4xl font-semibold inline border-b-4 border-blue-600 text-white'>
            Contact
          </p>
          <p className='text-white py-4 font-light text-2xl'>Fill and submit the form below or mail me - calmus885@gmail.com </p>
        </div>
        <input className='bg-[#4d5267] p-2' type="text" placeholder='Name' name='name' />
        <input className='my-4 p-2 bg-[#4e5260]' type="text" placeholder='Email' name='email' />
        <textarea className='bg-[#4e5367] p-2' name="message"  rows="10"></textarea>
        <button className='text-white border-2 hover:bg-blue-500 hover:border-blue-500 px-4 py-3 my-8 mx-auto flex items-center font-light'> Let's Link Up    </button>
       </form>
    </div>
  )
}

export default Contact