import Navbar from "./NavBar";
import Recp from "./Recp";
import "./styles.css";
import { useState, useEffect, useRef } from "react";
import { Carousel, Button, Container, Row } from "react-bootstrap";
export default function Details(props) {
  const image1 = require("" + props.image1);
  const image2 = require("" + props.image2);
  const image3 = require("" + props.image3);
  const name = props.name;

  return (
    <>
      <Carousel indicators={true} controls={true} className="carousel">
        <Carousel.Item>
          <img className="carousel-img" src={image1} alt="image1" />
          <div class="carousel-caption d-none d-md-block">
            <h3>{name}</h3>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <img className="carousel-img" src={image2} alt="image2" />
          <div class="carousel-caption d-none d-md-block">
            <h3>{name}</h3>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <img className="carousel-img" src={image3} alt="image3" />
          <div class="carousel-caption d-none d-md-block">
            <h3>{name}</h3>
          </div>
        </Carousel.Item>
      </Carousel>
    </>
    // <div
    //   style={{
    //     maxWidth: 1200,
    //     marginLeft: "auto",
    //     marginRight: "auto",
    //     marginTop: 64,
    //   }}
    // >
    //   <div className="carousel-container">
    //     <div className="carousel-wrapper">
    //       <button className="left-arrow" onClick={onPrevClick}>
    //         &lt;
    //       </button>
    //       <div className="carousel-content-wrapper">
    //         <div className="carousel-content" ref={ref}>
    //           <img src={image1} alt="image1" />
    //           <img src={image2} alt="image2" />
    //           <img src={image3} alt="image3" />
    //         </div>
    //       </div>
    //       <button className="right-arrow" onClick={onNextClick}>
    //         &gt;
    //       </button>
    //     </div>
    //   </div>

    /* <div
        id="carouselExampleSlidesOnly"
        className="carousel slide"
        data-ride="carousel"
      >
        <ol class="carousel-indicators">
          <li
            data-target="#carouselExampleIndicators"
            data-slide-to="0"
            class="active"
          ></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              className="caro-img d-block  w-100"
              src={image1}
              alt="First slide"
            />
          </div>
          <div className="caro-img carousel-item">
            <img className="d-block  w-100" src={image2} alt="Second slide" />
          </div>
          <div className="caro-img carousel-item">
            <img className="d-block  w-100" src={image3} alt="Third slide" />
          </div>
        </div>
        <a
          className="carousel-control-prev"
          href="#carouselExampleControls"
          role="button"
          data-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExampleControls"
          role="button"
          data-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Next</span>
        </a>
      </div> */
  );
}
