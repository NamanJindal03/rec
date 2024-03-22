import React, {useState, useEffect} from 'react'

export default function FetchComponent() {
    const [user, setUser] = useState({});
    async function getRandomUserData(){
        try{
            const response = await fetch('https://randomuser.me/api213213/');
            // if(!response.ok){
            //     throw new Error('Error fetching the api')
            // }
            const randomUserData = await response.json();
            setUser(randomUserData.results[0]);
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
