import React from 'react'
import Navbar from '../Navbar/Navbar'
import './Library.css'

function Library() {
  return (
    <div>
        <Navbar/>
       <div className="mainlib">
        <h1 className='expd' >Explore Diseases</h1>
        <div className="dengue">
        <h3 className='deh1' >DENGUE FEVER</h3>
        <p className='parad' >-- A viral infection transmitted by mosquitoes.</p>
        <h3 className='syh' > Symptoms</h3>
        <p className='parad' >High fever, severe headache, joint and muscle pain, rash.</p>
        <h3 className='syh' > Precautions</h3>
        <p className='parad' > --  Eliminate standing water where mosquitoes breed.  <br />
                                --  Use mosquito repellent and wear protective clothing.  <br />
                                --  Keep windows and doors screened to prevent mosquito entry. <br />
                                 -- Seek medical attention for suspected cases.</p>
        <button className='know' >Know More</button>
          </div>

          <div className="dengue">
        <h3 className='deh2'>MALARIA</h3>
        <p className='parad' > -- A mosquito-borne infectious disease caused by parasites.</p>
        <h3 className='syh' > Symptoms</h3>
        <p className='parad' >  High fever, chills, headache, muscle aches, fatigue, nausea.</p>
        <h3 className='syh' > Precautions</h3>
        <p className='parad' > -- Take antimalarial medication as prescribed. <br />
                                -- Use insect repellent and wear protective clothing. <br />
                                --  Sleep under mosquito nets, especially in high-risk areas.<br />
                                 -- Eliminate mosquito breeding sites.</p>
                                 <button className='know' >Know More</button>
          </div>


          
          <div className="dengue">
        <h3 className='deh3' >HEPATITIS B</h3>
        <p className='parad' >-- A viral infection affecting the liver.</p>
        <h3 className='syh' > Symptoms</h3>
        <p className='parad' > Abdominal pain, dark urine, jaundice, fatigue, nausea.</p>
        <h3 className='syh' > Precautions</h3>
        <p className='parad' > -- Get vaccinated against hepatitis B.<br />
                                -- Practice safe sex and use barrier methods.  <br />
                                --  Sleep under mosquito nets, especially in high-risk areas.<br />
                                 -- Eliminate mosquito breeding sites.</p>
                                 <button className='know' >Know More</button>
          </div>

           
          <div className="dengue">
        <h3 className='deh4' >HYPERTENSION</h3>
        <p className='parad' > -- A condition where blood pressure is consistently elevated.</p>
        <h3 className='syh' > Symptoms</h3>
        <p className='parad' > Often asymptomatic, but may include headaches, dizziness, chest pain.</p>
        <h3 className='syh' > Precautions</h3>
        <p className='parad' > -- Adopt a low-sodium, balanced diet.<br />
                                -- Exercise regularly and maintain a healthy weight.  <br />
                                -- Limit alcohol consumption and avoid smoking.<br />
                                 -- Follow medical advice and take prescribed medications.</p>
                                 <button className='know' >Know More</button>
          </div>

             
          <div className="dengue">
        <h3 className='deh5' >TUBERCULOSIS</h3>
        <p className='parad' >-- An infectious disease caused by Mycobacterium tuberculosis.</p>
        <h3 className='syh' > Symptoms</h3>
        <p className='parad' > Persistent cough, chest pain, weight loss, fatigue, night sweats.</p>
        <h3 className='syh' > Precautions</h3>
        <p className='parad' > -- Follow recommended vaccination schedules.<br />
                                --  Practice good respiratory hygiene, such as covering the mouth while coughing.  <br />
                                --  Ensure proper ventilation in living spaces.<br />
                                 -- Follow medical advice and take prescribed medications.</p>
                                 <button className='know' >Know More</button>
          </div>

          <div className="dengue">
        <h3 className='deh5' >CHOLERA</h3>
        <p className='parad' >  -- A bacterial infection that causes severe diarrhea and dehydration.</p>
        <h3 className='syh' > Symptoms</h3>
        <p className='parad' > Profuse watery diarrhea, vomiting, dehydration, muscle cramps.</p>
        <h3 className='syh' > Precautions</h3>
        <p className='parad' > -- Drink safe, treated water and avoid contaminated food.<br />
                                --  Maintain good hygiene and handwashing practices.  <br />
                                --  Consume properly cooked food and avoid raw or undercooked seafood.<br />
                                 -- Seek immediate medical attention for suspected cases.</p>
                                 <button className='know' >Know More</button>
          </div>








       </div>
    </div>
  )
}

export default Library