import React from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data = useLoaderData()
    
    return (
        <div className='text-center m-4 p-4'>
            <h1 className='text-3xl font-bold mb-4'>Github Followers: {data.followers}</h1>
            <div className="flex justify-center">
                <img 
                    src={data.avatar_url} 
                    alt="Git picture" 
                    width={200} 
                    className='rounded-3xl shadow-2xl transform transition-all duration-500 hover:scale-105 hover:shadow-3xl'
                />
            </div>
        </div>
    )
}

export default Github

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/Abhisek250603')
    return response.json()
}
