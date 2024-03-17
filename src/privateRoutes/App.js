import React from 'react'
import { Routes, Route, Navigate, Link, Outlet } from 'react-router-dom'


const USER_TYPES = {
    PUBLIC: "Public User",
    NORMAL_USER: "Normal User",
    ADMIN_USER: "Admin User",
}
const CURRENT_USER_ROLE= "Admin User"

function Header(){
    return(
        <>
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/manage-users">Manage Users</Link>
                </li>
                <li>
                    <Link to="/checkout">Checkout</Link>
                </li>
                <li>
                    <Link to="/products">Products</Link>
                </li>
            </ul>
        </nav>
        <Outlet/>
        </>
    )
}
function Admin({children}){
    if(USER_TYPES.ADMIN_USER != CURRENT_USER_ROLE){
        return <Navigate to="/"/>
    }
    return <>{children}</>

}
function PublicElement({children}){
    return <>{children}</>
}
function UserElement(){

}
// function NoAuthorizationComponent(){
//     return(
//         <div>You don't have the permission to access this</div>
//     )
// }
export default function App() {
    
  return (
    <Routes>
        <Route path="/" element={<Header/>}>
            <Route index element={<PublicElement><div>Home</div></PublicElement>}/>
            <Route path="/manage-users" element={<Admin><div>Manage Users</div></Admin>}/>
        </Route>
    </Routes>
  )
}

