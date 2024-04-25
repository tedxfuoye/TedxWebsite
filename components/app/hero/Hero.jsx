import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <section className="px-20 py-40 flex items-start gap-[3rem]">
      <div className="w-full md:w-2/3  border border-primary">
        <h1 className="text-5xl font-kameron font-bold">
          Welcome to <span className="text-primary">TEDx</span>FUOYE! Explore
          Ideas Worth Spreading.
        </h1>
        <p className="text-secondary">
          Join us on a mind-blowing journey of discovery and inspiration as we
          delve into the depths of human ingenuity, sparking conversations that
          transcend boundaries and ignite change. As we gather to share our
          diverse perspectives and innovative ideas, we collectively mold the
          contours of the future, shaping it one insightful notion at a time.
        </p>
      </div>
      <div className="w-full md:w-1/3  border border-primary">
        <Image
          src={"/images/hero1.png"}
          width={100}
          height={100}
          alt="speaker at a TEDx event"
        />
      </div>
    </section>
  );
};

export default Hero;
