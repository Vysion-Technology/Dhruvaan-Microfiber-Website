import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/swiper-bundle.min.css";
// import "swiper/swiper.min.css";
// import { useState } from "react";
import style from './ComponentsStyle/App.module.css';
// import Animation from "./Animation";
import Rive from 'rive-react';
import anim from '../images/anim.riv';
import phone from '../images/phone.riv';
// import { useRive } from 'rive-react';
// import { useEffect } from "react/cjs/react.production.min";
// import { useRef } from "react/cjs/react.production.min";

export default function AppPage(props) {
  return (
    <section className={style.app_page_container} id="application">
      <div className={style.Headings_Buttons} data-aos="fade-up">
        <div className={style.textHeadings}>
          <p className="universal-medium-headings">Dhruvaan App</p>
          <p className="universal-paragraphs">
            Have all the access and reports in your hand from anywhere
          </p>
        </div>
        <div className={style.buttons}>
          <div className="universal-button googlePLay" onClick={() => { window.open("https://play.google.com/store/apps/details?id=com.vysion.yuvaan") }}><img src="https://ik.imagekit.io/hgfugmm0dbi/Group_1064-1_JQJ-W3Fa8h.png?ik-sdk-version=javascript-1.4.3&updatedAt=1651923932655" alt="google" /></div>
          <br />
          <div className="universal-button webappButton" onClick={() => { window.open("https://yuvaan-307e0.web.app/#/") }}><img src="https://ik.imagekit.io/hgfugmm0dbi/Group_1064_BnSTFPn969.png?ik-sdk-version=javascript-1.4.3&updatedAt=1651923932821" alt="webapp" /></div>
        </div>
      </div>

      {/* all mobile apps features */}
      <div className={style.MobileApp_features} data-aos="fade-up">
        <div className={style.feature_box}>
          <img src="https://ik.imagekit.io/hgfugmm0dbi/1_6VcQ3pTfY.png?ik-sdk-version=javascript-1.4.3&updatedAt=1653460018152" alt="realtime" draggable={false} />
          {/* <p className="universal-paragraphs">Real Time Cleaning Reports</p> */}
        </div>
        <div className={style.feature_box}>
          <img src="https://ik.imagekit.io/hgfugmm0dbi/2_UqLU4F6vM.png?ik-sdk-version=javascript-1.4.3&updatedAt=1653460019571" alt="easy control" draggable={false} />
          {/* <p className="universal-paragraphs">Remotely robots controlling</p> */}
        </div>
        <div className={style.feature_box}>
          <img src="https://ik.imagekit.io/hgfugmm0dbi/3_IfsA8p2qt.png?ik-sdk-version=javascript-1.4.3&updatedAt=1653460019539" alt="monitoring" draggable={false} />
          {/* <p className="universal-paragraphs">Online Health monitoring and fault detection</p> */}
        </div>
      </div>

      {/* <div className={style.background_GreenDecoration}></div> */}

      <div className={style.device_Mockup}>
        <div className={style.animation}>
          <AnimationLaptop />
        </div>
        <div className={style.animationMobile}> 
          <AnimationMobile />
        </div>
      </div>
    </section>
  );
}

function AnimationLaptop() {
  return <Rive src={anim} />;
}

function AnimationMobile() {
  return <Rive src={phone} />;
}