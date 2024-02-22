import React, { useRef, useState } from 'react'
import clearImg from './Assets/sunny2.svg'
import cloudyImg from './Assets/cloudy.svg'
import rainyImg from './Assets/rainy.svg'
import foggyImg from './Assets/foggy.svg'
import stormImg from './Assets/storm.svg'
import snowyImg from './Assets/snowy.svg'

const App = () => {
  const clear = 'from-[#ffd748] to-[#ffe373]'
  const cloudy = 'from-blue-500 to-[#0c9fda]'
  const rainy = 'from-[#001e82] to-[#0c3d7e]'
  const foggy = 'from-[#999999] to-[#778291]'
  const storm = 'from-purple-500 to-purple-900'
  const snowy = 'from-[#0c5162] to-[#0d3d4d]'

  const cityInput = useRef()

  const [details, setDetails] = useState(false)
  const [temp, setTemp] = useState(null)
  const [weather, setWeather] = useState(null)
  const [humidity, setHumidity] = useState(null)
  const [feelLike, setFeelLike] = useState(null)
  const [pressure, setPressure] = useState(null)
  const [bg, setBg] = useState('bg-white')
  const [image, setImage] = useState(null)
  const [textColor, setTextColor] = useState('black')


  function searchWeather(e) {
    e.preventDefault()
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityInput.current.value.toLowerCase()}&appid=ce619a7f545d751111006e41769b4ba9`)
      .then(res => res.json())
      .then(res => {
        if (res.cod === 200) {
          setDetails(true)

          // Putting values
          setTemp(Math.round(res.main.temp - 273.15))
          setWeather(res.weather[0].main)
          setHumidity(res.main.humidity)
          setFeelLike(res.main.feels_like)
          setPressure(res.main.pressure)

          //Checking weather for theme
          switch (res.weather[0].main.toLowerCase()) {
            case 'clear':
              setBg(clear)
              setImage(clearImg)
              setTextColor('black')
              break;

            case 'clouds':
              setBg(cloudy)
              setImage(cloudyImg)
              setTextColor('black')
              break;

            case 'rainy':
              setBg(rainy)
              setImage(rainyImg)
              setTextColor('white')
              break;

            case 'foggy':
              setBg(foggy)
              setImage(foggyImg)
              setTextColor('black')
              break;

            case 'storm':
              setBg(storm)
              setImage(stormImg)
              setTextColor('black')
              break;

            case 'snowy':
              setBg(snowy)
              setImage(snowyImg)
              setTextColor('white')
              break;

            default:
              break;
          }
        } else alert(res.message)
      }).catch(err => console.error(err))
    cityInput.current.value = ''
  }

  return (
    <div className={`h-screen bg-gradient-to-br ${bg}`}>

      {/* Intro */}
      <div className='center fade space-y-2 sm:space-y-3'>
        <h1 className="text-center">Weather App</h1>
        <p>Start your day right with our innovative app, offering precise weather forecasts for cities worldwide, ensuring you're never caught off guard by the elements.</p>
      </div>

      {/* Main */}
      <main className='px-4 md:px-6 xl:px-72 py-3 space-y-3 md:space-y-5 sm:w-4/5 md:w-3/4 xl:w-[1440px] mx-auto fadeIn'>
        <h1 className={`text-center text-${textColor}`}>Weather App</h1>

        {/* Search for City */}
        <form className='gap-x-3 flex' onSubmit={searchWeather}>
          <input ref={cityInput} type="text" className='border border-gray-300 rounded-md px-3 py-1 md:py-3 w-full' placeholder='Enter City Name here' required />
          <button type='submit' className='rounded-md px-4 md:px-8 xl:px-16 bg-black text-white hover:opacity-80'>Submit</button>
        </form>


        {/* Temperature, Humidity,... */}
        {details && <div className='space-y-3 md:space-y-5'>
          <img src={image} alt="" className='w-24 sm:w-48 2xl:w-64 mx-auto' />

          <div className='grid gap-4 grid-cols-2 xl:grid-cols-3'>
            <div className='bg-[#ffffff52] px-3 py-4 md:p-6 rounded-md col-span-2' style={{ boxShadow: '0px 1px 4px #0000002e' }}>
              <h1 className={`text-${textColor} text-[40px] md:text-5xl leading-none`}>{temp}°C</h1>
              <p className={`text-${textColor} text-xs md:text-base`}>Karachi, Pakistan</p>
            </div>

            <div className='bg-[#ffffff52] px-3 py-4 md:p-6 rounded-md' style={{ boxShadow: '0px 1px 4px #0000002e' }}>
              <h2 className={`text-${textColor} text-3xl md:text-4xl`}>{weather}</h2>
              <p className={`text-${textColor} text-xs md:text-base`}>Weather</p>
            </div>

            <div className='bg-[#ffffff52] px-3 py-4 md:p-6 rounded-md' style={{ boxShadow: '0px 1px 4px #0000002e' }}>
              <h2 className={`text-${textColor} text-3xl md:text-4xl`}>{humidity}%</h2>
              <p className={`text-${textColor} text-xs md:text-base`}>Humidity</p>
            </div>

            <div className='bg-[#ffffff52] px-3 py-4 md:p-6 rounded-md' style={{ boxShadow: '0px 1px 4px #0000002e' }}>
              <h2 className={`text-${textColor} text-3xl md:text-4xl`}>{feelLike}°C</h2>
              <p className={`text-${textColor} text-xs md:text-base`}>Feels like</p>
            </div>

            <div className='bg-[#ffffff52] px-3 py-4 md:p-6 rounded-md' style={{ boxShadow: '0px 1px 4px #0000002e' }}>
              <h2 className={`text-${textColor} text-3xl md:text-4xl`}>{pressure}hPa</h2>
              <p className={`text-${textColor} text-xs md:text-base`}>Pressure</p>
            </div>

          </div>
        </div>}


      </main>
    </div >
  )
}

export default App