import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import { useEffect } from "react"

export default function App() {
  const [ref, slider] = useKeenSlider<HTMLDivElement>({
    loop: true, // Enable looping
    breakpoints: {
      "(min-width: 400px)": {
        slides: { perView: 2, spacing: 5 },
      },
      "(min-width: 1000px)": {
        slides: { perView: 4, spacing: 10 },
      },
    },
    slides: { perView: 1 },
  })

  // Autoplay effect
  useEffect(() => {
    const interval = setInterval(() => {
      if (slider.current) {
        slider.current.next()
      }
    }, 3000) // Move to the next slide every 1000ms (1 second)

    // Cleanup the interval on component unmount
    return () => clearInterval(interval)
  }, [slider])

  return (
    <div ref={ref} className="keen-slider">
      <div className="keen-slider__slide number-slide1x">1</div>
      <div className="keen-slider__slide number-slide2x">2</div>
      <div className="keen-slider__slide number-slide3x">3</div>
      <div className="keen-slider__slide number-slide4x">4</div>
      <div className="keen-slider__slide number-slide5x">5</div>
      <div className="keen-slider__slide number-slide6x">6</div>
      <div className="keen-slider__slide number-slide7x">7</div>
      <div className="keen-slider__slide number-slide8x">8</div>
    </div>
  )
}
