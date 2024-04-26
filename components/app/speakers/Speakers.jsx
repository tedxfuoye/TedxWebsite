"use client";

import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import Image from "next/image";

const Speakers = () => {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 6,
      spacing: 15,
    },
    loop: true,
    defaultAnimation: {
      duration: 5000,
    },
  });

 

  return (
    <section className="px-40 py-40">
      <h2 className="text-black font-bold font-kameron text-4xl text-center mb-6">
        Meet our lineup of amazing speakers
      </h2>

      <div ref={sliderRef} className="keen-slider">
        <div className="keen-slider__slide">
          <div className="relative w-[15.625rem] h-[18.75rem] rounded-xl overflow-hidden">
            <Image
              src={"/images/laughter.png"}
              width={250}
              height={300}
              alt="laughter"
              className=""
            />
            <div className="absolute bottom-0 left-0 h-[4.5rem] w-full bg-white/50 backdrop-blur-sm px-3 py-3 ">
              <div className="text-center">
                <h5 className="font-bold text-[1.2rem] text-white">
                  Laughter Atanda
                </h5>
                <p className="font-medium text-xs text-white">
                  Co-organizer, Head of Operations
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="keen-slider__slide">
          <div className="relative w-[15.625rem] h-[18.75rem] rounded-xl overflow-hidden">
            <Image
              src={"/images/laughter.png"}
              width={250}
              height={300}
              alt="laughter"
              className=""
            />
            <div className="absolute bottom-0 left-0 h-[4.5rem] w-full bg-white/50 backdrop-blur-sm px-3 py-3 ">
              <div className="text-center">
                <h5 className="font-bold text-[1.2rem] text-white">
                  Laughter Atanda
                </h5>
                <p className="font-medium text-xs text-white">
                  Co-organizer, Head of Operations
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="keen-slider__slide">
          <div className="relative w-[15.625rem] h-[18.75rem] rounded-xl overflow-hidden">
            <Image
              src={"/images/laughter.png"}
              width={250}
              height={300}
              alt="laughter"
              className=""
            />
            <div className="absolute bottom-0 left-0 h-[4.5rem] w-full bg-white/50 backdrop-blur-sm px-3 py-3 ">
              <div className="text-center">
                <h5 className="font-bold text-[1.2rem] text-white">
                  Laughter Atanda
                </h5>
                <p className="font-medium text-xs text-white">
                  Co-organizer, Head of Operations
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="keen-slider__slide">
          <div className="relative w-[15.625rem] h-[18.75rem] rounded-xl overflow-hidden">
            <Image
              src={"/images/laughter.png"}
              width={250}
              height={300}
              alt="laughter"
              className=""
            />
            <div className="absolute bottom-0 left-0 h-[4.5rem] w-full bg-white/50 backdrop-blur-sm px-3 py-3 ">
              <div className="text-center">
                <h5 className="font-bold text-[1.2rem] text-white">
                  Laughter Atanda
                </h5>
                <p className="font-medium text-xs text-white">
                  Co-organizer, Head of Operations
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="keen-slider__slide">
          <div className="relative w-[15.625rem] h-[18.75rem] rounded-xl overflow-hidden">
            <Image
              src={"/images/laughter.png"}
              width={250}
              height={300}
              alt="laughter"
              className=""
            />
            <div className="absolute bottom-0 left-0 h-[4.5rem] w-full bg-white/50 backdrop-blur-sm px-3 py-3 ">
              <div className="text-center">
                <h5 className="font-bold text-[1.2rem] text-white">
                  Laughter Atanda
                </h5>
                <p className="font-medium text-xs text-white">
                  Co-organizer, Head of Operations
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="keen-slider__slide">
          <div className="relative w-[15.625rem] h-[18.75rem] rounded-xl overflow-hidden">
            <Image
              src={"/images/laughter.png"}
              width={250}
              height={300}
              alt="laughter"
              className=""
            />
            <div className="absolute bottom-0 left-0 h-[4.5rem] w-full bg-white/50 backdrop-blur-sm px-3 py-3 ">
              <div className="text-center">
                <h5 className="font-bold text-[1.2rem] text-white">
                  Laughter Atanda
                </h5>
                <p className="font-medium text-xs text-white">
                  Co-organizer, Head of Operations
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="keen-slider__slide">
          <div className="relative w-[15.625rem] h-[18.75rem] rounded-xl overflow-hidden">
            <Image
              src={"/images/laughter.png"}
              width={250}
              height={300}
              alt="laughter"
              className=""
            />
            <div className="absolute bottom-0 left-0 h-[4.5rem] w-full bg-white/50 backdrop-blur-sm px-3 py-3 ">
              <div className="text-center">
                <h5 className="font-bold text-[1.2rem] text-white">
                  Laughter Atanda
                </h5>
                <p className="font-medium text-xs text-white">
                  Co-organizer, Head of Operations
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Speakers;
