import Navbar from '../components/global/Navbar'
import Footer from '../components/global/Footer'
import Textbox from '../components/playground/Textbox'
const Playground = () => {
  return (
    <div className='w-full h-screen bg-primary-background text-secondary-white flex flex-col justify-start pt-2 items-center'>
      
      <Navbar/>
      <Textbox/>
      <Footer/>
    </div>
  )
}

export default Playground
