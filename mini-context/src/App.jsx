import React from 'react'
import Login from './components/Login'
import Profile from './components/Profile'
import UserContextProvider from './context/userContextProvider'

function App() {
  return (
    <UserContextProvider>
      <h3 className='text-3xl font-semibold text-center'>Hello This is Anas</h3>
      <Login />
      <Profile />
    </UserContextProvider>
  )
}

export default App
