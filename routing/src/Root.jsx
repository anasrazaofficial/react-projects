import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import './index.css'
import { Outlet } from 'react-router-dom'

export default function Root() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}