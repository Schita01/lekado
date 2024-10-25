import vape1 from "../assets/1-v.jpeg";
import  fireLogo from "../assets/fire.svg";

const ViewArea = () => {
  return (
    <>
        <section className='view-area-section'>
          <div className="container">
      <div className="view-area-section-container">

        <div className="view-area-section-left">
          <img className="view-area-left-img" src={vape1} alt="" />
          <div className="view-card-bott">
            <h2 className="view-card-bott-h2">
              The best e-liqued bundles
            </h2>
            <p className="view-card-bott-p">
              Sell globally in minutes with localized currencies languages, and
              experie
              in every market. only a variety of vaping
              products
            </p>
            <div className="view-card-bott-btns">
            <button className="main-slider-btn-shop">Shop now</button>
            <a className="off-btn" href="#0">
               <img src={fireLogo} alt="" />
               GET
              <span className="primary-color">25%OFF</span>
               NOW</a>
            </div>
          </div>
        </div>

        <div className="view-area-section-right">
          <div className="view-area-secrion-right-card">
           <div className="view-area-secrion-right-card-info">
              <h3 className="card-info-h3">new to vapeing?</h3>
              <span className="card-info-span">
                Whereas recognition of the inherent dignity
              </span>
              <button className="main-slider-btn-shop view-btn">Shop now</button>
           </div>
           <div className="view-area-secrion-right-card-img">

           </div>
        </div>
          <div className="view-area-secrion-right-card">
          <div className="view-area-secrion-right-card-info">
              <h3 className="card-info-h3">new to vapeing?</h3>
              <span className="card-info-span">
                Whereas recognition of the inherent dignity
              </span>
              <button className="main-slider-btn-shop view-btn">Shop now</button>
           </div>
           <div className="view-area-secrion-right-card-img">

           </div>
        </div>
        </div>
      </div>
          </div>
        </section>
    </>
  )
}

export default ViewArea
