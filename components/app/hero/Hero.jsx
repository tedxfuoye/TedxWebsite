import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <section className="px-20 py-40">
      <div className="flex items-start gap-[2rem] justify-between">
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
        <div className="w-full md:w-1/3">
          <Image
            src={"/images/hero1.png"}
            width={349}
            height={100}
            alt="speaker at a TEDx event"
            className="ml-auto"
          />
        </div>
      </div>
      <div className="-mt-40">
        <Image
          src={"/images/hero2.png"}
          width={1247}
          height={100}
          alt="speaker at a TEDx event"
          className="ml-auto"
        />
      </div>
    </section>
  );
};

export default Hero;
