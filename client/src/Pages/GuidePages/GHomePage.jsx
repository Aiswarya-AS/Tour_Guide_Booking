import React from 'react'


import GProfile from '../../Components/GuideComponents/GHome/GProfile'
import GNavbar from '../../Components/GuideComponents/GHome/GNavbar'
import GRequests from '../../Components/GuideComponents/GHome/GRequests'
import GBase from '../../Components/GuideComponents/GHome/GBase.css'

const GHomePage = () => {
  return (
<div>
    <div class="container">
  <div class="profile">

    <GNavbar/>

      <div class="profile-container">
         <GProfile/>
           {/* <GRequests/> */}

      </div>
  </div>
</div>
  </div>
  )
}

export default GHomePage
