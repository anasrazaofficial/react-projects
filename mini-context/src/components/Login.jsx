import React, { useContext, useState } from 'react'
import UserContext from '../context/UserContext'

function Login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const { setUser } = useContext(UserContext)

    const handleSubmit = (e) => {
        e.preventDefault()
        setUser({ username, password })
    }
    return (
        <div>
            <input className='border border-black rounded-lg focus-visible:outline-0 mx-2 px-2 ' type="text" placeholder='Username' value={username} onChange={(e) => setUsername(e.target.value)} />
            <input className='border border-black rounded-lg focus-visible:outline-0 mx-2 px-2 ' type="password" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
            <button className='block my-3 bg-green-900 py-2 mx-44 px-4 text-white rounded-sm hover:border hover:border-green-900 hover:bg-white hover:text-black hover:font-bold' onClick={handleSubmit}>Submit</button>
        </div>
    )
}

export default Login