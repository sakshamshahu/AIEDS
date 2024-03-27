import rect from './../../assets/_Rect_.png'
import rect2 from './../../assets/_Rect_2.png'
import shape from './../../assets/_shape_.png'
const ExploreModel = () => {

  return (
    <div className='relative my-[7rem] w-full h-[65rem]'>
      {/* Background elements */}
      <div className='absolute z-0 w-fit h-fit top-[10rem] left-[15%] animate-bounce-slow translate-y-5'>
        <img src={rect} alt="recthere" />
      </div>
      <div className='absolute z-0 w-fit h-fit bottom-[7rem] right-[15%] animate-bounce-slow-late'>
        <img src={rect2} className='' alt="recthere" />
      </div>

      {/* Blur layer */}
      <div className='absolute z-1 w-full h-full flex justify-start items-center'>
        {Array.from({ length: window.innerWidth / 20 }, (_, index) => (
          <img key={index} src={shape} className="w-[2.7rem] h-full backdroper opacity-40" />
        ))}
      </div>

      {/* Text content */}
      <div className='absolute z-2 w-full h-full flex flex-col justify-center items-center'>
        <div className='text-primary-white font-plusjakarta font-bold w-[60rem] text-[5.5rem] text-center leading-[7rem]'>Control Knowledge.</div>
        <div className='text-primary-white font-plusjakarta font-bold w-[70rem] text-[3.8rem] text-center titletextbackground mb-12 leading-[5rem]'>Revise, Adapt, Unleash</div>
        <button className='py-3 px-12 flex justify-center items-center text-[2rem]  bordergradient rounded-[50px] bg-secondary-background font-plusjakarta font-bold text-primary-white mb-12'>
            EXPLORE MODEL
        </button>
        <p className='text-[1rem] w-[42rem] text-center font-plusjakarta font-medium text-primary-white'>Unlock the potential of AI-driven tools for seamless text interaction, efficient note taking, and effortless PDF uploads. Our AI model is designed to streamline your workflow and enhance productivity across various tasks.</p>
      </div>
    </div>
  )
}

export default ExploreModel
