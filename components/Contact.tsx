import Link from "next/link";
import React from "react";
import PhoneFillIcon from "@rsuite/icons/PhoneFill";
import EmailFillIcon from "@rsuite/icons/EmailFill";
import githubIcon from "../images/githubLogo.svg";
import linkedlnIcon from "../images/linkedin-logo.png";
import Image from "next/image";
import { Container } from "react-bootstrap";
import { useTranslation } from "react-i18next";

export default function Contact() {
  const { t } = useTranslation();

  return (
    <div
      id="contact"
      style={{
        width: "100%",
        maxHeight: "100vh",
        textAlign: "center",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px 0",
      }}
    >
      <Container>
        <div style={{ paddingTop: 100 }}>
          <h1 className="color-white header"> {t("contactTitle")}</h1>
          <p className="font-big font-weight-normal color-white">
            İlkay Mehmet Bora
          </p>
          <div
            className="contact-menu"
            style={{
              display: "flex",
              gap: 15,
              alignItems: "flex-start",
              flexDirection: "column",
              backgroundColor: "white",
              margin: 20,
              padding: 20,
              borderRadius: 10,
              maxWidth: 400,
              margin: "auto",
            }}
          >
            <Link
              href="mailto:ilkaymb@hotmail.com"
              target="_blank"
              className="color-black font-big font-weight-bold contact-item"
              style={{
                display: "flex",
                gap: "10px",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {" "}
              <EmailFillIcon style={{ fontSize: 32, color: "black" }} />
              ilkaymb@hotmail.com
            </Link>
            <div
              className="contact-item"
              style={{
                display: "flex",
                gap: "10px",
                justifyContent: "center",
                alignItems: "center",
              }}
              target="_blank"
            >
              {" "}
              <PhoneFillIcon style={{ fontSize: 32, color: "black" }} />
              <p className="color-black font-big font-weight-bold ">
                +90 530 360 12 65
              </p>
            </div>
            <Link
              style={{
                display: "flex",
                gap: "10px",
                justifyContent: "center",
                alignItems: "center",
              }}
              href="https://github.com/ilkaymb"
              target="_blank"
              className="color-black font-big font-weight-bold contact-item"
            >
              <Image
                src={githubIcon}
                alt="github-icon"
                style={{
                  position: "relative",
                  width: 32,
                  height: 32,
                }}
              />
              Github
            </Link>
            <Link
              style={{
                display: "flex",
                gap: "10px",
                justifyContent: "center",
                alignItems: "center",
              }}
              href="https://www.linkedin.com/in/ilkay-mehmet-bora-176a04223/"
              className="color-black font-big font-weight-bold    contact-item"
              target="_blank"
            >
              <Image
                src={linkedlnIcon}
                alt="github-icon"
                style={{
                  position: "relative",
                  width: 32,
                  height: 32,
                }}
              />
              Linkedin
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
}
