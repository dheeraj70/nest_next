import React from 'react'
import './Hero.css'

export default function Hero() {

  const bookAppointment = ()=>{window.open("https://wa.me/919550555271?text=I%20want%20to%20book%20an%20appointment")};
{/*We help you welcome your little one.  ------- could be useful */  }
  return (
    <div className='hero'>
      <div className="left_hero">
      <h1 className='hero_head'>Best Fertility Center in Hyderabad.</h1>
      <div className="hero_img_mob_div">
       <img className='hero_img hero_mob_img_visible' src="/hero2.png" alt="Pregant Woman" /> 
      </div>
      <div className="left_hero_sub">
      <button className="nav_btn hero_btn" onClick={bookAppointment}>Book Appoitment</button>
        <p className='hero_under_text'>Personalized care and support for a smooth journey to parenthood. </p>
      </div>
      </div>
      <div className="right_hero">
        <img className='hero_img hero_img_visible' src="/hero2.png" alt="Pregant Woman" />
      </div>
    </div>
  )
}
