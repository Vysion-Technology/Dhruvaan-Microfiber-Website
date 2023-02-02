import React from 'react';
import {useState , useEffect} from 'react';
import './ComponentsStyle/featured.css';
import ed from '../images/ed.png';
import googlenews from '../images/googlenews.png';
import dailyhunt from '../images/dailyhunt.png';
import startup from '../images/startup.png';
import zee from '../images/zee.png';
import we from '../images/we.png';
import rajasthan from '../images/rajasthan.png';
import bhaskar from '../images/bhaskar.png';
import navjyoti from '../images/navjyoti.png';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import SwiperCore, { Autoplay } from 'swiper';
import { useMediaQuery } from 'react-responsive'

export default function Featured() {
    SwiperCore.use([Autoplay]);
    const isScreenLessThan992 = useMediaQuery({ query: '(max-width: 992px)' });
    const isScreenLessThan550 = useMediaQuery({ query: '(max-width: 550px)' });
    const [NumberOfSlides, setNumberOfSlides] = useState(4);
    useEffect(() => {
      if(isScreenLessThan992 === false){
          setNumberOfSlides(4);
      }
      else if(isScreenLessThan992 === true && isScreenLessThan550 === false){
          setNumberOfSlides(3);
      }
      else if(isScreenLessThan992 === true && isScreenLessThan550 === true){
          setNumberOfSlides(2)
      }
      else {
          setNumberOfSlides(4)
      }
    }, [isScreenLessThan550 , isScreenLessThan992])
    
    return (
        <>
            <div className='featuredContainer'>
                <div className='MobileHeading'>
                    <img src={we} alt="" />
                </div>
                <div className="companies">
                    <Swiper
                        modules={[Autoplay]}
                        className="mySwiper featuredSwiper"
                        spaceBetween={0}
                        slidesPerView={NumberOfSlides}
                        autoplay={{ delay: 1500, disableOnInteraction: false }}
                    >


                        <SwiperSlide>
                            <div className="dibbaMobile">
                                <img src={googlenews} alt="ed" />
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="dibbaMobile">
                                <img src={zee} alt="ed" />
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="dibbaMobile">
                                <img src={startup} alt="ed" />
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="dibbaMobile">
                                <img src={dailyhunt} alt="ed" />
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="dibbaMobile">
                                <img src={ed} alt="ed" />
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="dibbaMobile">
                                <img src={rajasthan} alt="ed" />
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="dibbaMobile">
                                <img src={bhaskar} alt="ed" />
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="dibbaMobile">
                                <img src={navjyoti} alt="ed" />
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </>
    )
}

{/* <Swiper
    modules={[Autoplay]}
    className="mySwiper featuredSwiper"
    spaceBetween={0}
    slidesPerView={3}
    autoplay={{ delay: 1500, disableOnInteraction: false }}
>

    <SwiperSlide>
        <div className="dibba">
            <img src={ed} alt="ed" />
        </div>
    </SwiperSlide>

    <SwiperSlide>
        <div className="dibba">
            <img src={googlenews} alt="ed" />
        </div>
    </SwiperSlide>

    <SwiperSlide>
        <div className="dibba">
            <img src={zee} alt="ed" />
        </div>
    </SwiperSlide>

    <SwiperSlide>
        <div className="dibba">
            <img src={startup} alt="ed" />
        </div>
    </SwiperSlide>

    <SwiperSlide>
        <div className="dibba">
            <img src={dailyhunt} alt="ed" />
        </div>
    </SwiperSlide>

</Swiper> */}