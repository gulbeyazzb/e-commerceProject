import { useState } from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="bg-white ">
      <div className="mobile-col-flex  sm:justify-between fixed-width sm:mx-auto  sm:px-0 py-4 sm:h-14 ">
        <div>
          <NavLink to="/" exact className="font-bold text-2xl px-4 sm:px-0">
            Bandage
          </NavLink>
        </div>

        <div className="w-[414px] sm:fixed-width mobile-col-flex text-gap text-second-text font-bold text-[30px] sm:text-sm items-center py-4 sm:py-0">
          <NavLink to="/" className="" exact>
            Home
          </NavLink>
          <div className="flex items-center">
            <NavLink to="/product-list" className="">
              Shop
            </NavLink>
            <div class="relative inline-block text-left">
              <div className="flex items-center">
                <button
                  onClick={() => setToggle(!toggle)}
                  type="button"
                  class="inline-flex w-full justify-center rounded-md bg-white text-sm  text-second-text font-bold hover:bg-gray-50"
                  id="menu-button"
                  aria-expanded="true"
                  aria-haspopup="true"
                >
                  <svg
                    class="-mr-1 h-10 w-10 sm:h-5 sm:w-5 text-gray-400"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </button>
              </div>
              {toggle && (
                <div
                  class="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="menu-button"
                  tabindex="-1"
                >
                  <div class="py-1" role="none">
                    <a
                      href="#"
                      class="text-gray-700 block px-4 py-2 text-sm"
                      role="menuitem"
                      tabindex="-1"
                      id="menu-item-0"
                    >
                      Dress
                    </a>
                    <a
                      href="#"
                      class="text-gray-700 block px-4 py-2 text-sm"
                      role="menuitem"
                      tabindex="-1"
                      id="menu-item-1"
                    >
                      Skirt
                    </a>
                    <a
                      href="#"
                      class="text-gray-700 block px-4 py-2 text-sm"
                      role="menuitem"
                      tabindex="-1"
                      id="menu-item-2"
                    >
                      T-shirt
                    </a>
                    <form method="POST" action="#" role="none">
                      <button
                        type="submit"
                        class="text-gray-700 block w-full px-4 py-2 text-left text-sm"
                        role="menuitem"
                        tabindex="-1"
                        id="menu-item-3"
                      >
                        Home Decoration
                      </button>
                    </form>
                  </div>
                </div>
              )}
            </div>
          </div>
          <NavLink to="/about" className="" exact>
            About
          </NavLink>
          <NavLink to="/blog" className="" exact>
            Blog
          </NavLink>
          <NavLink to="/contact" className="" exact>
            Contact
          </NavLink>
          <NavLink to="/team" className="" exact>
            Team
          </NavLink>
          <NavLink to="/pricing" exact>
            Pricing
          </NavLink>
        </div>

        <div className="mobile-col-flex items-center gap-4 text-primary-color font-bold text-sm">
          <NavLink to="/login" exact className="flex items-center">
            <box-icon
              name="user"
              color="#23a6f0"
              className="w-3 h-3"
            ></box-icon>{" "}
            Login / Register
          </NavLink>
          <button className="flex items-center ">
            <box-icon name="search" color="#23a6f0"></box-icon>
          </button>
          <NavLink to="/cart" exact className="flex items-center">
            <box-icon
              name="cart"
              color="#23a6f0"
              className="w-3 h-3"
            ></box-icon>{" "}
            1
          </NavLink>
          <NavLink to="/favorites" exact className="flex items-center">
            <box-icon
              name="heart"
              color="#23a6f0"
              className="w-3 h-3"
            ></box-icon>{" "}
            1
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
