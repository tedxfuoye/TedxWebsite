"use client";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Sponsors = () => {
  const sliderSettings = {
    arrows: false,
    slidesToShow: 7,
    slidesToScroll: 1,
    infinite: true,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };

  return (
    <section className="px-40 py-20">
      <div className="w-full">
        <h2 className="text-black font-bold font-kameron text-4xl text-center mb-6">
          Our sponsors
        </h2>

        {/* would come from the sponsorsList in the constants file */}
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
      </div>
    </section>
  );
};

export default Sponsors;
