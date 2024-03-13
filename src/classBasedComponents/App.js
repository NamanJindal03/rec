import React, {Component} from 'react'

// export default function App(props) {
//   const [isClass, setIsClass] = useState(false);
//     console.log(props.studying)
//   return (
//     <>
//         <div>App</div>
//         <button onClick={()=> setIsClass(!isClass)}>toggle</button>
//     </>
//   )
// }
/*  render() -> we cannot write class based component without this method*/
export default class App extends Component{
    state = {isClass: true}
    render(){
        console.log(this.props)
        console.log(this.state)
        return (
            <>
                <div>{this.props.studying}</div>
                <button 
                    onClick={()=> this.setState({isClass: !this.state.isClass})}
                >
                    toggle
                </button>
            </>
        )
    }
}
