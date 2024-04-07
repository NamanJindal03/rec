import React from 'react'

// export default function Control({handleRightShift, handleLeftShift}) {
//   return (
//     <div className=' flex controlBox '>
//         <button onClick={handleRightShift}>&gt;</button>
//         <button onClick={handleLeftShift}>&lt;</button>
//     </div>
//   )
// }

export default function Control({handleShift}) {
  return (
    <div className=' flex controlBox '>
        <button onClick={()=>handleShift('right')}>&gt;</button>
        <button onClick={()=>handleShift('left')}>&lt;</button>
    </div>
  )
}