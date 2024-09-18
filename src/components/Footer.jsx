import image from "../assets/foter.png";

export const Footer = () => {
  return (
    <footer
      id="footer"
      className="relative mt-20 py-10 border-t border-neutral-700"
    >
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 relative z-10">
        <div>
          <h3 className="text-lg font-semibold">Your Company</h3>
          <p className="text-sm text-neutral-500">
            Building innovative solutions.
          </p>
        </div>
        <div>
          <h3 className="text-lg font-semibold">Quick Links</h3>
          <ul>
            <li>
              <a href="#" className="text-sm text-neutral-400 hover:text-white">
                Home
              </a>
            </li>

            <li>
              <a href="#" className="text-sm text-neutral-400 hover:text-white">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold">Contact Us</h3>
          <p className="text-sm text-neutral-500">
            Email: contact@linecross.com
          </p>
          <p className="text-sm text-neutral-500">Phone: +123 456 7890</p>
        </div>
      </div>

      {/* Divider line and rights section */}
      <div className="flex flex-col items-center mt-8 relative z-10">
        <hr className="w-24 border-t-2 border-[#ff642f] mb-4" />
        <p className="text-neutral-500 text-sm">2024 All Rights Reserved</p>
      </div>

      {/* Background Image */}
      <img
        src={image}
        alt="footer background"
        className="absolute inset-0 w-full h-full object-cover opacity-10 pointer-events-none"
      />
    </footer>
  );
};
