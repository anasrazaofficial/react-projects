import React, { useEffect, useRef, useState } from 'react'
import { FaRegHandRock, FaRegHandScissors, FaRegHandPaper } from "react-icons/fa";
import { GoGear } from "react-icons/go";


export const RPS = () => {
    const [yourCount, setYourCount] = useState(0)
    const [computerCount, setComputerCount] = useState(0)
    const [canPlay, setCanPlay] = useState(true)
    const [rounds, setRounds] = useState('')
    const [containerClass, setContainerClass] = useState('h-screen');
    const [number, setNumber] = useState(1)
    const compMove = useRef()
    const myMove = useRef()
    const result = useRef()


    useEffect(() => {
        const hasVerticalScrollbar = document.documentElement.scrollHeight > window.innerHeight;
        setContainerClass(hasVerticalScrollbar ? 'h-full' : 'h-screen');
    }, [document.documentElement.scrollHeight]);

    function bgDeafult() {
        [...myMove.current.children].forEach(e => {
            e.classList.remove('bg-[#3c4356]')
            e.classList.add('bg-[#212738]')
        });
        [...compMove.current.children].forEach(e => {
            e.classList.remove('bg-[#3c4356]')
            e.classList.add('bg-[#212738]')
        })
    }
    function playAgain() {
        bgDeafult()
        result.current.innerHTML = ''
        setCanPlay(true)
        setNumber(1)
        setRounds('')
        setYourCount(0)
        setComputerCount(0)
    }

    function play(e, index) {
        if (canPlay) {
            let random = Math.floor(Math.random() * 3);
            let move = compMove.current.children[random].id;
            bgDeafult()
            compMove.current.children[random].classList.remove('bg-[#212738]');
            compMove.current.children[random].classList.add('bg-[#3c4356]');
            myMove.current.children[index].classList.remove('bg-[#212738]');
            myMove.current.children[index].classList.add('bg-[#3c4356]');
            if (move === e) {
                result.current.innerHTML = `<p class='text-xl'>You: ${e}</p> <p class='text-xl'>Computer: ${move}</p> <p class='text-xl'>Match tied</p>`;
            } else if ((move === 'paper' && e === 'scissor') ||
                (move === 'rock' && e === 'paper') ||
                (move === 'scissor' && e === 'rock')) {
                result.current.innerHTML = `<p class='text-xl'>You: ${e}</p> <p class='text-xl'>Computer: ${move}</p> <p class='text-xl'>You win</p>`;
                setYourCount(yourCount + 1);
            } else if ((move === 'rock' && e === 'scissor') ||
                (move === 'scissor' && e === 'paper') ||
                (move === 'paper' && e === 'rock')) {
                result.current.innerHTML = `<p class='text-xl'>You: ${e}</p> <p class='text-xl'>Computer: ${move}</p> <p class='text-xl'>Computer wins</p> `;
                setComputerCount(computerCount + 1);
            }
            setNumber(number + 1)
            if ((number + 1) - rounds == 0) setCanPlay(false)
        } else alert('Please click play again');
    }

    return (
        <>
            <div className='center fade space-y-2 sm:space-y-3'>
                <h1 className="text-center">Rock Paper Scissor</h1>
                <p>Welcome to the classic game of Rock, Paper, Scissors! In this timeless contest of wits and strategy, you'll face off against the computer in a battle of hand gestures.</p>
            </div>

            <main className={`${containerClass} w-screen bg-[#212738] text-white fadeIn`}>
                <h1 className='text-center pt-4 md:pt-8'> Rock Paper Scissor</h1>


                <section className='space-y-5 md:space-y-8 mt-5 md:mt-8'>

                    <div className='space-y-1 md:space-y-3'>
                        <h3 className='text-center'>Round {number}</h3>
                        <input type="number" className='outline-none bg-transparent text-white text-center rounded-sm px-3 py-1 w-60 mx-auto block' placeholder='Enter number of rounds' value={rounds} onChange={e => setRounds(parseInt(e.target.value))} min={1} />
                    </div>



                    <div className='flex flex-col md:flex-row md:gap-x-24 lg:gap-x-48 xl:gap-x-64 justify-center'>
                        <div className='flex flex-col items-center gap-y-5'>
                            <div>
                                <h3 className='uppercase tracking-[4px] text-sm text-right'>You</h3>
                                <p className='text-6xl text-center'>{yourCount}</p>
                            </div>
                            <div>
                                <h3 className='text-center'>Choose your move</h3>
                                <div className='flex justify-center' ref={myMove}>
                                    <div className='bg-[#212738] hover:bg-[#3c4356] rounded-md p-4 cursor-pointer' onClick={() => play('rock', 0)} title='Rock'>
                                        <FaRegHandRock className='text-7xl' />
                                    </div>
                                    <div className='bg-[#212738] hover:bg-[#3c4356] rounded-md p-4 cursor-pointer' onClick={() => play('paper', 1)} title='Paper'>
                                        <FaRegHandPaper className='text-7xl' />
                                    </div>
                                    <div className='bg-[#212738] hover:bg-[#3c4356] rounded-md p-4 cursor-pointer' onClick={() => play('scissor', 2)} title='Scissor'>
                                        <FaRegHandScissors className='text-7xl' />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='flex flex-col items-center gap-y-5'>
                            <div>
                                <h3 className='uppercase tracking-[4px] text-sm text-right'>Computer</h3>
                                <p className='text-6xl text-center'>{computerCount}</p>
                            </div>
                            <div>
                                <h3 className='text-center'>Computer move</h3>
                                <div className='flex justify-center' ref={compMove}>
                                    <div id='rock' className='bg-[#212738] rounded-md p-4'> <FaRegHandRock className='text-7xl' /> </div>
                                    <div id='paper' className='bg-[#212738] rounded-md p-4'> <FaRegHandPaper className='text-7xl' /> </div>
                                    <div id='scissor' className='bg-[#212738] rounded-md p-4'> <FaRegHandScissors className='text-7xl' /> </div>
                                </div>
                            </div>
                        </div>
                    </div>



                    <div className='mx-auto w-fit space-y-3'>
                        <div ref={result}></div>
                        {!canPlay && <button onClick={playAgain} className="bg-[#3c4356] text-white px-4 py-2 rounded-sm hover:bg-gray-900 mx-auto block">Play again!</button>}
                    </div>

                    {(rounds > 0 && rounds !== undefined) && <p className='text-center sm:absolute bottom-8 left-1/2 sm:-translate-x-1/2'> Rounds left: {rounds - number}</p>}
                </section>
            </main>
        </>
    )
}