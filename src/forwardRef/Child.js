import React from 'react'

// const Child2 = React.forwardRef(function Child(props, ref){
//     return (
//         <div>
//             <input type="text" ref={ref} />
//         </div>
//     )
//     }
// )
// export default Child2;

export const Child = React.forwardRef((props, ref)=>{
    return (
        <div>
            <input type="text" ref={ref} />
        </div>
    )
    }
)
// export default Child2;

// export const Child2 = React.forwardRef((props, ref)=>{
//     return (
//         <div>
//             <input type="text" ref={ref} />
//         </div>
//     )
// }
// )