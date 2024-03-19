import React from 'react'
import { Routes, Route, Navigate, Link, Outlet } from 'react-router-dom'


const USER_TYPES = {
    //30 roles
    PUBLIC: "Public User",
    NORMAL_USER: "Normal User",
    ADMIN_USER: "Admin User",
}
const CURRENT_USER_ROLE= USER_TYPES.NORMAL_USER

//this pattern is mapping pattern
const ROUTE_ACCESS = {
    checkout: [USER_TYPES.NORMAL_USER, USER_TYPES.ADMIN_USER],
    manageUsers: [USER_TYPES.ADMIN_USER]
}

function Header(){
    return(
        <>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    {CURRENT_USER_ROLE === USER_TYPES.ADMIN_USER && 
                        <li>
                            <Link to="/manage-users">Manage Users</Link>
                        </li>
                    }
                    {ROUTE_ACCESS.checkout.includes(CURRENT_USER_ROLE) && 
                        <li>
                            <Link to="/checkout">Checkout</Link>
                        </li>
                    }
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
    if(CURRENT_USER_ROLE != USER_TYPES.ADMIN_USER  ){
        return <Navigate to="/"/>
    }
    return <>{children}</>

}
function PublicElement({children}){
    return <>{children}</>
}
function UserElement({children}){
    if(
        CURRENT_USER_ROLE === USER_TYPES.NORMAL_USER ||
        CURRENT_USER_ROLE === USER_TYPES.ADMIN_USER
    ){
        return <>{children}</>
    }
    return <Navigate to="/"/>
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
            <Route path="manage-users" element={<Admin><div>Manage Users</div></Admin>}/>
            <Route path="checkout" element={<UserElement><div>uy stuff</div></UserElement>}/>
            <Route path="products" element={<PublicElement><div>products</div></PublicElement>}/>
            
        </Route>
    </Routes>
  )
}

