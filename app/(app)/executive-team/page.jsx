import { volunteersList } from "@/constants/constants";
import Image from "next/image";

const ExecutiveTeam = () => {
  return (
    <main>
      <header className="w-full flex items-center justify-center teams_hero bg-cover bg-center bg-no-repeat h-[500px]">
        <div className="px-10 md:px-40 py-20 text-white">
          <div className="flex flex-col md:flex-row items-start justify-between gap-30">
            <div className="w-full md:w-1/2 mb-10">
              <h3 className="text-white font-bold font-kameron text-6xl max-w-lg">
                Meet our dedicated team of volunteers.
              </h3>
            </div>

            <div className="w-full md:w-1/2 text-justify">
              <p className="mb-10">
                Behind the successful TEDxFUOYE event is a dedicated team of
                individuals who are passionate about ideas and their potential
                to change the world, investing their time and effort in
                organizing events and fostering community growth, serving as
                influential advocates for change and innovation. As a fully
                volunteer-led organization, we operate solely on the passion and
                commitment of our partners, collaborators, and volunteers.
              </p>
              <p className="mb-10 hidden sm:block">
                Collectively, we breathe life into ideas that transcend
                limitations, pushing boundaries to shape a more vibrant city and
                a better world. While this doesn&#39;t encompass everyone
                involved, these individuals represent a core group making
                TEDxFUOYE a tangible reality. Meet the faces behind the scenes,
                each contributing their unique skills and perspectives to make
                TEDxFUOYE an unforgettable experience.
              </p>
            </div>
          </div>
        </div>
      </header>

      <section className="px-10 md:px-40 py-20 md:py-40">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-10 gap-y-20">
          {volunteersList.map((volunteer, index) => (
            <div
              className="relative rounded-xl max-w-[250px] overflow-hidden mx-auto"
              key={index}
            >
              <Image
                src={volunteer.image}
                width={250}
                height={300}
                alt={volunteer.name}
              />
              <div className="absolute bottom-0 left-0 h-[4.5rem] w-full bg-white/50 backdrop-blur-sm px-3 py-3 ">
                <div className="text-center">
                  <h5 className="font-bold text-[1.2rem] text-white">
                    {volunteer.name}
                  </h5>
                  <p className="font-medium text-xs text-white">
                    {volunteer.bio}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default ExecutiveTeam;
