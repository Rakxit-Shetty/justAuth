import { useState } from "react";
import { useLoginMutation } from "../redux/apis/userApi";

const Login = () => {

  const [login, { error, data }] = useLoginMutation();
console.log(error,data)
  const [formData,setFormData]=useState({email:"",password:""});
// let {email,password}=formData;

const onInputChange=(e)=>{

  setFormData((prevState)=>({
    ...prevState,
    [e.target.name]: e.target.value,
  }))
  
}

const hitLoginApi=()=>{
login(formData)
}

  return (
    <>
      <div>Login</div>
<div>
  <label>Email :</label>
<input type="text" name="email" value={formData.email} onChange={onInputChange}/>
</div>
<div>
  <label>Password :</label>
  <input type="password" name="password" value={formData.password} onChange={onInputChange}/>
  </div>
<button onClick={hitLoginApi} >login</button>
    </>
  )
}

export default Login