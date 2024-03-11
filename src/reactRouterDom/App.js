import React from 'react'
import { Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'
import Blogs from './pages/Blogs';
import StopwatchParent from './pages/stopwatch/StopwatchParent';
import Crypto from './pages/crypto_proj/App'
import Temp from './pages/Temp';

export default function App() {
  return (
    <>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/about' element={<div>This is new baout </div>}/>
            <Route path='/contact' element={<Contact/>}/>

            <Route path='/blogs' >
              <Route index element={<Temp />}/>
              <Route path=':id' element={<Blogs />} />
              {/* <Route   /> */}
              <Route path='category/:categoryId' element={<Blogs />} />
            </Route>

            <Route path='/stopwatch' element={<StopwatchParent/>}/>
            <Route path='/crypto' element={<Crypto/>}/>
            <Route path='*' element={<NotFound />} />
            

        </Routes>
    </>
  )
}
