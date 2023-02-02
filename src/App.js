import "./App.css";
import LandingPage from "./components/LandingPage";
import IntroPage from "./components/IntroPage";
import DeviceParts from "./components/DeviceParts";
import AppPage from "./components/AppPage";
import BenefitsPage from "./components/BenefitsPage";
import Patent from "./components/Patent";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";


import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import { useEffect, useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import Charts from "./components/Charts";

import pcb from './images/pcbLinesSvg.svg';
import Modal from "./components/Modal";

// import Rive from 'rive-react';
// import LoadingAnimation from './images/Loading.riv';
// import LoadingAnimationMobile from './images/LoadingPhone.riv';
// import MediaQuery from 'react-responsive'

function App() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  const [preloader, setpreloader] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      if (preloader === true) {
        document.getElementById("preloader").style.opacity = "0";
      }
    }, 4000);
  }, [preloader]);

  setTimeout(() => {
    setpreloader(false);
  }, 5000);


  // for playing charts animation while scroll on charts section
  const [ScrollChart, setScrollChart] = useState(false);
  // for playing App section  animation while scroll on app section
  const [PlayAppAnimation, setPlayAppAnimation] = useState(false);
  //for playing device parts videos on reaching one the device parts page. 
  const [PartVideos, setPartVideos] = useState(false);
  // For showing demo Modal at random time
  const [IsDemoActive, setIsDemoActive] = useState(false)


  // logic for showing Modal
  const Random_Times = [60000, 100000, 120000]
  // const Random_Times = [6000, 6000]
  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * Random_Times.length);
    setTimeout(() => {
      setIsDemoActive(true)
    }, Random_Times[randomIndex]);
    console.log(randomIndex);
  }, [])


  return (
    <div className="App">
      {preloader === true ? (
        <div id="preloader">
          <Loading />
        </div>
      ) : (
        ""
      )}
      <div className="snapper">
        <div className="spider">
          <Navbar
            setScrollChart={setScrollChart}
            setPlayAppAnimation={setPlayAppAnimation}
            setPartVideos={setPartVideos}
          />
          <LandingPage />
        </div>
      </div>
      <div className="snapper"><IntroPage /></div>
      <div className="snapper"><DeviceParts PartVideos={PartVideos} /></div>
      <div className="snapper"><AppPage PlayAppAnimation={PlayAppAnimation} /></div>
      <div className="snapper"><Charts ScrollChart={ScrollChart} /></div>
      <div className="snapper"><BenefitsPage /></div>
      <div className="snapper"><Patent /></div>
      <div className="snapper"><Contact /></div>
      <div className="snapper"><Footer /></div>

      <div>
        {
          IsDemoActive ? <Modal setIsDemoActive={setIsDemoActive} /> : null
        }
      </div>
    </div>

  );
}

export default App;

function Loading() {
  return (
    <>
      <div className='testing'>

        <div className="backBlurred"></div>

        <div className="pcb">
          <img src={pcb} alt="" />
        </div>

        <div className="strokeCircle"></div>

        <div className="innerCircle"></div>

        <div className="mainContainer">
          <img src="https://ik.imagekit.io/hgfugmm0dbi/Vysion_Website_Assets/dhruvaan512x512_GyqD2J3UR.png?ik-sdk-version=javascript-1.4.3&updatedAt=1654510530747" alt="im" />
        </div>
      </div>
    </>
  );
}