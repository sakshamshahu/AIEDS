import React from 'react'
import Navbar from '../components/global/Navbar'
import HeroSection from '../components/home/HeroSection'
import ContextSection from '../components/home/ContextSection'
import ExploreModel from '../components/home/ExploreModel'
import Footer from '../components/global/Footer'

const Home = () => {
  return (
    <div className='text-[12vh] text-secondary-white bg-primary-background w-full h-fit flex flex-col justify-start items-center'>
      <Navbar/>
      <HeroSection/>
      <ContextSection/>
      <ExploreModel/>
      <Footer/>
    </div>
  )
}

export default Home
