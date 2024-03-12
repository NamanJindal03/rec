import React from 'react'
import { useSearchParams } from 'react-router-dom'
export default function ConceptSearch() {
    const [searchParams, setSearchParam]= useSearchParams();
    console.log(searchParams)
    console.log(searchParams.get("search"))
    console.log(searchParams.get("abcd"))
  return (
    <div>ConceptSearch</div>
  )
}
