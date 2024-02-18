import React, {useState} from 'react'
let count = 0;
export default function App2() {

    // wwhat all values you can pass as the intial value?
    /* 
        obj, arr, boolean, number, string, date, function
    */
    const [name, setName] = useState('naman');
    const [age, setAge] = useState(4);
    function sampleCall(){
        //wrong -> why? we will discuss
        // setAge(age+1)
        // setAge(age+1)
        // setAge(age+1)
        // setAge(age+1)
        // setAge(age+1)
        // setAge(age+1)

        console.log('called')
        count++;
        if(count < 5){
            setAge(age+1)
        }
    }
  return (
    
    <div>
        Name: {name}
        Age: {age}

        <h1>When birthday comes - click below</h1>
        <button onClick={sampleCall()}>
            Birthday Came?
        </button>
    </div>
  )
}

