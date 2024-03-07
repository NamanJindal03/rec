import React from 'react'
import { Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'
import Blogs from './pages/Blogs';

export default function App() {
  return (
    <>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/blogs/:id' element={<Blogs />} />
            <Route path='*' element={<NotFound />} />
        </Routes>
    </>
  )
}
