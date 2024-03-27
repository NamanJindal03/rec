import React from 'react'
import { ThemeContext } from './Context/ThemeContext'

 /* import the context over here */

class Child2 extends React.Component{
    render(){
        return (
            <ThemeContext.Consumer>
            {
                ({state})=>{
                    return(
                        <>
                            Child2: {state.theme}
                        </>
                    )
                }
            }
            </ThemeContext.Consumer>
            
            /* create the consumer wrapper over here and display the theme along with that give a button to toggle the theme */
            
          )
    }
}
export default Child2
