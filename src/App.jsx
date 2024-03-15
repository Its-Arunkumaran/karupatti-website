import { useRef, useEffect } from "react";
import "./App.css";
import handImage from "../src/image/hand.png";
import home from "../src/image/Home.png";
import karupativellam from "../src/image/karupatti.png";
import rice from "../src/image/rice.png";
import oil from "../src/image/oil.png";
import healthmix from "../src/image/healthmix.png";
import karupatti from "../src/image/karupattiLogo.jpg";
import "@fontsource/varela-round";

const Aside = () => {
  const handRef = useRef(null);

  useEffect(() => {
    window.addEventListener("load", positionFingerTips);
    window.addEventListener("resize", positionFingerTips);
  }, []);

  const positionFingerTips = () => {
    const hand = handRef.current;
    const handRect = hand.getBoundingClientRect();
    const fingerTips = document.querySelectorAll(".finger-tip");

    fingerTips.forEach((tip, index) => {
      let offsetX = 0;
      let offsetY = 0;

      switch (index) {
        case 0: // Finger 1
          offsetX = handRect.left + -40;
          offsetY = handRect.top + 105;
          console.log(offsetX, offsetY);

          break;
        case 1: // Finger 2
          offsetX = handRect.left + 20;
          offsetY = handRect.top + -10;
          break;
        case 2: // Finger 3
          offsetX = handRect.left + 130;
          offsetY = handRect.top + -75;
          break;
        case 3: // Finger 4
          offsetX = handRect.left + 230;
          offsetY = handRect.top + -30;
          break;
        case 4: // Finger 5
          offsetX = handRect.left + 290;
          offsetY = handRect.top + 45;
          break;
        default:
          break;
      }

      // Set position
      tip.style.left = offsetX + "px";
      tip.style.top = offsetY + "px";
      tip.style.visibility = "visible";
    });
  };

  return (
    <div className="background">
      <div className="handTransition">
        <div className="iconsimage">
          <div className="handimage">
            <img src={handImage} alt="Hand waving" ref={handRef} />
          </div>
          <div className="finger-tip">
            <img src={home} alt="Finger 1" className="icon1" />
          </div>
          <div className="finger-tip">
            <img src={karupativellam} alt="Finger 2" className="icon2" />
          </div>
          <div className="finger-tip">
            <img src={rice} alt="Finger 3" className="icon3" />
          </div>
          <div className="finger-tip">
            <img src={oil} alt="Finger 4" className="icon4" />
          </div>
          <div className="finger-tip">
            <img src={healthmix} alt="Finger 5" className="icon5" />
          </div>
        </div>
      </div>
      <div className="karupatti">
        <img src={karupatti} alt="karupatti" />
      </div>
    </div>
  );
};

export default Aside;
