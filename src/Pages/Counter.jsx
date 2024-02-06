import '../index.css'
import { useEffect, useRef, useState } from 'react'

import reset from '../Assets/reset.svg'
import info from '../Assets/info.svg'
import settings from '../Assets/settings.svg'
import plus from '../Assets/plus.svg'
import minus from '../Assets/minus.svg'
import portfolio from '../Assets/portfolio.svg'
import linkedin from '../Assets/linkedin.svg'
import github from '../Assets/github.svg'
import close from '../Assets/close.svg'


function Counter() {
  const [main, setMain] = useState(false)
  const [counter, setCounter] = useState(0)
  const [limit, setLimit] = useState('')
  const [theme, setTheme] = useState('#242526')
  const [textColor, setTextColor] = useState('white')
  const initialRender = useRef(true)

  useEffect(() => {
    if (initialRender.current) {
      setTimeout(() => setMain(true), 5000);
      initialRender.current = false
    }
  }, [])


  const toggleModal = (modal, toggler) => {
    if (toggler) {
      modal.showModal()
      setMain(false)
    } else {
      modal.close()
      setMain(true)
    }
  }

  const toggleMode = (bg, text) => {
    setTheme(bg)
    setTextColor(text)
  }

  return (
    <div className={`h-screen`} style={{ backgroundColor: theme, color: textColor }}>

      {/* Intro */}
      <div className='center fade space-y-2 sm:space-y-3'>
        <h1>Simple Couter App</h1>
        <p>A straightforward instrument for tallying items and maintaining numerical records.</p>
      </div>


      {main && <main className='display-content'>

        {/* Accessibility */}
        <section className='absolute top-4 left-1/2 -translate-x-1/2 flex gap-x-4'>
          <img src={info} className='size-5 cursor-pointer' alt="Info icon" onClick={() => toggleModal(infoModal, true)} />
          <img src={settings} className='size-5 cursor-pointer' alt="Settings icon" onClick={() => toggleModal(settingsModal, true)} />
          <img src={reset} className='size-5 cursor-pointer' onClick={() => {
            setCounter(0)
            setLimit('')
          }} alt="Reset icon" />
        </section>


        {/* Counter */}
        <section className='center flex justify-between items-center w-full px-5 sm:px-20'>
          <div className='hover:bg-[#ffffff24] cursor-pointer transition-colors rounded-full' onClick={() => setCounter(counter - 1)}>
            <img src={minus} className='w-16' alt="Minus icon" />
          </div>
          <h1>{counter}</h1>
          <div className='hover:bg-[#ffffff24] cursor-pointer transition-colors rounded-full' onClick={() => setCounter(counter + 1)}>
            <img src={plus} className='w-16' alt="Plus icon" />
          </div>
        </section>
        {limit != '' && <h2 className='absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-x-1 flex-col sm:flex-row text-center'>
          <span>Remaining Count</span>
          <span className='hidden sm:inline'>=</span>
          <span>{limit - counter}</span>
        </h2>}
      </main>}


      {/* Info Dialog */}
      <dialog id='infoModal' className={`center w-full p-5 mx-2 sm:mx-0 sm:p-20 sm:w-fit bg-transparent`} style={{ boxShadow: '0px 1px 10px -6px #ffffff5e', color: textColor }}>
        <img src={close} alt="" className='absolute top-2 right-5 cursor-pointer' onClick={() => toggleModal(infoModal, false)} />
        <h1 className='sm:text-nowrap text-center'>Simple Couter App</h1>
        <p className='sm:text-nowrap mt-2 sm:mt-3'>A straightforward instrument for tallying items and maintaining numerical records.</p>
        <div className='mt-3 sm:mt-5'>
          <p>Design by Syed Anas Raza</p>
          <div className='mt-1'>
            <span className='flex gap-x-2'>Visit portfolio ➡ <a href="https://discover-anas.vercel.app/"><img src={portfolio} alt="Portfolio icon" title='Portfolio' /></a></span>
            <span className='flex gap-x-2'>Visit Github ➡ <a href="https://github.com/anasrazaofficial"><img src={github} alt="Github icon" title='Github' /></a></span>
            <span className='flex gap-x-2'>Visit LinkedIn ➡ <a href="https://www.linkedin.com/in/syedanasraza"><img src={linkedin} alt="Linkedin icon" title='Linkedin' /></a></span>
          </div>
        </div>

      </dialog>


      {/* Settings Dialog */}
      <dialog id='settingsModal' className={`center w-full p-5 mx-2 sm:mx-0 sm:p-20 sm:w-fit bg-transparent`} style={{ boxShadow: '0px 1px 10px -6px #ffffff5e', color: textColor }}>
        <img src={close} alt="" className='absolute top-2 right-5 cursor-pointer' onClick={() => toggleModal(settingsModal, false)} />
        <h1 className='sm:text-nowrap text-center'>Settings</h1>
        <div className='mt-3 sm:mt-5'>
          <div className='mt-1 space-y-3 sm:space-y-5'>
            <div>
              <label htmlFor="count">Start count from = </label>
              <input type="number" name="count" id="count" value={counter} onChange={(e) => setCounter(Number(e.target.value))} placeholder='Enter starting number' className='px-4 py-2 rounded-md text-black' />
            </div>
            <div>
              <label htmlFor="limit">Counter limit = </label>
              <input type="number" name="limit" id="limit" value={limit} onChange={(e) => setLimit(Number(e.target.value))} placeholder='Enter ending limit' className='px-4 py-2 rounded-md text-black' />
            </div>
            <div>
              <span>Select Theme = </span>
              <div className='grid grid-cols-2 sm:grid-cols-4 gap-3 mt-2'>
                <div className='h-7 rounded cursor-pointer bg-white' onClick={() => toggleMode('#ffffff', 'black')}></div>
                <div className='h-7 rounded cursor-pointer bg-[#242526]' onClick={() => toggleMode('#242526', 'white')}></div>
                <div className='h-7 rounded cursor-pointer bg-orange-600' onClick={() => toggleMode('#ea580c', 'white')}></div>
                <div className='h-7 rounded cursor-pointer bg-red-600' onClick={() => toggleMode('#dc2626', 'white')}></div>
                <div className='h-7 rounded cursor-pointer bg-pink-600' onClick={() => toggleMode('#db2777', 'white')}></div>
                <div className='h-7 rounded cursor-pointer bg-purple-600' onClick={() => toggleMode('#9333ea', 'white')}></div>
                <div className='h-7 rounded cursor-pointer bg-blue-600' onClick={() => toggleMode('#2563eb', 'white')}></div>
                <div className='h-7 rounded cursor-pointer bg-green-600' onClick={() => toggleMode('#16a34a', 'white')}></div>
              </div>
            </div>

          </div>
        </div>

      </dialog>


    </div >
  )
}

export default Counter