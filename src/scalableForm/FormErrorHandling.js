import React, {useState} from 'react'
import './style.css'

export default function FormErrorHandling() {
    const [formData, setFormData] = useState({
                                        fullname: {value: "", error: "The name cannot be empty"},
                                        age: {value: "", error: ""},
                                        email: {value: "", error: ""},
                                    })
    function submitForm(e){

        e.preventDefault();
        let isError = false;
        if(formData.fullname.value.length < 3){
            isError = true;
            setFormData((prevState)=> ({
                ...prevState, 
                fullname: {...prevState.fullname, error:'The name should be greater than 3'}
            }))
        }
        if(parseInt(formData.age.value) < 18){
            isError = true;
            setFormData((prevState)=> ({
                ...prevState, 
                age: {...prevState.age, error:'The age should be greater than 18 or equal to 18'}
            }))
            // formData.age.error = 'The age should be greater than 18 or equal to 18'
        }
        if(formData.email.value.length < 10){
            isError = true;
            setFormData((prevState)=> ({
                ...prevState, 
                email: {...prevState.email, error:'Please enter correct email'}
            }))
            // formData.email.error = 'Please enter correct email'
        }
        if(isError){
            alert('Please correct the form values')
            return;
        }
        console.log(formData); //submit it to an API
        //reset form later
        // setFormData({
        //     name: "",
        //     email: "",
        //     age: ""
        // })
    }
    function handleFormChange(e){
        const {name, value} = e.target;
        /*  */
        console.log('name field -> the form', name);
        console.log('value field -> the form', value);
        console.log('existing form data', formData);
        console.log('formdata with specific key(name)', formData[name])
        // setFormData({...formData, [name]: {...formData[name], value: value }})
        setFormData({...formData, [name]: { value: value , error: ''}})
    }
  return (
    <>
        <form action="" onSubmit={submitForm}>
            <div style={{display: 'flex'}}>
                <label htmlFor="">Full Name:</label>
                <div>
                    <input type="text" value={formData.fullname.value} onChange={handleFormChange} name="fullname"/>
                    {formData.fullname.error ?
                        <div className='errorField'>
                            *{formData.fullname.error}
                        </div>
                        :
                        null
                    }
                </div>
            </div>
            <div style={{display: 'flex'}}>
                <label htmlFor="">Age:</label>
                <div>
                <input type="number" value={formData.age.value} onChange={handleFormChange} name="age"/>
                    {formData.age.error ?
                        <div className='errorField'>
                            *{formData.age.error}
                        </div>
                        :
                        null
                    }
                </div>
                    
                
            </div>
            <div style={{display: 'flex'}}>
                <label htmlFor="">Email:</label>
                <div>
                <input type="text" value={formData.email.value} onChange={handleFormChange} name="email"/>
                    {formData.email.error ?
                        <div className='errorField'>
                            *{formData.email.error}
                        </div>
                        :
                        null
                    }
                </div>
            </div>
            <button  type='submit'>Submit</button>
        </form>
    </>
  )
}
