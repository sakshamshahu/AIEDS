import { useNavigate } from "react-router-dom"


const Footer = () => {
    let navigate = useNavigate();
    return (
        <div className='z-10 w-full h-fit flex flex-col items-center justify-start px-[1.5rem] pt-[1.5rem] pb-[1rem] bg-footer-background'>
            <div className='h-[9rem] w-full max-w-[100rem] flex justify-between'>
                <div className='flex flex-col justify-start items-start gap-1'>
                    <a className='text-[1.1rem] font-natosans text-tertiary-grey cursor-pointer select-none' href="/">Home</a>
                    <a className='text-[1.1rem] font-natosans text-tertiary-grey' href="/playground">Playground</a>
                    <a className='text-[1.1rem] font-natosans text-tertiary-grey' href="/settings">Settings</a>
                    <a className='text-[1.1rem] font-natosans text-tertiary-grey' href="/docs">Docs</a>
                </div>
                <div className='flex flex-col justify-start items-start gap-1'>
                    <a className='text-[1.1rem] font-natosans text-tertiary-grey/80' href="https://github.com/sakshamshahu/AIEDS" target="_blank" rel="noopener noreferrer">GitHub</a>
                    <a className='text-[1.1rem] font-natosans text-tertiary-grey/80' href="/docs">FAQ</a>
                </div>
                <div className='flex flex-col justify-start items-start gap-1'>
                    <div className='font-redhat font-black text-[3vh] textbackground'>AIEDS</div>
                    <p className='text-[0.9rem] font-natosans text-tertiary-grey/80 mb-1'>hello@aides.com</p>
                    <p className='text-[1.3rem] font-natosans text-tertiary-grey'>+1 891 989-11-91</p>
                    <div className='flex justify-start items-center gap-3'>
                        <svg width="8" height="8" viewBox="0 0 8 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="4" cy="4" r="3.5" stroke="#2CD149" />
                        </svg>
                        <p className='text-[0.9rem] font-natosans text-tertiary-grey/80 mb-1'>WhatsApp</p>
                    </div>

                </div>
                <div className='flex flex-col justify-start items-start gap-1'>
                    <a className='border border-[#4A9292] border-1 px-[1.5rem] py-[0.6rem] text-[1rem] font-natosans text-tertiary-grey/80 rounded-lg' href="/playground">
                        Run our model
                    </a>
                </div>
            </div>
            {/* padding */}
            <div className='w-full h-[10rem]'></div>
            <div className='w-[85%] max-w-[100rem] h-fit border-t border-1 border-[#4A9292] border-opacity-40 flex justify-between items-center pt-3'>
                <p className='text-[0.9rem] font-natosans text-tertiary-grey-2/80 font-light'>© 2024 — Copyright</p>
                <p className='text-[0.9rem] font-natosans text-tertiary-grey-2/80 font-light'>Privacy</p>
            </div>
        </div>
    )
}

export default Footer
