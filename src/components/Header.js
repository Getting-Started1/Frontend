import React from 'react'
import "./Header.css"
import timer from "../images/timer.png"
import timetravel from "../images/time-travel.jpg"
import gifimg from "../images/join us.gif"
  // import Swiper bundle with all modules installed
import { HideOn } from 'react-hide-on-scroll'
  import Swiper from 'swiper/bundle';

  // import styles bundle
  import 'swiper/css/bundle';

  // init Swiper:
  

function Header() {
  const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'vertical',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });


 


  return (
    <>
    <div className='header_container'>
        <div className='header_content'>
        <h1 className='header_topic'>Temperature and Humidity Dashboard</h1>
        <p>The Temperature and Humidity dashboard is designed to monitor your home temperature real time</p>
        <p>From this website you will get the current temperature readings of your home and also download a record of the temperature depending on your prefered duration.</p>
        </div>
   
    <div className='header_image'>
      
  <HideOn atHeight height={50}>
<div class="swiper">

  <div class="swiper-wrapper">
  
    <div class="swiper-slide"><img src={timer} alt='real_time'/></div>
    <div class="swiper-slide2"><img src={timer} alt='real_time'/></div>
    <div class="swiper-slide"><img src={gifimg} alt='real_time'/></div>
   
  </div>
 
  <div class="swiper-pagination"></div>

 
  <div class="swiper-button-prev"></div>
  <div class="swiper-button-next"></div>

 
  <div class="swiper-scrollbar"></div>
</div>
</HideOn>
    </div>

    </div>
    </>
  )
}

export default Header