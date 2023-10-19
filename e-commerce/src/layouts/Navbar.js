import { useState } from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <div className=" bg-white ">
      <div className="flex justify-between w-[1050px] mx-auto py-4 h-14">
        <div>
          <NavLink to="/" exact className="font-bold text-2xl">
            Bandage
          </NavLink>
        </div>

        <div className="flex text-[#737373] font-bold text-sm items-center">
          <NavLink to="/" className="mr-6" exact>
            Home
          </NavLink>
          <NavLink to="/product-list" className="mr-1">
            Shop
          </NavLink>
          <div class="relative inline-block  text-left">
            <div className="flex items-center">
              <button
                onClick={() => setToggle(!toggle)}
                type="button"
                class="inline-flex w-full justify-center rounded-md bg-white text-sm  text-[#737373] font-bold hover:bg-gray-50"
                id="menu-button"
                aria-expanded="true"
                aria-haspopup="true"
              >
                <svg
                  class="-mr-1 h-5 w-5 text-gray-400"
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
          <NavLink to="/about" className="ml-6 mr-6" exact>
            About
          </NavLink>
          <NavLink to="/blog" className="mr-6" exact>
            Blog
          </NavLink>
          <NavLink to="/contact" className="mr-6" exact>
            Contact
          </NavLink>
          <NavLink to="/team" className="mr-6" exact>
            Team
          </NavLink>
          <NavLink to="/pricing" exact>
            Pricing
          </NavLink>
        </div>
        <div className="flex gap-4 text-[#23A6F0] font-bold text-sm">
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
