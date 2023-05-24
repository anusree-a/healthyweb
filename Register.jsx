import React from 'react'
import './Register.css'

function Register() {
 
  return (
    <div>
    
    
    <h1 class="h">REGISTER</h1>
<div class="main">
   
    
<div class="b1">
    
<input class="inp" type="text" placeholder="FIRST NAME"  />
<input class="inp" type="text" placeholder="LAST NAME" />
<input class="inp" type="text" placeholder="PHONE NUMBER" />
<input class="inp" type="text" placeholder="EMAIL" />
<input class="inp" type="text" placeholder="ADDRESS" />
<input class="inp" type="text" placeholder="PASSWORD" />

<div class="form-check">
    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
    <label class="form-check-label" for="flexRadioDefault1">
     MALE
    </label>
  </div>
  <div class="form-check">
    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked/>
    <label class="form-check-label" for="flexRadioDefault2">
      FEMALE
    </label>
  </div>
</div>


<div class="b2">

    <div class="f">
    <input type="text" class="inps" placeholder="HEIGHT"/>
    <input type="text" class="inps" placeholder="WEIGHT"/>

</div>
<div class="f">
    <input type="text" class="inps" placeholder="BP"/>
    <input type="text" class="inps" placeholder="GLUCOSE LEVEL"/>

</div>
<div class="f">
    <input type="text" class="inps" placeholder="CHOLESTROL LEVEL"/>
    <input type="text" class="inps" placeholder="SUGAR LEVEL"/>

</div>
<div class="f">
    <input type="text" class="inps" placeholder="TB LEVEL"/>
    <input type="text" class="inps" placeholder="AGE"/>

</div>
<input type="text" class="inp2" placeholder="DO YOU HAVE ANY OTHER ALLERGIES"/>
<input type="text" class="inp2" placeholder="ARE YOU TAKING ANY MEDICATIONS"/>

 <a href="/login"> <button class="btnn">Register</button></a>

</div>


</div>


    
    </div>
  )
}

export default Register