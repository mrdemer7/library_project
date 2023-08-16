import React from 'react'
import './Packages.css'
import packages from '../Data/Service/Packages_offer'
import { useNavigate } from 'react-router-dom'


export default function Packages() {
  const navigate=useNavigate();
  const handleclick=()=>{
    navigate('/login')
  }
  return (
    <div className='Packages_container'>
      <div className='services' id='service'>
    <h1 class="heading"> Become Our VIP Member </h1> </div>
      <div className="Packages_Lower">
        <div className="Package_plan">
          { packages.map((plan)=>{
            
            return(
               <div className="plan_content" >
                <span >{plan.title}</span>
                <span> {plan.cost} <span>/month</span> </span>
                <div className="plan_features">
                  {plan.features.map((feature)=>{
                    return(
                      <div className="feature" >
                        <span> {feature} </span>
                      </div>
                    )
                  })}
                </div>
                <div className={`hero-btns`}>
                <a href="/events"><button>Subscribe</button></a>

            </div>
               </div>
            )
              
          } )}
        </div>
      </div>
    </div>
  )
}
