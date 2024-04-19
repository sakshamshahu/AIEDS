import Navbar from '../components/global/Navbar'
import Footer from '../components/global/Footer'
import Textbox from '../components/playground/Textbox'
import { useAppSelector } from '../store/store';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import HistoryField from '../components/playground/HistoryField';
const Playground = () => {
  const users = useAppSelector(state => state.user);
  const navigate = useNavigate();
  useEffect(() => {
    if (users.userid == "") navigate("/login")
  }, [users])

  return (
    <div className='w-full h-screen bg-primary-background text-secondary-white flex flex-col justify-start pt-2 items-center'>

      <Navbar />
      <div className='relative w-[40rem] py-[4rem] '>
        <div className='absolute z-10 flex flex-col justify-center items-center w-full h-fit'>
          <p className=' text-[4rem] leading-none text-primary-white font-redhat font-extrabold'>LET'S DIVE IN:</p>
          <p className='text-[1.8rem] leading-none text-primary-white font-natosans font-extrabold'>Define your own learning journey</p>
        </div>
        <div className='absolute z-0 right-[4.2rem] top-[3.7rem]'>
          <svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M72 36C72 55.8823 55.8823 72 36 72C16.1177 72 0 55.8823 0 36C0 16.1177 16.1177 0 36 0C55.8823 0 72 16.1177 72 36Z" fill="#4EB5B5" />
          </svg>
        </div>
      </div>
      <div />
      <HistoryField />
      <Textbox />
      <Footer />
    </div>
  )
}

export default Playground
