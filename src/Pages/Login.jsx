import React from 'react'
import { Link } from 'react-router-dom'

function Login() {
  return (
    <div>
      <h1>this is login page</h1>
      <Link to='/dashboard'><button className='btn btn-primary'>login</button></Link>
    </div>
  )
}

export default Login
