import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import Navbar from '../Home/Navbar'
import { BiLocationPlus } from 'react-icons/bi';
import { GrLanguage } from 'react-icons/gr';
import Cookies from 'js-cookie';

import toast from 'react-hot-toast';
const GuideDetail = () => {
  const parms=useParams()
  const [guide,setGuide]=useState({})
  const [date,setDate]=useState()
  const [time,setTime]=useState()
  const [persons,setPersons]=useState()
  const user_id=Cookies.get('user_id')
  const guide_id=parms.id 
  const guide_name=guide.firstname
  const guide_place=guide.place
  
  
  useEffect(()=>{
    axios.get(`${'http://127.0.0.1:8000/user/guide'}/${parms.id}`).then((res)=>{
      setGuide(res.data)
    
      
    })
  },[parms])
  
  const handleSubmit=(e)=>{
    e.preventDefault()
    const data=JSON.stringify({
      date,
      time,
      persons,
      user_id,
      guide_id,
      guide_name,
      guide_place,

      
    });
    axios.post('http://127.0.0.1:8000/user/request',data,{
      headers: { "Content-Type": "application/json" }
    }).then((res)=>{
      if(res.data.status==='true'){
        toast('Your request has send!', {
          icon: '👏',
          position:'top-right'
        });
      }else if(res.data.status==='exists'){
       toast('You have already send request.Plz wait..', {
          icon: '😔',
          position:'top-right'
        });
      }
    })
  }
  return (
    <>
    <Navbar/>
      <div className='d-flex flex-row col-md-12'>
        <div className='container col-md-3 mx-5 mt-5'>
        <div class="card " style={{width: "25rem"}}>
            <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8cG90cmFpdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" class="card-img-top" alt="..."/>
            <div class="card-body">
              <h5 class="card-title">{guide.firstname}&nbsp;{guide.lastname}</h5>
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item"><BiLocationPlus /> I live in {guide.place}</li>
              <li class="list-group-item"><GrLanguage/>  I speak {guide.languages_known}</li>
              {/* <li class="list-group-item">A third item</li> */}
              
            </ul>
            <div class="card-body">
              <button className='btn btn-info'>Chat with me</button>
            </div>
        </div>
        </div>
        <div className='' style={{width:'60rem',height:"20rem"}}>
        <div class="card " style={{border:'none'}}>
        <video width="850" height="500" controls>
                      <source src="movie.mp4" type="video/mp4"/>
                      <source src="movie.ogg" type="video/ogg"/>
                      Your browser does not support the video tag.
            </video>            
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
            
            
        </div>
        </div>

      </div>
      <div className='d-flex flex-row col-md-12 mt-5  'style={{border:"none"}}>
        <form style={{border:"none"}} onSubmit={handleSubmit} >
        <div className='col-md-6 conatiner mx-5 'style={{border:"none"}}>
        <div class="card" style={{width: "20rem"}}>
            <ul class="list-group list-group-flush">
              <p>200/per Person</p>
              <input type='date'className='mt-3'value={date} onChange={(e)=>{setDate(e.target.value)}}  placeholder='Pick Date' required/>
              <input type='time'className='mt-3' value={time} onChange={(e)=>{setTime(e.target.value)}}  placeholder='Pick Time' required/>
              <input type='text'className='mt-3' value={persons} onChange={(e)=>{setPersons(e.target.value)}} placeholder='Total Persons' required/>

              
            </ul>
            {/* <select className='mt-3'>
                <option value='fruit'>Fruit</option>
                <option value='vegetable' >Vegetable</option>
                
              </select> */}
            <div class=" text-center mt-4">
              <button className='btn btn-dark'>Request</button>
            </div>
        </div>
        </div>
        </form>
        <div className='col-md-6'></div>

      </div>
    </>
  )
}

export default GuideDetail
