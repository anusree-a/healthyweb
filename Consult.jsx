import React from 'react'
import './Consult.css'
import Navbar from '../Navbar/Navbar'


function Consult() {
  return (
    <div>
      <Navbar/>
      <div className="content-consult">
      <img className='dnc' src="https://hips.hearstapps.com/hmg-prod/images/portrait-of-a-happy-young-doctor-in-his-clinic-royalty-free-image-1661432441.jpg?crop=0.66698xw:1xh;center,top&resize=1200:*" alt="" />
      <h3 className='don-con'  > Doctor's name</h3>
      <h3 className='don-con2'  >Qualification</h3>
     <div className="btns-con"><button className='btn-con'>PRESCRIPTION</button>
       <button className='btn-con' >UPLOAD REPORT</button></div>
      </div>
       
       <div className="medi"> 
        <h1 className='h1medi' >Grab your medicines here</h1>
        <input type="text" class="inpmed" placeholder="MEDICINE NAME"/>
       <input type="text" class="inpmed" placeholder="QUANTITY"/>
       <input type="text" class="inpmed" placeholder="COMPANY OF MEDICINE"/>
       <input type="text" class="inpmed" placeholder="YOUR NAME"/>
       <input type="text" class="inpmed" placeholder="ADRESS"/>
       <input type="number" class="inpmed" placeholder="PHONE NUMBER"/>
       <input type="text" class="inpmed" placeholder="MESSAGE"/>
       <button className='btnnmed' >SUBMIT</button>
       
       </div>

    </div>
  )
}

export default Consult