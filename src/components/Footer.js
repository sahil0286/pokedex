import React from "react";
import logo from "../media/Pokedex.png";
import { SiLinkedin } from "react-icons/si";
import { MdEmail } from "react-icons/md";
import { BsGithub } from "react-icons/bs";

export const Footer = () => {
  return (
    <>
      <footer style={{backgroundColor:"#B6FDE5", height:"60px"}} className="fixed-bottom px-5 d-flex flex-wrap justify-content-between align-items-center border-top">
        <div className="col-md-4 d-flex align-items-center">
          <a
            href="/"
            className=" me-2 mb-md-0 text-body-secondary text-decoration-none lh-1"
          >
            <img src={logo} style={{ width: "50px" }} alt="" />
          </a>
          <span className="mb-3 mb-md-0 text-body-secondary">
            © 2023 Created By{" "}
            <span>
              <a
                href="https://www.linkedin.com/in/sahilfakir/"
                style={{ textDecoration: "none" }}
                target="blank"
              >
                Sahil Fakir
              </a>
            </span>
          </span>
        </div>

        <ul className=" nav col-md-4 justify-content-end  align-items-center list-unstyled d-flex">
          <li className="ms-3">
            <a
              className="text-body-secondary"
              href="https://www.linkedin.com/in/sahilfakir/"
              target="blank"
            >
              {" "}
              <p style={{fontSize:"25px"}}>
                {" "}
                <SiLinkedin />
              </p>
            </a>
          </li>
          <li className="ms-3">
            <a
              className="text-body-secondary"
              href="mailto:fakirsahil0286@gamil.com"
            >
              {" "}
              <p style={{fontSize:"33px"}}>
                {" "}
                <MdEmail />
              </p>
            </a>
          </li>
          <li className="ms-3">
            <a
              className="text-body-secondary"
              href="https://github.com/sahil0286"
              target="blank"
            >
              {" "}
              <p style={{fontSize:"25px"}}>
                {" "}
                <BsGithub />
              </p>
            </a>
          </li>
        </ul>
      </footer>
    </>
  );
};
