import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { NavLink, Link, useLocation } from "react-router-dom";

import { resumeData } from "../../utils/resumeData";
import CustomButton from "../Button/Button";

import { HomeRounded, SchoolRounded, Telegram } from "@mui/icons-material";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Header.css";

const Header = () => {
  const location = useLocation();

  return (
    <Navbar expand="lg" sticky="top" className="header">
      <Nav.Link as={NavLink} to="/" className={"p 0 m 0"}>
        <Navbar.Brand className="header_home myCard">
          <HomeRounded />
        </Navbar.Brand>
      </Nav.Link>

      <Navbar.Toggle />

      <Navbar.Collapse>
        <Nav className="header_left">
          <Nav.Link
            as={NavLink}
            to="/"
            className={
              location.pathname === "/" ? "header_link_active" : "header_link"
            }
          >
            Resume
          </Nav.Link>
          <Nav.Link
            as={NavLink}
            to="/portfolio"
            className={
              location.pathname === "/portfolio"
                ? "header_link_active"
                : "header_link"
            }
          >
            Portfolio
          </Nav.Link>
            <Nav.Link
                as={NavLink}
                to="/projects"
                className={
                    location.pathname === "/projects"
                        ? "header_link_active"
                        : "header_link"
                }
            >
                Recommendations
            </Nav.Link>
        </Nav>

        <div className="header_right">
          {Object.keys(resumeData.social).map((key) => (
            <a
              key={key}
              href={resumeData.social[key].link}
              target="_blank"
              rel="noopener noreferrer"
            >
              {resumeData.social[key].icon}
            </a>
          ))}
          <CustomButton text={"Hire me"} icon={<Telegram />} />
        </div>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
