import React from 'react'
import  fireLogo from "../assets/fire.svg";


const DiscountArea = () => {
  return (
    <>
        <section className='discount_area_section'>
            <div className="container">
                <div className="discount_area_section-container">
                    <div className="discount_area_section-container-img">

                    </div>
                    <div className="discount_area_section-container-inf">
                        <span className='discount_area-span'>
                            find your best favourite
                        </span>
                        <p className='discount_area-p'>
                        Sell globally in minutes with localized currencies languages, and <br />
                        experie in every market. only a variety of vaping products
                        </p>
                        <div className="view-card-bott-btns">
                        <button className="main-slider-btn-shop discount_area-btn">
                            ShopNow
                        </button>

                        <a className="off-btn" href="#0">
               <img src={fireLogo} alt="" />
               GET
              <span className="primary-color">25%OFF</span>
               NOW</a>
                            
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default DiscountArea
