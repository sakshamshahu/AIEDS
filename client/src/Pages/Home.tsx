import React from 'react'
import Navbar from '../components/global/Navbar'
import HeroSection from '../components/home/HeroSection'

const Home = () => {
  return (
    <div className='text-[12vh] text-secondary-white bg-primary-background w-full h-fit flex flex-col justify-start items-center'>
      <Navbar/>
      <HeroSection/>
    </div>
  )
}

export default Home
