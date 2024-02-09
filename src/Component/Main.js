import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import xp from "xp.png"
// import Secone from './Secone';
// import Home from '../pages/Home';
import Switching from './Switching';
import Vision from './Vision';
import Modals from './Modals';

function Navmax() {
    const [isopen, setOpen] = useState(false);
    const [showModal, setShowModal] = useState(false); // State for controlling modal visibility

    const Openmenu = () => {
        setOpen(!isopen);
    }
    const handleContact = () => {
        // Open the modal when contact button is clicked
        setShowModal(true);
        document.body.style.overflow = "hidden"
    };

    const closeModal = () => {
        // Close the modal
        setShowModal(false);
        document.body.style.overflow = ""

    };

    return (
        <div className="nv_cont">

            <div className='Navmax_container'>
                <div className='Navmax'>
                    <div className='burger' onClick={Openmenu}>
                        <div className='linee'></div>
                        <div className='linee'></div>
                        <div className='linee'></div>
                    </div>
                    <div className='logo_container'><img className='logo' src={xp} alt="logo" /></div>
                    {/* <div> */}
                    <button className='contact' onClick={handleContact}>Contact</button>
                    {/* </div> */}
                </div>
                {isopen && (
                    <div className='burger_menu'>
                        <div><a href="#one">AbOut</a></div>
                        <div><a href="#vs">VisIon</a></div>
                        <div><a href="#goals">GoAls</a></div>
                        <div><a href="#founders">Founder's</a></div>
                    </div>
                )}
            </div >
            {showModal && <Modals onClose={closeModal} />}
        </div>
    )
}

function Navmin() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [showModal, setShowModal] = useState(false);

    let x = 0;
    useEffect(() => {
        const handleScroll = () => {
            console.log(window.scrollY)
            let i = window.scrollY;
            if (i > x || i > 0) {
                x = i;
                console.log(`x ${x}`);
                setIsScrolled(true);
            }
            else if (x > i) {
                setIsScrolled(false)
            }
            else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const ModalActive = () => {
        console.log("active modal");
        setShowModal(true);
        document.body.style.overflow = "hidden"

    }
    const closeModal = () => {
        console.log("desactive modal");
        setShowModal(false);
        document.body.style.overflow = ""

    }
    return (
        <div className="nv_cont">
            <div className={`Navmin ${isScrolled ? 'shrunk' : ''}`}>
                <div className='logo_container'><img src={xp} alt="logo" /></div>
                <div className='links'>
                    <a href="#one">AbOut</a>
                    <a href="#vs">VisIon</a>
                    <a href="#goals">GoAls</a>
                    <a href="#founders">Founder's</a>
                    <button className='contact' onClick={ModalActive}>Contact</button>
                </div>
            </div>
            {showModal && <Modals onClose={closeModal} />}

        </div>
    )
}

function Main() {
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
        <div>
            {isWideScreen ? <Navmin /> : <Navmax />}
            {/* <Secone/> */}
            <Switching />
        </div>
    )
}

export default Main
