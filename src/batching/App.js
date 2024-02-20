import React, {useState} from 'react'

export default function App() {
  const [counter, setCounter] = useState(0);
  const [counter2, setCounter2] = useState(10);
  function increaseCounterTimes2(){
    // setCounter2(counter2+5);
    // setCounter(counter+5);
    // setCounter(counter+1);
    setCounter((counter) => counter+1) //react is maintaining that state internally, react passes on to the CB
    setCounter((counter) => counter+1)
  }
  return (
    <>
      Counter:{counter}
      Counter2:{counter2}
      <div>
        <button onClick={()=> increaseCounterTimes2()}>Increase Counter 2 times</button>
      </div>
    </>
  )
}

// function deepCopy() {}
// 	function useState(initialValue){

// 		//
// 		if(Array.isArray(initialValue) => deepCopy(initialValue))

// 		let internalVariable = initialValue;

// 		function internalFunctionToUpdateStateAndRerender(updatedValue){
//       if(updatedValue is a function){
//         let prevValue = internalVariable;
//         updatedValue(prevValue);
//       }



// 			//checks for delta (difference)
// 			internalVariable = updatedValue;
// 			if(difference){
// 				//rerenders
// 				//return [internalVariable, internalFunctionToUpdateStateAndRerender]
// 			}
			
// 		}

// 		return [internalVariable(deep copied), internalFunctionToUpdateStateAndRerender]
// 	}

