import React from 'react'
import './Login.css'

function Login() {
  return (
    <div>

<h1 class="h">LOGIN </h1>
   
   <div class="main">
       <img class="img1" src="https://th.bing.com/th/id/OIP.Aiq1mSfVLH0XuF4mpr7EyQAAAA?pid=ImgDet&rs=1" alt=""/>
       
       <div class="log">
           <h3 class="he">EMAIL</h3>
           <input type="text" class="inp"/>
   
           <h3 class="he">PASSWORD</h3>
           <input type="text" class="inp"/>
          <a href="/home"> <button class="btnn">LOGIN</button></a>
       </div>
       <img src="https://www.mcxtra.com/assets/new/img/sections/wipro/doctor-on-call.png" class="img" alt=""/>
   </div>
    </div>
  )
}

export default Login