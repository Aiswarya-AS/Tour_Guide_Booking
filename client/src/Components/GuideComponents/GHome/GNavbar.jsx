import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Cookies from 'js-cookie'
const GNavbar = () => {
    const navigate=useNavigate()
    const handleLogout=()=>{
        const token=Cookies.get('guide_jwt')
       
      if (token){
        Cookies.remove('guide_jwt')
        Cookies.remove('guide_id')
        navigate('/guide_login')
      }
    }
  return (
    <>
       <div class="profile-header">
            <div class="profile-header-cover"></div>
            <div class="profile-header-content">
                <div class="profile-header-img">
                    <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="" />
                </div>
                <ul class="profile-header-tab nav nav-tabs nav-tabs-v2">
                    <li class="nav-item">
                        <a  class="nav-link" >
                        <Link to='/guide_home' className='text-decoration-none'> <div class="nav-field"> Dashboard </div></Link>
                            {/* <div class="nav-value">382</div> */}
                        </a>
                    </li>
                    <li class="nav-item">
                        <a  class="nav-link active" >
                        <Link to='/guide_request' className='text-decoration-none'> <div class="nav-field"> Requests </div></Link>
                            {/* <div class="nav-value">1.3m</div> */}
                        </a>
                    </li>
                    <li class="nav-item">
                        <a  class="nav-link" >
                        <Link className='text-decoration-none'> <div class="nav-field"> History</div></Link>
                            {/* <div class="nav-value">1,397</div> */}
                        </a>
                    </li>
                    <li class="nav-item">
                        <a  class="nav-link" >
                        <Link className='text-decoration-none'> <div class="nav-field"> Profile </div></Link>
                            {/* <div class="nav-value">120</div> */}
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link">
                        <Link className='text-decoration-none'> <div class="nav-field"> Messages</div></Link>
                            {/* <div class="nav-value">2,592</div> */}
                        </a>
                    </li>
                    <li class="nav-item ">
                        <a class="nav-link">
                         <div class="nav-field"> <button className='btn btn-outline-danger btn-sm ' onClick={handleLogout}>Logout</button> </div>
                            {/* <div class="nav-value">2,592</div> */}
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </>
  )
}

export default GNavbar
