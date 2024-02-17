import { useState } from "react"
import "../index.css"

function BackgroundChanger() {
  const [color, setColor] = useState('white')

  return (
    <div className="w-screen h-screen" style={{ backgroundColor: color }}>

      <div className='center fade space-y-2 sm:space-y-3'>
        <h1 className="text-center">Background Changer</h1>
        <p>An application designed to dynamically alter the background color of a user interface according to specified preferences.</p>
      </div>

      <section className="absolute bottom-10 left-1/2 -translate-x-1/2 drop-shadow-md fadeIn">
        <span className="bg-green-400 cursor-pointer hover:bg-green-500 p-1 md:p-2 sm:p-3 text-sm sm:text-xl md:text-4xl rounded-l-lg" onClick={() => setColor("Green")}>Green</span>
        <span className="bg-orange-400 cursor-pointer hover:bg-orange-500 p-1 md:p-2 sm:p-3 text-sm sm:text-xl md:text-4xl" onClick={() => setColor("Orange")}>Orange</span>
        <span className="bg-amber-400 cursor-pointer hover:bg-amber-500 p-1 md:p-2 sm:p-3 text-sm sm:text-xl md:text-4xl" onClick={() => setColor("rgb(251 191 36)")}>Amber</span>
        <span className="bg-red-400 cursor-pointer hover:bg-red-500 p-1 md:p-2 sm:p-3 text-sm sm:text-xl md:text-4xl" onClick={() => setColor("Red")}>Red</span>
        <span className="bg-purple-400 cursor-pointer hover:bg-purple-500 p-1 md:p-2 sm:p-3 text-sm sm:text-xl md:text-4xl" onClick={() => setColor("Purple")}>Purple</span>
        <span className="bg-blue-400 cursor-pointer hover:bg-blue-500 p-1 md:p-2 sm:p-3 text-sm sm:text-xl md:text-4xl rounded-r-lg" onClick={() => setColor("Blue")}>Blue</span>
      </section>

    </div>
  )
}

export default BackgroundChanger
