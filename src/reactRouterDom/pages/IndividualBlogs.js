import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'

const BLOG_DATA = {
    1: {
        heading: 'Xiomi 14 Ultra releases in India',
        body: 'It is priced at 1 lakh rupees',
        footer: 'Purchase Link'
    },
    2: {
        heading: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, reprehenderit.",
        body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta reiciendis deleniti numquam illum commodi ipsa?",
        footer: "Lorem ipsum dolor sit amet."
    },
    3: {
        heading: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, reprehenderit.",
        body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta reiciendis deleniti numquam illum commodi ipsa?",
        footer: "Lorem ipsum dolor sit amet."
    },

}

export default function IndividualBlogs() {
    const params = useParams();
    const [blogData, setBlogData] = useState({});
    // console.log(params);
    useEffect(()=>{
        //make your api call
        // console.log(params.id)
        setBlogData(BLOG_DATA[params.id])
    }, [params.id])
  return (
    <>
        
        <div>
            <h1>{blogData?.heading}</h1>
            <p>{blogData?.body}</p>
            <footer>{blogData?.footer}</footer>
        </div>
    </>
  )
}
