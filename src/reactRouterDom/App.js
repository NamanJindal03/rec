import React from 'react'
import { Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'
import Blogs from './pages/Blogs';
import StopwatchParent from './pages/stopwatch/StopwatchParent';
import Crypto from './pages/crypto_proj/App'

export default function App() {
  return (
    <>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/about' element={<div>This is new baout </div>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/blogs/:id' element={<Blogs />} />
            <Route path='/blogs' element={<Blogs />} />
            <Route path='/stopwatch' element={<StopwatchParent/>}/>
            <Route path='/crypto' element={<Crypto/>}/>
            <Route path='*' element={<NotFound />} />
            

        </Routes>
    </>
  )
}
