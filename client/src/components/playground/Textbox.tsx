import React from 'react'
const Textbox = () => {
  return (
    <div className='my-[5rem] flex justify-center items-center gap-8 w-full h-fit'>
      <div className='w-[90%] h-fit flex flex-col justify-start items-center z-5 '>
        {/* menu */}
        <div className='flex justify-start items-center gap-6 w-full my-2'>
          <button className='font-poppins text-primary-white focus:bg-textbox-border px-3 py-1 bg-transparent rounded-full flex justify-center items-center transition ease-in-out duration-200'>Upload</button>
          <button className='font-poppins text-primary-white focus:bg-textbox-border px-3 py-1 bg-transparent rounded-full flex justify-center items-center transition ease-in-out duration-200'>Insights</button>

        </div>
        <div className='w-full h-fit flex gap-4 justify-center items-center'>
          <div className='border border-textbox-border border-1 rounded-[1rem]  w-[60rem] h-[40rem] bg-tertiary-background z-0 mb-6 flex flex-col justify-start items-start'>
            <div className='relative w-[59.5rem] h-[31rem] overflow-x-auto  mb-2'>
              <textarea className='rounded-[15px] absolute w-full inset-0 h-full bg-transparent border-none outline-none resize-none scroll-px-10 px-2 py-3' placeholder='add your content here'></textarea>
            </div>
            <div className='w-full h-[9rem] flex flex-col justify-start items-start gap-3 px-3 py-1'>
              <div className='bg-textbox-border text-primary-white flex justify-start items-center w-[7rem] h-[2.5rem] py-1 px-3 rounded-[1rem] gap-2'>
                <p className='font-natosans font-bold text-[1.25rem]'>LINKS</p>
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.2184 13.9041C10.3316 14.0174 10.3952 14.171 10.3952 14.3311C10.3952 14.4912 10.3316 14.6448 10.2184 14.758L9.46796 15.513C8.67433 16.3062 7.59813 16.7515 6.47611 16.7512C5.3541 16.7508 4.27818 16.3048 3.48505 15.5111C2.69191 14.7175 2.24653 13.6413 2.24689 12.5193C2.24724 11.3973 2.6933 10.3214 3.48693 9.52822L5.30797 7.70718C6.07027 6.94427 7.09531 6.50151 8.17332 6.46951C9.25134 6.43751 10.3008 6.81869 11.107 7.53504C11.1665 7.58779 11.215 7.65174 11.2498 7.72323C11.2846 7.79473 11.3049 7.87237 11.3097 7.95174C11.3145 8.0311 11.3036 8.11062 11.2776 8.18577C11.2516 8.26091 11.2111 8.3302 11.1584 8.38969C11.1056 8.44918 11.0417 8.4977 10.9702 8.53247C10.8987 8.56725 10.8211 8.5876 10.7417 8.59237C10.6623 8.59713 10.5828 8.58622 10.5077 8.56026C10.4325 8.53429 10.3632 8.49378 10.3037 8.44103C9.72792 7.92968 8.9785 7.65763 8.20875 7.6805C7.43899 7.70338 6.70705 8.01945 6.16262 8.5641L4.34158 10.3829C3.77511 10.9493 3.45688 11.7176 3.45688 12.5187C3.45688 13.3198 3.77511 14.0881 4.34158 14.6546C4.90805 15.2211 5.67634 15.5393 6.47745 15.5393C7.27855 15.5393 8.04685 15.2211 8.61331 14.6546L9.36377 13.9041C9.41987 13.848 9.48648 13.8034 9.5598 13.773C9.63313 13.7426 9.71172 13.727 9.7911 13.727C9.87047 13.727 9.94907 13.7426 10.0224 13.773C10.0957 13.8034 10.1623 13.848 10.2184 13.9041ZM15.5094 3.48528C14.7156 2.69331 13.6401 2.24854 12.5189 2.24854C11.3976 2.24854 10.3221 2.69331 9.52836 3.48528L8.7779 4.23649C8.66467 4.34983 8.60109 4.5035 8.60116 4.66371C8.60123 4.82392 8.66494 4.97753 8.77828 5.09077C8.89161 5.204 9.04528 5.26757 9.20549 5.2675C9.3657 5.26743 9.51932 5.20372 9.63255 5.09039L10.383 4.33993C10.9495 3.77346 11.7178 3.45522 12.5189 3.45522C13.32 3.45522 14.0883 3.77346 14.6547 4.33993C15.2212 4.9064 15.5394 5.67469 15.5394 6.47579C15.5394 7.2769 15.2212 8.04519 14.6547 8.61166L12.8337 10.4342C12.289 10.9785 11.5569 11.2942 10.7871 11.3166C10.0174 11.3391 9.26812 11.0666 8.69259 10.555C8.57245 10.4485 8.41491 10.394 8.25463 10.4037C8.09435 10.4133 7.94446 10.4862 7.83794 10.6063C7.73141 10.7265 7.67698 10.884 7.6866 11.0443C7.69623 11.2046 7.76914 11.3545 7.88928 11.461C8.6953 12.1775 9.74469 12.559 10.8227 12.5273C11.9007 12.4955 12.9259 12.0531 13.6884 11.2904L15.5094 9.46933C16.3018 8.67552 16.7469 7.5997 16.7469 6.47806C16.7469 5.35641 16.3018 4.2806 15.5094 3.48679V3.48528Z" fill="white" />
                </svg>
              </div>
              <div className='w-full h-[6.3rem] border rounded-[0.5rem] mr-2 mb-2 border-textbox-border'>

              </div>
            </div>
          </div>
        </div>
        <div>
          <button className='bg-primary-button-background flex justify-center items-center gap-[0.5rem] h-[3.3rem] px-[1.5rem] py-[1.1rem] rounded-[0.9rem] '>
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
