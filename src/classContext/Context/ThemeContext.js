import { createContext, Component } from "react";

const ThemeContext =  createContext();

class ThemeProvider extends Component{
    // define state 
    //creatre wrapper
    render(){
        return(
            /* add value prop */
            <ThemeContext.Provider >
                {/* add children */}
            </ThemeContext.Provider>
        )
    }
    
}

export {ThemeContext, ThemeProvider}