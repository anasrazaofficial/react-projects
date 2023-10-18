import { useState } from "react"
import "./index.css"

function App() {
  const [color, setColor] = useState('white')

  return (
    <div className="w-screen h-screen" style={{ backgroundColor: color }}>
      <section className="absolute bottom-10 left-1/2 -translate-x-1/2 drop-shadow-md">
        <span className="bg-green-400 cursor-pointer hover:bg-green-500 px-2 py-1 rounded-l-lg" onClick={() => setColor("Green")}>Green</span>
        <span className="bg-orange-400 cursor-pointer hover:bg-orange-500 px-2 py-1" onClick={() => setColor("Orange")}>Orange</span>
        <span className="bg-amber-400 cursor-pointer hover:bg-amber-500 px-2 py-1" onClick={() => setColor("rgb(251 191 36)")}>Amber</span>
        <span className="bg-red-400 cursor-pointer hover:bg-red-500 px-2 py-1" onClick={() => setColor("Red")}>Red</span>
        <span className="bg-purple-400 cursor-pointer hover:bg-purple-500 px-2 py-1" onClick={() => setColor("Purple")}>Purple</span>
        <span className="bg-blue-400 cursor-pointer hover:bg-blue-500 px-2 py-1 rounded-r-lg" onClick={() => setColor("Blue")}>Blue</span>
      </section>
    </div>
  )
}

export default App
