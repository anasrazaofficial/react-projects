import React, { useRef, useState } from 'react'
import { FaRegHandRock, FaRegHandScissors, FaRegHandPaper } from "react-icons/fa";

const App = () => {
  const [yourCount, setYourCount] = useState(0)
  const [computerCount, setComputerCount] = useState(0)
  const [canPlay, setCanPlay] = useState(true)
  const compMove = useRef()
  const myMove = useRef()
  const result = useRef()

  function playAgain() {

    [...myMove.current.children].forEach(e => {
      e.classList.remove('bg-yellow-200')
      e.classList.add('bg-yellow-100')
    });
    [...compMove.current.children].forEach(e => {
      e.classList.remove('bg-yellow-200')
      e.classList.add('bg-yellow-100')
    })
    result.current.innerHTML = ''
    setCanPlay(true)
  }

  function play(e, index) {
    if (canPlay) {
      let random = Math.floor(Math.random() * 3);
      let move = compMove.current.children[random].id;
      compMove.current.children[random].classList.remove('bg-yellow-100');
      compMove.current.children[random].classList.add('bg-yellow-200');
      myMove.current.children[index].classList.remove('bg-yellow-100');
      myMove.current.children[index].classList.add('bg-yellow-200');
      if (move === e) {
        result.current.innerHTML = `<h3>You: ${e}</h3> <h3>Computer: ${move}</h3> <h3>Match tied</h3>`;
      } else if ((move === 'paper' && e === 'scissor') ||
        (move === 'rock' && e === 'paper') ||
        (move === 'scissor' && e === 'rock')) {
        result.current.innerHTML = `<h3>You: ${e}</h3> <h3>Computer: ${move}</h3> <h3>You win</h3>`;
        setYourCount(yourCount + 1);
      } else if ((move === 'rock' && e === 'scissor') ||
        (move === 'scissor' && e === 'paper') ||
        (move === 'paper' && e === 'rock')) {
        result.current.innerHTML = `<h3>You: ${e}</h3> <h3>Computer: ${move}</h3> <h3>Computer wins</h3> `;
        setComputerCount(computerCount + 1);
      }
      setCanPlay(false);
    } else {
      alert('Please click play again');
    }
  }




  return (
    <main className='h-screen w-screen bg-yellow-100 space-y-3'>
      <h1 className='text-center'> Rock Paper Scissor</h1>


      <section className='flex w-fit mx-auto gap-x-20'>
        <div className='flex flex-col items-center gap-y-3'>
          <h2 className='text-right'>You</h2>
          <h3 className='text-right'>{yourCount}</h3>
        </div>
        <div className='flex flex-col items-center gap-y-3'>
          <h2>Computer</h2>
          <h3>{computerCount}</h3>
        </div>
      </section>


      <section className='space-y-3 select-none'>
        <h3 className='text-center'>Choose your move</h3>
        <div className='flex justify-center' ref={myMove}>
          <div className='bg-yellow-100 hover:bg-yellow-200 rounded-md p-4 cursor-pointer' onClick={() => play('rock', 0)} title='Rock'>
            <FaRegHandRock className='text-6xl sm:text-8xl lg:text-9xl' />
          </div>
          <div className='bg-yellow-100 hover:bg-yellow-200 rounded-md p-4 cursor-pointer' onClick={() => play('paper', 1)} title='Paper'>
            <FaRegHandPaper className='text-6xl sm:text-8xl lg:text-9xl' />
          </div>
          <div className='bg-yellow-100 hover:bg-yellow-200 rounded-md p-4 cursor-pointer' onClick={() => play('scissor', 2)} title='Scissor'>
            <FaRegHandScissors className='text-6xl sm:text-8xl lg:text-9xl' />
          </div>
        </div>
      </section>



      <section className='space-y-3 select-none'>
        <h3 className='text-center'>Computer move</h3>
        <div className='flex justify-center' ref={compMove}>
          <div id='rock' className='bg-yellow-100 rounded-md p-4'> <FaRegHandRock className='text-6xl sm:text-8xl lg:text-9xl' /> </div>
          <div id='paper' className='bg-yellow-100 rounded-md p-4'> <FaRegHandPaper className='text-6xl sm:text-8xl lg:text-9xl' /> </div>
          <div id='scissor' className='bg-yellow-100 rounded-md p-4'> <FaRegHandScissors className='text-6xl sm:text-8xl lg:text-9xl' /> </div>
        </div>
      </section>


      <div className='mx-auto w-fit space-y-3'>
        <div ref={result}></div>
        {!canPlay && <button onClick={playAgain} className="bg-black text-white px-4 py-2 rounded-sm hover:bg-gray-900">Play again!</button>}
      </div>
    </main>
  )
}

export default App