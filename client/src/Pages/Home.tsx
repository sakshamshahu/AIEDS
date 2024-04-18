import React, { useContext, useEffect } from 'react'
import Navbar from '../components/global/Navbar'
import HeroSection from '../components/home/HeroSection'
import ContextSection from '../components/home/ContextSection'
import ExploreModel from '../components/home/ExploreModel'
import Footer from '../components/global/Footer'
import Team from '../components/home/Team'
import Reviews from '../components/home/Reviews'
import { useAppSelector } from '../store/store'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate();
  const users = useAppSelector(state=> state.user);

  useEffect(()=> {
    console.table(users);
    if(users.userid == "") navigate("/login")
  }, [users])

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
