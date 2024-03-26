import React from 'react'
import { useAuth } from './context/AuthContext'
import { Navigate } from 'react-router-dom';

export default function Login() {
    const authData = useAuth();

    if(authData.isLoggedIn){
        return <Navigate to="/home" />
    }
  return (
    <div>
        <button onClick={authData.login}>Login</button>
    </div>
  )
}
