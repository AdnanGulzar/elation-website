
import './App.css'
import AboutUs from './components/AboutUs.jsx' 
import Contact from './components/Contact'
import Footer from './components/Footer'
import Header from './components/Header'
import Latest from './components/Latest'
import Patternbg from './components/Patternbg'
import Purplebg from './components/Purplebg'
import Slider from './components/Slider'
import Testimonial from './components/Testimonial'
function App() {
  

  return (
    <div className="App">
    <Header/>
    <Patternbg/>
    <Purplebg/>
    <AboutUs/>
    <Testimonial/>
    {/* <Slider/> */}
    <Latest/>
    <Contact/>
    <Footer/>
    </div>
  )
}

export default App
