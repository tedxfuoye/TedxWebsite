const JoinUs = () => {
  return (
    <section className="px-40">
      <div className="flex items-start justify-between">
        <div className="w-full md:w-1/2">
          <h2 className="text-black font-bold font-kameron text-4xl mb-6">
            Join us on this journey
          </h2>
          <p className="text-secondary font-medium text-[16px] text-justify md:max-w-[52rem]">
            Whether you're a seasoned <span className="text-primary">TED</span>{" "}
            enthusiast or a first-time attendee, we invite you to join us on
            this journey of exploration and inspiration. Together, let's create
            a world where ideas know no bounds and where each voice has the
            power to shape a brighter future.
          </p>
        </div>
        <div className="w-full md:w-1/2 relative">
          <div className="gradient-background rounded-xl border border-primary/20 h-[520px] max-w-3xl w-full absolute top-0 left-0 -z-10 "></div>
          <div className="flex flex-col justify-evenly h-[520px]">
            <div className="bg-white rounded-xl border border-primary/20 p-5 ml-48">
              <h6 className="font-semibold text-[16px] text-black mb-5">
                Networking
              </h6>
              <p className="text-secondary font-medium text-[12px] text-justify">
                TEDxFUOYE events attract a diverse audience, including
                professionals, students, and enthusiasts. Attending provides an
                opportunity to connect with like-minded individuals, potential
                mentors, or collaborators.
              </p>
            </div>
            <div className="bg-white rounded-xl border border-primary/20 p-5 ml-32">
              <h6 className="font-semibold text-[16px] text-black mb-5">
                Learning opprtunities
              </h6>
              <p className="text-secondary font-medium text-[12px] text-justify">
                Speakers at TEDx events share insights, experiences, and
                knowledge that can be educational. You may learn about new
                ideas, innovations, or concepts that you were not previously
                familiar with.
              </p>
            </div>
            <div className="bg-white rounded-xl border border-primary/20 p-5 ml-48">
              <h6 className="font-semibold text-[16px] text-black mb-5">
                Entertainment
              </h6>
              <p className="text-secondary font-medium text-[12px] text-justify">
                TEDxFUOYE talks are designed to be engaging and entertaining.
                The format often includes storytelling and visuals, making the
                content more enjoyable and memorable.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinUs;
