export const Pillars = () => {
  return (
    <div
      id="pillars"
      className="border-b border-neutral-900 relative mt-20 min-h-[800px]"
    >
      <div className="text-center space-y-2 mb-10">
        <span className="block font-bold text-white">
          We offer creative ways to get
        </span>

        <h1 className="text-3xl sm:text-5xl lg:text-6xl tracking-wide font-bold text-white">
          Your problems solved
        </h1>
        <span className="block text-[#ff642f] font-bold">
          even those you aren't aware of yet
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-10">
        <div className="bg-white p-6 text-black rounded-lg shadow-lg">
          <h2 className="text-xl font-bold">FULL PASSION.</h2>
          <p>
            We say <strong>NO</strong> to generic, boring & apathetic customers
            & projects
          </p>
        </div>

        <div className="bg-neutral-900 p-6 text-white rounded-lg shadow-lg">
          <h2 className="text-xl font-bold">In English pls...</h2>
          <p>We explain your projects in simple words, no roundabouts</p>
        </div>

        <div className="bg-neutral-900 p-6 text-white rounded-lg shadow-lg">
          <h2 className="text-xl font-bold">The Best of the Best</h2>
          <p>
            We only hire passionate, talented, out-of-the-box thinkers. Titles
            are not a factor
          </p>
          <button className="mt-4 bg-[#ff642f] text-white py-2 px-4 rounded-full">
            want to wOrk here?
          </button>
        </div>

        <div className="bg-neutral-200 p-6 text-black rounded-lg shadow-lg">
          <h2 className="text-xl font-bold">F*#% AGILE.</h2>
          <p>
            With the XP methodology, our team consumes fewer resources on a
            better output
          </p>
          <ul className="list-disc list-inside">
            <li>Better Product</li>
            <li>Customer-based Dev.</li>
            <li>Less Delivery time</li>
            <li>Lower Costs</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
