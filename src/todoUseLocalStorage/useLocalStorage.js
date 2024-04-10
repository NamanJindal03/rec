import React, { useEffect, useState } from 'react'

export default function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(()=>{
    return JSON.parse(localStorage.getItem(key) || JSON.stringify(initialValue));
  })

  useEffect(()=>{
    localStorage.setItem(key, JSON.stringify(value))
  },[key, value])

  return [value, setValue]
}
