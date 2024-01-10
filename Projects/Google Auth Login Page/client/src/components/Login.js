import React from 'react'
import googleImg from '../assets/google.png'

function Login() {

  const loginwithgoogle = ()=>{
    window.open("http://localhost:5001/auth/google/callback","_self")
  }
  return (
    <div className='d-flex flex-column bg-dark justify-content-center align-items-center vh-100'>
        <div className="d-flex flex-column bg-white justify-content-evenly rounded p-4 align-items-center h-50 w-25">
            <h3>Login Here</h3>
            <div>
                <button className='btn btn-primary' onClick={loginwithgoogle}><img src={googleImg} alt='G' height={20} width={20} /> Sign in with Google</button>
            </div>
        </div>
    </div>
  )
}

export default Login
