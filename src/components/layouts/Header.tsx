import React from "react";

const Header = () => {
  return (
    <div className="md:container bg-white mx-auto px-4 rounded-b-2xl sticky top-0 z-30 shadow-xl">
      <nav className="p-4 flex justify-between items-center ">
        <a href="#" className="text-black">
          Logo
        </a>
        <ul className="flex space-x-4">
          <li>
            <a
              href="#"
              className="text-gray-500 hover:text-orange-400 hover:bg-orange-50 py-3 px-4 rounded-md"
            >
              Découvrir
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-gray-500 hover:text-orange-400 hover:bg-orange-50 py-3 px-4 rounded-md"
            >
              Agir
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-gray-500 hover:text-orange-400 hover:bg-orange-50 py-3 px-4 rounded-md"
            >
              Programmes
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-gray-500 hover:text-orange-400 hover:bg-orange-50 py-3 px-4 rounded-md"
            >
              E-shop café
            </a>
          </li>
        </ul>
        <a
          href="#"
          className="bg-black py-3 px-4 text-white hover:bg-orange-500 hover:text-orange-50 rounded-3xl"
        >
          Contact
        </a>
      </nav>
    </div>
  );
};

export default Header;
