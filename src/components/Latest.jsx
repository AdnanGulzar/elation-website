import React from 'react'
import img1 from "../assets/left-thumb.png"
import img2 from "../assets/middle-thumb.png"
import img3 from "../assets/right-thumbnail.png"
const Latest = () => {
  return (
    <section className='latest'>
        <div className="top">
            <h1>
                The Latest
            </h1>
            <p>ALL views</p>
        </div>
        <div className="latestcards">
            <div className="card">
                <img src={img1} alt="" />
               
            </div>
            <div className="card">
                <img src={img2} alt="" />
               
            </div>
            <div className="card">
                <img src={img3} alt="" />
               
            </div>
        </div>
    </section>
  )
}

export default Latest