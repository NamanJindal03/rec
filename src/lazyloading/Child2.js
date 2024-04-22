// import React from 'react'

// export default function Child2() {
//     function intentialErrorRandom(){
//         if(Math.random() <0.5) return new Error("intent error")
//     }
// function addSomething(message){
//     if(!message){
//         throw new Error('I am the error')
//     }
// }
// function test(){
//     throw new Error("intent error");
//     return;

// }
//   return (
//     <>
//         <div>child 2</div>
//         {test()}
//     </>
//   )
// }

import React from 'react'
function test(){
    throw new Error("intent error");
    return;

}
export default function Child2() {
  return (
    <>
        {test()}
    </>
  )
}
