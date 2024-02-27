import React, {useState, useEffect} from 'react'

export default function App2() {
    const [commentData, setCommentData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(()=>{
        const getCommentData = async function(){
            try{
                const response = await fetch("https://jsonplaceholder.typicode.com/posts/1/comments");
                if(!response.ok){
                    throw new Error("something went wrong")
                }
                const data = await response.json();
                setCommentData(data.slice(0,2));
                setIsLoading(false);
            }
            catch(err){
                console.error(err)
            }
        } 
        setTimeout(()=>{
            getCommentData();
        }, 3000)
        
    }, [])
  return (
    <>

        {/* {isLoading && "loading"} */}
        {isLoading ? "laoading" :
            <>
                {commentData.map((comment)=>{
                    return (
                        <div className='card' key={comment.id} style={{border: '1px solid black', width: '300px'}}>
                            <div>{comment.body}</div>
                            <div style={{display: 'flex'}}>
                                <span>{comment.name}</span>
                                <span>{comment.email}</span>
                            </div>
                        </div>
                    )
                })}
            </>
        }
    </>
  )
}
