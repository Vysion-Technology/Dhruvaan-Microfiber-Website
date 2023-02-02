import React, { useState } from 'react'
import "./ComponentsStyle/Modal.css"

export default function Modal(props) {
    return (
        <div className='Modal_wrapper'>
            <div className='Modal_Base' data-aos="zoom-in" data-aos-duration="300">
                <h3 className='demo_heading'>Get an on site demo</h3>
                <p className='demo_para'>Dhruvaan is the ideal choice for maintaining maximum performance and longevity of your investment. Do register for your demo now to see the robot in action and experience the difference it makes. </p>
                <div className='button_wrapper'>
                    <button className="demo_button" onClick={() => { window.open("https://dhruvaan-vysion.netlify.app/?type=demo") }}>
                        Get a demo
                    </button>
                </div>

                <div className="Demo_close_Button" onClick={() => { props.setIsDemoActive(false) }}>
                    <i className="far fa-times fa-lg"></i>
                </div>
            </div>
        </div>
    )
}
