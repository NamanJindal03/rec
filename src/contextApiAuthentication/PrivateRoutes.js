import React from 'react'
import { useAuth } from './context/AuthContext'
import { Outlet, useNavigate, Navigate } from 'react-router-dom';

export default function PrivateRoutes() {

    const authData = useAuth();
    const navigate = useNavigate();

    function redirectUser(){
        console.log('called')
        navigate('/login');
    }

  return authData.isLoggedIn ? 
    (<>
        <div><button onClick={authData.logout}>Logout</button></div>
        <Outlet /> 
    </>): 
    <Navigate to="/login" />
}
