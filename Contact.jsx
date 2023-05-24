import React from 'react'
import './Contact.css'
import {MdOutlineMail} from 'react-icons/md'
import Navbar from '../Navbar/Navbar'
import {AiOutlineTwitter} from 'react-icons/ai'
import {GrFacebookOption} from 'react-icons/gr'
function Contact() {
  return (
    <div>
        <Navbar/>
        <h1 className="hcont" >Contact us</h1>
        <div className='row-cont' >
          <div className="card1-cont">
            <a className='ico1-ico' href="">< MdOutlineMail/></a>
            <h3 className='emh' >EMAIL</h3>
          </div>

          <div className="card1-cont">
          <a className='ico1-ico' href="">< AiOutlineTwitter/></a>
            <h4 className='emh' >TWITTER</h4>
          </div>

          <div className="card1-cont">
          <a className='ico1-ico' href="">< GrFacebookOption/></a>
            <h5 className='emh' >FACEBOOK</h5>
          </div>
          </div>
 
          <div className="medil">
        <h3 className='h1medi' >Got questions?</h3>
        <h6 className='h6-l' >Send us email or</h6>
        <input type="text" class="inpmed" placeholder="FIRST NAME"/>
       <input type="text" class="inpmed" placeholder="LAST NAME"/>
       <input type="number" class="inpmed" placeholder="PHONE NUMBER"/>
       <input type="text" class="inpmed" placeholder="ADRESS"/>
       <input type="text" class="inpmed" placeholder="MESSAGE"/>
       
       <button className='btnnmed' >SUBMIT</button>
       
       </div>
    </div>
  )
}

export default Contact