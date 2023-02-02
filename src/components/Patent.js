import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import SwiperCore, { Autoplay } from 'swiper';
import style from './ComponentsStyle/patent.module.css';
import Featured from './Featured';
import patentMedal from '../images/patentmedal.svg'

export default function Patent() {
  SwiperCore.use([Autoplay])

  return (
    <div className="backcol">
      <section className={style.patent} id='patents' data-aos="fade-up">
        <div className={style.patent_section_heading}>
          <h1 className='universal-big-headings'>
            <img src={patentMedal} alt="" className={style.medal} />
            Patents and Certifications
          </h1>
          <p className='universal-paragraphs'>Vysion Technology’s roots lies in the innovation. Our first and foremost focus is always towards building great products through deep research and development. </p>
        </div>

        <Swiper
          modules={[Autoplay]}
          className="mySwiper patentsiwper"
          spaceBetween={30}
          slidesPerView={3}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
        >

          <SwiperSlide>
            <PatentCard
              id="1"
              title="Solar Panel cleaning Robot for industrial solar power plants."
              status="Granted"
              type="Design Patent"
              image="https://ik.imagekit.io/hgfugmm0dbi/57736_7_ebe2Rbu-e.png?ik-sdk-version=javascript-1.4.3&updatedAt=1652421414954"
            />
          </SwiperSlide>

          <SwiperSlide>
            <PatentCard
              id="2"
              type="Design Patent"
              title="Float switch liquid level sensor"
              status="Granted"
              image="https://ik.imagekit.io/hgfugmm0dbi/57736_7_ebe2Rbu-e.png?ik-sdk-version=javascript-1.4.3&updatedAt=1652421414954"
            />
          </SwiperSlide>

          <SwiperSlide>
            <PatentCard
              id="3"
              type="Product Patent"
              title="Float switch liquid level sensor"
              status="Applied"
              image="https://ik.imagekit.io/hgfugmm0dbi/Group_1109_vxikmLWOA.png?ik-sdk-version=javascript-1.4.3&updatedAt=1652421414624"
            />
          </SwiperSlide>

          <SwiperSlide>
            <PatentCard
              id="4"
              type="Design Patent"
              title="Brush for solar panel cleaning robot"
              status="Granted"
              image="https://ik.imagekit.io/hgfugmm0dbi/57736_7_ebe2Rbu-e.png?ik-sdk-version=javascript-1.4.3&updatedAt=1652421414954"
            />
          </SwiperSlide>

          <SwiperSlide>
            <PatentCard
              id="5"
              type=""
              title="The Quality management system in research, development and manufacturing."
              status="ISO 9001 : 2015"
              image="https://ik.imagekit.io/hgfugmm0dbi/iso_cert_GhpxmdqI-.png?ik-sdk-version=javascript-1.4.3&updatedAt=1648188419596"
            />
          </SwiperSlide>

          <SwiperSlide>
            <PatentCard
              id="6"
              type=""
              title="The maintained quality of the products."
              status="CE certified"
              image="https://ik.imagekit.io/hgfugmm0dbi/ce_cert_h8N0nTN1ME.png?ik-sdk-version=javascript-1.4.3&updatedAt=1648188419689"
            />
          </SwiperSlide>
        </Swiper>

        <div className={style.patentMobile}>
          <div className={style.divRow}>
            <PatentMobile
              status="Granted"
              title="Solar Panel cleaning Robot for industrial solar power plants."
              image="https://ik.imagekit.io/hgfugmm0dbi/patent_cert_yRoplkYqK.png?ik-sdk-version=javascript-1.4.3&updatedAt=1648188419689"
            />
            <PatentMobile
              title="Float switch liquid level sensor"
              status="Granted"
              image="https://ik.imagekit.io/hgfugmm0dbi/patent_cert_yRoplkYqK.png?ik-sdk-version=javascript-1.4.3&updatedAt=1648188419689"
            />
          </div>
          <div className="childSnapper"></div>
          <div className={style.divRow}>
            <PatentMobile
              title="Float switch liquid level sensor"
              status="Applied"
              image="https://ik.imagekit.io/hgfugmm0dbi/patent_cert_yRoplkYqK.png?ik-sdk-version=javascript-1.4.3&updatedAt=1648188419689"
            />
            <PatentMobile
              title="Brush for solar panel cleaning robot"
              status="Granted"
              image="https://ik.imagekit.io/hgfugmm0dbi/patent_cert_yRoplkYqK.png?ik-sdk-version=javascript-1.4.3&updatedAt=1648188419689"
            />
          </div>
          <div className={style.divRow}>
            <PatentMobile
              title="The Quality management system in research, development and manufacturing."
              status="ISO 9001 : 2015"
              image="https://ik.imagekit.io/hgfugmm0dbi/iso_cert_GhpxmdqI-.png?ik-sdk-version=javascript-1.4.3&updatedAt=1648188419596"
            />
            <PatentMobile
              title="The maintained quality of the products."
              status="CE certified"
              image="https://ik.imagekit.io/hgfugmm0dbi/ce_cert_h8N0nTN1ME.png?ik-sdk-version=javascript-1.4.3&updatedAt=1648188419689"
            />
          </div>
        </div>
        <Featured />
      </section>
    </div>
  )
}

function PatentCard(props) {
  return (
    <div className={style.patentbody}>
      <div className={style.upperContent}>
        <div className={style.c_image}>
          <img src={props.image} alt="patent" />
        </div>
        <div className={style.patentType}>
          <div className={
            props.status === "Granted" ? style.grantedStatus
              : props.status === "Applied" ? style.appliedStatus
                : style.iso
          }
          >{props.status}</div>
          <p style={{
            color: 'rgba(255, 255, 255, 0.34)', fontWeight: 'bold', fontSize: 'var(--paraFontPC)'
          }}>
            {props.type}
          </p>
        </div>
      </div>
      <p className='universal-paragraphs'>{props.title}{props.id === "1" || props.id === "5" ? "" : <p style={{ color: "var(--light)" }}>.</p>}</p>
    </div>
  )
}

function PatentMobile(props) {
  return (
    <div className={style.patentmobilebody}>
      <div className={style.imgContainer}>
        <img src={props.image} alt="" />
      </div>
      <p className={
        props.status === "Granted" ? "universal-small-headings grantedStatus"
          : props.status === "Applied" ? "universal-small-headings appliedStatus"
            : "universal-small-headings iso"
      }>
        {props.status}
      </p>
      <p className={style.patentFont}>{props.title}</p>
    </div>
  )
}