import React from 'react'
import acc1 from "../assets/accreds-1.png"
import acc2 from "../assets/accreds-2.png"
import acc3 from "../assets/accreds-3.png"
import acc4 from "../assets/accreds-4.png"
const Slider = () => {
  return (
    <section className='slider'>
    <p>People we work with</p>
    <div className="slides">
    <img src={acc1} alt="" />
    <img src={acc2} alt="" />
    <img src={acc3} alt="" />
    <img src={acc4} alt="" />

    </div>
  </section>
  )
}

export default Slider