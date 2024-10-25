import React, { useState, useEffect } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import "aos/dist/aos.css"; // Import AOS CSS
import AOS from 'aos'; // Import AOS

const MainCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedLanguage, setSelectedLanguage] = useState("Eng"); // Default language

  const translations = {
    Geo: {
      title: "იპოვე ყველაფერი  <br />თვის <span className='carousel-h3-span'>ვეიპინგი</span>",
      description: "გაყიდეთ გლობალურად წუთებში ლოკალიზებული ვალუტებით, ენებით და გამოცდილებით <br />ყველა ბაზარზე. მხოლოდ ვეიპინგის პროდუქტების მრავალფეროვნება",
      price: "საწყისი ფასი <span className='vape-money'>99$</span>",
      shopNow: "შეძინა ახლა",
      viewDetails: "იხილეთ დეტალები",
    },
    Rug: {
      title: "Найдите все <br />для <span className='carousel-h3-span'>вейпинга</span>",
      description: "Продавайте по всему миру за считанные минуты с локализованными валютами, языками и опытом в <br />каждом рынке. только разнообразие вейпинг-продуктов",
      price: "начальная цена <span className='vape-money'>99$</span>",
      shopNow: "Купить сейчас",
      viewDetails: "Просмотреть детали",
    },
    Eng: {
      title: "Find everything  <br />for <span className='carousel-h3-span'>vaping</span>",
      description: "Sell globally in minutes with localized currencies, languages, and experience in <br />every market. Only a variety of vaping products",
      price: "starting price <span className='vape-money'>99$</span>",
      shopNow: "Shop now",
      viewDetails: "View Details",
    },
  };

  useEffect(() => {
    AOS.init(); // Initialize AOS once when the component mounts
  }, []);

  const handleLanguageChange = (language: React.SetStateAction<string>) => {
    setSelectedLanguage(language);
  };

  const [sliderRef, instanceRef] = useKeenSlider(
    {
      loop: true,
      slideChanged(slider) {
        setCurrentSlide(slider.track.details.rel);
      },
    },
    [
      (slider) => {
        let timeout: number | undefined;
        let mouseOver = false;

        function clearNextTimeout() {
          clearTimeout(timeout);
        }

        function nextTimeout() {
          clearTimeout(timeout);
          if (mouseOver) return;
          timeout = setTimeout(() => {
            slider.next();
          }, 2000);
        }

        slider.on("created", () => {
          slider.container.addEventListener("mouseover", () => {
            mouseOver = true;
            clearNextTimeout();
          });
          slider.container.addEventListener("mouseout", () => {
            mouseOver = false;
            nextTimeout();
          });
          nextTimeout();
        });

        slider.on("dragStarted", clearNextTimeout);
        slider.on("animationEnded", nextTimeout);
        slider.on("updated", nextTimeout);
      },
    ]
  );

  const currentTranslation = translations[selectedLanguage];

  return (
    <>
      <div className="language-selector-container">
      </div>
      <div ref={sliderRef} className="keen-slider main-keen-slider">
        <Slide translation={currentTranslation} />
        {/* Add more slides as needed */}
        <Slide translation={currentTranslation} /> {/* Example for a second slide */}
      </div>

      {/* Navigation Arrows */}
      <Arrow
        left
        onClick={(e:any) => e.stopPropagation() || instanceRef.current?.prev()}
        disabled={currentSlide === 0}
      />
      <Arrow
        onClick={(e:any) => e.stopPropagation() || instanceRef.current?.next()}
        disabled={currentSlide === instanceRef.current?.track.details.slides.length - 1}
      />

      {/* Dots Navigation */}
      <div className="dots">
        {[...Array(instanceRef.current?.track.details.slides.length || 0).keys()].map((idx) => (
          <button
            key={idx}
            onClick={() => {
              instanceRef.current?.moveToIdx(idx);
            }}
            className={`dot ${currentSlide === idx ? "active" : ""}`}
            aria-label={`Go to slide ${idx + 1}`}
          ></button>
        ))}
      </div>
    </>
  );
};

const Slide = ({ translation }:any) => {
  return (
    <div className="keen-slider__slide number-slide1">
      <div className="slider-container s-c-1">
        <div className="container">
          <div data-aos="zoom-in-down" className="slide-text">
            <h2 className="carousel-h2" dangerouslySetInnerHTML={{ __html: translation.title }} />
            <p className="slider-text-p" dangerouslySetInnerHTML={{ __html: translation.description }} />
            <span className="slider-text-span" dangerouslySetInnerHTML={{ __html: translation.price }} />
            <div className="main-slider-btns">
              <button className="main-slider-btn-shop" aria-label={translation.shopNow}>
                {translation.shopNow}
              </button>
              <button className="main-slider-btn-details" aria-label={translation.viewDetails}>
                {translation.viewDetails}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainCarousel;

function Arrow({ disabled, left, onClick }:any) {
  const disabledClass = disabled ? " arrow--disabled" : "";
  return (
    <svg
      onClick={onClick}
      className={`arrow ${left ? "arrow--left" : "arrow--right"} ${disabledClass}`}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      {left ? (
        <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
      ) : (
        <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
      )}
    </svg>
  );
}
