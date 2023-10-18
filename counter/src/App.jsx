import { useState } from "react"

function App() {
  let [counter, setCounter] = useState(0)
  function increaseValue() {
    if (counter < 20) setCounter(counter + 1)
  }
  function decreaseValue() {
    if (counter > 0) setCounter(counter - 1)
  }
  function resetValue() {
    setCounter(0)
  }
  return (
    <>
      <h1>Counter</h1>
      <div className="flex">
        <button onClick={decreaseValue}>-</button>
        <h3>{counter}</h3>
        <button onClick={increaseValue}>+</button>
      </div>
      <button className="center" onClick={resetValue}>reset</button>
    </>
  )
}

export default App
