import {  Component, createContext } from "react";

const ThemeContext =  createContext();

class ThemeProvider extends Component{
    // define state 
    //creatre wrapper
    state = {
        theme: 'light',
        toggleTheme: () => {
            console.log('entering')
            this.setState((prevState) => {
                return {theme: prevState.theme === 'light' ? 'dark' : 'light'}
            })
            // this.setState(prevState => )
        }
    }
    render(){
        return(
            /* add value prop */
            <ThemeContext.Provider value={{state: this.state}}>
                {/* add children */}
                {this.props.children}
            </ThemeContext.Provider>
        )
    }
    
}

export {ThemeContext, ThemeProvider}