import Image from "next/image";

const About = () => {
  return (
    <main>
      <header className="w-full flex items-center justify-center about_hero bg-cover bg-center bg-no-repeat h-[500px]">
        <h3 className="text-white font-bold font-kameron text-5xl">About us</h3>
      </header>

      <section className="px-10 md:px-40 py-20">
        <div className="my-20">
          <h2 className="text-black font-bold font-kameron text-4xl mb-6">
            About <span className="text-primary">TED</span>
          </h2>
          <div className="flex flex-col md:flex-row items-center justify-between gap-10 md:gap-32 my-5">
            <div className="w-full md:w-1/2">
              <p className="text-justify text-[15px] text-secondary">
                TED is a nonprofit organization devoted to Ideas Worth
                Spreading, often in the form of short talks delivered by leading
                thinkers and doers. Many of these talks are given at TED
                Conferences, intimate TED Salons and thousands of independently
                organised TEDx events around the world. Videos of these talks
                are made available, free, on TED.com and other platforms. Audio
                versions of TED Talks are published to TED Talks Daily,
                available on all podcast platforms.
              </p>
            </div>
            <div className="w-full md:w-1/2">
              <img src="/images/aboutPage1.png" className="w-full" alt="" />
            </div>
          </div>
          <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-10 md:gap-32 my-5">
            <div className="w-full md:w-1/2">
              <img src="/images/aboutPage2.png" className="w-full" alt="" />
            </div>
            <div className="w-full md:w-1/2 text-[15px] text-secondary">
              <p className="text-justify">
                TED&#39;s open and free initiatives for spreading ideas include
                TED.com, where new TED Talk videos are posted daily; TEDx, which
                licenses thousands of individuals and groups to host local,
                self-organized TED-style events around the world; the TED
                Fellows program, which selects innovators from around the globe
                to amplify the impact of their remarkable projects and
                activities; The Audacious Project, which surfaces and funds
                critical ideas that have the potential to impact millions of
                lives; TED Translators Program, which crowdsources the
                subtitling of TED Talks so that big ideas can spread across
                languages and borders; and the educational initiative TED-Ed.
                TED also offers TED@Work a program that reimagines TED Talks for
                workplace learning. TED also has a growing library of original
                podcasts, including The TED Interview with Chris Anderson,
                WorkLife with Adam Grant, Far Flung with Saleem Reshamwala and
                How to Be a Better Human.
              </p>
              <p className="mt-10">
                Follow TED on X, Facebook, Instagram, and on LinkedIn.
              </p>
            </div>
          </div>
        </div>
        <div className="my-32 md:my-20">
          <div className="flex flex-col md:flex-row items-center justify-between gap-10 md:gap-44 my-5">
            <div className="w-full md:w-3/5">
              <h2 className="text-black font-bold font-kameron text-4xl mb-6 max-w-xl">
                About <span className="text-primary">TEDx,</span> x =
                independently organized event
              </h2>
              <p className="text-justify text-[15px] text-secondary">
                In the spirit of ideas worth spreading, TEDx is a program of
                local, self-organized events that bring people together to share
                a TED like experience. At a TEDx event, TED Talks video and live
                speakers combine to spark deep discussion and connection. These
                local, self-organized events are branded TEDx, where x =
                independently organized TED event. The TED Conference provides
                general guidance for the TEDx program, but individual TEDx
                events are self-organized.
              </p>
            </div>
            <div className="w-full md:w-2/5">
              <img src="/images/aboutPage3.png" className="w-full" alt="" />
            </div>
          </div>
        </div>
        <div className="flex flex-col-reverse md:flex-row gap-10 md:gap-44 items-center justify-between my-20 md:my-48">
          <div className="w-full md:w-3/5">
            <div className="flex justify-between gap-5">
              <div className="w-1/2 md:mt-[83px]">
                <Image
                  src={"/images/about1.png"}
                  width={300}
                  height={400}
                  alt=""
                  className=""
                />
              </div>
              <div className="w-1/2 md:mb-[83px]">
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
          <div className="w-full md:w-2/5 text-left">
            <h2 className="text-black font-bold font-kameron text-4xl mb-6">
              About <span className="text-primary">TEDx</span>FUOYE
            </h2>
            <p className="text-secondary font-medium text-[15px] text-justify">
              <span className="text-primary">TED</span> is an independently
              organized TED event hosted by Federal University Oye-Ekiti
              (FUOYE). Our goal is to bring together bright minds and innovative
              thinkers to share inspiring ideas and spark meaningful
              conversations. We believe that by spreading powerful ideas, we can
              creat ea positive impact on our community and the world.
            </p>
          </div>
        </div>
        {/* vision & mission */}
        <div className="my-32">
          <div className="flex flex-col md:flex-row items-center justify-between gap-10 md:gap-44 my-5">
            <div className="w-full md:w-3/5">
              <h2 className="text-black font-bold font-kameron text-4xl mb-6 max-w-xl">
                Our Vision and Mission
              </h2>
              <p className="text-justify text-[15px] text-secondary my-10">
                <span className="font-bold text-black">OUR VISION:</span> To
                create an unparalleled TEDx experience that leaves a lasting
                impact on every attendee, igniting an insatiable thirst for
                knowledge and setting the stage for an extraordinary series of
                TEDx events to come.
              </p>
              <p className="text-justify text-[15px] text-secondary my-10">
                <span className="font-bold text-black">OUR MISSION:</span> To
                create an electrifying platform where every idea shared
                transcends mere inspiration, but becomes a catalyst for positive
                action in the university community to come.
              </p>
            </div>
            <div className="w-full md:w-2/5">
              <img src="/images/aboutPage4.png" className="w-full" alt="" />
            </div>
          </div>
        </div>
        {/* what drives us */}
        <div className="my-10 md:my-32">
          <div className="flex flex-col-reverse md:flex-row items-start justify-between gap-10 md:gap-44 my-5">
            <div className="w-full md:w-1/2">
              <img src="/images/aboutPage5.png" className="w-full" alt="" />
            </div>
            <div className="w-full md:w-1/2">
              <h2 className="text-black font-bold font-kameron text-4xl mb-6 max-w-xl">
                What drives us
              </h2>
              <p className="text-justify text-[15px] text-secondary my-10">
                <span className="text-primary">TEDx</span>FUOYE is driven by the
                belief that every individual possesses a unique perspective and
                a story worth sharing. By bringing together a diverse array of
                speakers and participants, we aim to create an inclusive space
                where ideas can be exchanged, challenged, and celebrated.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
