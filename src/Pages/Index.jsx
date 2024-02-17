import React from 'react'
import { Link } from 'react-router-dom'

import background from '../Assets/bg-cur-con.jpeg'
import counter from '../Assets/Tools/counter.gif'
import bgChanger from '../Assets/Tools/bg-changer.gif'
import passwordGenerator from '../Assets/Tools/password-generator.gif'
import currencyConverter from '../Assets/Tools/currency-converter.gif'
import darkmodeToggler from '../Assets/Tools/darkmode.gif'
import todo from '../Assets/Tools/todo.gif'

import github from '../Assets/github.svg'
import email from '../Assets/email.svg'
import linkedin from '../Assets/linkedin.svg'

const Index = () => {
    return (
        <div className='bg-cover bg-[#06131b80] bg-blend-multiply' style={{ backgroundImage: `url(${background})` }}>
            <h1 className='text-center py-3 bg-[#06131b99] text-white'>MULTITOOL PRO</h1>

            <section className='grid sm:grid-cols-3 xl:grid-cols-4 px-6 sm:px-10 xl:w-[1440px] xl:mx-auto gap-4 md:gap-6 mt-5 sm:mt-8'>

                <div className='p-3 md:p-5 rounded-md bg-[#ffffff33] text-white backdrop-blur-sm space-y-3'
                    style={{ boxShadow: '0 10px 40px -10px black' }}>
                    <img src={counter} alt="Counter" title='Counter' className='rounded-md' />
                    <div className='space-y-3'>
                        <h3>Counter</h3>
                        <p className='line-clamp-3 hover:line-clamp-none'>A straightforward instrument for tallying items and maintaining numerical records.</p>
                        <Link to='counter' className='bg-[#06131b] text-white px-3 py-1 rounded-md hover:bg-[#06131b99] transition-colors inline-block'>Go to App</Link>
                    </div>
                </div>

                <div className='p-3 md:p-5 rounded-md bg-[#ffffff33] text-white backdrop-blur-sm space-y-3'
                    style={{ boxShadow: '0 10px 40px -10px black' }}>
                    <img src={bgChanger} alt="Background changer" title='Background changer' className='rounded-md' />
                    <div className='space-y-3'>
                        <h3>Background Changer</h3>
                        <p className='line-clamp-3 hover:line-clamp-none'>An application designed to dynamically alter the background color of a user interface according to specified preferences.</p>
                        <Link to='backgroundChanger' className='bg-[#06131b] text-white px-3 py-1 rounded-md hover:bg-[#06131b99] transition-colors inline-block'>Go to App</Link>
                    </div>
                </div>

                <div className='p-3 md:p-5 rounded-md bg-[#ffffff33] text-white backdrop-blur-sm space-y-3'
                    style={{ boxShadow: '0 10px 40px -10px black' }}>
                    <img src={passwordGenerator} alt="Password Generator" title='Password Generator' className='rounded-md' />
                    <div className='space-y-3'>
                        <h3>Password Generator</h3>
                        <p className='line-clamp-3 hover:line-clamp-none'>A robust tool designed to generate strong, randomized passwords tailored to your specifications.</p>
                        <Link to='passwordGenerator' className='bg-[#06131b] text-white px-3 py-1 rounded-md hover:bg-[#06131b99] transition-colors inline-block'>Go to App</Link>
                    </div>
                </div>

                <div className='p-3 md:p-5 rounded-md bg-[#ffffff33] text-white backdrop-blur-sm space-y-3'
                    style={{ boxShadow: '0 10px 40px -10px black' }}>
                    <img src={currencyConverter} alt="Currency Converter" title='Currency Converter' className='rounded-md' />
                    <div className='space-y-3'>
                        <h3>Currency Converter</h3>
                        <p className='line-clamp-3 hover:line-clamp-none'>A versatile tool enabling seamless conversion of monetary values between different currencies, facilitating easy comparison and transactions in global markets.</p>
                        <Link to='currencyConverter' className='bg-[#06131b] text-white px-3 py-1 rounded-md hover:bg-[#06131b99] transition-colors inline-block'>Go to App</Link>
                    </div>
                </div>

                <div className='p-3 md:p-5 rounded-md bg-[#ffffff33] text-white backdrop-blur-sm space-y-3'
                    style={{ boxShadow: '0 10px 40px -10px black' }}>
                    <img src={darkmodeToggler} alt="Dark Mode Toggler" title='Dark Mode Toggler' className='rounded-md' />
                    <div className='space-y-3'>
                        <h3>Dark Mode Toggler</h3>
                        <p className='line-clamp-3 hover:line-clamp-none'>Easily switch between light and dark modes with our intuitive Dark Mode Toggler app, enhancing readability and reducing eye strain at your fingertips.</p>
                        <Link to='modeToggler' className='bg-[#06131b] text-white px-3 py-1 rounded-md hover:bg-[#06131b99] transition-colors inline-block'>Go to App</Link>
                    </div>
                </div>

                <div className='p-3 md:p-5 rounded-md bg-[#ffffff33] text-white backdrop-blur-sm space-y-3'
                    style={{ boxShadow: '0 10px 40px -10px black' }}>
                    <img src={todo} alt="Dark Mode Toggler" title='Dark Mode Toggler' className='rounded-md' />
                    <div className='space-y-3'>
                        <h3>Todo List</h3>
                        <p className='line-clamp-3 hover:line-clamp-none'>An app that keeps track of your tasks effortlessly with our intuitive to-do list. Organize your day and boost productivity with ease.</p>
                        <Link to='todo' className='bg-[#06131b] text-white px-3 py-1 rounded-md hover:bg-[#06131b99] transition-colors inline-block'>Go to App</Link>
                    </div>
                </div>

            </section>

            <footer className='text-center mt-5 sm:mt-8 bg-[#06131b] text-white py-2'>
                For inquiries or collaborations, please feel free to reach out to Syed Anas Raza via:
                <div className='flex gap-2 justify-center items-center sm:mt-1 mt-2'>
                    <Link title='Go to Github' to='https://github.com/anasrazaofficial'><img src={github} alt="github icon" /></Link>
                    <Link title='Go to Email' to='mailto:sanasraza1234@gmail.com'><img src={email} alt="email icon" /></Link>
                    <Link title='Go to Linkedin' to='https://www.linkedin.com/in/syedanasraza'><img src={linkedin} alt="linkedin icon" /></Link>
                </div>
            </footer>
        </div>
    )
}

export default Index