import React from 'react'
import img from "../assets/logo.png"
const Footer = () => {
  return (
    <section className='footer'>
    <div className="left">
    <img src={img} alt="" />
    <address>
    © 2019 Elation. All rights reserved.
    </address>

    </div>
        <div className="middle">
        <div className="p1">
       <h3>
        Products
       </h3>
       <p>Groth Framework</p>
       <p>Groth Framework</p>
       <p>Groth Framework</p>
        </div>
        <div className="p1">
       <h3>
        Products
       </h3>
       <p>Groth Framework</p>
       <p>Groth Framework</p>
       <p>Groth Framework</p>
        </div>
        <div className="p1">
       <h3>
        Products
       </h3>
       <p>Groth Framework</p>
       <p>Groth Framework</p>
       <p>Groth Framework</p>
        </div>
        

          </div>
             <div className="right">
             <div className="icons">
             <i class="fa-brands fa-instagram"></i>
             <i class="fa-brands fa-instagram"></i>
             <i class="fa-brands fa-instagram"></i>
             </div>
            <p>Subscribe to our newsletter and stay in the loop.</p>
             <span>SIGN UP</span>

             </div>




    </section>
  )
}

export default Footer