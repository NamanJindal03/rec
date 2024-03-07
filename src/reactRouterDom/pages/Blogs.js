import React, { useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'

export default function Blogs() {
    const params = useParams();
    console.log(params);
    useEffect(()=>{
        //make your api call
        console.log(params.id)
    }, [])
  return (
    <>
        <div style={{display: 'flex', gap:'10px'}}>

            <Link to="/blogs/1">New in Cosmetics</Link>
            <Link to="/blogs/2">Tech and its cons</Link>
            <Link to="/blogs/3">Is AI going to replace humans?</Link>
        </div>
        <div>
            <h1>Blog Heading</h1>
            <p>Blog Details</p>
            <footer>Blog References</footer>
        </div>
    </>
  )
}
