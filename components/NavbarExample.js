import React, { useState } from "react";
import { FaHome, FaUser, FaEnvelope } from "react-icons/fa"; // Importing react icons for Home, About, and Contact
import Icon from "@/images/icon.svg";
import Image from "next/image";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav
      className="shadow w-full fixed bg-red-900"
      style={{ color: "white", zIndex: 999 }}
    >
      <div className="container mx-auto p-4">
        <div className="flex justify-between items-center">
          <a
            href="#"
            className="font-bold relative flex justify-center items-center gap-4 text-4xl"
          >
            <Image
              src={Icon}
              alt="Logo"
              style={{
                position: "relative",
                width: 60,
                height: 60,
              }}
            />
            ILKKA
          </a>
          <div className="hidden md:flex space-x-4">
            <a
              href="#"
              className="text-white-800 hover:text-black flex items-center gap-2"
            >
              <FaHome size="20px" /> Home
            </a>
            <a
              href="#"
              className="text-white-800 hover:text-black flex items-center gap-2"
            >
              <FaUser size="20px" /> About
            </a>
            <a
              href="#"
              className="text-white-800 hover:text-black flex items-center gap-2 transition duration-300"
            >
              <FaEnvelope size="20px" /> Contact
            </a>
          </div>
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white-800 focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className={isOpen ? "md:hidden pb-5" : "hidden"}>
        <a
          href="#"
          className="block py-2 px-4 text-white hover:bg-gray-100 hover:text-black flex items-center gap-2"
        >
          <FaHome size="20px" /> Home
        </a>
        <a
          href="#"
          className="block py-2 px-4 text-white hover:bg-gray-100 hover:text-black flex items-center gap-2"
        >
          <FaUser size="20px" /> About
        </a>
        <a
          href="#"
          className="block py-2 px-4 text-white hover:bg-gray-100 hover:text-black flex items-center gap-2"
        >
          <FaEnvelope size="20px" /> Contact
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
