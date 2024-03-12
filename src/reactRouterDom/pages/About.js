import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export default function About() {
  const navigate = useNavigate();
  useEffect(()=>{
    navigate('/blogs')
  },[])
  return (
    <div>About</div>
  )
}
