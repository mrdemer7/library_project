import React from 'react'
import './ContactUs.css'
import contactUS_data from '../Data/Service/ContactUS_data'

export default function ContactUs() {
  return (
    <div className='ContactUs_container'>
      <div className="contactus_header">
        <span>Ready To Make Your Future Bright</span>
        <span className='heading-take'>With Us?</span>
      </div>
      <div className="contactus_lower">
      
        {contactUS_data.map((data)=>{
         return( 
            <div className='contactUS_lovwer_content'>
             <div> <img src={data.image} alt="" /> </div>
             </div>
          )
        })}
       
      </div>
    </div>
  )
}
