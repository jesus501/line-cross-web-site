
import { useNavigate, useLocation } from "react-router-dom";
import logo from "../assets/Line.png";
import { navItems } from "../constants";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export const NavBar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  const toggleNavBar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigate = (section) => {
    if (location.pathname === "/") {
      const sectionElement = document.getElementById(section);
      if (sectionElement) {
        sectionElement.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      navigate(`/?section=${section}`);
    }
  };

  const handleBlogNavigation = () => {
    navigate("/blog");
  };

  const scrollToFooter = () => {
    const footerElement = document.getElementById("footer");
    if (footerElement) {
      footerElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Añadir la redirección con ancla al hacer clic en el logo
  const handleLogoClick = () => {
    if (location.pathname === "/") {
      handleNavigate("home"); // Navegar a la sección "home"
    } else {
      navigate("/#home"); // Redirigir al home si no estás en la página principal
    }
  };

  return (
    <nav className="sticky top-5 z-50 py-3 backdrop-blur-lg bg-[#111111] rounded-full border border-neutral-700/80 mx-24 shadow-2xl">
      <div className="container px-4 mx-auto relative text-sm">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center flex-shrink-0">
            <img
              className="h-10 w-10 ml-6 cursor-pointer"
              src={logo}
              alt="logo"
              onClick={handleLogoClick} // Navegar al hacer clic en el logo
            />
          </div>

          {/* Menu Items */}
          <ul className="hidden lg:flex ml-10 space-x-10 text-white font-semibold tracking-wide">
            {navItems.map((item, index) => (
              <li key={index}>
                <a
                  href={item.href}
                  className="hover:text-[#ff642f] transition-colors duration-300"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavigate(item.href.slice(1));
                  }}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Blog & Contact Buttons */}
          <div className="hidden lg:flex justify-center space-x-6 items-center">
            <a
              href="#"
              className="py-2 px-4 border border-white rounded-md text-white font-bold hover:bg-white hover:text-black transition-colors duration-300 shadow-lg"
              onClick={handleBlogNavigation}
            >
              Blog
            </a>
            <a className="py-2 px-3 border border-white rounded-md text-white font-bold">
              Es
            </a>
            <a
              href="#footer"
              className="font-bold text-black bg-[#ff642f] from-orange-500 to-orange-800 py-2 px-6 rounded-full hover:from-orange-600 hover:to-orange-900 transition-all duration-300 shadow-xl"
              onClick={scrollToFooter}
            >
              Contact
            </a>
          </div>

          {/* Mobile Menu */}
          <div className="lg:hidden md:flex flex-col justify-end">
            <button onClick={toggleNavBar}>
              {mobileDrawerOpen ? (
                <X className="text-white" />
              ) : (
                <Menu className="text-white" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Drawer */}
        {mobileDrawerOpen && (
          <div className="fixed right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center lg:hidden">
            <ul>
              {navItems.map((item, index) => (
                <li key={index} className="py-4 font-bold text-white">
                  <a
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavigate(item.href.slice(1));
                    }}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="flex space-x-6 mt-4">
              <a
                href="#"
                className="py-2 px-3 border border-white rounded-md text-white font-bold"
                onClick={handleBlogNavigation}
              >
                Blog
              </a>
              <a className="py-2 px-3 border border-white rounded-md text-white font-bold">
                Es
              </a>
              <a
                href="#footer"
                className="font-bold text-black py-2 px-6 rounded-full bg-[#ff642f] from-orange-500 to-orange-800 hover:from-orange-600 hover:to-orange-900 transition-all duration-300 shadow-lg"
                onClick={scrollToFooter}
              >
                Contact
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
