import React from 'react'

export default function Child1() {
    function intentialErrorRandom(){
        if(Math.random() <0.5) return new Error("intent error")
    }
function addSomething(message){
    if(!message){
        throw new Error('I am the error')
    }
}
  return (
    <>
        <div>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione consequatur, necessitatibus accusantium quae commodi, quos recusandae animi aliquid similique ad ducimus officia autem iste repellat repellendus doloremque ipsa maiores repudiandae, cumque ea nesciunt! Accusamus impedit quas minima molestiae ipsam sit aliquam, corrupti error dignissimos dolorum velit asperiores quidem blanditiis officia exercitationem nesciunt sunt voluptatem esse voluptate architecto? Dolor deserunt quam porro tempora eaque suscipit facere voluptate amet illo cumque, ad assumenda et accusantium alias! Necessitatibus, sunt temporibus. Doloribus nobis, numquam saepe officiis voluptas officia dignissimos cumque repudiandae quod voluptatum, voluptatem tempore sapiente, corrupti minima fugiat accusantium iure praesentium illum quibusdam!</div>
        <button onClick={()=> addSomething()}>timepass</button>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat, expedita!</p>
    </>
  )
}
