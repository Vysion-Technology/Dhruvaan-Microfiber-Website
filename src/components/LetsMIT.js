import React from 'react';
import l from '../images/l.png';
import lmit from '../images/lmit.png';

export default function LetsMIT() {
  return (
    <section className="hire" id='lmih'>
      <div data-aos="fade-up"> 
         <div className="lmit">
           <img src={l} alt="" />
         </div>
         <div className="lmit">
           <p>We provide extensive training in respective domains, and we have some bigger plans and need ones who can contribute effectively and learn quickly. e provide extensive training in respective domains, and we have some bigger plans and need ones who can contribute effectively and learn quickly.</p>
         </div>
         <div className="lmit-image">
          <img src={lmit} alt="" />
          <div className="PhotoDecor left"></div>
          <div className="PhotoDecor right"></div>
         </div>
        </div>
      </section>
  )
}