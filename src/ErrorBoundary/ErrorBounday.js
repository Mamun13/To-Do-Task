import React from 'react'
import ErrorImg from '../assets/404.png'
import { Link } from 'react-router-dom'

const ErrorBounday = () => {
  return (
    <>
      <h1>
        <img src={ErrorImg} alt='error sms' className='img-fluid error-message' />
      </h1>
      <div className='d-flex justify-content-center'>
        <Link to="/" className='home-btn text-capitalize bg-danger px-4 py-2 rounded-pill text-light'>go back</Link>
      </div>
    </>
  )
}

export default ErrorBounday