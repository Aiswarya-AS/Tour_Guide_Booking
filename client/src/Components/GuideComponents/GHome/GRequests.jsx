import React, { useEffect, useState } from 'react'
import axios from '../../../utilis/axios'
import Cookies from 'js-cookie'
import toast from 'react-hot-toast';
import { acceptPost, guideRequestGet } from '../../../utilis/constants'
const GRequests = () => {
    const [requests,setRequests]=useState([])
 useEffect(()=>{
    const guide_id=Cookies.get('guide_id')
    
    console.log((guide_id));
    axios.get(`${guideRequestGet}/${guide_id}`).then((res)=>{
        setRequests(res.data)
       
        
    })
 },[])

 const handleAccept=(id)=>{
    axios.post(`${acceptPost}/${id}`).then((res)=>{
        if(res.data.status=='true'){
            toast.success('Accepted',{
                position:'top-center',
                style: {
                  borderRadius: '10px',
                  background: '#333',
                  color: '#fff',
                }
              })
        }else{
            toast.error('Something wrong happened!!',{
                position:'top-center',
                style: {
                  borderRadius: '10px',
                  background: '#333',
                  color: '#fff',
                }
              })
        }
    })
 }
  return (
    <>
  <div class="profile-content">
                <div class="row">
                    
                    <div class="col-xl-12">
                        
                        <div class="tab-content p-0">
                            <div class="tab-pane fade active show" id="profile-followers">
                                <div class="list-group">
                        {requests.map((r,index)=>(
                             <div class="list-group-item d-flex align-items-center">
                             {/* <img src="https://bootdey.com/img/Content/avatar/avatar1.png" alt="" width="50px" class="rounded-sm ml-n2" /> */}
                             <div class="flex-fill pl-3 pr-3">
                                 <div><a href="#" class="text-dark font-weight-600">{r.guide_place}</a></div>
                                 <div class="text-muted fs-13px">{r.time},{r.date}</div>
                                 <div class="text-muted fs-13px">Total Persons:{r.total_peoples}</div>
                             </div>
                             {r.status=='Accepted'?<button href="#" class="btn btn-outline-primary">Accepted</button>:<button href="#" class="btn btn-outline-primary" onClick={()=>handleAccept(r.id)}>Accept</button>}
                             
                             {/* <button href="#" class="btn btn-outline-primary mx-3">Reject</button> */}
                         </div>
                        ))}
                                   





                                </div>
                                <div class="text-center p-3">
                                    <a href="#" class="text-dark text-decoration-none">Show more <b class="caret"></b></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </>
)
}

export default GRequests
