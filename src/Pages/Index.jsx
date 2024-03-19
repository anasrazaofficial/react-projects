import React from 'react'
import { Link } from 'react-router-dom'

import background from '../Assets/bg-cur-con.jpeg'
import counter from '../Assets/Tools/counter.gif'
import bgChanger from '../Assets/Tools/bg-changer.gif'
import passwordGenerator from '../Assets/Tools/password-generator.gif'
import currencyConverter from '../Assets/Tools/currency-converter.gif'
import darkmodeToggler from '../Assets/Tools/darkmode.gif'
import todo from '../Assets/Tools/todo.gif'
import weather from '../Assets/Tools/weather.gif'
import rockPaperScissor from '../Assets/Tools/rockpaperscissor.gif'

import github from '../Assets/github.svg'
import email from '../Assets/email.svg'
import linkedin from '../Assets/linkedin.svg'

const apps = [
    {
        title: 'Counter',
        desc: 'A straightforward instrument for tallying items and maintaining numerical records.',
        link: 'counter',
        img: counter
    },
    {
        title: 'Background Changer',
        desc: 'An application designed to dynamically alter the background color of a user interface according to specified preferences.',
        link: 'backgroundchanger',
        img: bgChanger
    },
    {
        title: 'Password Generator',
        desc: 'A robust tool designed to generate strong, randomized passwords tailored to your specifications.',
        link: 'passwordgenerator',
        img: passwordGenerator
    },
    {
        title: 'Currency Converter',
        desc: 'A versatile tool enabling seamless conversion of monetary values between different currencies, facilitating easy comparison and transactions in global markets.',
        link: 'currencyconverter',
        img: currencyConverter
    },
    {
        title: 'Dark Mode Toggler',
        desc: 'Easily switch between light and dark modes with our intuitive Dark Mode Toggler app, enhancing readability and reducing eye strain at your fingertips.',
        link: 'modetoggler',
        img: darkmodeToggler
    },
    {
        title: 'Todo List',
        desc: 'An app that keeps track of your tasks effortlessly with our intuitive to-do list. Organize your day and boost productivity with ease.',
        link: 'todo',
        img: todo
    },
    {
        title: 'Weather App',
        desc: 'Start your day right with our innovative app, offering precise weather forecasts for cities worldwide, ensuring you\'re never caught off guard by the elements.',
        link: 'weather',
        img: weather
    },
    {
        title: 'Rock Paper Scissor',
        desc: 'Welcome to the classic game of Rock, Paper, Scissors! In this timeless contest of wits and strategy, you\'ll face off against the computer in a battle of hand gestures.',
        link: 'rockpaperscissor',
        img: rockPaperScissor
    },
]

export const Index = () => {
    return (
        <div className='bg-cover bg-[#06131b80] bg-blend-multiply' style={{ backgroundImage: `url(${background})` }}>
            <h1 className='text-center py-3 bg-[#06131b99] text-white'>MULTITOOL PRO</h1>

            <section className='grid sm:grid-cols-3 xl:grid-cols-4 px-6 sm:px-10 xl:w-[1440px] xl:mx-auto gap-4 md:gap-6 mt-5 sm:mt-8'>
                {apps.map(app => (
                    <div className='p-3 md:p-5 rounded-md bg-[#ffffff33] text-white backdrop-blur-sm space-y-3'
                        style={{ boxShadow: '0 10px 40px -10px black' }}>
                        <img src={app.img} alt={app.title} title={app.title} className='rounded-md' />
                        <div className='space-y-3'>
                            <h3>{app.title}</h3>
                            <p className='sm:line-clamp-3 hover:line-clamp-none'>{app.desc}</p>
                            <Link to={app.link} className='bg-[#06131b] text-white px-3 py-1 rounded-md hover:bg-[#06131b99] transition-colors inline-block'>Go to App</Link>
                        </div>
                    </div>
                ))}
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