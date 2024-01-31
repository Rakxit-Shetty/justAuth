import { useState } from "react";
import logo from "../assets/rakki.jpg";
import { useLoginMutation } from "../redux/apis/UserApi";
import "./Login.css";

const Login = () => {

  const [login, { error, data }] = useLoginMutation();
  console.log(error,data);

  const [formData,setFormData]=useState({email:"",password:""});
  let {email,password}=formData;

const onInputChange=(e)=>{

  setFormData((prevState)=>({
    ...prevState,
    [e.target.name]: e.target.value,
  }))
  
}

const hitLoginApi=(e)=>{
  e.preventDefault()
login(formData)
}

  return (
    <>
      <div className="login-container">
        <form className="login-form" onSubmit={(e)=>hitLoginApi(e)}>

        <div className="login-logo">
          <img src={logo} alt="logo" />
          </div>
          
          <div className="login-input">
          <label htmlFor="email">Email</label>
          <div className="form__input">
            <input
              required
              id="email"
              name="email"
              type="email"
              value={email} onChange={onInputChange}
            />
          </div>
        </div>

        <div className="login-input">
          <label htmlFor="password">Password</label>
          <div className="form__input">
            <input
              required
              id="password"
              name="password"
              type="password"
              value={password} onChange={onInputChange}
            />
          </div>
        </div>

        <div className="flex-center">
          <button className="btn-primary btn-black btn-login flex-center">
            Log in
          </button>
        </div>
        </form>
      </div>


      {/* <div>Login</div> */}
{/* <div>
  <label>Email :</label>
<input type="text" name="email" />
</div>
<div>
  <label>Password :</label>
  <input type="password" name="password" value={password} onChange={onInputChange}/>
  </div> */}
{/* <button onClick={hitLoginApi} >login</button> */}
    </>
  )
}

export default Login