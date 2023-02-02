import React, { useState, useEffect } from 'react';
import style from './ComponentsStyle/Landingpage.module.css';
export default function LandingPage() {

  const [PlayDemo, setPlayDemo] = useState(false);
  const [Loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, [PlayDemo === true])

  return (
    <section className={style.first_page} id='home'>
      <div className={style.overlay}></div>
      <div className={style.text_wrapper}>
        <h1 className='universal-big-headings'><b style={{ color: 'var(--lightgreen)' }}>Greener</b>, Cleaner<br className="breakPoint" /> and the most Sustainable...</h1>
        <p className='universal-paragraphs'><b>Dhruvaan</b> is a smart internet connected solar panels cleaning robot with the daily cleaning efficiency of more than <b>3.8%</b>.</p>
        {/* DemoVideo_button is styled in app.css */}
        <div style={{display:"flex"}}>
          {/* <div className='universal-button' onClick={() => { setPlayDemo(true) }} style={{marginRight:"20px"}}>
            <b>Book a demo</b>
            <i className="fas fa-play fa-sm"></i>
          </div> */}
          <div className='universal-button' onClick={() => { window.open("https://dhruvaan-vysion.netlify.app/")}}>
            <b>Book a Demo</b>
            {/* <i className="fas fa-play fa-sm"></i> */}
          </div>
        </div>
      </div>
      {/* <img src="https://ik.imagekit.io/hgfugmm0dbi/sky_9-zISfAws.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1647241816914" alt="" className={style.sky} /> */}
      {/* <img src="https://ik.imagekit.io/hgfugmm0dbi/website-imagebigsky_OZYlYgQUer.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1672997339058" alt="panelImage" className={style.sky} /> */}

      {
        PlayDemo === true ? <DemoVideo setPlayDemo={setPlayDemo} Loading={Loading} /> : ''
      }

    </section>
  )
}

function DemoVideo(props) {
  return (
    <div className={style.VideoWrapper} onClick={() => { props.setPlayDemo(false) }}>
      <iframe src="https://www.youtube.com/embed/tOk3URrHQsg" className={style.video} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="true">
      </iframe>
      <div className={style.close}>
        <div className={style.circle}>
          <i className="far fa-arrow-left fa-lg"></i>
        </div>
      </div>
      {
        props.Loading === true ? <Spinner /> : ''
      }
    </div>
  )
}

function Spinner() {
  return (
    <div className={style.spinner}></div>
  )
}