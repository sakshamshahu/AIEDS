import React, { useContext, useEffect, useState } from 'react'
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
  const { userInfo, UserDetailsFirebase, getuserinfo } = context!;

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const unsubscribe = auth.onAuthStateChanged(async (user) => {
  //       if (user) {
  //         // User is signed in
  //         setAuthCompleted(true);

  //         if (userInfo.userid === ""&& UserDetailsFirebase) {
  //           console.log("User is signed in, fetching user details...");

  //           const { uid, displayName, email, photoURL, metadata } = UserDetailsFirebase || {};
  //           if (uid && displayName && email && photoURL && metadata?.creationTime) {
  //             // Assuming getuserinfo handles fetching user details
  //             getuserinfo(uid, displayName, email, photoURL, metadata.creationTime);
  //           }
  //         }
  //       } else {
  //         // User is signed out
  //         setAuthCompleted(false);
  //         console.log("User is signed out, redirecting to login...");
  //         navigate("/login");
  //       }
  //     });

  //     return () => {
  //       unsubscribe();
  //     };
  //   };
  //   console.log(userInfo);
  //   if(userInfo.userid !== ""){
  //     fetchData();
  //   }
  // }, [navigate, userInfo, UserDetailsFirebase]);

  // Check authCompleted value
  useEffect(() => {
    console.log(userInfo);
  },[]);
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
