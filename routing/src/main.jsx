import React from 'react'
import ReactDOM from 'react-dom/client'
import Root from './Root.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Contact from './components/Contact/Contact.jsx'
import User from './components/User/User.jsx'
import Github, { getGithubInfo } from './components/Github/Github.jsx'

const routes = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: '',
        element: <Home />
      },
      {
        path: 'about',
        element: <About />
      },
      {
        path: 'contact',
        element: <Contact />
      },
      {
        loader: { getGithubInfo },
        path: 'github',
        element: <Github />
      },
      {
        path: 'user/:userid',
        element: <User />
      }
    ]
  }
])

// const routes = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path='/' element={<Root />} >
//       <Route path='' element={<Home />} />
//       <Route path='about' element={<About />} />
//       <Route path='contact' element={<Contact />} />
//     </Route>
//   )
// )

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={routes} />
  </React.StrictMode>,
)
