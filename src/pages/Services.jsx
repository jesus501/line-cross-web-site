import { CheckCircle2 } from "lucide-react";
import codeImg from "../assets/code.jpg";
import { checklistItems } from "../constants";

export const Services = () => {
  return (
    <div id="services" className="border-b border-neutral-900 mt-20">
      <div className="text-center">
        <span className="font-bold block text-lg">Some of our</span>
        <h2
          className="text-[#ff642f] text-3xl sm:text-5xl lg:text-6xl mt-6
        tracking-wide font-bold"
        >
          Services
        </h2>
      </div>
      <div className="flex flex-wrap justify-center">
        <div className="p-2 w-full lg:w-1/2">
          <img src={codeImg} alt="code" />
        </div>
        <div className="pt-12 w-full lg:w-1/2">
          {checklistItems.map((item, index) => (
            <div key={index} className="flex mb-12">
              <div
                className="text-green-400 mx-6 bg-neutral-900 h-10 w-10
                p-2 justify-center items-center rounded-full"
              >
                <CheckCircle2 />
              </div>
              <div>
                <h5 className="mt-1 mb-2 text-xl">{item.title}</h5>
                <p className="text-md text-neutral-500">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
