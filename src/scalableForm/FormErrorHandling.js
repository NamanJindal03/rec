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
        // const tempObj = ;
        setFormData({...formData, [name]: {...formData[name], value }})
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
