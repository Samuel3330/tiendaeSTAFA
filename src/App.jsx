import { useState } from 'react'
import './App.css'
import Header from './Components/Header'
import { FaBars } from "react-icons/fa";


function App() {
  const [main, setMain] = useState(true)

  function desplegar() {
    return setMain(!main)
  }





  return (
    <>
      <button className={`fixed top-0 right-0  p-5 rounded-md z-10 ${main ? 'text-white bg-gray-700' : 'text-black bg-gray-100 '}`} onClick={desplegar}>
        <FaBars />
      </button>

      <div className={`h-[100vh] w-[30%] max-sm:w-[100%] bg-gray-700 fixed top-0 left-0 transition-all duration-[500ms]	 ${main == true ? '-translate-x-[100%]' : ' translate-x-0'}`}>
        <nav>
          <ul className='text-white flex justify-center items-center h-screen flex-col gap-10'>
            <li>Hola</li>
            <li>Contact</li>
            <li>About us=</li>
          </ul>
        </nav>
      </div>

      <section className='w-full bg-gray-500 flex justify-end'>
        <div className={`flex justify-center items-center flex-wrap gap-y-[70px] bg-gray-500 transition-all duration-[500ms]	 ${main ? 'w-full' : 'w-[70%] max-sm:w-full'}`}>
          <Header price='10$' image='1.png' description='Un zapato negro' />
          <Header price='1240$' image='2.png' description='Un zapato verde' />
          <Header price='1340$' image='3.png' description='Un zapato amarillo' />
          <Header price='1340$' image='3.png' description='Un zapato amarillo' />
          <Header price='13x40$' image='3.png' description='Un zapato amarillo' />
          <Header price='1340$' image='3.png' description='Un zapato amarillo' />
          <Header price='1340$' image='3.png' description='Un zapato amarillo' />


        </div>
      </section>








    </>
  )
}
export default App









{/*  */ }