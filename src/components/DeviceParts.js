import React, { useRef } from "react";
import dust from "../images/Dust.m4v";
import simplerunning from "../images/simplerunning.m4v";
import autoalign from "../images/Autoalign.m4v";
import incline from "../images/inclined.m4v";
import charge from "../images/Dockcharge.m4v";
import { useState } from "react";
import { useEffect } from "react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
// import "slick-carousel/slick/slick.css";
import style from './ComponentsStyle/Deviceparts.module.css';

export default function DeviceParts(props) {
  const videos = [
    {
      url: dust,
    },

    {
      url: incline,
    },

    {
      url: autoalign,
    },

    {
      url: simplerunning,
    },

    {
      url: charge,
    },
  ];

  const [whichIsActive, setwhichIsActive] = useState(0);
  // const [currentVideoIndex, setcurrentVideoIndex] = useState(0);
  useEffect(() => {
    setwhichIsActive(1);
  }, [props.PartVideos === true])



  const reset = () => {
    // document.getElementById("dust").style.zIndex = "51";
    // video_dust.current.pause()
    document.getElementById("incline").style.zIndex = "51";
    video_incline.current.pause()
    document.getElementById("autoalign").style.zIndex = "50";
    video_autoalign.current.pause()
    document.getElementById("simple").style.zIndex = "50";
    video_simple.current.pause()
    document.getElementById("charging").style.zIndex = "50";
    video_charging.current.pause()
  }

  useEffect(() => {
    if (whichIsActive === 1) {
      reset();
      video_incline.current.play();
      document.getElementById("incline").style.zIndex = "100";
    } else if (whichIsActive === 2) {
      reset();
      video_autoalign.current.play();
      document.getElementById("autoalign").style.zIndex = "100";
    } else if (whichIsActive === 3) {
      reset();
      video_simple.current.play();
      document.getElementById("simple").style.zIndex = "100";
    }
    else if (whichIsActive === 4) {
      reset();
      video_charging.current.play();
      document.getElementById("charging").style.zIndex = "100";
    }
    // else if (whichIsActive === 1) {
    //   reset();
    //   video_dust.current.play();
    //   document.getElementById("dust").style.zIndex = "100";
    // }
    else {
      reset()
    }
  }, [whichIsActive]);

  //Next feature button function
  const nextSlide = () => {
    if (whichIsActive === 4) {
      setwhichIsActive(1);
    } else {
      setwhichIsActive(whichIsActive + 1);
    }
  };
  
  //Prev feature button function
  const prevSlide = () => {
    // console.log(whichIsActive);
    if (whichIsActive <= 1) {
      setwhichIsActive(4);
    } else {
      setwhichIsActive(whichIsActive - 1);
    }
  };

  // const video_dust = useRef();
  const video_incline = useRef();
  const video_autoalign = useRef();
  const video_simple = useRef();
  const video_charging = useRef();

  return (
    <section className="backcol" id="features">
      <div className={style.features} data-aos="fade-up">
        <div className={style.device_structure}>
          <div className={style.videoContainer}>
            {/* <video loop autoPlay muted preload id="dust" className={style.videos} ref={video_dust}>
              <source src={videos[0].url} />
            </video> */}
            <video loop autoPlay muted preload id="incline" className={style.videos} ref={video_incline}>
              <source src={videos[1].url} />
            </video>
            <video loop autoPlay muted preload id="autoalign" className={style.videos} ref={video_autoalign}>
              <source src={videos[2].url} />
            </video>
            <video loop autoPlay muted preload id="simple" className={style.videos} ref={video_simple}>
              <source src={videos[3].url} />
            </video>
            <video loop autoPlay muted preload id="charging" className={style.videos} ref={video_charging}>
              <source src={videos[4].url} />
            </video>
          </div>
        </div>

        <div className={style.partsDescription}>
          {/* <button onClick={ ()=> { video_one.current.play() } }>hehe</button> */}
          {whichIsActive === 1 ? (
            <div className={style.description_wrapper}>
              {/* <h3>Dhruvaan</h3> */}
              <h2 className="universal-medium-headings">1. Powerful Motors for steep climbing</h2>
              <p className="universal-paragraphs">
                The powerful driving mechanism synced with high torque motors
                enable the robot to climb upto 25 degree. Dhruvaan can easily
                climb on panels inclined on high sand desert.
              </p>
            </div>
          ) : whichIsActive === 2 ? (
            <div className={style.description_wrapper}>
              {/* <h3>Dhruvaan</h3> */}
              <h2 className="universal-medium-headings">2. Smart Sensors for Auto Alignment</h2>
              <p className="universal-paragraphs">
                The powerful Robotic sensors align the robot in every meter. It
                increases the cleaning efficiency and keeps panels healthy.
              </p>
            </div>
          ) : whichIsActive === 3 ? (
            <div className={style.description_wrapper}>
              {/* <h3>Dhruvaan</h3> */}
              <h2 className="universal-medium-headings">3. Hinderless Cleaning</h2>
              <p className="universal-paragraphs">
                Dhruvaan moves on panels, climbing the difficult panel steps and
                crossing the big pannel gaps without any hindrance. It moves
                smoothly and cleans efficiently.{" "}
              </p>
            </div>
          ) : whichIsActive === 4 ? (
            <div className={style.description_wrapper}>
              {/* <h3>Dhruvaan</h3> */}
              <h2 className="universal-medium-headings">4. Auto Docking and charging</h2>
              <p className="universal-paragraphs">
                The Robot is designed to automatically operate, perform the
                cleaning, settle on dock and start charging itself from solar
                energy, making it a completely autonomous robot.
              </p>
            </div>
          ) : null}

          <div className={style.buttonWrapper}>
            <div
              className={style.backward_button}
              onClick={() => {
                prevSlide();
              }}
            >
              <i className="fas fa-chevron-up" id="forward"></i>
              <p className="fea disable-select">Prev feature</p>
            </div>
            <div
              className={style.forward_button}
              onClick={() => {
                nextSlide();
              }}
            >
              <p className="fea disable-select">Next feature</p>
              <i className="fas fa-chevron-down" id="backward"></i>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
