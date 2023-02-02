import React from "react";
import style from './ComponentsStyle/Intropage.module.css';
export default function IntroPage() {
  return (
    <section className="backcol" id="yuvaan">
      <div className={style.home}>
        <div className={style.homeContainerCustomCss}>
          <div className={style.leftOne}>
            <div
              className={style.box}
              id={style.one}
            // data-aos="fade-up"
            // data-aos-duration="1000"
            >
              <div className={style.aboutContent}>
                <p className={style.Big_Dhruvaan_name}>Dhruvaan <b style={{ color: 'var(--darkgreen)' }}>D-2</b></p>
                <p className="universal-paragraphs">
                  <b style={{ color: 'var(--darkgreen)', fontWeight: 'var(--bold)' }}>Dhruvaan</b> is a smart and robust robot connected with the seamless potential of IoT and the Cloud. The Robot aims at efficient cleaning of commercial solar panels to increase renewable solar energy production at the lowest operational costs.
                </p>
              </div>
              <div id={style.graphic_left}></div>
            </div>

            <div
              className={style.box}
              id={style.three}
            // data-aos="fade-up"
            // data-aos-duration="1000"
            >
              <div className={style.vysionContent}>
                <p className={style.A_productby}>A Product by</p>
                <p className={style.vysionProduct}>Vysion Technology</p>
                <p className="universal-paragraphs alignRight">
                  <b style={{ color: 'var(--darkgreen)', fontWeight: 'var(--bold)' }}>Vysion Technology</b> is a technology startup incubated by the Gujarat government under the SSIP initiative. We deliver a series of smart solutions in different sectors where the Nation is still lagging to establish it's feet.
                </p>
                <div className={style.buttonwr}>
                  <a className="universal-button" href="https://www.techvysion.com/" target="_blank" rel="noreferrer" >
                    Know More About Vysion
                  </a>
                </div>
              </div>
              <div id={style.graphic_right}></div>
            </div>
          </div>

          <div className="childSnapper"></div>
          <div
            className={style.box}
            id={style.two}
            data-aos="fade-left"
            data-aos-duration="2000"
          >
            <img src="https://ik.imagekit.io/hgfugmm0dbi/RobotPng_2__1__rc231QyST.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1673353630908" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}
