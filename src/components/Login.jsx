import React, { useState } from 'react'
import validator from 'validator'
import "../Login.css"
import { useNavigate } from "react-router-dom";
import glogo from "../assets/images/2284991.webp"
import flogo from "../assets/images/437557.webp"
import { Link } from 'react-router-dom'
function Login() {
  const [emailError, setEmailError] = useState('') 
  const navigate=useNavigate();
  const validateEmail = (e) => { 
    var email = e.target.value 
  
    if (validator.isEmail(email)) { 
      setEmail(email)
      setEmailError('') 
    } else { 
      setEmailError('Enter valid Email!') 
    } 
  } 
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
 const handlechange=(e) => {
  validateEmail(e)
  

}
const handlepassword=(e) => {validate(e.target.value)
}
const handleLogin=()=>{
  if(email==='admin@abc.com'&&password==='Admin@@123'){
    navigate('/')
  }else{
    alert(`${email}`) 
  }

}

  return (
    
    <div className='container'>
      <form>
        <h1>Entry News app</h1>
    <div className='logincontainer'>
           <h2>Sign in</h2>
           <p>Don't have an account?<Link to="/signup">create an account</Link></p>
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

<fieldset  className='email' ><legend>Emial/Mobile Number</legend>
<input type="email" onChange={handlechange}></input>
<br /> 
        <span style={{ 
          fontWeight: 'bold', 
          color: 'red', 
        }}>{emailError}</span> 
</fieldset>
<fieldset  className='email'><legend>Password</legend>
<input type="password"  onChange={handlepassword}></input>
<br /> 
                {errorMessage === '' ? null : 
                    <span style={{ 
                        fontWeight: 'bold', 
                        color: 'red', 
                    }}>{errorMessage}</span>} 
</fieldset>
<p>Forget Password?</p>
<button className='button' onClick={handleLogin}>SIGN IN</button>
    </div>
    </form>
    </div>
  )
}

export default Login