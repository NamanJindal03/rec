import { INCREMENT, DECREMENT, RESET } from "../actionTypes"
export default function reducer(state, action){
    switch(action.type){
        case INCREMENT:
            return {...state, count: state.count + action.payload}
            // state + action.payload
        case DECREMENT:
            return {...state, count: state.count - action.payload}
        case RESET:
            return {...state, count: 0}
        default: 
            return state
    }
    // console.log(state)
    // return state+ payload;
}