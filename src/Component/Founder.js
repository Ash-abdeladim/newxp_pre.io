import React, {useState, useEffect } from 'react'
import ash from "ashh_r.png"
import hexa from "hexa_r.png"
import aym from "aym_r.png"
import linkdin from "linkedin.svg"
import github from "github.svg"
import { Link } from "react-router-dom"
import circle from "blob.svg"
import Cardmx from './Cardmx'

function Cardmin() {
    return(

    <div>
    <div className="list_fd">
        <div className="card">
            <div className="img_cont">
                <img src={circle} alt="cir" className="cir" />
                <img className='fd_img' src={ash} alt="img" />
            </div>
            <h3>Achraf ABdeladim</h3>
            <h5>CTO-FOUNDER</h5>
            <p>
                my mission at Xphenix is ​​to create a website where we can sell our products
                <br />
                Xphenix to me is more than just a online branding for me is a future that we must build it togheter
            </p>
            <div className="social"><Link to="https://www.linkedin.com/in/achraf-abdeladim-68b764235/"><img src={linkdin} alt="link" /></Link><Link to="https://github.com/Ash-abdeladim"><img src={github} alt="git" /></Link></div>
        </div>
        <div className="card">
            <div className="img_cont">
                <img src={circle} alt="cir" className="cir" />
                <img className='fd_img' src={aym} alt="img" />
            </div>
            <h3>Ayman OUzali</h3>
            <h5>CTO-FOUNDER</h5>
            <p>
                my mission at Xphenix is ​​to create a website where we can sell our products
                <br />
                Xphenix to me is more than just a online branding for me is a future that we must build it togheter
            </p>
            <div className="social"><Link to="https://www.linkedin.com/in/ayman-ouzali-9b00201a1/"><img src={linkdin} alt="link" /></Link></div>
        </div>
        <div className="card">
            <div className="img_cont">
                <img src={circle} alt="cir" className="cir" />
                <img className='fd_img' src={hexa} alt="img" />
            </div>
            <h3>Haitam ABdeladim</h3>
            <h5>CTO-FOUNDER</h5>
            <p>
                my mission at Xphenix is ​​to create a website where we can sell our products
                <br />
                Xphenix to me is more than just a online branding for me is a future that we must build it togheter
            </p>
            <div className="social"><Link><img src={linkdin} alt="link" /></Link></div>
        </div>
    </div>
    </div>
    )
}


function Founder() {
    const [isWideScreen, setIsWideScreen] = useState(window.matchMedia("(min-width: 500px)").matches);

    useEffect(() => {
        const handleResize = () => {
            setIsWideScreen(window.matchMedia("(min-width: 500px)").matches);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    return (
        <div id='founders' className='found_container'>
            <h1>Founder'</h1>
            {/* <Cardmin/> */}
            {isWideScreen ? <Cardmin/> : <Cardmx/>}
        </div>
    )
}

export default Founder
