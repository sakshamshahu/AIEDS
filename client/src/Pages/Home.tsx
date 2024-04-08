import React, { useContext, useEffect } from 'react'
import Navbar from '../components/global/Navbar'
import HeroSection from '../components/home/HeroSection'
import ContextSection from '../components/home/ContextSection'
import ExploreModel from '../components/home/ExploreModel'
import Footer from '../components/global/Footer'
import Team from '../components/home/Team'
import Reviews from '../components/home/Reviews'
import { UserContext } from "../context/userContext";

const Home = () => {
  const context = useContext(UserContext);
  const { userInfo } = context!;

  useEffect(()=> {
    console.log(userInfo);
  }, [userInfo])

  return (
    <div className='text-[12vh] text-secondary-white bg-primary-background w-full h-fit flex flex-col justify-start items-center overflow-x-clip'>
      <Navbar/>
      <HeroSection/>
      <ContextSection/>
      <ExploreModel/>
      <Team/>
      <Reviews/>
      <Footer/>
    </div>
  )
}

export default Home
