import React from 'react'

function Home() {
  return (
    <>
    <div className="flexRegister">
 <h6>Don't have an account? Register:</h6>
 <div className="flexhome">
 <input className="EmailInput" type="email" placeholder="EMAIL ADDRESS"/>
 <button className="verificationbutton"> SEND VERIFICATION CODE </button>
 </div>
 </div>


   <h5>ACHRAF SALLEM </h5> 
   <p className="introOscars">
       Hello,<br/>
      My name is Achraf Sallem.<br/>
      This is my new checkpoint<br/>
       API,Router...<br/>
       ENJOY...
       <br/>

   </p>
   <div> <img className="poster" src='https://i.gifer.com/3Eqa.gif' alt=''></img> </div>
   </>
  
  )
}

export default Home