/* This code snippet is a React component named `User`. It imports necessary modules from React and
`react-router-dom`. Within the component, it uses the `useParams` hook from `react-router-dom` to
access the `userid` parameter from the URL. The component then renders a `<div>` element displaying
the user ID. Finally, the `User` component is exported as the default export from this module. */
import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const {userid} = useParams()
  return (
    <div className='bg-gray-600 text-white text-3xl p-4'>User: {userid}</div>
  )
}

export default User