import toast from 'react-hot-toast';
import axios from '../../../utilis/axios';
import React, { useEffect, useState } from 'react'
import './Login.css'
import Cookies from 'js-cookie'
import { useNavigate } from "react-router-dom";
import { loginPost } from '../../../utilis/constants';
import { Link } from 'react-router-dom';
// import { loginPost } from '../../../utilis/constants';

const Login = () => {
    const [email,setEmail]=useState();
    const [password,setPassword]=useState();
    const navigate = useNavigate();



    useEffect(()=>{
      const token = Cookies.get('jwt')
      console.log(token)
      if(token){
        navigate('/')
      }
    },[navigate])

    
    const handleLogin=(e)=>{
        e.preventDefault();
        const data=JSON.stringify({
            email,
            password
        });
        
        if (email===''||password===''){
            console.log('Please provide all the fields')
        }else{
            axios.post(loginPost,data,{headers: { "Content-Type": "application/json" },}).then(
                (res)=>{
                  
                    
                        if(res.data.status==='true'){
                            toast.success('Logined successfully!!!',{
                              position:'top-right',
                              style: {
                                borderRadius: '10px',
                                background: '#333',
                                color: '#fff',
                              }
                            })
                            Cookies.set("jwt",String(res.data.user_jwt))
                            Cookies.set('user_id',String(res.data.user_id))
                            navigate('/')
                        }else {
                          toast.error('Invalid Email and Password!!',{
                            position:'top-right',
                            style: {
                              borderRadius: '10px',
                              background: '#333',
                              color: '#fff',
                            }
                          })
                          

                        }
                    
                    
                    
                }
            )

        }
    }
return (
    <>
    <div>

   
    </div>
    {/* <form onSubmit={handleLogin}>
    <input type="text" name='email' value={email} onChange={(e)=>{setEmail(e.target.value)}} placeholder='Email' /><br/>
    <input type="password" name='password' value={password} onChange={(e)=>{setPassword(e.target.value)}} placeholder='Password' /><br/>
    <button type='submit'>Login</button>
    </form> */}
    <div className='login-page'>
    <form onSubmit={handleLogin}  id="login-form" className="login-form"  >
  <h1 className="a11y-hidden">Login Form</h1>
  <div>
    <label className="label-email">
      <input type="email" className="text" name="email" value={email} onChange={(e)=>{setEmail(e.target.value)}} placeholder="Email" tabIndex="1" required />
      <span className="required">Email</span>
    </label>
  </div>
  <input type="checkbox" name="show-password"  className="show-password a11y-hidden" id="show-password" tabIndex="3" />
  <label className="label-show-password" htmlFor="show-password">
    <span>Show Password</span>
  </label>
  <div>
    <label className="label-password">
      <input type="text" className="text" name="password" value={password} onChange={(e)=>{setPassword(e.target.value)}} placeholder="Password" tabIndex="2" required />
      <span className="required">Password</span>
    </label>
  </div>
  {/* <input type="submit" value="Log In" /> */}
  <input type='submit' value='Log In'/>
  <div className="email">
    
    <Link to='/signup'>Register</Link>
  </div>
  {/* <figure aria-hidden="true" className='text-center'>
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
  <h2 className='text-center'>Login</h2>
</form>
</div>
    </>
)
}

export default Login
