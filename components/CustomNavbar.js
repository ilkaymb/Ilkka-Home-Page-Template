import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import React, { useEffect, useState } from "react";

import FolderFillIcon from "@rsuite/icons/FolderFill";
import { AiFillHome, AiFillFileText } from "react-icons/ai";
import { MdSchool } from "react-icons/md";
import { GiSkills } from "react-icons/gi";
import { BiSolidContact } from "react-icons/bi";

import { turkishFlag } from "../images/tr-translate.png";
import { englishFlag } from "../images/eng-translate.png";

import { useTranslation } from "react-i18next";
import i18n from "@/i18n"; // Daha önce oluşturduğunuz i18n yapılandırma dosyasını içe aktarın
import Image from "next/image";
import { Toggle } from "rsuite";

const CustomNavbar = () => {
  const { t } = useTranslation();
  const [toggle, setToggle] = useState(false);

  const toggleLanguage = () => {
    const newLanguage = i18n.language === "en" ? "tr" : "en";

    i18n.changeLanguage(newLanguage);
  };

  useEffect(() => {
    if (toggle) {
      const body = document.body;

      document.body.classList.add("light-mode");
      const elementsWithColorBlack =
        document.getElementsByClassName("color-black");
      for (let i = 0; i < elementsWithColorBlack.length; i++) {
        elementsWithColorBlack[i].style.color = "black";
      }
      const elementsWithColorWhite =
        document.getElementsByClassName("color-white");
      for (let i = 0; i < elementsWithColorWhite.length; i++) {
        elementsWithColorWhite[i].style.color = "black";
      }
      const elementsWithBorderColorWhite =
        document.getElementsByClassName("border-color-white");
      for (let i = 0; i < elementsWithBorderColorWhite.length; i++) {
        elementsWithBorderColorWhite[i].style.borderColor = "black";
      }
    } else {
      document.body.classList.remove("light-mode");
      const elementsWithColorBlack =
        document.getElementsByClassName("color-black");
      for (let i = 0; i < elementsWithColorBlack.length; i++) {
        elementsWithColorBlack[i].style.color = "black";
      }
      const elementsWithColorWhite =
        document.getElementsByClassName("color-white");
      for (let i = 0; i < elementsWithColorWhite.length; i++) {
        elementsWithColorWhite[i].style.color = "white";
      }
      const elementsWithBorderColorWhite =
        document.getElementsByClassName("border-color-white");
      for (let i = 0; i < elementsWithBorderColorWhite.length; i++) {
        elementsWithBorderColorWhite[i].style.borderColor = "white";
      }
    }
  }, [toggle]);

  return (
    <Navbar
      data-bs-theme="dark"
      expand="lg"
      style={{
        position: "absolute",
        top: "0",
        zIndex: "1000",
        backgroundColor: "rgba(0,0,0,0.95)",
        width: "100%",
      }}
    >
      <Container
        style={{
          padding: "10px 0",
        }}
      >
        <Navbar.Brand href="/">Ilkay Mehmet Bora</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="custom-navbar">
            <Nav.Link href="/">
              <AiFillHome />
              {t("navbarHome")}
            </Nav.Link>

            <Nav.Link href="/education">
              <MdSchool />
              {t("navbarEducation")}
            </Nav.Link>

            <Nav.Link href="/experience">
              <AiFillFileText />
              {t("navbarExperience")}
            </Nav.Link>
            <Nav.Link href="/skills">
              <GiSkills />
              {t("navbarSkills")}
            </Nav.Link>
            <Nav.Link href="/projects">
              <FolderFillIcon />
              {t("navbarProjects")}
            </Nav.Link>

            <NavDropdown title={t("navbarDesigns")} id="basic-nav-dropdown">
              <NavDropdown.Item href="/design/figma">
                Figma Live Broadcast
              </NavDropdown.Item>
              <NavDropdown.Item href="/design/web">
                Web UI Designs
              </NavDropdown.Item>
              <NavDropdown.Item href="/design/mobile">
                Mobile UI Designs
              </NavDropdown.Item>
              <NavDropdown.Item href="/design/posts">
                Instagram Posts
              </NavDropdown.Item>
              <NavDropdown.Item href="/design/storys">
                Istagram Storys
              </NavDropdown.Item>
              <NavDropdown.Item href="/design/covers">
                Profile Covers
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/contact">
              <BiSolidContact />
              {t("navbarContact")}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: 5,
          margin: "0px 15px",
          alignItems: "flex-end",
          justifyContent: "flex-end",
          width: "100%",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            color: "white",
            fontSize: "10px",
          }}
        >
          Dark Mode
          <Toggle
            size="md"
            checked={toggle}
            onClick={() => setToggle(!toggle)}
          />
        </div>
        <button
          onClick={toggleLanguage}
          style={{ backgroundColor: "transparent" }}
        >
          <Image
            src={
              t("translatebutton") === "Türkçe"
                ? "/tr-translate.png"
                : "/eng-translate.png"
            }
            alt="flag"
            width={36}
            height={36}
            style={{ border: "2px solid white", borderRadius: "50%" }}
          />
        </button>
      </div>{" "}
    </Navbar>
  );
};

export default CustomNavbar;
