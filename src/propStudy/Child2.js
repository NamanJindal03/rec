import React from 'react'

// export default function Child2({dt1, dt2, obj}) {
//     const {dt1: obj1, dt2: obj2} = obj;
//   return (
//     <>
//         <div>{dt1}</div>
//         <div>{dt2}</div>
//         <div>{obj1}</div>
//         <div>{obj2}</div>
//     </>
//   )
// }

export default function Child2({dt1, dt2, obj, obj2}) {
    console.log(dt1);
    console.log(dt2)
    const {dt1: obj1, dt2: obj3} = obj;
  return (
    <>
        <div>{dt1}</div>
        <div>{dt2}</div>
        <div>{obj1}</div>
        <div>{obj3}</div>
        {
            Object.keys(obj2).map((objKey)=>{
                return (
                    <div>
                        <span>{objKey} : {obj2[objKey]}</span>
                    </div>
                )
            })
        }
    </>
  )
}
