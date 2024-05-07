"use client";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const SponsorSlider = () => {
  const sliderSettings = {
    arrows: false,
    slidesToShow: 7,
    slidesToScroll: 1,
    infinite: true,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  };

  return (
    <Slider {...sliderSettings}>
      <div className="rounded-xl bg-[#d9d9d9] max-w-[80px] h-[80px] overflow-hidden"></div>
      <div className="rounded-xl bg-[#d9d9d9] max-w-[80px] h-[80px] overflow-hidden"></div>
      <div className="rounded-xl bg-[#d9d9d9] max-w-[80px] h-[80px] overflow-hidden"></div>
      <div className="rounded-xl bg-[#d9d9d9] max-w-[80px] h-[80px] overflow-hidden"></div>
      <div className="rounded-xl bg-[#d9d9d9] max-w-[80px] h-[80px] overflow-hidden"></div>
      <div className="rounded-xl bg-[#d9d9d9] max-w-[80px] h-[80px] overflow-hidden"></div>
      <div className="rounded-xl bg-[#d9d9d9] max-w-[80px] h-[80px] overflow-hidden"></div>
      <div className="rounded-xl bg-[#d9d9d9] max-w-[80px] h-[80px] overflow-hidden"></div>
    </Slider>
  );
};

export default SponsorSlider;
