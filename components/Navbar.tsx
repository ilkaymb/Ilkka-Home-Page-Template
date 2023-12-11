import React, { useState ,useEffect} from "react";
import { FaHome, FaUser, FaEnvelope } from "react-icons/fa"; 
import Icon from "@/images/icon.svg";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
      const onScroll = () => setOffset(window.pageYOffset);
      // clean up code
      window.removeEventListener('scroll', onScroll);
      window.addEventListener('scroll', onScroll, { passive: true });
      return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return (
    <nav
      className="shadow w-full fixed bg-red-900 transition duration-500 ease-out"
      style={{ color: "white", zIndex: 999,background:offset ==0 ? "linear-gradient(180deg, #000 0%, rgba(0, 0, 0, 0.90) 31.96%, rgba(0, 0, 0, 0.80) 69.17%, rgba(0, 0, 0, 0.54) 91.58%)":"black",

      boxShadow:" 0px 4px 4px 0px rgba(0, 0, 0, 0.25)" }}
    >
      <div className="container mx-auto p-4">
        <div className="flex justify-between items-center">        
        <div className="hidden md:flex space-x-4">
            <Link
              href="/"
              className="text-white-800 hover:text-red-500 flex items-center gap-2"
            >
              <FaHome size="16px" /> Home
            </Link>

          </div>
          <Link
            href="/"
            className="font-bold  relative flex justify-center items-center w-full absolute gap-4 text-4xl"
          >
            <Image
              src={Icon}
              alt="Logo"
              style={{
                position: "relative",
                width: 60,
                height: 60,
              }} objectFit="contain"
            />
            ILKKA
          </Link>
          <div className="hidden md:flex space-x-4">

            <Link
              href="https://ilkay-mehmet-bora-cv-website.vercel.app/"
              className="text-white-800 hover:text-red-500 flex items-center gap-2"
            >
              <FaUser size="16px" /> About
            </Link>
            <Link
              href="https://ilkay-mehmet-bora-cv-website.vercel.app/contact"
              className="text-white-800 hover:text-red-500 flex items-center gap-2 transition duration-300"
            >
              <FaEnvelope size="16px" /> Contact
            </Link>
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
      <div
        className={`overflow-hidden transition-all duration-400 ease-in-out ${
          isOpen ? "md:hidden pb-5 max-h-60 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <Link
          href="/"
          className="block py-2 px-4 text-white hover:bg-gray-100 hover:text-red-500 flex items-center gap-2"
        >
          <FaHome size="16px" /> Home
        </Link>
        <Link
          href="https://ilkay-mehmet-bora-cv-website.vercel.app/"
          className="block py-2 px-4 text-white hover:bg-gray-100 hover:text-red-500 flex items-center gap-2"
        >
          <FaUser size="16px" /> About
        </Link>
        <Link
          href="https://ilkay-mehmet-bora-cv-website.vercel.app/contact"
          className="block py-2 px-4 text-white hover:bg-gray-100 hover:text-red-500 flex items-center gap-2"
        >
          <FaEnvelope size="16px" /> Contact
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
