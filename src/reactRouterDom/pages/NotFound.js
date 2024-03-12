import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
export default function NotFound() {
  const navigate = useNavigate();
  useEffect(()=>{
    setTimeout(()=>{
      navigate('/' , {state: {isRedirected: true}})
    },1000)
  },[])
  return (
    <div>NotFound</div>
  )
}
/* 
  9:57 -> 
*/
