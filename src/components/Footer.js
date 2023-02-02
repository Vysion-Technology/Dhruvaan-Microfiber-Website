import React from 'react';
import logoRr from '../images/VysionTrademarkR 725x242.png';

export default function Footer() {
  return (
    <section className="footer">
      <div className="upperFooter">
        <div className="vysion">
          <img src={logoRr} alt="vysion" />
        </div>
        <div className="explore">
          <p><b>Explore</b></p>
          <a href="https://www.techvysion.com/" target="_blank" rel="noreferrer"><p>Vysion Technologies</p></a>
          <a href="https://decon-vysion.netlify.app/" target="_blank" rel="noreferrer"><p>Decon</p></a>
          <p>Gurucamp</p>
          <p>Dhruvaan</p>
        </div>
        <div className="visit">
          <p><b>Visit</b></p>
          <p>VYSION GREENBOTS PVT. LTD.
            Plot No. 6, Street Number 11, M. I. A, Phase- II, Basni, Jodhpur - 342005, Rajasthan, India
          </p>
        </div>
        <div className="emailus">
          <p><b>Contact us</b></p>
          <p>+91 - 80786 93503</p>
          <p>info@<br className='br' />techvysion.com</p>
        </div>
        <div className="legal">
          <p><b>Legal</b></p>
          <p>Terms</p>
          <p>Privacy</p>
        </div>
      </div>
      <div className="lowerFooter">
        <div className="socials">

          <a href="https://www.instagram.com/vysion_tech" target="_blank" rel="noreferrer"><i className="ri-instagram-line" id='insta'></i></a>

          <a href="https://twitter.com/vysion_tech" target="_blank" rel="noreferrer"><i className="ri-twitter-fill" id='twitter'></i></a>

          <a href="https://in.linkedin.com/company/vysion-tech" target="_blank" rel="noreferrer"><i className="ri-linkedin-fill" id='linkedin'></i></a>

          <a href="https://www.facebook.com/vysiontech95" target="_blank" rel="noreferrer"><i className="ri-facebook-fill" id='facebook'></i></a>

        </div>
        <p>@ 2023 Vysion Technology. All right reserved.</p>
      </div>
    </section>
  )
}
