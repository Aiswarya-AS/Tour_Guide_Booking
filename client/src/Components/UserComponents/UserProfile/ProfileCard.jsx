import React, { useEffect, useState } from 'react'
import { RiProfileLine } from 'react-icons/ri';
import { GoRequestChanges } from 'react-icons/go';
import { BsClockHistory } from 'react-icons/bs';
import { FaBlog } from 'react-icons/fa';
import Cookies from 'js-cookie';
import axios from 'axios';
import { Link } from 'react-router-dom';
const ProfileCard = () => {
    const user_id=Cookies.get('user_id')
    const [user,setUser]=useState([]);
    
    useEffect(()=>{
        axios.get(`${'http://127.0.0.1:8000/user/user_profile'}/${user_id}`).then((res)=>{
            setUser(res.data)
            console.log(res.data);
        })
    },[user_id])
  return (
    <>
        <div class="col-md-4 mb-3">
              <div class="card">
                <div class="card-body">
                  <div class="d-flex flex-column align-items-center text-center">
                    <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="Admin" class="rounded-circle" width="150"/>
                    <div class="mt-3">
                      <h4>{user.username}</h4>
                      <p class="text-secondary mb-1">{user.firstname} {user.lastname}</p>
                      {/* <p class="text-muted font-size-sm">Bay Area, San Francisco, CA</p> */}
                      {/* <button class="btn btn-primary">Follow</button>
                      <button class="btn btn-outline-primary">Message</button> */}
                    </div>
                  </div>
                </div>
              </div>
              <div class="card mt-3">
                <ul class="list-group list-group-flush">
                <li class="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                    

                    <h6 class="mb-1 text-center " ><RiProfileLine/> <Link className='text-decoration-none text-dark' to='/profile' > Your Profile  </Link></h6>
                  
                  </li>
                  <li class="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                 
                    <h6 class="mb-1 text-center"><GoRequestChanges/><Link className='text-decoration-none text-dark' to='/requests' >  Your Requests  </Link>   </h6>
                   
                  </li>
                  <li class="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                    <h6 class="mb-1 text-center"><BsClockHistory/> Booking History</h6>
                  </li>
                  <li class="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                    <h6 class="mb-1 text-center"><FaBlog/>  Your Blogs</h6>
                  </li>
                </ul>
              </div>
            </div>
    </>
  )
}

export default ProfileCard
