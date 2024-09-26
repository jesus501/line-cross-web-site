import image from "../assets/camar.png";

export const StartUp = () => {
  return (
    <div id="startup" className=" mt-20 flex flex-col items-center text-center">
      <span className="font-bold block text-lg mb-2">Got yourself a</span>
      <h2
        className="font-bold text-3xl sm:text-5xl lg:text-6xl my-4
        tracking-wider"
      >
        Start-Up?
      </h2>

      <img src='' alt="fondo" className="my-8" />

      <p className="font-bold mb-4 text-lg">
        Helps, consulting, and financing from a fellow tech-friend
      </p>
      <button className="font-bold text-black bg-gradient-to-r from-orange-500 to-orange-800 py-2 px-4 rounded-md">
        Join our s.up ecosystem
      </button>
    </div>
  );
};
