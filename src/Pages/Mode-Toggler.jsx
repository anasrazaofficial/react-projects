import { useEffect, useRef, useState } from 'react'
import ThemeBtn from '../components/ThemeBtn'
import Card from '../components/Card'
import { ThemeProvider } from '../contexts/ThemeContext'

function ModeToggler() {
  const [main, setMain] = useState(false)
  const [theme, setTheme] = useState('light')
  const initialRender = useRef(true)

  useEffect(() => {
    if (initialRender.current) {
      setTimeout(() => setMain(true), 7000);
      initialRender.current = false
    }
  }, [])

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

      {main && <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <ThemeBtn />
          </div>

          <div className="w-full max-w-sm mx-auto">
            <Card />
          </div>
        </div>
      </div>}
    </ThemeProvider>
  )
}

export default ModeToggler
