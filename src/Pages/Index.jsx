import React from 'react'
import { Link } from 'react-router-dom'

import background from '../Assets/background.jpg'
import counter from '../Assets/Tools/counter.gif'
import bgChanger from '../Assets/Tools/bg-changer.gif'
import passwordGenerator from '../Assets/Tools/password-generator.gif'
import currencyConverter from '../Assets/Tools/currency-converter.gif'
import darkmodeToggler from '../Assets/Tools/darkmode.gif'

const Index = () => {
    return (
        <div className='bg-no-repeat bg-cover pb-3' style={{ backgroundImage: `url(${background})` }}>
            <h1 className='text-center py-3'>MultiTool Pro</h1>

            <section className='grid sm:grid-cols-3 xl:grid-cols-4 px-2 sm:px-4 gap-2 sm:gap-4 mt-3 sm:mt-5'>

                <div className='p-1 sm:p-3 shadow-md rounded bg-[#ffffff77] backdrop-blur-sm space-y-3'>
                    <img src={counter} alt="Counter" title='Counter' />
                    <div className='space-y-3'>
                        <h3>Counter</h3>
                        <p className='h-32'>A straightforward instrument for tallying items and maintaining numerical records.</p>
                        <Link to='counter' className='bg-[#9d704c] text-white px-3 py-1 rounded-md hover:bg-[#5c412c] transition-colors inline-block'>Go to App</Link>
                    </div>
                </div>

                <div className='p-1 sm:p-3 shadow-md rounded bg-[#ffffff77] backdrop-blur-sm space-y-3'>
                    <img src={bgChanger} alt="Background changer" title='Background changer' />
                    <div className='space-y-3'>
                        <h3>Background Changer</h3>
                        <p className='h-32'>An application designed to dynamically alter the background color of a user interface according to specified preferences.</p>
                        <Link to='backgroundChanger' className='bg-[#9d704c] text-white px-3 py-1 rounded-md hover:bg-[#5c412c] transition-colors inline-block'>Go to App</Link>
                    </div>
                </div>

                <div className='p-1 sm:p-3 shadow-md rounded bg-[#ffffff77] backdrop-blur-sm space-y-3'>
                    <img src={passwordGenerator} alt="Background changer" title='Background changer' />
                    <div className='space-y-3'>
                        <h3>Password Generator</h3>
                        <p className='h-32'>A robust tool designed to generate strong, randomized passwords tailored to your specifications.</p>
                        <Link to='passwordGenerator' className='bg-[#9d704c] text-white px-3 py-1 rounded-md hover:bg-[#5c412c] transition-colors inline-block'>Go to App</Link>
                    </div>
                </div>

                <div className='p-1 sm:p-3 shadow-md rounded bg-[#ffffff77] backdrop-blur-sm space-y-3'>
                    <img src={currencyConverter} alt="Background changer" title='Background changer' />
                    <div className='space-y-3'>
                        <h3>Currency Converter</h3>
                        <p className='h-32'>A versatile tool enabling seamless conversion of monetary values between different currencies, facilitating easy comparison and transactions in global markets.</p>
                        <Link to='currencyConverter' className='bg-[#9d704c] text-white px-3 py-1 rounded-md hover:bg-[#5c412c] transition-colors inline-block'>Go to App</Link>
                    </div>
                </div>

                <div className='p-1 sm:p-3 shadow-md rounded bg-[#ffffff77] backdrop-blur-sm space-y-3'>
                    <img src={darkmodeToggler} alt="Background changer" title='Background changer' />
                    <div className='space-y-3'>
                        <h3>Dark Mode Toggler</h3>
                        <p className='h-32'>Easily switch between light and dark modes with our intuitive Dark Mode Toggler app, enhancing readability and reducing eye strain at your fingertips.</p>
                        <Link to='modeToggler' className='bg-[#9d704c] text-white px-3 py-1 rounded-md hover:bg-[#5c412c] transition-colors inline-block'>Go to App</Link>
                    </div>
                </div>

            </section>
        </div>
    )
}

export default Index