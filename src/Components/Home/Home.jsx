import React from 'react'
import "./Home.css"
import Navbar from '../Navbar/Navbar'
import {FaAmbulance} from 'react-icons/fa'
import {TbNurse} from 'react-icons/tb'
import {FaSyringe} from 'react-icons/fa'
import {RiStethoscopeFill} from 'react-icons/ri'
import {SlCalender} from 'react-icons/sl'



function Home() {
  return (
    <div>
        <Navbar/>
        <h1 className='head1-home' >Protect And Take Care Of Your Health </h1>
        <img className='doc-home' src="https://www.amlcare.ie/content/dam/amlcare/images/Img_large_diagnosis%20process%204.png" alt="" />
         
       <div className="right-home">
        <h4 className="head4-home">"The best doctors give the least medicines." - Benjamin Franklin</h4>
        <div className="card1">
           <div className="flex-home"><a className='icon1-home' href=""><FaAmbulance/></a>
           <h6 className='head2-home'>Emergency Help</h6></div> 
        </div>


        <div className='card2' >
        <div className="flex-home"><a  className='icon1-home' href=""><TbNurse/></a>
          <h6 className='head2-home'>Best Professionals</h6></div> 
        </div>


        <div className='card3' >
        <div className="flex-home"><a  className='icon1-home' href=""><RiStethoscopeFill/></a>
          <h6 className='head2-home'>Qualified Doctors</h6></div> 
        </div>


        <div className="card4">
        <div className="flex-home"> <a  className='icon1-home' href=""><FaSyringe/></a>
           <h6 className='head2-home'>Medical Treatment</h6></div> 
        </div>
         </div>
        <a href='/about'></a> <button className="btn-home ">Read More</button>

        <h1 className='headn-home' >Latest News</h1>
            
      <div className="newscards">
        <div className="newscard">
          <div className="picnews"></div>
         <div className="news-flex"> <a className='icocale' href=""><SlCalender/></a>
          <p className='p-home' >june 21 2022</p></div>
          <h3 className='head-news' >New experienced doctors have joined.</h3>
          <button className='btn-news' >Read More</button>
          
        </div>

        <div className="newscard">
        <div className="picnews2"></div>
         <div className="news-flex"> <a className='icocale' href=""><SlCalender/></a>
          <p className='p-home' >june 23 2022</p></div>
          <h5 className='head-news' >Special care department for women and children is launching soon.</h5>
          <button className='btn-news' >Read More</button>
        </div>
          
        <div className="newscard">
        <div className="picnews3"></div>
         <div className="news-flex"> <a className='icocale' href=""><SlCalender/></a>
          <p className='p-home' >june 26 2022</p></div>
          <h3 className='head-news' >Medicines delivery now made faster.</h3>
          <button className='btn-news' >Read More</button>
        </div>


        

        </div>
      </div>
  )
}

export default Home