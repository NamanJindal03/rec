import React from 'react'
import { ThemeContext } from './Context/ThemeContext'
 /* import the context over here */
export default function Child1() {
   
  return (
    <ThemeContext.Consumer>
    {
        (state)=>{
            return(
                <div>Child1</div>
            )
        }
    }
    </ThemeContext.Consumer>
    
    /* create the consumer wrapper over here and display the theme along with that give a button to toggle the theme */
    
  )
}
