import { useCallback, useEffect, useRef, useState } from 'react'
import './index.css'

function App() {
  let [num, setNum] = useState(false)
  let [char, setChar] = useState(false)
  let [password, setPassword] = useState("")
  let [length, setLength] = useState(8)
  let passwordRef = useRef(null)

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
    // passwordRef.current?.setSelectionRange(0, 1)
    window.navigator.clipboard.writeText(password)
  }

  return (
    <div className='w-screen h-screen bg-gray-700 text-white py-3'>
      <h1 className='text-center text-4xl font-semibold'>Password Generator</h1>
      <div className='bg-[#8d8d8d] flex flex-col items-center w-fit mx-auto p-4 rounded-md mt-2 space-y-2'>
        <div className=''>
          <input type="text" className='outline-none text-black rounded-l-md px-3 py-1' defaultValue={password} ref={passwordRef} readOnly />
          <button className='bg-blue-400 rounded-r-md px-3 py-1 cursor-pointer hover:bg-blue-500' onClick={copyPassword}>Copy</button>
        </div>
        <div className='flex space-x-5'>
          <span className='flex space-x-2'>
            <input type="range" min={8} max={20} onChange={(e) => setLength(() => e.target.value)} defaultValue={length} />
            <label>Length: {length}</label>
          </span>
          <span className='flex space-x-2'>
            <label>Numbers</label>
            <input type="checkbox" defaultChecked={num} onChange={() => setNum(prev => !prev)} />
          </span>
          <span className='flex space-x-2'>
            <label>Characters</label>
            <input type="checkbox" defaultChecked={char} onChange={() => setChar(prev => !prev)} />
          </span>
        </div>
      </div>
    </div>
  )
}

export default App
