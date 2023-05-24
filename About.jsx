import React from 'react'
import './About.css'
import Navbar from '../Navbar/Navbar'
import {FaHandsHelping} from 'react-icons/fa'
import {GiShakingHands} from 'react-icons/gi'
import {FaRegHospital} from 'react-icons/fa'

function About() {
  return (
    <div>
        <Navbar/>
        <div className="mission">
          <h1 className='mh-ab' >Our Mission</h1>
          <h3 className='mission-para' >Healthyweb helps implement the best possible healthcare services and forms a communication link between home and hospital.</h3>
        </div>
        <img  className='imabd' src="https://img.freepik.com/free-vector/health-professional-team-concept-illustration_114360-1598.jpg" alt="" />
        <h1 className='mh2-ab' >Our Values</h1>
       <div className="cards-ab">
        <div className="card-ab">
          <a className="ico-abt" href=""><FaHandsHelping/></a>
          <h4 className='val-abt' > We help people </h4>
        </div>

        <div className="card-ab">
        <a className="ico-abt" href=""><FaRegHospital/></a>
          <h4 className='val-abt' > We are genuine </h4>
        </div> 

        <div className="card-ab">
        <a className="ico-abt" href=""><GiShakingHands/></a>
          <h4 className='val3-abt' > We keep promises </h4>
        </div>
        </div>
    </div>
  )
}

export default About