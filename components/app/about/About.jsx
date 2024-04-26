import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <section className="px-40">
      <div className="flex items-start justify-between">
        <div className="w-full md:w-1/2">
          <h2 className="text-black font-bold font-kameron text-4xl mb-6">
            About Us
          </h2>
          <p className="text-secondary font-medium text-[16px] text-justify md:max-w-[52rem]">
            <span className="text-primary">TED</span> is a nonprofit
            organization devoted to Ideas Worth Spreading, often in the form of
            short talks delivered by leading thinkers and doers...
          </p>
        </div>
        <div className="w-full md:w-1/2">
          <div className="flex justify-between gap-5">
            <div className="w-1/2 mb-[83px]">
              <Image
                src={"/images/about1.png"}
                width={300}
                height={400}
                alt=""
                className=""
              />
            </div>
            <div className="w-1/2 mt-[83px]">
              <Image
                src={"/images/about2.png"}
                width={300}
                height={400}
                alt=""
                className=""
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
