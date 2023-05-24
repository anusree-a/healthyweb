import React from 'react'
import Navbar from '../Navbar/Navbar'
import './Profile.css'
import profile from '../Assets/profile.png'

function Profile() {
 

 


 

   
 return(
   
     <div>
          
     
          <Navbar/>


      

           <div className="pr-div">
            <h1 className='prh' >Profile</h1>
          <img className='imgpr' src="data:image/jpeg;base64,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" alt="" />
          <button className='cnt-btn' >CONNECT</button>
          <h4 className='name-pr' >Helena thomas</h4>
          <h4 className='name-pra' >30 yrs </h4>
         </div>
         <div className="row1">
               
      
         <div className="cardpr">
          <h6 className='headpr-home'>BLOODGLUCOSE LEVEL</h6>
          <h6 className='headprh-home' >90 mg/dL</h6>
          </div> 
   
          <div className="cardpr">
          <h6 className='headprhbp-home'>BLOOD PRESSURE</h6>
          <h6 className='headprbp-home'>120/80 mmHg</h6>
          </div> 

          <div className="cardpr">
          <h6 className='headpc-home'>CHOLESTROL</h6>
          <h6 className='headprh-home' >120 mg/dL</h6>
          </div> 
   
   
         </div>

         <div className="row2">
                
         <div className="cardpr">
          <h6 className='headprate-home'>HEART RATE</h6>
          <h6 className='headprh75-home' >75 bpm</h6>
          </div> 
   
          <div className="cardpr">
          <h6 className='headprht-home'>HEIGHT</h6>
          <h6 className='headprh75-home' >170cm</h6>
          </div> 

          <div className="cardpr">
          <h6 className='headprwt-home'>WEIGHT</h6>
          <h6 className='headprh75-home' >50kg</h6>
          </div> 
                
                
          </div>
            


         <div className="glu"> </div>
         <h4 className='bld-gr' >Blood glucose level </h4>
         <div className="bp"></div>
         <h4 className='bp-gr' >Blood pressure </h4>
         <div className="btnsl">
         <button className='btn1-pr' >MY HEALTH RECORD</button>
         <button className='btn1-pr'>MEDICATIONS</button>
         <button className='btn1-pr'>CONSULTED DOCTORS</button>
         <button className='btn1-pr'>PREVIOUS TEST RECORDS</button>
               <button className='btn2-pr'>EDIT PROFILE</button></div>   

          
           
    
     </div>
    
    
 )
}

export default Profile