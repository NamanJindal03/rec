import React from 'react'
import { Outlet, Link, NavLink } from 'react-router-dom'
import './tempStyle.css'

export default function BlogLayout() {
  return (
    <>
        <nav>
          <ul style={{display: 'flex', gap:'10px', listStyle: "none"}} >
            <li >
              <NavLink 
                to="/blogs/1"
                // className={({isActive})=> isActive ? 'isActive' : '' }
              >Blog 1</NavLink>
            </li>
            <li>
              <NavLink 
                to="/blogs/2"
                // className={(state)=> state.isActive ? 'isActive' : '' }
              >Blog 2</NavLink>
            </li>
            <li>
              <NavLink 
                to="/blogs/3"
                // className={({isActive})=> isActive ? 'isActive' : '' }
                // className={'isActive sample power'}
              >Blog 3</NavLink>
            </li>
          </ul>
        </nav>

        {/* <header className='blogHeader'>
            this is my temp head
        </header>
        
        <footer className='blogFooter'>
            this is my temp foot
        </footer> */}
        <Outlet context={{commonInfo: 'I am common'}}/>
    </>
  )
}
