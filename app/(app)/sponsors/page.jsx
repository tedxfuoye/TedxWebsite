import SponsorSlider from "@/components/app/sponsor-slider/SponsorSlider";
import Image from "next/image";

const Sponsors = () => {
  return (
    <main>
      <header className="w-full flex items-center justify-center sponsors_hero bg-cover bg-center bg-no-repeat h-[500px]">
        <h3 className="text-white font-bold font-kameron text-5xl">Sponsors</h3>
      </header>

      <section className="px-10 md:px-40 py-20">
        <div className="my-20">
          <SponsorSlider />
        </div>

        <div className="my-40">
          <div className="flex flex-col md:flex-row items-start justify-between gap-10 md:gap-32">
            <div className="w-full md:w-1/2">
              <h2 className="text-black font-bold font-kameron text-4xl mb-6 max-w-md">
                Become a sponsor for <span className="text-primary">TEDx</span>
                FUOYE
              </h2>
              <p className="text-justify text-[15px] text-secondary">
                At TEDxFUOYE, we believe in the power of ideas to shape the
                world and inspire positive change. Our event gathers thought
                leaders, innovators, and visionaries from various fields to
                share their ideas and experiences on the TEDx stage. As we gear
                up for an event of enlightening talks and engaging discussions,
                we invite you to be a part of this extraordinary journey as a
                sponsor.
              </p>
            </div>
            <div className="w-full md:w-1/2">
              <img src="/images/sponsor1.png" className="w-full" alt="" />
            </div>
          </div>
        </div>

        <div className="my-40">
          <div className="flex flex-col md:flex-row items-center justify-between gap-10 md:gap-32">
            <div className="w-full md:w-1/2"></div>

            <div className="w-full md:w-1/2">
              <h2 className="text-black font-bold font-kameron text-4xl mb-6 max-w-md">
                Why sponsor <span className="text-primary">TEDx</span>
                FUOYE?
              </h2>
              <p className="text-justify text-[15px] text-secondary">
                Sponsoring TEDxFUOYE offers a unique opportunity to align your
                brand with innovation, creativity, and forward-thinking. By
                supporting our event, you&#39;re not just investing in a single
                day of inspiration – you&#39;re contributing to a lasting impact
                on the community and beyond. Your association with TEDxFUOYE
                demonstrates your commitment to fostering the exchange of ideas
                and supporting the growth of individuals who are shaping the
                future.
              </p>
            </div>
          </div>
        </div>

        <div className="my-40">
          <div className="flex flex-col md:flex-row items-start justify-between gap-10 md:gap-32">
            <div className="w-full md:w-1/2">
              <h2 className="text-black font-bold font-kameron text-4xl mb-6 max-w-md">
                How to get involved
              </h2>
              <p className="text-justify text-[15px] text-secondary">
                We welcome visionary companies and organizations to partner with
                us in making TEDxFUOYE a resounding success. If you&#39;re
                interested in becoming a sponsor, please reach out to us at
                tedxfuoye@gmail.com . Our team will be delighted to discuss the
                various sponsorship levels and benefits, tailored to meet your
                organization&#39;s goals and values.
              </p>
            </div>
            <div className="w-full md:w-1/2">
              <img src="/images/sponsor2.png" className="w-full" alt="" />
            </div>
          </div>
        </div>

        <div className="flex flex-col-reverse md:flex-row gap-10 md:gap-44 items-start justify-between my-20 md:my-48">
          <div className="w-full md:w-3/5">
            <div className="flex justify-between gap-5">
              <div className="w-1/2 md:mt-[83px]">
                <Image
                  src={"/images/sponsor4.png"}
                  width={300}
                  height={400}
                  alt=""
                  className=""
                />
              </div>
              <div className="w-1/2 md:mb-[83px]">
                <Image
                  src={"/images/sponsor3.png"}
                  width={300}
                  height={400}
                  alt=""
                  className=""
                />
              </div>
            </div>
          </div>
          <div className="w-full md:w-2/5 text-left">
            <h2 className="text-black font-bold font-kameron text-4xl mb-6">
              Stay tuned for the sponsors lineup
            </h2>
            <p className="text-secondary font-medium text-[15px] text-justify">
              We&#39;re excited to announce that our impressive lineup of
              sponsors will be unveiled at a later date. As we finalize
              partnerships with forward-looking organizations, we&#39;ll be
              revealing the names of the companies that are helping us make
              TEDxFUOYE a reality. Stay connected with us on our website and
              social media channels for updates on our sponsors and their
              contributions to this exceptional event.
            </p>
            <p className="text-secondary font-medium text-[15px] text-justify mt-20">
              TEDxFUOYE is not just an event; it&#39;s an experience that
              enriches minds, sparks conversations, and inspires change. Join us
              in this journey as a sponsor and play an integral role in shaping
              the conversations that will shape our future. For sponsorship
              inquiries, please contact us at tedxfuoye@gmail.com .
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Sponsors;
