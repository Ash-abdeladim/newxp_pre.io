import React from 'react'
// import vision from "vision.jpeg"
import Swipper from './Swipper'
import { useInView } from 'react-intersection-observer';
import wdown from "wdown.svg";


function Vision() {
  const { ref:myelem, inView:checkvis } = useInView();

  return (
    <div className='Vision'>
      <div className='nested_vision'>
        {/* <img src={vision} alt="vision"/> */}
        <div className={checkvis ? "div_swp" : "none"} ref={myelem}>
          <Swipper />
        </div>
        <div className='Vision_cards'>
          <div ref={myelem}>
            <h1>VISION</h1>
            <p className={checkvis ? "p_anime" : "none"}>Our vision as a brand is to make buying clothes from online stores more convenient and enjoyable by creating an online store that can give customers more choices and give them a good new experience.
We want to adopt new technology in our store like some world class Metavers like 3D Mockup, Virtual Reality and some Avatars and we also want to add some games which can let our customers win some benefits through it
also we want to be more close to our costumers and we will add a chennels at discord to let our costumer be one of our one big famimly and take thier feedback and pointofview and what can we devlop or add to our service and product
We do not aspire to become pioneers in morocco only but also we want to be a pioneers of the world like a phenix we will 
fly and nothing can stop us to reach our dreams </p>
<span className='tag'>#Flying like a Phenix</span>
          </div>
        </div>
      </div>
      <div className='wdown'><img src={wdown} alt="wdown"/></div>
    </div>
  )
}

export default Vision
