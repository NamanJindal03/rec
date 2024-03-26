import React from 'react'
import { Routes, Route } from 'react-router-dom'

import { AuthProvider } from './context/AuthContext';
import PrivateRoutes from './PrivateRoutes';

export default function App() {
  return (
    <AuthProvider>
        <Routes>
            <Route path='/login' element={<div>Login</div>}/>
            <Route element={<PrivateRoutes/>} >
                <Route path="/home" element={<div>Home</div>}/>
                <Route path="/products" element={<div>Products</div>}/>
            </Route>
        </Routes>
    </AuthProvider>
  )
}
