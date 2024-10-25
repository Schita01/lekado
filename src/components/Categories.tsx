import React, { useState } from "react";
import { useKeenSlider, KeenSliderPlugin } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import VapeCard from "./VapeCard";
import vape1 from "../assets/1-v.jpeg";
import vape2 from "../assets/2-v.jpeg";
import vape3 from "../assets/3-v2.jpeg";
import vape4 from "../assets/4-v.jpeg";
import vape5 from "../assets/5-v.jpeg";
import vape6 from "../assets/6-v.jpeg";
import vape7 from "../assets/7-v.jpeg";
import vape8 from "../assets/8v.jpeg";
import vape9 from "../assets/9v.jpeg";
import vape10 from "../assets/10v.jpeg";
import vape11 from "../assets/11v.jpeg";
import vape12 from "../assets/12v.jpeg";

const ResizePlugin: KeenSliderPlugin = (slider) => {
  const observer = new ResizeObserver(function () {
    slider.update();
  });

  slider.on("created", () => {
    observer.observe(slider.container);
  });
  slider.on("destroyed", () => {
    observer.unobserve(slider.container);
  });
};

const animation = { duration: 25000, easing: (t: number) => t };

export default function Categories() {
  const [small, setSmall] = useState(false);

  const [sliderRef] = useKeenSlider<HTMLDivElement>(
    {
      loop: true,
      renderMode: "performance",
      drag: false,
      slides: {
        perView: 4,
      },
      created(s) {
        s.moveToIdx(5, true, animation);
      },
      updated(s) {
        s.moveToIdx(s.track.details.abs + 5, true, animation);
      },
      animationEnded(s) {
        s.moveToIdx(s.track.details.abs + 5, true, animation);
      },
    },
    [ResizePlugin]
  );

  return (
    <>
      <div className="wrapper-c">
        <div className="container">
          <div className="v-c-m-t">
            <span>
              
            </span>
          </div>
        <div
          ref={sliderRef}
          className="keen-slider"
          style={{
            width: `${small ? 50 : 100}%`,
          }}
          >
          <div className="keen-slider__slide number-slide1">
            <VapeCard title="vape 1"  text="best vape" salery='4$' img={vape1}/>
          </div>
          <div className="keen-slider__slide number-slide2">
             <VapeCard title="vape 1"  text="best vape" salery='4$' img={vape2}/>
          </div>
          <div className="keen-slider__slide number-slide3">
            <VapeCard title="vape 1"  text="best vape" salery='4$' img={vape3}/>

          </div>
          <div className="keen-slider__slide number-slide4">
            <VapeCard title="vape 1"  text="best vape" salery='4$' img={vape4}/>
          </div>
          <div className="keen-slider__slide number-slide5">
            <VapeCard title="vape 1"  text="best vape" salery='4$' img={vape5}/>
          </div>
          <div className="keen-slider__slide number-slide6">
            <VapeCard title="vape 1"  text="best vape" salery='4$' img={vape6}/>

          </div>
          <div className="keen-slider__slide number-slide6">
            <VapeCard title="vape 1"  text="best vape" salery='4$' img={vape7}/>

          </div>
          <div className="keen-slider__slide number-slide6">
            <VapeCard title="vape 1"  text="best vape" salery='4$' img={vape8}/>

          </div>
          <div className="keen-slider__slide number-slide6">
            <VapeCard title="vape 1"  text="best vape" salery='4$' img={vape9}/>

          </div>
          <div className="keen-slider__slide number-slide6">
            <VapeCard title="vape 1"  text="best vape" salery='4$' img={vape10}/>

          </div>
          <div className="keen-slider__slide number-slide6">
            <VapeCard title="vape 1"  text="best vape" salery='4$' img={vape11}/>

          </div>
          <div className="keen-slider__slide number-slide6">
            <VapeCard title="vape 1"  text="best vape" salery='4$' img={vape12}/>

          </div>
        </div>
      </div>
      
      </div>
    </>
  );
}
