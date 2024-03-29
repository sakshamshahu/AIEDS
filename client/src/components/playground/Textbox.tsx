import React, { useEffect, useState } from 'react'
const Textbox = () => {
  const [menuOption, setMenuOption] = useState(0);
  useEffect(() => {
    console.log(menuOption)
  }, [menuOption])
  return (
    <div className='my-[5rem] flex justify-center items-center gap-8 w-full h-fit'>
      <div className='w-[90%] h-fit flex flex-col justify-start items-center z-5 '>
        {/* menu */}
        <div className='flex justify-start items-center gap-6 w-full my-2'>
          <button className='font-poppins text-primary-white focus:bg-textbox-border px-3 py-1 bg-transparent rounded-full flex justify-center items-center transition ease-in-out duration-200' onClick={() => setMenuOption(0)}>Upload</button>
          <button className='font-poppins text-primary-white focus:bg-textbox-border px-3 py-1 bg-transparent rounded-full flex justify-center items-center transition ease-in-out duration-200' onClick={() => setMenuOption(1)}>Insights</button>
        </div>
        <div className='w-full h-fit flex gap-4 justify-between items-start mb-12'>
          <div className='w-[180rem] h-fit flex flex-col justify-center items-center'>
            <div className='border border-textbox-border border-1 rounded-[1rem] w-full 2xl:h-[55rem] h-[50rem] bg-tertiary-background z-0 mb-6 flex flex-col justify-between items-start'>
              <div className='relative w-full h-full overflow-x-auto  mb-2'>
                {menuOption === 0 ?
                  // when we have upload content up
                  <textarea className='rounded-[15px] absolute w-full inset-0 h-full bg-transparent border-none outline-none resize-none scroll-px-10 px-2 py-3 text-[1.2rem]' placeholder='add your content here'></textarea>
                  :
                  // when we have insights content up
                  <textarea className='rounded-[15px] absolute w-full inset-0 h-full bg-transparent border-none outline-none resize-none scroll-px-10 px-2 py-3 text-[1.2rem]' placeholder='add your content here'></textarea>

                }
              </div>
              <div className='w-full h-fit flex flex-col justify-start items-start gap-3 px-3 py-1 mb-2'>
                <div className='bg-textbox-border text-primary-white flex justify-start items-center w-fit h-[2.5rem] py-1 px-3 rounded-[1rem] gap-2'>
                  <p className='font-natosans font-bold text-[1.25rem]'>
                    {menuOption === 0 ? "SELECTED FILES" : "LINKS"}
                  </p>
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.2184 13.9041C10.3316 14.0174 10.3952 14.171 10.3952 14.3311C10.3952 14.4912 10.3316 14.6448 10.2184 14.758L9.46796 15.513C8.67433 16.3062 7.59813 16.7515 6.47611 16.7512C5.3541 16.7508 4.27818 16.3048 3.48505 15.5111C2.69191 14.7175 2.24653 13.6413 2.24689 12.5193C2.24724 11.3973 2.6933 10.3214 3.48693 9.52822L5.30797 7.70718C6.07027 6.94427 7.09531 6.50151 8.17332 6.46951C9.25134 6.43751 10.3008 6.81869 11.107 7.53504C11.1665 7.58779 11.215 7.65174 11.2498 7.72323C11.2846 7.79473 11.3049 7.87237 11.3097 7.95174C11.3145 8.0311 11.3036 8.11062 11.2776 8.18577C11.2516 8.26091 11.2111 8.3302 11.1584 8.38969C11.1056 8.44918 11.0417 8.4977 10.9702 8.53247C10.8987 8.56725 10.8211 8.5876 10.7417 8.59237C10.6623 8.59713 10.5828 8.58622 10.5077 8.56026C10.4325 8.53429 10.3632 8.49378 10.3037 8.44103C9.72792 7.92968 8.9785 7.65763 8.20875 7.6805C7.43899 7.70338 6.70705 8.01945 6.16262 8.5641L4.34158 10.3829C3.77511 10.9493 3.45688 11.7176 3.45688 12.5187C3.45688 13.3198 3.77511 14.0881 4.34158 14.6546C4.90805 15.2211 5.67634 15.5393 6.47745 15.5393C7.27855 15.5393 8.04685 15.2211 8.61331 14.6546L9.36377 13.9041C9.41987 13.848 9.48648 13.8034 9.5598 13.773C9.63313 13.7426 9.71172 13.727 9.7911 13.727C9.87047 13.727 9.94907 13.7426 10.0224 13.773C10.0957 13.8034 10.1623 13.848 10.2184 13.9041ZM15.5094 3.48528C14.7156 2.69331 13.6401 2.24854 12.5189 2.24854C11.3976 2.24854 10.3221 2.69331 9.52836 3.48528L8.7779 4.23649C8.66467 4.34983 8.60109 4.5035 8.60116 4.66371C8.60123 4.82392 8.66494 4.97753 8.77828 5.09077C8.89161 5.204 9.04528 5.26757 9.20549 5.2675C9.3657 5.26743 9.51932 5.20372 9.63255 5.09039L10.383 4.33993C10.9495 3.77346 11.7178 3.45522 12.5189 3.45522C13.32 3.45522 14.0883 3.77346 14.6547 4.33993C15.2212 4.9064 15.5394 5.67469 15.5394 6.47579C15.5394 7.2769 15.2212 8.04519 14.6547 8.61166L12.8337 10.4342C12.289 10.9785 11.5569 11.2942 10.7871 11.3166C10.0174 11.3391 9.26812 11.0666 8.69259 10.555C8.57245 10.4485 8.41491 10.394 8.25463 10.4037C8.09435 10.4133 7.94446 10.4862 7.83794 10.6063C7.73141 10.7265 7.67698 10.884 7.6866 11.0443C7.69623 11.2046 7.76914 11.3545 7.88928 11.461C8.6953 12.1775 9.74469 12.559 10.8227 12.5273C11.9007 12.4955 12.9259 12.0531 13.6884 11.2904L15.5094 9.46933C16.3018 8.67552 16.7469 7.5997 16.7469 6.47806C16.7469 5.35641 16.3018 4.2806 15.5094 3.48679V3.48528Z" fill="white" />
                  </svg>
                </div>
                <div className='w-full h-fit max-h-[7rem] border rounded-[0.8rem] mr-2 border-textbox-border flex justify-start items-start overflow-y-auto flex-wrap px-2 py-2 gap-2'>
                  {menuOption === 0 ?
                    <>
                      {/* TODO: make a content removing panel here  */}
                      <div className='rounded-2xl border border-textbox-border border-1 w-fit h-fit padding px-4 py-[6px] bg-textbox-background'>
                        <p className='text-primary-white font-natosans font-bold text-[1.2rem] leading-none'>PDF File 01.pdf</p>
                      </div>
                      <div className='rounded-2xl border border-textbox-border border-1 w-fit h-fit padding px-4 py-[6px] bg-textbox-background'>
                        <p className='text-primary-white font-natosans font-bold text-[1.2rem] leading-none'>PDF File 01.pdf</p>
                      </div>
                      <div className='rounded-2xl border border-textbox-border border-1 w-fit h-fit padding px-4 py-[6px] bg-textbox-background'>
                        <p className='text-primary-white font-natosans font-bold text-[1.2rem] leading-none'>PDF File 01.pdf</p>
                      </div>
                      <div className='rounded-2xl border border-textbox-border border-1 w-fit h-fit padding px-4 py-[6px] bg-textbox-background'>
                        <p className='text-primary-white font-natosans font-bold text-[1.2rem] leading-none'>PDF File 01.pdf</p>
                      </div>
                    </>
                    :
                    <>
                      <div className='rounded-2xl border border-textbox-border border-1 w-fit h-fit padding px-4 py-[6px] bg-textbox-background'>
                        <p className='text-primary-white font-natosans font-bold text-[1.2rem] leading-none'>NOOB</p>
                      </div>
                      <div className='rounded-2xl border border-textbox-border border-1 w-fit h-fit padding px-4 py-[6px] bg-textbox-background'>
                        <p className='text-primary-white font-natosans font-bold text-[1.2rem] leading-none'>Sid the Sloth</p>
                      </div>
                      <div className='rounded-2xl border border-textbox-border border-1 w-fit h-fit padding px-4 py-[6px] bg-textbox-background'>
                        <p className='text-primary-white font-natosans font-bold text-[1.2rem] leading-none'>Asha is mine</p>
                      </div>
                      <div className='rounded-2xl border border-textbox-border border-1 w-fit h-fit padding px-4 py-[6px] bg-textbox-background'>
                        <p className='text-primary-white font-natosans font-bold text-[1.2rem] leading-none'>HSM</p>
                      </div>
                      <div className='rounded-2xl border border-textbox-border border-1 w-fit h-fit padding px-4 py-[6px] bg-textbox-background'>
                        <p className='text-primary-white font-natosans font-bold text-[1.2rem] leading-none'>saksham</p>
                      </div>
                      <div className='rounded-2xl border border-textbox-border border-1 w-fit h-fit padding px-4 py-[6px] bg-textbox-background'>
                        <p className='text-primary-white font-natosans font-bold text-[1.2rem] leading-none'>taker</p>
                      </div>
                      <div className='rounded-2xl border border-textbox-border border-1 w-fit h-fit padding px-4 py-[6px] bg-textbox-background'>
                        <p className='text-primary-white font-natosans font-bold text-[1.2rem] leading-none'>giver</p>
                      </div></>}
                </div>
              </div>
            </div>
            <div className='relative px-2 w-full flex justify-end items-center h-[3rem]'>
              <button className='absolute left-[30%] bg-primary-button-background flex justify-center items-center gap-[0.5rem] h-[4rem] px-[1.5rem] w-[24rem] py-[1.1rem] rounded-[0.9rem] '>
                <svg width="25" height="25" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path id="Union" fill-rule="evenodd" clip-rule="evenodd" d="M1.26664 0H6.59997C6.96816 0 7.26664 0.298477 7.26664 0.666666V6C7.26664 6.36819 6.96816 6.66666 6.59997 6.66666H1.26664C0.898452 6.66666 0.599976 6.36819 0.599976 6V0.666666C0.599976 0.298477 0.898452 0 1.26664 0ZM10.6 0H15.9333C16.3015 0 16.6 0.298477 16.6 0.666666V6C16.6 6.36819 16.3015 6.66666 15.9333 6.66666H10.6C10.2318 6.66666 9.93333 6.36819 9.93333 6V0.666666C9.93333 0.298477 10.2318 0 10.6 0ZM6.59997 9.33335H1.26664C0.898452 9.33335 0.599976 9.63183 0.599976 10V15.3333C0.599976 15.7015 0.898452 16 1.26664 16H6.59997C6.96816 16 7.26664 15.7015 7.26664 15.3333V10C7.26664 9.63183 6.96816 9.33335 6.59997 9.33335ZM10.6 9.33335H15.9333C16.3015 9.33335 16.6 9.63183 16.6 10V15.3333C16.6 15.7015 16.3015 16 15.9333 16H10.6C10.2318 16 9.93333 15.7015 9.93333 15.3333V10C9.93333 9.63183 10.2318 9.33335 10.6 9.33335Z" fill="black" />
                </svg>

                <p className='text-black text-[1.8rem] font-natosans font-semibold '>Process Content</p>
              </button>
              {menuOption === 1 &&
                <button id="dropdownHoverButton" data-dropdown-toggle="dropdownHover" data-dropdown-trigger="hover" className='border border-textbox-border border-1 flex justify-center items-center w-fit px-3 h-[3rem] rounded-md'>
                  <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M5.70711 9.71069C5.31658 10.1012 5.31658 10.7344 5.70711 11.1249L10.5993 16.0123C11.3805 16.7927 12.6463 16.7924 13.4271 16.0117L18.3174 11.1213C18.708 10.7308 18.708 10.0976 18.3174 9.70708C17.9269 9.31655 17.2937 9.31655 16.9032 9.70708L12.7176 13.8927C12.3271 14.2833 11.6939 14.2832 11.3034 13.8927L7.12132 9.71069C6.7308 9.32016 6.09763 9.32016 5.70711 9.71069Z" fill="#ffffff" data-darkreader-inline-fill=""></path> </g></svg>
                  <p className='text-primary-white text-[1rem] font-natosans font-semibold'>MARKDOWN</p>
                </button>
              }
            </div>
          </div>
          <div className='border border-textbox-border border-1 rounded-[1rem] w-full 2xl:h-[55rem] h-[50rem] bg-tertiary-background z-0 mb-6 flex flex-col justify-between items-start'>
            {menuOption === 0 ?
              <div className='w-full h-full flex flex-col justify-start items-start gap-3 px-3 pt-3'>
                <div className='bg-textbox-border text-primary-white flex justify-start items-center w-fit h-[2.5rem] py-1 px-3 rounded-[1rem] gap-2'>
                  <p className='font-natosans font-bold text-[1.25rem]'>UPLOAD YOUR CONTENT</p>
                </div>
                <div className='w-full h-fit flex flex-col justify-center items-center'>
                  <button className='w-[30rem] border border-white border-dashed border-1 rounded-[10px] h-[13rem] flex justify-center items-center'>
                    <svg width="50" height="53" viewBox="0 0 50 53" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="25" cy="28" r="25" fill="#EDEDED" />
                      <path d="M23.604 38.076H27.564V30.408H34.836V26.664H27.564V18.996H23.604V26.664H16.368V30.408H23.604V38.076Z" fill="#454545" />
                    </svg>
                  </button>
                  <button className='bg-primary-button-background flex justify-center items-center gap-[0.5rem] h-[2.7  rem] px-[1.5rem] w-[16rem] py-1 rounded-[0.9rem] mt-5'>
                    <p className='text-black text-[1.5rem] font-natosans font-semibold '>Upload File</p>
                  </button>
                </div>
                <div className='w-full h-full z-0 mb-6 mt-2 flex flex-col justify-between items-start px-2'>
                  <div className='w-full h-[31rem] my-2 flex flex-col justify-start items-start overflow-y-auto gap-3'>
                    <div className='w-full h-fit flex justify-between items-center px-2'>
                      <div className='w-fit h-fit flex justify-end items-center gap-3'>
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <g id="Group 2">
                            <circle id="Ellipse 2" cx="6" cy="6" r="6" fill="#CFCFCF" />
                          </g>
                        </svg>
                        <p className='text-primary-white font-natosans'>PDF File 01.pdf</p>
                      </div>
                      <div className='w-fit h-fit flex justify-start items-center gap-8'>
                        <p className='text-primary-white opacity-50 font-natosans'>10 Mar 2024</p>
                        <p className='text-primary-white font-natosans'>146.5 KiB</p>
                        <div className='bg-[#2EBDBD] rounded-[2px] w-[5.6rem] h-[2rem] flex justify-center items-center'>
                          <p className='font-extrabold text-black'>READY</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              :
              <div className='w-full h-full flex flex-col justify-start items-start gap-3 px-3 pt-3'>
                <div className='bg-textbox-border text-primary-white flex justify-start items-center w-[7rem] h-[2.5rem] py-1 px-3 rounded-[1rem] gap-2'>
                  <p className='font-natosans font-bold text-[1.25rem]'>CHAT</p>
                  <svg viewBox="0 0 24 24" className='w-6 h-6' fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M13.6288 20.4718L13.0867 21.3877C12.6035 22.204 11.3965 22.204 10.9133 21.3877L10.3712 20.4718C9.95073 19.7614 9.74049 19.4063 9.40279 19.2098C9.06509 19.0134 8.63992 19.0061 7.78958 18.9915C6.53422 18.9698 5.74689 18.8929 5.08658 18.6194C3.86144 18.1119 2.88807 17.1386 2.3806 15.9134C2 14.9946 2 13.8297 2 11.5V10.5C2 7.22657 2 5.58985 2.7368 4.38751C3.14908 3.71473 3.71473 3.14908 4.38751 2.7368C5.58985 2 7.22657 2 10.5 2H13.5C16.7734 2 18.4101 2 19.6125 2.7368C20.2853 3.14908 20.8509 3.71473 21.2632 4.38751C22 5.58985 22 7.22657 22 10.5V11.5C22 13.8297 22 14.9946 21.6194 15.9134C21.1119 17.1386 20.1386 18.1119 18.9134 18.6194C18.2531 18.8929 17.4658 18.9698 16.2104 18.9915C15.36 19.0061 14.9349 19.0134 14.5972 19.2098C14.2595 19.4062 14.0492 19.7614 13.6288 20.4718Z" fill="#ffffff"></path> </g></svg>
                </div>
                <div className='border border-textbox-border border-1 rounded-[1rem] w-full h-[50.5rem] bg-tertiary-background z-0 mb-6 flex flex-col justify-between items-start px-2'>
                  <div className='w-full h-full px-2 my-2 flex flex-col justify-start items-start gap-3 overflow-y-auto'>
                    <div className='w-full h-fit flex justify-start items-center'>
                      <p className='bg-textbox-background w-fit h-fit px-3 py-1 font-natosans font-mdeium rounded-[20px] text-primary-white'>unknown printer took a galley</p>
                    </div>
                    <div className='w-full h-fit flex justify-start items-center'>
                      <p className='bg-textbox-background w-fit h-fit px-3 py-1 font-natosans font-mdeium rounded-[20px] text-primary-white'>unknown printer took a galley of</p>
                    </div>
                    <div className='w-full h-fit flex justify-start items-center'>
                      <p className='bg-textbox-background w-fit h-fit px-3 py-1 font-natosans font-mdeium rounded-[20px] text-primary-white'>survived not  only five centuries, but also the leap into electronic typesetting,  remaining essentially unchanged. It was popularised hi these</p>
                    </div>
                    <div className='w-full h-fit flex justify-end items-center'>
                      <p className='bg-textbox-border w-fit h-fit px-3 py-1 font-natosans font-mdeium rounded-[20px] text-primary-white'>survived not  only five centuries, but also the leap into </p>
                    </div>
                  </div>
                  <div className='py-1 px-2 w-full h-[3.5rem] mb-1'>
                    <div className='w-full h-full border border-textbox-border border-1 rounded-[10px] flex justify-between items-center px-2 bg-textbox-background/10'>
                        <div className='w-full h-full px-2 overflow-y-auto'>
                          <input type="text" className='w-full h-full px-1 bg-transparent outline-none text-primary-white text-[1.1rem] placeholder:opacity-60' placeholder='Hey! This is good!!' />
                        </div>
                        <button className='bg-white disabled rounded-lg w-[2rem] h-[2rem] disabled:opacity-20'>
                          <svg viewBox="0 0 24 24" className="w-[2rem] text-black" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M5.00003 14.9968C5.41424 14.9968 5.75003 15.3326 5.75003 15.7468V18C5.75003 18.1381 5.86196 18.25 6.00003 18.25H18C18.1381 18.25 18.25 18.1381 18.25 18V15.7468C18.25 15.3326 18.5858 14.9968 19 14.9968C19.4142 14.9968 19.75 15.3326 19.75 15.7468V18C19.75 18.9665 18.9665 19.75 18 19.75H6.00003C5.03353 19.75 4.25003 18.9665 4.25003 18V15.7468C4.25003 15.3326 4.58582 14.9968 5.00003 14.9968Z" fill="currentColor"></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M12.2023 5.58088C12.6165 5.58088 12.9523 5.91667 12.9523 6.33088V14.4165C12.9523 14.8307 12.6165 15.1665 12.2023 15.1665C11.7881 15.1665 11.4523 14.8307 11.4523 14.4165V6.33088C11.4523 5.91667 11.7881 5.58088 12.2023 5.58088Z" fill="currentColor"></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M11.678 4.46356C11.9694 4.17885 12.4348 4.17885 12.7262 4.46356L16.0701 7.73038C16.3663 8.01984 16.3719 8.49468 16.0824 8.79097C15.7929 9.08725 15.3181 9.09278 15.0218 8.80332L12.2021 6.04855L9.38239 8.80332C9.08611 9.09278 8.61127 9.08725 8.32181 8.79097C8.03234 8.49468 8.03787 8.01984 8.33416 7.73038L11.678 4.46356Z" fill="currentColor"></path> </g></svg>
                        </button>
                      </div>
                    </div>
                  </div>
              </div>}
          </div>
        </div>
      </div>
    </div >
  )
}

export default Textbox
