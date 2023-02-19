import React from 'react'
import testimonialImg from "../assets/testimonial-puzzle.png"
import Slider from './Slider'
const Testimonial = () => {
  return (
    <section className="maintestimonial">
    <section className='testimonial'>
    <div className="left">
    <div className="quote">“</div>
    <div className="content">
 <p>
 You have taken the time to understand us, our values and culture and have delivered far more than we could have hoped for.
 </p>
 <p>Ben Olson, Managing Director Grosvenor Consultancy</p>
 <h6>Growth Academy</h6>
    </div>

    </div>
    <div className="right">
        <img src={testimonialImg} alt="" />
    </div>
    
 
    
    </section>
    <Slider/>
    </section>
  )
}

export default Testimonial