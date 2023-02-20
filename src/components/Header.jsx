import React from 'react'
import logoImg from "../assets/logo.svg"
import BannerImage from "../assets/banner-image.png"
const Header = () => {
  const [toggle,setToggle]=React.useState(false)
  return (
    <section className="headerArea">
    <div className={toggle===false?"menu-Overlay menu-Overlayhide":"menu-Overlay menu-Overlayshow"}>
       <button onClick={()=>setToggle(!toggle)} > 
       <i className="fa-solid fa-xmark"></i></button>
       <div className="top">
        <img src={logoImg} alt="" />
       </div>
       <div className="middle">
        <h3>Us</h3>
        <h3>You</h3>
        <h3>Services</h3>
        <h3>Resources</h3>
        <h3>Blog</h3>
       </div>
       <div className="bottom">
             <i className="fa-brands fa-instagram"></i>
             <i className="fa-brands fa-instagram"></i>
             <i className="fa-brands fa-instagram"></i>
             <i className="fa-brands fa-instagram"></i>
       </div>
    </div>
    <header className='header'>
    <div className="logo">
        <img src={logoImg} alt="" />
    </div>

    <div className="bar" onClick={()=>setToggle(!toggle)}  >
    <i className="fa-solid fa-bars-staggered"></i>
    </div>
    </header>
    <section className="heroSection">
    <div className="left">
         <p>A proven formula to reinvigorate and advance your business.</p>
         <button>LEARN MORE</button>
    </div>
    <div className="right">
        <img src={BannerImage} alt="" />
    </div>
    </section>
    </section>
  )
}

export default Header