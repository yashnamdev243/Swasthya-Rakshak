import React from 'react'
import "./Footer.css"
import hospitalimg from "../assets/view-building-with-cartoon-style-architecture.png"

const Footer = () => {
    return (
        <>
            {/* <footer class="footer">
                <div class="footer-container">

                    <div class="footer-logo">
                        <img src={hospitalimg} alt="Hospital" className="hospital-image" />
                        <p>Your Health, Our Priority</p>
                    </div>


                    <div class="footer-links">
                        <h4>Quick Links</h4>
                        <ul>
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">Services</a></li>
                            <li><a href="#">FAQs</a></li>
                            <li><a href="#">Privacy Policy</a></li>
                            <li><a href="#">Blog/News</a></li>
                        </ul>
                    </div>


                    <div class="footer-contact">
                        <h4>Contact Info</h4>
                        <p>Helpline: +91-9876543210</p>
                        <p>Email: <a href="mailto:support@swasthyarakshak.com">support@swasthyarakshak.com</a></p>
                        <p>Office: Sector 12, New Delhi</p>
                        <a href="https://www.google.com/maps" target="_blank">Google Map Link</a>
                        <div class="social-media">
                            <a href="#">Facebook</a> | <a href="#">Twitter</a> | <a href="#">Instagram</a>
                        </div>
                    </div>
                </div>


                <div class="footer-bottom">
                    <p>© 2025 Swasthya Rakshak | All Rights Reserved</p>
                </div>
            </footer> */}
               <footer class="footer">
        <div class="footer-container">
        
          <div class="footer-logo">
          <img src={hospitalimg} alt="Hospital" className="hospital-image" />
          <p>Your Health, Our Priority</p>
          </div>

       
          <div class="footer-links">
            <h4>Quick Links</h4>
            <ul>
             
            <li><a href="/dashboard">Home</a></li>
                <li><a href="/about">About us</a></li>
                <li><a href="/services">Services</a></li>
                <li><a href="/doctors">Doctors</a></li>
                <li><a href="/contact">Contact</a></li>
            </ul>
          </div>

    
          <div class="footer-contact">
            <h4>Contact Info</h4>
            <p>Helpline: +91-9876543210</p>
            <p>Email: <a href="mailto:support@swasthyarakshak.com">support@swasthyarakshak.com</a></p>
            <p>Office: Sector 12, New Delhi</p>
            <a href="https://www.google.com/maps" target="_blank">Google Map Link</a>
            <div class="social-media">
              <a href="#">Facebook</a> | <a href="#">Twitter</a> | <a href="#">Instagram</a>
            </div>
          </div>
        </div>
 
        <div class="footer-bottom">
          <p>© 2025 Swasthya Rakshak | All Rights Reserved</p>
        </div>
      </footer>
        </>
    )
}

export default Footer