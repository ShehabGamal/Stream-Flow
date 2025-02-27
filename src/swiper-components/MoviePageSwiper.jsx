import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "./moviepageswiper.css";
import logo from "../assets/logo.png";
import { Pagination, Autoplay } from "swiper/modules";
import styled from "styled-components";

const StudioLogo = styled.img`
  z-index: 10;
  height: 48px;
  width: 48px;
  margin-top: 15px;
  margin-left: 15px;
  position: absolute;
  align-self: flex-start;
  @media (max-width: 800px) {
    display: none;
  }
`;
export default function MoviePageSwiper(props) {
  const [images] = useState([
    { image: require("../movie-posters/300.jpg"), title: "300" },
    { image: require("../movie-posters/darkknight.jpg"), title: "Dark Knight" },
    { image: require("../movie-posters/fargo.jpg"), title: "Fargo" },
    {
      image: require("../movie-posters/manofsteel.jpg"),
      title: "Man Of Steel",
    },
    { image: require("../movie-posters/snowwhite.jpg"), title: "SnowWhite" },
    { image: require("../movie-posters/thething.jpg"), title: "The Thing" },
    { image: require("../movie-posters/tron.jpg"), title: "Tron" },
    { image: require("../movie-posters/x-men.jpg"), title: "X-Men" },
  ]);
  const { setMovieTitle, setMoviePoster } = props;
  return (
    <Swiper
      pagination={{
        dynamicBullets: true,
        clickable: true,
      }}
      slideToClickedSlide={true}
      modules={[Pagination, Autoplay]}
      className="movieSwiper"
      autoplay={{
        delay: 8000,
      }}
      disableOnInteraction={true}
      style={{
        "--swiper-pagination-color": "#FFBA08",
        "--swiper-pagination-bullet-inactive-color": "#ffffff",
        "--swiper-pagination-bullet-inactive-opacity": "1",
        "--swiper-pagination-bullet-size": "32px",
        "--swiper-pagination-bullet-horizontal-gap": "6px",
      }}
      breakpoints={{
        320: {
          slidesPerView: 3,
          spaceBetween: 8,
        },
        344: {
          slidesPerView: 3,
          spaceBetween: 5,
        },
        412: {
          slidesPerView: 4,
          spaceBetween: 12,
        },
        540: {
          slidesPerView: 5,
          spaceBetween: 12,
        },
        1000: {
          slidesPerView:4,
          spaceBetween: 10,
        },
      }}
    >
      {images.map((image, i) => {
        return (
          <SwiperSlide className="movieSwiperSlide">
            <StudioLogo src={logo} alt="" />
            <h3>{image["title"]}</h3>
            <img
              className="movieSwiperImage"
              src={image["image"]}
              onClick={() => {
                setMoviePoster(image["image"]);
                setMovieTitle(image["title"]);
              }}
              alt=""
            />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}
