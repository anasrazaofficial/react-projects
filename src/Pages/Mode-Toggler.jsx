import { useEffect, useState } from 'react'
import ThemeBtn from '../components/ThemeBtn'
import Card from '../components/Card'
import { ThemeProvider } from '../contexts/ThemeContext'

function ModeToggler() {
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
      <div div className="flex flex-wrap min-h-screen items-center" >
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

export default ModeToggler
