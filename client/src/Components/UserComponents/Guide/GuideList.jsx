import React, { useEffect,useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
const GuideList = (props) => {
  
  const [guide,setGuide]=useState([])
  const navigate=useNavigate()
  useEffect(()=>{

    axios.get(`${'http://127.0.0.1:8000/user/guides'}/${props.place}`,{
      headers:{"Content-Type": "application/json"},
    }).then((res)=>{
      setGuide(res.data)
      
      
    })
  },[props.place])


  return (
    <>
    <div>
        <h2 className='text-center mt-5'>Guides </h2>
    </div>
    <div class="container">
  <div class="row">
    {guide.map((g,index)=>(
    <div class="col-sm m-3"  onClick={()=>navigate(`/guide/${g.id}`)}>
      
      
      <div class="card" style={{width: "18rem"}}>
      <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8cG90cmFpdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" class="card-img-top" alt="..."/>
      <div class="card-body">
        <h1>{g.firstname}</h1>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        
      </div>
    </div>
    
    
    </div>
    
    ))}
  </div>
</div>
    

    </>
  )
}

export default GuideList
