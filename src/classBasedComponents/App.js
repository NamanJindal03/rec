import React, {Component} from 'react'
import { FaTimes, FaCircle, FaPen  } from "react-icons/fa";

// export default function App(props) {
//   const [state, setState] = useState({isClass: true, newState: 'somevalue'});
//     console.log(props.studying)
//   return (
//     <>
//         <div>App</div>
//         <button onClick={()=> setIsClass({...state, isClass: !state.isClass})}>toggle</button>
//     </>
//   )
// }
/* */
export default class App extends Component{
    state = {isClass: true, newState: 'somevalue'}
    toggleIsClass = () =>{
        this.setState({isClass: !this.state.isClass})
        /* 
            setState({ isClass:true})
            state = {isCLass: true}
        */
    }
    componentDidMount(){
        console.log('mount ');
        this.setState({isClass: false})
    }
    componentDidUpdate(){
        console.log('updated')
    }
    componentWillUnmount(){
        clearInterval();
    }
    
    render(){
        console.log('rendor ')
        return (
            <>
                <div>{this.props.studying}</div>
                <button 
                    onClick={this.toggleIsClass}
                >
                    toggle
                </button>
            </>
        )
    }
}


// export default class App extends Component{
//     constructor(props){
//         super(props);
//         this.state = {
//             isClass: true, 
//             newstate: 'somevalue'
//         }
//     }
//     // state = {isClass: true, newState: 'somevalue'}
//     toggleIsClass = () =>{
//         this.setState({isClass: !this.state.isClass})
//         /* 
//             setState({ isClass:true})
//             state = {isCLass: true}
//         */
//     }
//     render(){
//         console.log(this.props)
//         console.log(this.state)
//         return (
//             <>
//                 <div>{this.props.studying}</div>
//                 <button 
//                     onClick={this.toggleIsClass}
//                 >
//                     toggle
//                 </button>
//             </>
//         )
//     }
// }