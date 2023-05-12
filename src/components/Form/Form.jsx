import { useState } from "react"
import validations from "../../validations"

function Form({login}){

    const [userData, setUserData] = useState({
        email: '',
        password: ''
     })
  
    const handleChange = (event) => {
        setUserData({
           ...userData,
           [event.target.name]: event.target.value
        })
        setErrors(validations({
            ...userData,
            [event.target.name]: event.target.value
         }))
    }

    const [ errors, setErrors ] = useState({}) 

    function handleSubmit (event) {
        event.preventDefault()
        login(userData)
    }


    return (
        <div>
            <form>
                <label htmlFor="email">Email: </label>
                <input 
                    value={userData.email} 
                    type="text" 
                    name="email" 
                    onChange={handleChange}
                />
                
                {errors.e1 ? (<p>{errors.e1}</p>)
                : errors.e2 ? (<p>{errors.e2}</p>)
                : (<p>{errors.e3}</p>)               
                }       
                <hr />

                <label htmlFor="password">Password: </label>
                <input 
                    value={userData.password} 
                    type="password" 
                    name="password"
                    onChange={handleChange}
                />
                {
                    errors.p1 ? (<p>{errors.p1}</p>) : (<p>{errors.p2}</p>)
                }
                <hr />

                <button type="submit" onClick={handleSubmit}>INGRESAR</button>
            </form>
        </div>
    )
}

export default Form