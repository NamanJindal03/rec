import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
export default function Contact() {
  const [leadInput, setLeadInput] = useState('');
  const [nameInput, setNameInput] = useState('');
  const location = useLocation();
  useEffect(()=>{
    if(location.state?.leadId){
      setLeadInput(location.state.leadId);
    }
  },[])
  return (
    <>
      <label htmlFor="">Lead Id</label>
      <input 
        type="text" 
        value={leadInput} 
        onChange={(e)=>{setLeadInput(e.target.value)}} 
      />
      <label htmlFor="">Name</label>
      <input 
        type="text" 
        value={nameInput} 
        onChange={(e)=>{setNameInput(e.target.value)}} 
      />
    </>
  )
}
