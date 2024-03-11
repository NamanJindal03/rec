import React from 'react'
import { Outlet, Link } from 'react-router-dom'

export default function BlogLayout() {
  return (
    <>
        <nav>
          <ul style={{display: 'flex', gap:'10px', listStyle: "none"}}>
            <li>
              <Link to="/blogs/1">Blog 1</Link>
            </li>
            <li>
              <Link to="/blogs/2">Blog 2</Link>
            </li>
            <li>
              <Link to="/blogs/3">Blog 3</Link>
            </li>
          </ul>
        </nav>

        {/* <header className='blogHeader'>
            this is my temp head
        </header>
        
        <footer className='blogFooter'>
            this is my temp foot
        </footer> */}
        <Outlet />
    </>
  )
}
