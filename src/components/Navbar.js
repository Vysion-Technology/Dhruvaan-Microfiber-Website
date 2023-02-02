import React, { useState } from 'react';
import companyLogo from "../images/companyLogo.png";
import companyLogoMobile from "../images/Yuvaan_Logo_mobile.png";
export default function Navbar(props) {

  var prevScrollpos = window.pageYOffset;
  window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
      document.getElementById("navbar").style.top = "0";
    } else {
      document.getElementById("navbar").style.top = "-8vh";
    }
    prevScrollpos = currentScrollPos;

    if (currentScrollPos > document.getElementById("yuvaan").offsetTop) {
      document.getElementById("navbar").style.backgroundColor = "#181A20";
    }
    else {
      document.getElementById("navbar").style.backgroundColor = "transparent";
    }

    // this props.setScrollChart(false); setting is only for the playing video on when we scroll to the charts section.
    if (currentScrollPos >= document.getElementById("home").offsetTop && currentScrollPos < document.getElementById("home").offsetHeight + document.getElementById("home").offsetTop - 200) {
      setActive(0);
      props.setScrollChart(false);
      props.setPlayAppAnimation(false);
      props.setPartVideos(false);
    }
    else if (currentScrollPos >= document.getElementById("yuvaan").offsetTop && currentScrollPos < document.getElementById("yuvaan").offsetHeight + document.getElementById("yuvaan").offsetTop - 200) {
      setActive(1);
      props.setScrollChart(false);
      props.setPlayAppAnimation(false);
      props.setPartVideos(false);
    }
    else if (currentScrollPos >= document.getElementById("features").offsetTop && currentScrollPos < document.getElementById("features").offsetHeight + document.getElementById("features").offsetTop - 200) {
      setActive(2);
      props.setScrollChart(false);
      props.setPlayAppAnimation(false);
      props.setPartVideos(true);
    }
    else if (currentScrollPos >= document.getElementById("application").offsetTop && currentScrollPos < document.getElementById("application").offsetHeight + document.getElementById("application").offsetTop - 200) {
      setActive(3);
      props.setScrollChart(false);
      props.setPlayAppAnimation(true);
      props.setPartVideos(false);
    }

    else if (currentScrollPos >= document.getElementById("charts").offsetTop - 100 && currentScrollPos < document.getElementById("charts").offsetHeight + document.getElementById("charts").offsetTop) {
      props.setScrollChart(true);
      props.setPlayAppAnimation(false);
      props.setPartVideos(false);
    }

    else if (currentScrollPos >= document.getElementById("benefits").offsetTop && currentScrollPos < document.getElementById("benefits").offsetHeight + document.getElementById("benefits").offsetTop - 200) {
      setActive(4);
      props.setScrollChart(false);
      props.setPlayAppAnimation(false);
      props.setPartVideos(false);
    }
    else if (currentScrollPos >= document.getElementById("patents").offsetTop && currentScrollPos < document.getElementById("patents").offsetHeight + document.getElementById("patents").offsetTop - 200) {
      setActive(5);
      props.setScrollChart(false);
      props.setPlayAppAnimation(false);
      props.setPartVideos(false);
    }
    else if (currentScrollPos >= document.getElementById("contact").offsetTop && currentScrollPos < document.getElementById("contact").offsetHeight + document.getElementById("contact").offsetTop) {
      setActive(6);
      props.setScrollChart(false);
      props.setPlayAppAnimation(false);
      props.setPartVideos(false);
    }
  }


  const [hamMenu, sethamMenu] = useState(false);
  const [Active, setActive] = useState(0);


  return (
    <div className="navbar-base" id='navbar'>
      <div className="navbar-wrapper">
        <div className="company-logo-container" >
          <a href="#home"><img src={companyLogo} alt="logo" id='desktopLogo' /></a>
          <a href="#home"><img src={companyLogoMobile} alt="logo" id='mobileLogo' /></a>
        </div>
        <div className="website-links" id='he'>
          <a href="#home" className={Active === 0 ? "link-container active" : "link-container"}>Home</a>
          <a href="#yuvaan" className={Active === 1 ? "link-container active" : "link-container"}>Dhruvaan</a>
          <a href="#features" className={Active === 2 ? "link-container active" : "link-container"}>Features</a>
          <a href="#application" className={Active === 3 ? "link-container active" : "link-container"}>Application</a>
          <a href="#benefits" className={Active === 4 ? "link-container active" : "link-container"}>Benefits</a>
          <a href="#patents" className={Active === 5 ? "link-container active" : "link-container"}>Patents</a>
          <a href="#contact" className={Active === 6 ? "link-container active" : "link-container"}>Contact</a>
        </div>
        <div className="hamburger-menu" id='ham'>
          <i className="fas fa-bars" onClick={() => { sethamMenu(true) }}></i>
          {
            hamMenu === true ? <div className="hamMenu-items">
              <div onClick={() => { sethamMenu(false) }}><i className="fas fa-times"></i></div>
              <a data-aos = "fade-up" data-aos-duration = "300" onClick={() => { sethamMenu(false) }} href="#home" className={Active === 0 ? "option activeMobile" : "option"}>Home</a>
              <a data-aos = "fade-up" data-aos-duration = "400" onClick={() => { sethamMenu(false) }} href="#yuvaan" className={Active === 1 ? "option activeMobile" : "option"}>Dhruvaan</a>
              <a data-aos = "fade-up" data-aos-duration = "500" onClick={() => { sethamMenu(false) }} href="#features" className={Active === 2 ? "option activeMobile" : "option"}>Features</a>
              <a data-aos = "fade-up" data-aos-duration = "600" onClick={() => { sethamMenu(false) }} href="#application" className={Active === 3 ? "option activeMobile" : "option"}>Application</a>
              <a data-aos = "fade-up" data-aos-duration = "700" onClick={() => { sethamMenu(false) }} href="#benefits" className={Active === 4 ? "option activeMobile" : "option"}>Benefits</a>
              <a data-aos = "fade-up" data-aos-duration = "800" onClick={() => { sethamMenu(false) }} href="#patents" className={Active === 5 ? "option activeMobile" : "option"}>Patents</a>
              <a data-aos = "fade-up" data-aos-duration = "900" onClick={() => { sethamMenu(false) }} href="#contact" className={Active === 6 ? "option activeMobile" : "option"}>Contact</a>
            </div> : null
          }
        </div>
      </div>
    </div>
  )
}
