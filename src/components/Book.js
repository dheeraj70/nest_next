import React from 'react';
import './Book.css'

export default function Book() {
  return (
    <div className='book' >
        
        <h2 className='bookHead'>Begin your path to parenthood today.</h2>
        <p className="bookSub">Ready to take the next step? Schedule your appointment at Nest Fertility today.</p>
    
        <div className="bookDetails">
            <div className="bookPhones">
                    <h2 style={{cursor: "pointer"}} onClick={()=>{window.open("tel:+919550555271")}} className="bookPhone">+91 9550555271</h2>
                    <h2 style={{cursor: "pointer"}} onClick={()=>{window.open("tel:+914048913270")}} className="bookPhone">+91 4048913270</h2>
            </div>
            <div className="bookDetailsDivider">

            </div>
            <div className="bookWhatsApp">
                <p className='bookWhatsAppHead'>Request an Appointment on Whatsapp.</p>
                <button onClick={()=>{window.open("https://wa.me/919550555271?text=I%20want%20to%20book%20an%20appointment")}} className='bookDetailsBtn'>Book an Appointment <i className="fa-solid fa-calendar-check"></i></button>
            </div>
        </div>
    </div>
  )
}
