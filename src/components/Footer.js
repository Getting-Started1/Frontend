import React from 'react'
import "./Footer.css"
import { AiFillTwitterCircle } from 'react-icons/ai';
import { AiFillFacebook } from 'react-icons/ai';
import { AiFillLinkedin } from 'react-icons/ai';
import { AiFillInstagram } from 'react-icons/ai';

export default function Footer() {
  return (
    <div>
        <section className='footer'>
        <div className="footer_resources">
            <h3>Resources</h3>
            <ul className='footer_list'>
                <li>Application</li>
                <li>Documentation</li>
                <li>Systems</li>
                <li>FAQ</li>
            </ul>
        </div>
        
        <div className="footer_pricing">
            <h3>PRICING</h3>
            <ul className='footer_list'>
                <li>Overview</li>
                <li>Premium plans</li>
                <li>Affiliate Program</li>
                <li>Promotions</li>
            </ul>
        </div>
     
        <div className="footer_contactus">
            <h3>Contact US</h3>
            <ul className='footer_list'>
                <li>Smart Home Technology Limted</li>
                <li>Kenya Meteorological Department</li>
                <li>P.O BOX 4567-900-271</li>
                <li>Nairobi, Kenya</li>
            </ul>
        </div>
        
        <div className="footer_social">
            <h3>Social</h3>
            <ul className='footer_list'>
                <li><AiFillFacebook/>Facebook</li>
                <li><AiFillTwitterCircle/>Twitter</li>
                <li><AiFillInstagram/>Instagram</li>
                <li><AiFillLinkedin/>Linked in</li>
            </ul>
        </div>
        </section>
    
    </div>
  )
}
