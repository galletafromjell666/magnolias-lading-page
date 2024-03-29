import React from "react";
import { useState } from "react";
import { Link } from "react-scroll";
const Navbar = () => {
  const [isNavOpen, setisNavOpen] = useState(false);
  const [isDropdownHover, setisDropdownHover] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-primary font-inter md:text-2xl p-1 py-0 text-selection-disable ">
      <div className="w-full  flex flex-wrap items-center justify-between ">
        <a href="/#" className="flex items-center pl-2">
          <img
            src="/magnoliav2.webp"
            className="h-6 mr-3 sm:h-10"
            alt="Magnolias salon Logo"
          />
          <span className="self-center font-averia text-lg md:text-2xl font-semibold whitespace-nowrap ">
            Magnolias Salon
          </span>
        </a>
        <button
          data-collapse-toggle="navbar-dropdown"
          type="button"
          className={
            "inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden " +
            (isNavOpen && "focus:bg-sky-100/50")
          }
          aria-controls="navbar-dropdown"
          aria-expanded="false"
          onClick={() => {
            setisNavOpen(!isNavOpen);
          }}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"></path>
          </svg>
        </button>
        <div
          className={
            isNavOpen
              ? "w-full md:block md:w-auto"
              : "hidden w-full md:block md:w-auto "
          }
          id="navbar-dropdown"
        >
          <ul className="flex flex-col p-4 mt-4 border-0  rounded-lg md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-primary">
            <li>
              <Link
                to="hero"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="block py-2 pl-3 pr-4 text-black md:hover:text-secondaryTextColor rounded md:bg-transparent  md:p-0 "
              >
                Inicio
              </Link>
            </li>
            <li
              className="relative"
              onClick={() => {
                setisDropdownHover(!isDropdownHover);
              }}
            >
              <button
                id="dropdownNavbarLink"
                className="flex items-center justify-between w-full py-2 pl-3 pr-4 font-medium text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-secondaryTextColor md:p-0 md:w-auto"
              >
                Social
                <svg
                  className="w-5 h-5 ml-1"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"></path>
                </svg>
              </button>
              <div
                id="dropdownNavbar"
                className={
                  (isDropdownHover ? "absolute" : "hidden") +
                  " drop-shadow-2xl z-30 font-normal bg-primary divide-y divide-gray-100 rounded shadow w-44 "
                }
              >
                <ul
                  className="z-30 py-1 text-sm text-gray-700 "
                  aria-labelledby="dropdownLargeButton"
                >
                  <li>
                    <a
                      href="https://api.whatsapp.com/send?phone=50372862804"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block px-4 py-2 hover:bg-gray-100 focus:bg-gray-100 "
                    >
                      WhatsApp
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.instagram.com/salon.magnolias/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block px-4 py-2 hover:bg-gray-100 "
                    >
                      Instagram
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.facebook.com/people/Magnolias-Sal%C3%B3n/100063964803631/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block px-4 py-2 hover:bg-gray-100 "
                    >
                      Facebook
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li>
            <Link
                to="services"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="block py-2 pl-3 pr-4 text-black md:hover:text-secondaryTextColor rounded md:bg-transparent  md:p-0 "
              >
                Servicios
              </Link>
            </li>
            <li>
            <Link

                to="contactUs"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="block py-2 pl-3 pr-4 text-black md:hover:text-secondaryTextColor rounded md:bg-transparent  md:p-0 "
              >
                Dirección
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
