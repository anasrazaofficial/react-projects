import { useCallback, useEffect, useRef, useState } from 'react'
import '../index.css'
import regenImg from '../Assets/reset.svg'

function PasswordGenerator() {
  const [main, setMain] = useState(false)
  let [num, setNum] = useState(false)
  let [char, setChar] = useState(false)
  let [password, setPassword] = useState("")
  let [length, setLength] = useState(8)
  let passwordRef = useRef(null)
  const initialRender = useRef(true)

  useEffect(() => {
    if (initialRender.current) {
      setTimeout(() => setMain(true), 7000);
      initialRender.current = false
    }
  }, [])

  let generatePassword = useCallback(() => {
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (num) str += '1234567890'
    if (char) str += '~!$%^&*()_-+={[}]|;<,>.'
    let pass = ""
    for (let i = 0; i < length; i++) {
      let e = Math.ceil(Math.random() * str.length)
      pass += str.charAt(e)
    }
    setPassword(pass)
  }, [num, char, length, setPassword])

  useEffect(() => generatePassword(), [num, char, length, generatePassword])

  let copyPassword = () => {
    console.log(passwordRef);
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password)
  }

  return (
    <div className='w-screen h-screen bg-[#222222] text-white py-3 flex justify-center items-center'>

      <div className='center fade space-y-2 sm:space-y-3'>
        <h1 className="text-center">Password Generator</h1>
        <p>A robust tool designed to generate strong, randomized passwords tailored to your specifications.</p>
      </div>

      {main && <div className='space-y-4'>
        <h1 className='text-center text-4xl font-semibold'>Password Generator</h1>
        <div className='bg-[#8d8d8d] w-fit mx-auto p-4 rounded-md mt-2 space-y-2'>
          <div className='flex items-center'>
            <input type="text" className='outline-none text-black rounded-l-md px-3 py-1 w-full' defaultValue={password} ref={passwordRef} readOnly />
            <button className='bg-blue-400 rounded-r-md px-3 py-1 cursor-pointer hover:bg-blue-500' onClick={copyPassword}>Copy</button>
            <button className='pl-2' onClick={generatePassword}><img src={regenImg} alt="" /></button>
          </div>
          <div className='flex gap-2 sm:gap-4 flex-col sm:flex-row'>
            <span className='flex items-center gap-1'>
              <label>Length: {length}</label>
              <input type="range" min={8} max={20} onChange={(e) => setLength(() => e.target.value)} defaultValue={length} />
            </span>
            <span className='flex items-center gap-1'>
              <label htmlFor='numbers'>Numbers</label>
              <input type="checkbox" id='numbers' name='numbers' defaultChecked={num} onChange={() => setNum(prev => !prev)} />
            </span>
            <span className='flex items-center gap-1'>
              <label htmlFor='characters'>Characters</label>
              <input type="checkbox" id='characters' name='characters' defaultChecked={char} onChange={() => setChar(prev => !prev)} />
            </span>
          </div>
        </div>
      </div>}

    </div>
  )
}

export default PasswordGenerator
