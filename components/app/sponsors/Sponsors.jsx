import SponsorSlider from "../sponsor-slider/SponsorSlider";

const Sponsors = () => {
  return (
    <section className="px-10 md:px-40 py-20">
      <div className="w-full">
        <h2 className="text-black font-bold font-kameron text-4xl text-left md:text-center mb-6">
          Our sponsors
        </h2>

        {/* would come from the sponsorsList in the constants file */}
        <SponsorSlider />
      </div>
    </section>
  );
};

export default Sponsors;
