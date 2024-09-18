import { useNavigate, useLocation } from "react-router-dom";
import logo from "../assets/Line.png";
import { navItems } from "../constants";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export const NavBar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  const toogleNavBar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  const navigate = useNavigate();
  const location = useLocation();

  // Función para manejar la navegación hacia secciones
  const handleNavigate = (section) => {
    if (location.pathname === "/") {
      // Si estás en la página principal, navega al ancla
      const sectionElement = document.getElementById(section);
      if (sectionElement) {
        sectionElement.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // Si no estás en la página principal, redirige a la página principal con el ancla
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

  return (
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
      <div className="container px-4 mx-auto relative text-sm">
        <div className="flex justify-between items-center">
          <div className="flex items-center flex-shrink-0">
            <img className="h-10 w-10 mr-2" src={logo} alt="logo" />
            <span className="text-xl tracking-tight">LC</span>
          </div>
          <ul className="hidden lg:flex ml-14 space-x-12">
            {navItems.map((item, index) => (
              <li key={index} className="font-bold">
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

          <div className="hidden lg:flex justify-center space-x-12 items-center">
            <a
              href="#"
              className="py-2 px-3 border rounded-md font-bold"
              onClick={handleBlogNavigation}
            >
              Blog
            </a>
            <a href="#" className="py-2 px-3 border rounded-md font-bold">
              Es
            </a>
            <a
              href="#footer"
              className="font-bold text-black bg-gradient-to-r from-orange-500 to-orange-800 py-2 px-3 rounded-md"
              onClick={scrollToFooter}
            >
              Contact
            </a>
          </div>

          <div className="lg:hidden md:flex flex-col justify-end">
            <button onClick={toogleNavBar}>
              {mobileDrawerOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
        {mobileDrawerOpen && (
          <div
            className="fixed right-0 z-20 bg-neutral-900 w-full p-12 
          flex flex-col justify-center items-center lg:hidden"
          >
            <ul>
              {navItems.map((item, index) => (
                <li key={index} className="py-4 font-bold">
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
            <div className="flex space-x-6">
              <a
                href="#"
                className="py-2 px-3 border rounded-md font-bold"
                onClick={handleBlogNavigation}
              >
                Blog
              </a>
              <a href="#" className="py-2 px-3 border rounded-md font-bold">
                Es
              </a>
              <a
                href="#footer"
                className="font-bold text-black py-2 px-3 rounded-md bg-gradient-to-r
              from-orange-500 to-orange-800"
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
