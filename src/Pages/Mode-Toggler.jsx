import { useEffect, useRef, useState } from 'react'
import ThemeBtn from '../components/ThemeBtn'
import Card from '../components/Card'
import { ThemeProvider } from '../contexts/ThemeContext'

export const ModeToggler = () => {
  const [theme, setTheme] = useState('light')

  const lightMode = () => {
    setTheme('light')
  }

  const darkMode = () => {
    setTheme('dark')
  }

  useEffect(() => {
    let html = document.querySelector('html')
    html.classList.remove("light", "dark")
    html.classList.add(theme)
  }, [theme])

  return (
    <ThemeProvider value={{ theme, lightMode, darkMode }}>

      <div className='center fade space-y-2 sm:space-y-3'>
        <h1 className="text-center">Dark Mode Toggler</h1>
        <p>Easily switch between light and dark modes with our intuitive Dark Mode Toggler app, enhancing readability and reducing eye strain at your fingertips.</p>
      </div>

      <div className="flex-wrap min-h-screen items-center fadeToggle">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <ThemeBtn />
          </div>

          <div className="w-full max-w-sm mx-auto">
            <Card />
          </div>
        </div>
      </div>
    </ThemeProvider>
  )
}