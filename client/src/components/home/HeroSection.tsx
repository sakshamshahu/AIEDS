import React from 'react'
import grid from "./../../assets/grid.svg"
import heroVector from "./../../assets/heroSectionVector.png"
const HeroSection = () => {
    return (
        <div className='relative flex justify-center items-center w-full h-[60rem]'>
            <div className='absolute left-[-23vh] top-[20vh] w-[17rem] h-[35rem] transform -rotate-98.5 flex-shrink-0 sphere1 opacity-10 animate-pulse-slow'></div>

            <div className='flex flex-col w-full items-center justify-start h-full mt-[6rem]'>
                <div className='font-redhat font-black text-[6rem] leading-none textbackground'>AIDES</div>
                <div className='font-redhat font-black text-[1.25rem]  leading-none text-primary-white'>Revise, Adapt, Unleash</div>
                <div className='flex justify-center items-center w-full h-[100vh] relative'>
                    <img src={grid} className='w-[70rem] translate-x-0 pr-[4rem] absolute' alt="grid_here" />
                    <img src={heroVector} className='w-[40rem] translate-x-6 z-5 pr-[4rem] absolute' alt="grid_here" />
                </div>
            </div>

            <div className='absolute right-[-23vh] top-[20vh] w-[17rem] h-[35rem] transform -rotate-98.5 flex-shrink-0 sphere1 opacity-10 animate-pulse-slow'></div>
            
        </div>
    )
}

export default HeroSection
