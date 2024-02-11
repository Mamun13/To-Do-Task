import React from 'react'
import { Route, Routes } from 'react-router-dom'
import ErrorBounday from './../ErrorBoundary/ErrorBounday';
import Home from '../Pages/Home';

const PageRoute = () => {
  return (
    <>
      <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="*" element={<ErrorBounday/>} />
        </Routes>
    </>
  )
}

export default PageRoute