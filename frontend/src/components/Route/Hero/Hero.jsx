import React from "react";
import { Link } from "react-router-dom";
import styles from "../../../styles/styles";
import './Hero.css'
import './raja-2.css'
import './raja.css'
import { CgSize } from "react-icons/cg";
import hero from './hero.png'
import img1 from './img1.jpg'


const Hero = () => {
  return (
    <div className={``} >  
     <div className='Hero-container'>
      <div className="hero-l">
        <div className="hero-heading">
            <span>Solace</span>
            <div className='Animated-hero-digital'>
               <div></div>
               <span> <span> The </span>Digital Library    </span>
             </div>
             <p className="raja">
             It is a well stocked digital library and a calm place where anyone can visit and enjoy reading some marvellous books, newspapers and magazines etc. The Management is courteous and very helpful.
             </p>
        </div>
        
        <Link to="" className="hero-btns">
            <div className={`hero-btns`}>
            <button>Get Started </button>
            <button>learn More</button>
            </div>
        </Link>
        
      </div>

      <div className="hero-r" >
    <img src={hero} alt="hero" />
  </div>
{/* service section */}

    </div>
    <div className='services' id='service'>
    <h1 class="heading"> Our Services </h1>
    <div class="box-container">

    <div class="box">
        <h3>For Childrens</h3>
        <p>It has been over 20 years since we launched the International Children's Digital Library. In that time, we have served about 15 million people reading over 1,000,000 hours of children's books.</p>
    </div>

    <div class="box">
        <h3>Bachelors</h3>
        <p>Every student has different mind. Some like books on science and some like on history while some like to read books on Islam. I like to read books on Islam and history and I often read these books.</p>
    </div>

    <div class="box">
        <h3>Scholers</h3>
        <p>Library systems at universities generally consist of a main university library plus several branch or special libraries. The large campus environment often defines the quality of the library in terms of the strengths and size of the research collection</p>
    </div>  
    </div>
  {/* Testimonial section */}
              
            <h1 class="heading"> Our Testimonial </h1>
    </div>
    </div>
    
  );
};

export default Hero;
