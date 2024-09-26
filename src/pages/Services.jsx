export const Services = () => {
  return (
    <div id="services" className="border-b border-neutral-900 mt-20">
      <div className="text-center mb-12">
        <span className="font-bold block text-lg">Some of our</span>
        <h2 className="text-[#ff642f] text-3xl sm:text-5xl lg:text-6xl mt-6 tracking-wide font-bold">
          Services
        </h2>
      </div>

      <div className="space-y-16">
        {/* Software Development */}
        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between px-6 lg:px-24">
          <img
            src="/path-to-your-image1.png" // Cambia esta ruta por la correcta
            alt="Software Dev Icon"
            className="w-40 lg:w-64"
          />
          <div className="lg:w-1/2 text-center lg:text-left">
            <h3 className="text-2xl font-bold">SOFTWARE DEV.</h3>
            <p className="mt-4">
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam,"
            </p>
          </div>
        </div>

        {/* Consulting & Audit */}
        <div className="flex flex-col lg:flex-row-reverse items-center lg:items-start justify-between px-6 lg:px-24">
          <img
            src="/path-to-your-image2.png" // Cambia esta ruta por la correcta
            alt="Consulting Icon"
            className="w-40 lg:w-64"
          />
          <div className="lg:w-1/2 text-center lg:text-right">
            <h3 className="text-2xl font-bold">CONSULTING & AUDIT</h3>
            <p className="mt-4">
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam,"
            </p>
          </div>
        </div>

        {/* Data Driven Biz */}
        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between px-6 lg:px-24">
          <img
            src="/path-to-your-image3.png" // Cambia esta ruta por la correcta
            alt="Data Driven Biz Icon"
            className="w-40 lg:w-64"
          />
          <div className="lg:w-1/2 text-center lg:text-left">
            <h3 className="text-2xl font-bold">DATA DRIVEN BIZ</h3>
            <p className="mt-4">
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam,"
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
