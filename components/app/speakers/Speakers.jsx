"use client";

import { useRef } from "react";
import Image from "next/image";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { speakersList } from "@/constants/constants";

const Speakers = () => {
  let sliderRef = useRef(null);

  const next = () => {
    sliderRef.slickNext();
  };
  const previous = () => {
    sliderRef.slickPrev();
  };

  const sliderSettings = {
    arrows: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    infinite: false,
    dots: false,
  };

  return (
    <section className="px-40 py-40">
      <h2 className="text-black font-bold font-kameron text-4xl text-center mb-6">
        Meet our lineup of amazing speakers
      </h2>

      <Slider
        ref={(slider) => {
          sliderRef = slider;
        }}
        {...sliderSettings}
      >
        {speakersList.map((speaker) => (
          <div className="relative rounded-xl max-w-[250px] overflow-hidden">
            <Image
              src={speaker.image}
              width={250}
              height={300}
              alt={speaker.name}
            />
            <div className="absolute bottom-0 left-0 h-[4.5rem] w-full bg-white/50 backdrop-blur-sm px-3 py-3 ">
              <div className="text-center">
                <h5 className="font-bold text-[1.2rem] text-white">
                  {speaker.name}
                </h5>
                <p className="font-medium text-xs text-white">{speaker.bio}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>

      {/* custom arrow / scroll button */}
      <div className="flex justify-center mt-10">
        <button
          className="mx-2 flex items-center justify-center text-base my-5 border border-primary/60 rounded-md text-primary w-[60px] h-[44px] "
          onClick={previous}
        >
          <MdChevronLeft className="text-[20px]" />
        </button>
        <button
          className="mx-2 flex items-center justify-center text-base my-5 border border-primary/60 rounded-md text-primary w-[60px] h-[44px] "
          onClick={next}
        >
          <MdChevronRight className="text-[20px]" />
        </button>
      </div>
    </section>
  );
};

export default Speakers;
