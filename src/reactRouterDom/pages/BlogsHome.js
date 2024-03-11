import React from 'react'
import { useOutletContext } from 'react-router-dom'
export default function BlogsHome() {
  const data = useOutletContext();
  console.log(data);
  return (
    <div>Temp</div>
  )
}
