import React from 'react'
import { ThemeContext } from './Context/ThemeContext'
 /* import the context over here */
export default class Child1 extends React.Component{
   
    render(){
        return (
            <ThemeContext.Consumer>
            {
                ({state})=>{
                    return(
                        <>
                            {state.theme}
                            <button onClick={state.toggleTheme}>Toggle Theme</button>
                        </>
                    )
                }
            }
            </ThemeContext.Consumer>
            
            /* create the consumer wrapper over here and display the theme along with that give a button to toggle the theme */
            
          )
    }
  
}
