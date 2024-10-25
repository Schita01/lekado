import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

// Define the container style for the map
const containerStyle = {
  width: '100%',
  height: '400px',
};

// Define the map's center coordinates
const center = {
  lat: 43.4142989,
  lng: -124.2301242,
};

// Define the markers for the map
const markers = [
  {
    position: {
      lat: 37.4220656,
      lng: -122.0840897,
    },
    title: 'Mountain View, CA',
  },
  {
    position: {
      lat: 47.648994,
      lng: -122.3503845,
    },
    title: 'Seattle, WA',
  },
];

const Contact = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <>
      <section className='contact'>
        <div className="vacancy_top">
          <span className='top-span'>კონტაქტი</span>
        </div>
        <div className="container">
          <div className="contact-container">
            <div className="contact-info">
              <span className='contact-info-main-span'>
                Have something in mind?
                Let's talk.
              </span>
              <p className='contact-main-p'>
                Adipiscing elit, sed do eiusmod tempor incididunt ut labore
                et dolore magna aliqua. Ut enim ad minim.
              </p>
              <div className="localation">
                <svg
                  className='loc-icon'
                  viewBox="0 0 24 24"
                  fill="#fff"
                  height="3em"
                  width="3em"
                  {...props}
                >
                  <path d="M12 14c2.206 0 4-1.794 4-4s-1.794-4-4-4-4 1.794-4 4 1.794 4 4 4zm0-6c1.103 0 2 .897 2 2s-.897 2-2 2-2-.897-2-2 .897-2 2-2z" />
                  <path d="M11.42 21.814a.998.998 0 001.16 0C12.884 21.599 20.029 16.44 20 10c0-4.411-3.589-8-8-8S4 5.589 4 9.995c-.029 6.445 7.116 11.604 7.42 11.819zM12 4c3.309 0 6 2.691 6 6.005.021 4.438-4.388 8.423-6 9.73-1.611-1.308-6.021-5.294-6-9.735 0-3.309 2.691-6 6-6z" />
                </svg>
                <span className='localation-span'>785 15h Street, Office 478 Berlin</span>
              </div>
              <div className="localation">
                <svg
                  className='loc-icon'
                  fill="#fff"
                  viewBox="0 0 16 16"
                  height="3em"
                  width="3em"
                  {...props}
                >
                  <path
                    fillRule="evenodd"
                    d="M1.885.511a1.745 1.745 0 012.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 00.178.643l2.457 2.457a.678.678 0 00.644.178l2.189-.547a1.745 1.745 0 011.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 01-7.01-4.42 18.634 18.634 0 01-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"
                  />
                </svg>
                <span className='localation-span'>785 15h Street, Office 478 Berlin</span>
              </div>
              <div className="localation">
                <svg
                  className='loc-icon'
                  viewBox="0 0 24 24"
                  fill="#fff"
                  height="3em"
                  width="3em"
                  {...props}
                >
                  <path d="M4 4h16a2 2 0 012 2v12a2 2 0 01-2 2H4a2 2 0 01-2-2V6c0-1.1.9-2 2-2zm16 3.38V6H4v1.38l8 4 8-4zm0 2.24l-7.55 3.77a1 1 0 01-.9 0L4 9.62V18h16V9.62z" />
                </svg>
                <span className='localation-span'>785 15h Street, Office 478 Berlin</span>
              </div>
            </div>
            <div className="contact-map">
            <iframe
            className='iframe-map'
        width="100%"
        height="640px"
        loading="lazy"
        allowFullScreen
        src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=tbilisi&zoom=10&maptype=roadmap"
        style={{ border: 0 }}
      />
      <a href="https://www.taxuni.com/texas-food-stamps-guide/" style={{ color: 'rgba(0,0,0,0)', borderRadius: "10", position: 'absolute', left: 0, top: 0, zIndex: 0 }}>
        Texas Food Stamps Guide
      </a>
      <style jsx>{`
        .mapswrapper {
          background: #fff;
          position: relative;
        }
        .mapswrapper iframe {
          position: relative;
          z-index: 2;
        }
      `}</style>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
