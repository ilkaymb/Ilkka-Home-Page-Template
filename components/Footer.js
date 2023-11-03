import Link from "next/link";
import { FaTwitter, FaGithubAlt, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-red-900 text-white py-8 px-4 w-full">
      <div className="container mx-auto">
        <div className="flex flex-wrap justify-between items-center">
          <div className="ml-auto mb-4 md:mb-0">
            <ul className="flex space-x-4">
              <li>
                <a
                  href="https://twitter.com/ilkaymbora"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gray-300"
                >
                  <FaTwitter size={"25px"} />
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/ilkaymb"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gray-300"
                >
                  <FaGithubAlt size={"25px"} />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/ilkay-mehmet-bora-176a04223/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gray-300"
                >
                  <FaLinkedinIn size={"25px"} />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="text-center text-xl py-6">
          <p>
            Developed by{" "}
            <Link
              href="https://ilkay-mehmet-bora-cv-website.vercel.app/"
              className="font-bold"
              style={{ textDecoration: "underline" }}
            >
              Ilkay Hehmet Bora
            </Link>{" "}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
