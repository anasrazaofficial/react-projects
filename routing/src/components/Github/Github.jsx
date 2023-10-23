import React from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    return (
        <div>asd</div>
    )
}

export default Github
export const getGithubInfo = async () => {
    const response = await fetch('https://api.github.com/users/anasrazaofficial')
    return response.json()
}