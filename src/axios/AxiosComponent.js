import React, {useState, useEffect} from 'react'
import axios from 'axios';

export default function AxiosComponent() {
    const [user, setUser] = useState({});
    async function getRandomUserData(){
        try{
            const response = await axios.get('https://randomuser.me/api123123/');
            console.log(response);

            
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
