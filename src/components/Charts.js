import React, { useState, useEffect, useRef } from 'react';
import './ComponentsStyle/charts.css'
import daily from '../images/videos/daily.mp4';
import dailyweb from '../images/videos/dailyogg.ogv';
import dailyogg from '../images/videos/dailyweb.webm';
import weekly from '../images/weekly.mp4';

export default function Charts(props) {

    const [transform, settransform] = useState("translateX(0%)");
    const [SliderPosLeft, setSliderPosLeft] = useState(false);
    const slide = () => {
        setSliderPosLeft(!SliderPosLeft);
        if (SliderPosLeft === false) { settransform("translateX(100%)") }
        else { settransform("translateX(0%)") }
    }
    const video_daily = useRef();
    const video_weekly = useRef();

    const reset = () => {
        document.getElementById('daily').style.zIndex = "0";
        video_daily.current.pause();
        document.getElementById('weekly').style.zIndex = "0";
        video_weekly.current.pause();
    }
    useEffect(() => {
        if (SliderPosLeft === false) {
            reset();
            document.getElementById('daily').style.zIndex = "1";
            video_daily.current.play();
        }
        else if (SliderPosLeft === true) {
            reset();
            document.getElementById('weekly').style.zIndex = "1";
            video_weekly.current.play();
        }
    }, [SliderPosLeft])

    // for playing chart video on scroll to the charts section
    useEffect(() => {
            if (SliderPosLeft === false) {
                reset();
                document.getElementById('daily').style.zIndex = "1";
                video_daily.current.play();
            }
            else if (SliderPosLeft === true) {
                reset();
                document.getElementById('weekly').style.zIndex = "1";
                video_weekly.current.play();
            }
    }, [props.ScrollChart === true])


    return (
        <section className="backcol" id='charts'>
            <div className="chartsWrapper" data-aos="fade-up">
                <div className="leftSection">
                    <p className="universal-medium-headings">Best Proven cleaning results</p>
                    <p className='universal-paragraphs'>After conducting a cleaning testing at <b>Asia's largest Solar Park (Bhadla)</b>, Dhruvaan has been tested as the best cleaning solution till date. Here are the cleaning results in terms of the electricity production gain.</p>
                    <div className='toggleWrapper'>
                        <div className="toggleBase" onClick={slide}>
                            <div className="paras"><p><b>Daily</b></p></div>
                            <div className="paras"><p><b>Weekly</b></p></div>
                            <div className="toggleSlider" style={{ transform: transform }}></div>
                        </div>
                    </div>
                </div>
                <div className="rightSection">
                    <video autoPlay muted preload id="daily" ref={video_daily}>
                        <source src={daily} type="video/mp4" />
                        {/* <source src="../images/videos/daily.mp4" type="video/mp4" /> */}
                        <source src={dailyogg} type="video/ogg" />
                        <source src={dailyweb} type="video/webm" />
                    </video>
                    <video autoPlay muted preload id="weekly" ref={video_weekly}>
                        <source src={weekly} />
                    </video>
                </div>
            </div>
        </section>
    )
}
