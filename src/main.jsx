import React from 'react'
import ReactDOM from 'react-dom/client'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'

import './index.css'
import App from './App.jsx'
import Counter from './Pages/Counter.jsx'
import Index from './Pages/Index.jsx'
import BackgroundChanger from './Pages/Background-Changer.jsx'

const routes = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route path='' element={<Index />} />
      <Route path='counter' element={<Counter />} />
      <Route path='backgroundChanger' element={<BackgroundChanger />} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={routes} />
  </React.StrictMode>,
)
