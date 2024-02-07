import React from 'react'
import About from '../Component/About'
import Vision from '../Component/Vision'
import up from "up.svg"
import Goals from '../Component/Goals'
import Founder from '../Component/Founder'
import logo from "logo.png"


const Footer = () => {
    const date = new Date();
    const year = date.getFullYear();
    
    return (
        <div className="year">
            <img src={logo} alt="copylogo" className="copy_logo"/>
            <br/>
            <span>&copy;{year}</span>
        </div>
    );
}
function Home() {
    return (
        <div>
            <About/>
            <Vision/>
            <Goals/>
            <Founder/>
            <Footer/>
            <div className='up'><a href='#'><img src={up} alt="up_icon"/></a></div>
        </div>
    )
}

export default Home
