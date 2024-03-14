import React from 'react'
import Textbox from '../components/playground/Textbox'
import Navbar from '../components/global/Navbar'
const Playground = () => {
  return (
    <div className='w-full h-screen bg-primary-background text-secondary-white flex flex-col justify-start pt-2 items-center'>
      
      <Navbar/>
      <Textbox/>
      <Textbox/>
    </div>
  )
}

export default Playground
