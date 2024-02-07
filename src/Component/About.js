import React from 'react';
import Earth from "bg_one.jpeg";
import Logo from "logo.png";
import { useInView } from 'react-intersection-observer';

function About() {
    const { ref:myRef, inView:isVis } = useInView();

    return (
        <div id='one' className={`sec_one ${isVis ? "isVis" : "none"}`} ref={myRef}>
            <img src={Earth} alt="earth" className='earth' />
            <div className='intro_card'>
                <img src={Logo} alt="Xphenix_logo" className='xphenix' />
                <div className='Line'></div>
                <h1>Who We Are ?</h1>
                <div className='card'>
                    <p>We Are X-Phenix, A 100% Digital Moroccan Ready-To-Wear Brand. We Aim To Provide A Unique Shopping Experience By Combining Trendy Style, Exceptional Variety, And Creative Design, All With Cheap Delivery Fees And Short Delivery Times. Our Website And Mobile Application Revolutionize Online Shopping By Using 3D Mockups And Virtual Reality, Giving You An Unparalleled Immersive Experience. You Can Explore Our Collections And Virtually See Each Outfit To Fit Your Personal Style, All From The Comfort Of Your Home. We Are Committed To Sustainability, As We Personalize 25% Of Our Products Within Our First Three Years Using Eco-Friendly Recycled Materials, Contributing To The Preservation Of Our Planet. Each Purchase Made With Us Is A Statement In Favor Of Sustainable Fashion. X-Phenix Is Where Innovation Meets Sustainability And Creativity In Our Products.</p>
                </div>
            </div>
        </div>
    )
}

export default About
