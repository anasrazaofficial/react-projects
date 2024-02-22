import React from 'react'
import ReactDOM from 'react-dom/client'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'

import './index.css'
import App from './App.jsx'
import { Index, Counter, CurrencyConverter, BackgroundChanger, ModeToggler, PasswordGenerator, Todo, Weather } from './Pages/index.js'

const routes = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route path='' element={<Index />} />
      <Route path='counter' element={<Counter />} />
      <Route path='backgroundChanger' element={<BackgroundChanger />} />
      <Route path='passwordGenerator' element={<PasswordGenerator />} />
      <Route path='currencyConverter' element={<CurrencyConverter />} />
      <Route path='modeToggler' element={<ModeToggler />} />
      <Route path='todo' element={<Todo />} />
      <Route path='weather' element={<Weather />} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={routes} />
  </React.StrictMode>,
)