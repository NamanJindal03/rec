import React, {useState, useEffect} from 'react'
import axios from 'axios';
import axiosInstance from './interceptor/interceptor1';

export default function AxiosInterceptopComponent() {
    const [user, setUser] = useState({});
    async function getRandomUserData(){
        try{
            const response = await axiosInstance.get('/api');
            console.log(response.data);

            
        }
        catch(err){
            console.error(err)
        }
        
    }
    useEffect(()=>{
        getRandomUserData()
    },[])
  return (
    <>
        Gender: {user?.gender}
        Full Name: {`${user?.name?.title} : ${user?.name?.first} : ${user?.name?.last}`}
        <img src={user?.picture?.thumbnail} alt="" />
    </>
  )
}
