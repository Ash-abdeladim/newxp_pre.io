import React, { useState } from 'react';
import worlwide from "worldwide.svg";
import setting from "setting.svg"
import trust from "trust.svg"
import leaf from "leaf.svg"
import phone from "phone.svg"
import wtop from "wtop.svg"

function Goals() {
  const [content, setContent] = useState("//Clique at items"); // Define state variable 'content' and its setter function 'setContent'

  return (
    <div className='goals_container'>
      <div className='wtop'><img src={wtop} alt='wtop'/></div>
      <h1 className='Goals_header'>GOAls</h1>
      <div className='content'><p>{content}</p></div>
      <div className='Goals_cards'>
        {/* Clicking on this div sets the content state */}
        <div className='gls' onClick={() => {
          setContent("Create an influential ready-to-wear brand, which will be a leader in Morocco and competitive abroad.");
        }}><img src={worlwide} alt="worldw"/></div>
        <div className='gls' onClick={()=>{
          setContent("OFFERING PRODUCTS THAT SATISFY CUSTOMER NEEDSAND RESPECT THEIR PURCHASING POWER .");
        }}><img src={trust} alt="worldw"/></div>
        <div className='gls' onClick={()=>{
          setContent("COMMITMENT TO SUSTAINABILITY")
        }}><img src={leaf} alt="worldw"/></div>
        <div className='gls' onClick={()=>{
          setContent("FACILITATING THE READY-TO-WEAR PURCHASING SERVICE")
        }}><img src={phone} alt="worldw"/></div>
        <div className='gls' onClick={()=>{
          setContent("-INNOVATION AND CREATIVITY")
        }}><img src={setting} alt="worldw"/></div>
      </div>
    </div>
  );
}

export default Goals;
