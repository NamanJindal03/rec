import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <>
        <h1>Home</h1>
        <div style={{display: 'flex', gap:'10px'}}>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
            <Link to="http://www.google.com">Google</Link>
            <Link to="/blogs">Blog 2</Link>
        </div>

        {/* 
            <ul display flex>
                ;<li></li>
                ;<li></li>
                ;<li></li>
                ;<li></li>
                ;<li></li>
            </ul>
        
        */}
        
    </>
  )
}
