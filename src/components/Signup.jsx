import React, { useState } from 'react'
import validator from 'validator'
import "../Login.css"
import glogo from "../assets/images/2284991.webp"
import flogo from "../assets/images/437557.webp"
import { Link } from 'react-router-dom'


const Signup = () => {
    
    const [emailError, setEmailError] = useState('') 
    const [errorMessage, setErrorMessage] = useState('') 
  const [email,setEmail]=useState('');
  const[password,setPassword]=useState('');
  
  const validate = (value) => { 
  
    if (validator.isStrongPassword(value, { 
        minLength: 8, minLowercase: 1, 
        minUppercase: 1, minNumbers: 1, minSymbols: 1 
    })) { 
      setPassword(value);
        setErrorMessage('') 
    } else { 
        setErrorMessage('Is Not Strong Password') 
    } 
} 
const handlepassword=(e) => {validate(e.target.value)
}
    const validateEmail = (e) => { 
        var email = e.target.value 
      
        if (validator.isEmail(email)) { 
          setEmail(email)
          setEmailError('') 
        } else { 
          setEmailError('Enter valid Email!') 
        } 
      } 
      const handlechange=(e) => {
        validateEmail(e)
        
      
      }
    return(
    <div className='container'>
    <h1>Entry News app</h1>
<div className='logincontainer'>
       <h2>Create your account</h2>
       <p>Already have an account?<Link to="/login">Sign In</Link></p>
       <hr></hr>
        <div className='google'>
            <img className="photo" src={glogo}></img>
        </div>
        <div className='google'>
            <img className="photo" src={flogo}></img>
        
        </div>
< div className='line'>
<p>OR</p>
</div>
<div className='name'>
<fieldset  className='names' ><legend>First Name</legend>
<input type="text" placeholder='First name' ></input>


</fieldset>
<fieldset  className='names' ><legend>Last Name</legend>
<input type="text" placeholder='Last Name'></input>

</fieldset>
</div>
<fieldset  className='email' ><legend>Emial/Mobile Number</legend>
<input type="email" onChange={handlechange}></input>
<br /> 
        <span style={{ 
          fontWeight: 'bold', 
          color: 'red', 
        }}>{emailError}</span> 

</fieldset>

<fieldset  className='email'><legend>Password</legend>
<input type="password"  onChange={handlepassword} placeholder='Create password' ></input>
<br /> 
                {errorMessage === '' ? null : 
                    <span style={{ 
                        fontWeight: 'bold', 
                        color: 'red', 
                    }}>{errorMessage}</span>} 
</fieldset>

<button className='button' >CONTINUE</button>
<p>By continuing, you agree to the Terms of Service and acknowledge our Privacy Policy.</p>
</div>

</div>



)
}

export default Signup