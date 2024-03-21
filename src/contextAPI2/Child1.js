import React from 'react'
import MyContextStore from './context'

export default function Child1() {
  return (
    <div>
        {/* I want to access the strate over here? -> you won't be able to */}
        <MyContextStore.Consumer>
            {
                (myContextStoreStore)=>(
                    <>
                        {console.log(myContextStoreStore)}
                        {console.log(myContextStoreStore.counter)}
                        <div>{myContextStoreStore.counter}</div> {/* display the counter stte over here */}
                    </>
                )
            }
            
        </MyContextStore.Consumer>
    </div>

    
  )
}
