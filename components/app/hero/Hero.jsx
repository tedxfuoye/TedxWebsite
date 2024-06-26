import { simpleSteps } from "@/constants/constants";
import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <section className="px-10 md:px-40 py-20 md:py-40">
      <div className="flex flex-col md:flex-row items-start gap-[1rem] justify-between">
        <div className="w-full md:w-2/3">
          <h1 className="text-6xl font-kameron font-bold leading-[5rem] w-full md:max-w-5xl ">
            Welcome to <span className="text-primary">TEDx</span>FUOYE! Explore
            Ideas Worth Spreading.
          </h1>
          <p className="text-secondary my-5 text-justify ">
            Join us on a mind-blowing journey of discovery and inspiration as we
            delve into the depths of human ingenuity, sparking conversations
            that transcend boundaries and ignite change. As we gather to share
            our diverse perspectives and innovative ideas, we collectively mold
            the contours of the future, shaping it one insightful notion at a
            time.
          </p>
        </div>
        <div className="w-full md:w-[330px] ">
          <Image
            src={"/images/hero1.png"}
            width={330}
            height={100}
            alt="speaker at a TEDx event"
            className="md:ml-auto mx-auto md:mx-0"
          />
        </div>
      </div>

      <div className="-mt-40 hidden md:block">
        <Image
          src={"/images/hero2.png"}
          width={1200}
          height={100}
          alt="speaker at a TEDx event"
          className="ml-auto"
        />
      </div>

      <div className="flex items-end gap-[1.875rem] md:py-[12rem] pt-[12rem] pb-[6rem]">
        <div className="hidden md:block">
          <Image
            src={"/images/simple1.png"}
            width={300}
            height={400}
            alt=""
            className=""
          />
        </div>

        {/* simple steps section */}
        <div className="w-full">
          <h2 className="text-black font-bold font-kameron text-4xl text-left mb-6">
            Simple steps to get started
          </h2>
          <div className="px-5 md:px-10 py-14 gradient-background rounded-xl border border-primary/20">
            <div className="flex flex-col md:flex-row gap-14 items-center justify-between">
              {simpleSteps.map((i) => (
                <div key={i.desc} className="md:max-w-[229px] w-full">
                  <div className="image w-12 h-12 bg-primary p-2 rounded-full ">
                    <Image
                      src={i.image}
                      width={100}
                      height={100}
                      alt="happy emoji"
                      className=""
                    />
                  </div>
                  <p className="text-black mt-5 md:mt-2 font-medium text-[16px] text-left">
                    {i.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
