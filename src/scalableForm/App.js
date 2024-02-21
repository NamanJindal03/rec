import React, {useState} from 'react'

export default function App() {
    const [formData, setFormData] = useState({
                                        name: '',
                                        age: '',
                                        email: ''
                                    })
    
    
    function handleNameChange(e){
        // setFormData((prevState) =>{ return {...prevState, name: e.target.value}})
        setFormData({...formData, name: e.target.value})
    }
    function handleAgeChange(e){
        // setFormData((prevState) =>{ return {...prevState, age: e.target.value}})
        setFormData({...formData, age: e.target.value})

    }
    function handleEmailChange(e){
        // setFormData((prevState) =>{ return {...prevState, email: e.target.value}})
        setFormData({...formData, email: e.target.value})

    }
   
    
    function submitForm(e){
        e.preventDefault();
        console.log(formData); //submit it to an API
        //reset form
        setFormData({
            name: "",
            email: "",
            age: ""
        })
    }
    function handleFormChange(e){
        const {name, value} = e.target;
        setFormData({...formData, [name]: value})
    }
  return (
    <>
        <form action="" onSubmit={submitForm}>
            <div>
                Name: <input type="text" value={formData.name} onChange={handleFormChange} name="name"/>
            </div>
            <div>
                Age: <input type="number" value={formData.age} onChange={handleFormChange} name="age"/>
            </div>
            <div>
                Email: <input type="text" value={formData.email} onChange={handleFormChange} name="email"/>
            </div>
            <button  type='submit'>Submit</button>
        </form>
    </>
  )
}
