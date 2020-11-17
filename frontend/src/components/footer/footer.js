import React from 'react';
import './footer.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faLinkedin, faGooglePlus, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faMapMarker, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons'

library.add(faFacebook, faTwitter, faLinkedin, faGooglePlus, faInstagram, faMapMarker, faPhone, faEnvelope );
/* import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons'; */

function Footer() {
  return(
    <footer class="footer">
  <div class="footer-left col-md-4 col-sm-6">
    <p class="about">
      <span> About the company</span> 
      Our mission is to help school get in torch with their pupils will at home. with out the cost!
    </p>
    <div className="icons">
      <a href="#"><FontAwesomeIcon icon={faFacebook} /></a>
      <a href="#"><FontAwesomeIcon icon={faTwitter} /></a>
      <a href="#"><FontAwesomeIcon icon={faLinkedin} /></a>
      <a href="#"><FontAwesomeIcon icon={faGooglePlus} /></a>
      <a href="#"><FontAwesomeIcon icon={faInstagram} /></a>
    </div>
  </div>
  <div class="footer-center col-md-4 col-sm-6">
    <div>
    <FontAwesomeIcon className="icons fa" icon={faMapMarker} />
      <p><span> Street name and number</span> Accra, Ghana</p>
    </div>
    <div>
    <FontAwesomeIcon className="icons fa" icon={faPhone} />
      <p> (+233) 248293915</p>
    </div>
    <div>
      <FontAwesomeIcon className="icons fa" icon={faEnvelope} />
      <p><a href="#"> quansahmicheal@gmail.com</a></p>
    </div>
  </div>
  <div class="footer-right col-md-4 col-sm-6">
    <h2> Virtual<span> School</span></h2>
    <p class="menu">
      <a href="#"> Home</a> |
      <a href="#"> About</a> |
      <a href="#"> Services</a> |
      <a href="#"> Portfolio</a> |
      <a href="#"> News</a> |
      <a href="#"> Contact</a>
    </p>
    <p class="name"> Virtual School &copy; 2020</p>
  </div>
</footer>
  );
}

export default Footer;