import React from 'react'
import Navbar from '../components/global/Navbar'
import HeroSection from '../components/home/HeroSection'
import ContextSection from '../components/home/ContextSection'

const Home = () => {
  return (
    <div className='text-[12vh] text-secondary-white bg-primary-background w-full h-fit flex flex-col justify-start items-center'>
      <Navbar/>
      <HeroSection/>
      <ContextSection/>
    </div>
  )
}

export default Home
