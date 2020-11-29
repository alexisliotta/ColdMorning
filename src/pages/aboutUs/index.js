//Packages
import React, { useState, useEffect, Fragment } from 'react';
import Navbar from '../../components/Navbar';
//Styles
import '../../pages/aboutUs';
import './styles.css';

function AboutUs(props) {



  return (
    <div className="Dad">
      <Navbar  />     
      <div className='Background'>
        <div className='container-top'>
            <div className='about-us-title'>                
                <h1 className='title-about'>Facts about <span className='title-title'>ColdMorning</span></h1>       
            </div>
        </div>
        <div className='container-mid'>
          <div className='about-us-inf'>
            <h3 className='about-us-subtitle'>What can I find on <span className='cold-title'>ColdMorning</span>?</h3>
            <p className='about-us-us'> <span className='cold-p'>ColdMorning</span> offers weather forecasts in English
              (in addition to Norwegian Nynorsk and Norwegian Bokmål) 
              for around 1 million locations in Norway and 12 million 
              locations worldwide.
              In addition to weather forecasts, <span className='cold-p'>ColdMorning</span> offers news
               and data related to the bitcoin currency among other news.</p>
          </div>
        </div>
        <div className='container-bottom'></div>
      </div>
    </div>
  )
}



export default AboutUs;
