
import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import axios from '../../../utilis/axios';
import { signupPost } from '../../../utilis/constants';
import { Link } from 'react-router-dom';
const Signup = () => {
    const [firstname,setFirstname]=useState();
    const [lastname,setLastname]=useState();
    const [username,setUsername]=useState();
    const [phone,setPhone]=useState();
    const [email,setEmail]=useState();
    const [password,setPassword]=useState();
    const navigate = useNavigate();
    const handleSignup=(e)=>{
        e.preventDefault();
        const data=JSON.stringify({
            firstname,
            lastname,
            email,
            phone,
            username,
            password
        })
        axios.post(signupPost,data,{
            headers:{"Content-Type": "application/json"},
        }).then((res)=>{
            if(res.status==='true'){
                console.log('singup ayada kuttaa...');
                navigate('/login')
            }else{
                console.log('Illa mwonuee ni valarinittaa')
            }
        })

    }
  return (
    <>
    <div className='login-page'>
    <form onSubmit={handleSignup}  id="login-form" className="login-form"  >
  <div>
    <div className='title'>

  <h1 >Signup </h1>
    </div>
    <label className="label-email">
      <input type="text" className="text" name="email"value={firstname} onChange={(e)=>{setFirstname(e.target.value)}} placeholder="FirstName" tabIndex="1" required />
      <span className="required">FirstName</span>
    </label>
  </div>

  <div>
    <label className="label-email">
      <input type="text" className="text" name="email"value={lastname} onChange={(e)=>{setLastname(e.target.value)}} placeholder="LastName" tabIndex="1" required />
      <span className="required">LastName</span>
    </label>
  </div>


  <div>
    <label className="label-email">
      <input type="text" className="text" name="email"value={username} onChange={(e)=>{setUsername(e.target.value)}} placeholder="UserName" tabIndex="1" required />
      <span className="required">UserName</span>
    </label>
  </div>


  <div>
    <label className="label-email">
      <input type="email" className="text" name="email"value={email} onChange={(e)=>{setEmail(e.target.value)}} placeholder="Email" tabIndex="1" required />
      <span className="required">Email</span>
    </label>
  </div>


  <div>
    <label className="label-email">
      <input type="number" className="text" name="email"value={phone} onChange={(e)=>{setPhone(e.target.value)}} placeholder="Email" tabIndex="1" required />
      <span className="required">Phone</span>
    </label>
  </div>
  {/* <input type="checkbox" name="show-password"  className="show-password a11y-hidden" id="show-password" tabIndex="3" />
  <label className="label-show-password" htmlFor="show-password">
    <span>Show Password</span>
  </label> */}
  <div>
    <label className="label-password">
      <input type="text" className="text" name="password" value={password} onChange={(e)=>{setPassword(e.target.value)}} placeholder="Password" tabIndex="2" required />
      <span className="required">Password</span>
    </label>
  </div>
  {/* <input type="submit" value="Log In" /> */}
  <input type='submit' value='Log In'/>
  <div className="email">
    
    <Link to='/login'>Login</Link>
  </div>
  {/* <figure aria-hidden="true">
    <div className="person-body"></div>
    <div className="neck skin"></div>
    <div className="head skin">
      <div className="eyes"></div>
      <div className="mouth"></div>
    </div>
    <div className="hair"></div>
    <div className="ears"></div>
    <div className="shirt-1"></div>
    <div className="shirt-2"></div>
  </figure> */}
</form>
</div>
    </>
  )
}

export default Signup
