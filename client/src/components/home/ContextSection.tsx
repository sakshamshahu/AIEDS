import rectangle from "./../../assets/RectangleUp.svg"
const ContextSection = () => {
  return (
    <div className='w-full h-fit mt-[1rem] flex flex-col justify-center items-center'>
      <div className='relative w-[83rem] h-[38rem]'>
        <img src={rectangle} className="absolute w-[83rem]" alt="" />
        <div className="z-5 absolute w-full h-full flex flex-col justify-center items-center">
          <div className="py-1 px-4 flex justify-center items-center text-[0.8rem]  bordergradient rounded-2xl bg-secondary-background font-plusjakarta font-medium text-primary-white">
            Attention: AI Enthusiasts and Knowledge Seekers
          </div>
          <h1 className="text-primary-white font-plusjakarta font-bold w-[60rem] text-[3rem] text-center titletextbackground mt-1">Harness the Power of AI: <br /> Explore Chat, Notes, and PDF Upload Capabilities</h1>
          <p className='text-[1rem] text-primary-white w-[54rem] text-center font-plusjakarta drop-shadow-xl shadow-black mt-3'>Unlock the potential of AI-driven tools for seamless text interaction, efficient note-taking, and effortless PDF uploads. Our AI model is designed to streamline your workflow and enhance productivity across various tasks.</p>
          <button className="bg-white rounded-2xl text-black font-plusjakarta font-semibold text-[1rem] py-2 px-[4rem] mt-6">
            Start Now
          </button>
        </div>
      </div>
      <div className='my-6'>
        <p className='text-[1rem] blacktextbackground w-[54rem] text-center font-plusjakarta '>Experience the convenience and efficiency of AI-driven solutions tailored to meet your needs. Join countless users worldwide who rely on our platform for enhanced productivity and seamless integration of AI technologies.</p>
      </div>
      <div className='relative w-[83rem] h-[38rem]'>
        <img src={rectangle} className="absolute w-[83rem] rotate-180" alt="" />
        <div className="z-5 absolute w-full h-full flex flex-col justify-center items-center">
          <h1 className="text-primary-white font-plusjakarta font-bold w-[60rem] text-[3rem] text-center titletextbackground">Our Outcomes</h1>
          <p className='text-[1rem] text-primary-white w-[57rem] text-center font-plusjakarta drop-shadow-xl shadow-black mt-3'>Experience the benefits of our AI model with the assurance of at least a 3X return on investment, or your money back. We're committed to delivering results and providing you with the tools you need to thrive in an AI-driven world.</p>
          <div className="flex justify-center items-center w-full h-fit mt-12 gap-[2.4rem]">
              <div className="flex flex-col justify-center items-start gap-[1rem] contextboxbackground rounded-[1.5rem] w-[20rem] h-[20rem] border-[0.06px] border-gray-100 px-[1.9rem] py-[3.3rem] bg-opacity-10 border-opacity-30">
                <div className="w-[1rem] font-plusjakarta font-bold text-primary-white text-[1rem] contextboxtextshadow">1</div>
                <div className="w-fit font-plusjakarta font-bold text-primary-white text-[1.8rem]">Chats</div>
                <div className="w-[16rem] h-[6.7rem] text-[0.8rem] text-tertiary-white text-left">Engage in natural language conversations and receive insightful responses from our AI model. Whether you're seeking information, brainstorming ideas, or simply looking for a chat companion, our AI chat feature is here to assist you.</div>
              </div>
              <div className="flex flex-col justify-center items-start gap-[1rem] contextboxbackground rounded-[1.5rem] w-[20rem] h-[20rem] border-[0.06px] border-gray-100 px-[1.9rem] py-[3.3rem] bg-opacity-10 border-opacity-30">
                <div className="w-[1rem] font-plusjakarta font-bold text-primary-white text-[1rem] contextboxtextshadow">2</div>
                <div className="w-fit font-plusjakarta font-bold text-primary-white text-[1.8rem]">Notes</div>
                <div className="w-[16rem] h-[6.7rem] text-[0.8rem] text-tertiary-white text-left">Capture important points, ideas, and summaries with ease using our AI notetaker. Say goodbye to manual note-taking and let our AI model organize and consolidate information for you, allowing for better retention and accessibility.</div>
              </div>
              <div className="flex flex-col justify-center items-start gap-[1rem] contextboxbackground rounded-[1.5rem] w-[20rem] h-[20rem] border-[0.06px] border-gray-100 px-[1.9rem] py-[3.3rem] bg-opacity-10 border-opacity-30">
                <div className="w-[1rem] font-plusjakarta font-bold text-primary-white text-[1rem] contextboxtextshadow">3</div>
                <div className="w-fit font-plusjakarta font-bold text-primary-white text-[1.8rem]">PDFS</div>
                <div className="w-[16rem] h-[6.7rem] text-[0.8rem] text-tertiary-white text-left">Easily upload and manage your PDF documents with our intuitive AI-powered PDF uploader. Whether it's for reference, sharing, or archiving purposes, our platform simplifies the process, ensuring seamless integration and accessibility of your PDF resources.</div>
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContextSection
