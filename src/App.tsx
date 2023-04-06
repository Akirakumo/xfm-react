import React, { lazy, Suspense } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'

import Loading from './components/Loading'
const Login = lazy(() => import('./pages/Login'))
const Home = lazy(() => import('./pages/Home'))

export default function APP() {
  return (
    <>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/home' element={<Home />} />
          <Route path='/' element={<Navigate replace to='/login' />} />
        </Routes>
      </Suspense>
    </>
  )
}
