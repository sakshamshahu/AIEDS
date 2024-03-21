import React from 'react'
const Textbox = () => {
  return (
    <div className='mt-12 flex flex-col justify-start items-center gap-8 w-full h-fit mb-[50vh] '>
      <div className='flex justify-center items-center relative'  >
        <div className='z-5'><p className='font-natosans font-bold text-[2.5rem] text-center'>TYPE YOUR CONTENT/NOTES UP</p></div>
        {/* <div className='absolute right-[-3rem] top-0 z-0'>
          <svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M72 36C72 55.8823 55.8823 72 36 72C16.1177 72 0 55.8823 0 36C0 16.1177 16.1177 0 36 0C55.8823 0 72 16.1177 72 36Z" fill="#4EB5B5" />
          </svg>
        </div> */}
      </div>
      <div className='w-full h-fit flex flex-col justify-start items-center z-5'>
        <div className='textboxgradient p-2 w-[60rem] h-[25rem] bg-tertiary-background relative overflow-hidden z-0 mb-6'>
          <textarea className='rounded-[15px] absolute inset-0 w-[59rem] px-2 py-2 mx-3 h-full bg-transparent border-none outline-none resize-none scroll-px-6' placeholder='add your content here'></textarea>
        </div>
        <div>
          <button className='bg-primary-button-background flex justify-center items-center gap-[0.5rem] h-[3.3rem] px-[1.5rem] py-[1.1rem] rounded-[0.9rem]'>
            <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path id="Union" fill-rule="evenodd" clip-rule="evenodd" d="M1.26664 0H6.59997C6.96816 0 7.26664 0.298477 7.26664 0.666666V6C7.26664 6.36819 6.96816 6.66666 6.59997 6.66666H1.26664C0.898452 6.66666 0.599976 6.36819 0.599976 6V0.666666C0.599976 0.298477 0.898452 0 1.26664 0ZM10.6 0H15.9333C16.3015 0 16.6 0.298477 16.6 0.666666V6C16.6 6.36819 16.3015 6.66666 15.9333 6.66666H10.6C10.2318 6.66666 9.93333 6.36819 9.93333 6V0.666666C9.93333 0.298477 10.2318 0 10.6 0ZM6.59997 9.33335H1.26664C0.898452 9.33335 0.599976 9.63183 0.599976 10V15.3333C0.599976 15.7015 0.898452 16 1.26664 16H6.59997C6.96816 16 7.26664 15.7015 7.26664 15.3333V10C7.26664 9.63183 6.96816 9.33335 6.59997 9.33335ZM10.6 9.33335H15.9333C16.3015 9.33335 16.6 9.63183 16.6 10V15.3333C16.6 15.7015 16.3015 16 15.9333 16H10.6C10.2318 16 9.93333 15.7015 9.93333 15.3333V10C9.93333 9.63183 10.2318 9.33335 10.6 9.33335Z" fill="black" />
            </svg>

            <p className='text-black text-[1.3rem] font-natosans font-bold '>Process Content</p>
          </button>
          <p className=' text-[0.8rem] text-center font-natosans text-secondary-grey'>Process the context/text above</p>
        </div>

      </div>
    </div>
  )
}

export default Textbox
