import React from "react";
// import { scroller } from "react-scroll";
import { useEffect, useState } from "react";
import benWater from "../images/benWater.png";
import benPanel from "../images/benPanel.png";
import benMoney from "../images/benMoney.png";
import exploreBen from "../images/exploreBen.png";
import style from './ComponentsStyle/benefits.module.css';

export default function BenefitsPage() {
  const [Input, setInput] = useState(500);
  const [typedInput, settypedInput] = useState(0);

  const reset = () => {
    document.getElementById("value-one").style.color = "white";
    document.getElementById("value-one").style.border = "1px solid white";
    document.getElementById("value-two").style.color = "white";
    document.getElementById("value-two").style.border = "1px solid white";
    document.getElementById("value-three").style.color = "white";
    document.getElementById("value-three").style.border = "1px solid white";
  };

  // var typedInput = 0;
  const handleOnChange = (event) => {
    settypedInput(+event.target.value);
    // console.log(searchKey)
  };

  const manuallyGetBenefits = () => {
    reset();
    if (typedInput < 1) {
      alert("Enter a value greater than 1");
    }
    else {
      // console.log(typeof(typedInput));
      setInput(typedInput);
      setbenPopup(false);
    }
  };

  useEffect(() => {
    if (Input === 500) {
      reset();
      document.getElementById("value-one").style.color = "#92C020";
      document.getElementById("value-one").style.border = "1px solid #92C020";
    } else if (Input === 1000) {
      reset();
      document.getElementById("value-two").style.color = "#92C020";
      document.getElementById("value-two").style.border = "1px solid #92C020";
    } else if (Input === 2000) {
      reset();
      document.getElementById("value-three").style.color = "#92C020";
      document.getElementById("value-three").style.border = "1px solid #92C020";
    } else {
      reset();
    }
  }, [Input]);


  // calculations of all 3 benefits
  const [WaterSaved, setWaterSaved] = useState(1);
  const [Production, setProduction] = useState(15);
  const [Roi, setRoi] = useState(3);
  useEffect(() => {
    const temp = Input;
    const waterInLiter = temp * 3077;
    var waterInGallon = waterInLiter / 3.785411784;
    waterInGallon = waterInGallon.toFixed(2);
    setWaterSaved(waterInGallon); //setting Water saved 
    const a = temp * 3;
    const b = a / 100;
    setProduction(b); // setting production
    const r = temp * 45;
    setRoi(r); // setting return on investment
  }, [Input]);




  // explore the benefits number counter animation
  useEffect(() => {
    const counters = document.querySelectorAll(".water");
    counters.forEach((counter) => {
      counter.innerText = "0";
      const updateCounter = () => {
        const target = +counter.getAttribute("data-target");
        const c = +counter.innerText;
        const increment = target / 100;
        if (c < target) {
          // counter.innerText = c + increment;
          counter.innerText = `${Math.ceil(c + increment)}`;
          // console.log(counter.innerText);
          setTimeout(updateCounter, 0.5);
        } else {
          counter.innerText = target;
        }
      };
      updateCounter();
    });
  }, [Input]);




  // benefit description toggle
  const [benWaterDesc, setbenWaterDesc] = useState(true)
  const [benProductionDesc, setbenProductionDesc] = useState(false)
  const [benROIdesc, setbenROIdesc] = useState(false)
  const resetDesc = () => {
    setbenWaterDesc(false);
    setbenROIdesc(false);
    setbenProductionDesc(false);
    document.getElementById('benWaterDesc').style.display = "none";
    document.getElementById('benProductionDesc').style.display = "none";
    document.getElementById('benROIDesc').style.display = "none";
  }
  useEffect(() => {
    if (benWaterDesc === true) {
      document.getElementById('benWaterDesc').style.display = "block";
    } else if (benProductionDesc === true) {
      document.getElementById('benProductionDesc').style.display = "block";
    } else if (benROIdesc === true) {
      document.getElementById('benROIDesc').style.display = "block";
    }
  }, [benWaterDesc, benProductionDesc, benROIdesc])

  // get benefits popup in mobile
  const [benPopup, setbenPopup] = useState(false);


  // autoscroll function for mobile devices
  // const scrollToSection = () => {
  //   window.scrollTo({
  //     top: document.getElementById("benefits").offsetTop + 800,
  //     left: 0,
  //     behavior: 'smooth'
  //   });
  // };


  return (
    <section className={style.backcol} id="benefits">
      <div data-aos="fade-up" data-aos-duration="1500" className={style.benefits}>

        <div className={style.benefitCalc}>
          <div className={style.benefitCalc_base}>
            <div className={style.benefit_heading}>
              <img src={exploreBen} alt="" />
            </div>

            <div className={style.predefined_values}>
              <p className="universal-paragraphs">
                Select your Plant energy production or type manually.
              </p>
              <div className={style.values}>
                <button
                  className={style.value}
                  id="value-one"
                  onClick={() => {
                    setInput(500);
                  }}
                >
                  500 MW
                </button>
                <button
                  className={style.value}
                  id="value-two"
                  onClick={() => {
                    setInput(1000);
                  }}
                >
                  1000 MW
                </button>
                <button
                  className={style.value}
                  id="value-three"
                  onClick={() => {
                    setInput(2000);
                  }}
                >
                  2000 MW
                </button>
              </div>
            </div>

            <div className={style.manually_enter_mw}>
              <p className="universal-paragraphs">
                Enter your plant’s energy production in MW below
              </p>
              <div className={style.mw}>
                <input
                  className={style.numberBox}
                  default-value={Input}
                  type="integer"
                  onChange={handleOnChange}
                  placeholder="Type here. . ."
                  required
                />
                <p>MW</p>
              </div>
              <button
                className="universal-button"
                onClick={manuallyGetBenefits}
              >
                Get Benefits
              </button>
            </div>
          </div>
        </div>



        {/* heading for mobile devices */}
        <div className={style.mobileHeading}>
          <h2 className="universal-small-headings">Explore the Benefits</h2>
          <p className="universal-paragraphs">Here are the benefits of the {Input}MW plant. Tap to read more.</p>
        </div>

        <div className={style.benefitCardsWrapper}>
          <div
            className={style.benefitCard}
            id={style.b_card_1}
          // data-aos="fade-down"
          >
            <img id={style.benWater} src={benWater} alt="" />
            <div className={style.details}>
              <div className={style.calculated} id={style.save}>
                <p className="water" data-target={WaterSaved}></p>
                {/* <div className="cover"></div> */}
              </div>
              <p className="waterSaved">Gallons Water saved Daily</p>
              <p
                className={style.benefitDesc} id="benWaterDesc">
                Cleaning panels with water is definitely not an environmental friendly choice. Yuvaan saves millions of gallons of water everyday. Here's your plant's water saving . . .
              </p>
            </div>
            <div className={style.descInteraction} onClick={() => {
              resetDesc();
              setbenWaterDesc(!benWaterDesc);
            }}></div>
          </div>
          <div
            className={style.benefitCard}
            id={style.b_card_2}
          >
            <img id={style.benPanel} src={benPanel} alt="" />
            <div className={style.details}>
              <div className={style.calculated} id="prod">
                <p className="water" data-target={Production}></p> 
              </div>
              <p className="waterSaved">
                Megawatts Increase in Production Daily
              </p>
              <p className={style.benefitDesc} id="benProductionDesc">
                Using Dhruvaan will lead you to higher production gain. Higher
                production means high savings and ROI. Here's your plant's
                production gain with Dhruvaan . . .
              </p>
            </div>
            <div className={style.descInteraction} onClick={() => {
              resetDesc();
              setbenProductionDesc(!benProductionDesc);
            }}></div>
          </div>
          <div
            className={style.benefitCard}
            id={style.b_card_3}
          >
            <img id={style.benMoney} src={benMoney} alt="" />
            <div className={style.details}>
              <div className={style.calculated} id="return">
                <p className="water" data-target={Roi}></p>
              </div>
              <p className="waterSaved">Lacs Rupees Return on Investment Yearly</p>
              <p className={style.benefitDesc} id="benROIDesc">
                The greatest benefits of using latest technologies are easy to
                use, environmental benefits and high return of investments.
                Dhruvaan fits to this statement perfectly leading you to the very
                high returns on investment. Here's your ROI with Dhruvaan . . .
              </p>
            </div>
            <div className={style.descInteraction} onClick={() => {
              resetDesc();
              setbenROIdesc(!benROIdesc);
            }}></div>
          </div>
        </div>

        <div className={style.firePopup} onClick={() => { setbenPopup(true) }}>Calculate Your Plant Benefits</div>z
      </div>
















      {/* popup for mobiles */}
      {
        benPopup === true ? <div className={style.popup_wrapper}>
          <div className={style.popup_base} data-aos="fade-up" data-aos-duration="100">
            <div className={style.predefined_values_mobile}>
              <p className="universal-paragraphs">
                Select your Plant energy production or type manually.
              </p>
              <div className={style.values}>
                <button
                  className={style.value}
                  id="value-one"
                  onClick={() => {
                    setbenPopup(false);
                    setInput(500);
                  }}
                >
                  500 MW
                </button>
                <button
                  className={style.value}
                  id="value-two"
                  onClick={() => {
                    setbenPopup(false);
                    setInput(1000);
                  }}
                >
                  1000 MW
                </button>
                <button
                  className={style.value}
                  id="value-three"
                  onClick={() => {
                    setbenPopup(false);
                    setInput(2000);
                  }}
                >
                  2000 MW
                </button>
              </div>
              <p className="or"></p>
            </div>

            <div className={style.manually_enter_mw_mobile}>
              <p className="universal-paragraphs">
                Enter your plant’s energy production in MW below
              </p>
              <div className={style.mw}>
                <input
                  className={style.numberBox}
                  default-value={Input}
                  type="integer"
                  onChange={handleOnChange}
                  // onClick={scrollToSection}
                  placeholder="Type here. . ."
                  required
                />
                <p>MW</p>
              </div>
              <div className={style.buttonWrapper}>
                <button className="universal-button closeButton" onClick={() => { setbenPopup(false) }}>
                  Close
                </button>
                <button
                  className="universal-button"
                  onClick={() => {
                    manuallyGetBenefits()
                  }}
                >
                  Get Benefits
                </button>
              </div>
            </div>
          </div>
        </div> : ''
      }
    </section>
  );
}
