import React,{useState} from 'react'
import './Testimonolist.css'
import Testimonolist_data  from '../Data/Service/Testimonolies'
import leftarrow from './Testimonolist_images/leftarrow.png'
import rightarrow from './Testimonolist_images/rightarrow.png'


export default function Testimonolist() {
   const [selected,setselected]= useState(0);

   const changetestomialimagetoward=()=>{
    setselected(
        selected===0 ? 1: 0
    )
   }
   const changetestomialimagebackward=()=>{
    setselected(
        selected===1 ?0:1
    )
    
   }
  return (
    <div className='Testimonolist_container' id='testimonilist'>
 
      <div className="Testimonolist_Lower">
        <div className="Testimonolist_Lower_L">
            <div className="Testimonolist_Lower_L_heading">
                <span > About Our </span> 
                <span> Developers </span>
            </div>
            <div className="Testimonolist_Lower_L_content">
                    
                        <span className='heading-take' style={{color:'black'}} > {Testimonolist_data[selected].name} <hr /> </span>
                        <span > {Testimonolist_data[selected].title}</span>
                        <span> {Testimonolist_data[selected].description} </span>
                        <span>-{Testimonolist_data[selected].knowing} </span>

              
            </div>
            <div className="testmonolist_arrows">
                <span> <img onClick={changetestomialimagetoward}   src={leftarrow} alt="" /> </span>
                <span>  <img onClick={changetestomialimagebackward}  src={rightarrow} alt="" /> </span>
                
              </div>
        </div>
        <div className="image-1">

                     <img src={Testimonolist_data[selected].image} alt="" className='image'/> 
        </div>
      </div>
    </div>
  )
}
