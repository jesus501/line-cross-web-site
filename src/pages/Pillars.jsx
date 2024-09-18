import { pillars } from "../constants";

export const Pillars = () => {
  return (
    <div
      id="pillars"
      className="border-b border-neutral-900 relative mt-20 min-h-[800px]"
    >
      <div className="text-center space-y-2">
        <span className="font-bold bg-neutral-900 text-[#ff642f] rounded-full h-6 text-sm px-2 py-1 uppercase">
          Pillars
        </span>
        <span className="block font-bold">We offer creative ways to get</span>

        <h1 className="text-3xl sm:text-5xl lg:text-6xl tracking-wide font-bold">
          Your problems solved
        </h1>
        <span className="block text-[#ff642f] font-bold">
          event those you aren't aware of yet
        </span>
      </div>
      <div className="flex flex-wrap mt-10 lg:mt-20">
        {pillars.map((pillar, index) => (
          <div key={index} className="w-full sm:1/2 lg:w-1/3">
            <div className="flex">
              <div
                className="flex mx-6 h-10 w-10 p-2 bg-neutral-900 text-[#ff642f]
              justify-center items-center rounded-full"
              >
                {pillar.icon}
              </div>
              <div>
                <h5 className="mt-1 mb-6 text-xl font-bold">{pillar.text}</h5>
                <p className="text-md mb-20 text-neutral-500">
                  {pillar.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
