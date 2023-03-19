import {
    faFacebook,
    faGithub,
    faLinkedin,
    faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faHome, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link, NavLink } from "react-router-dom";
import LogoS from "../../assets/images/logo-s.png";
import LogoSubtitle from "../../assets/images/logo_sub.png";
import "./index.scss";

const Sidebar = () => (
    <div className="nav-bar">
        <Link className="logo" to="/">
            <img src={LogoS} alt="logo" />
            <img className="sub-logo" src={LogoSubtitle} alt="logo-subtitle" />
        </Link>

        <nav>
            <NavLink
                to="/"
                className={({ isActive }) => (isActive ? "active" : "")}
                end
            >
                <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
            </NavLink>

            <NavLink
                to="/about"
                className={({ isActive }) =>
                    isActive ? "active about-link" : "about-link"
                }
                end
            >
                <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
            </NavLink>

            <NavLink
                to="/contact"
                className={({ isActive }) =>
                    isActive ? "active contact-link" : "contact-link"
                }
                end
            >
                <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
            </NavLink>
        </nav>

        <ul>
            <li>
                <a
                    href="https://www.linkedin.com/in/anas-tulimat/"
                    target="_blank"
                    rel="noreferrer"
                >
                    <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
                </a>
            </li>

            <li>
                <a
                    href="https://github.com/Anastulimat"
                    target="_blank"
                    rel="noreferrer"
                >
                    <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
                </a>
            </li>

            <li>
                <a
                    href="https://www.youtube.com/channel/UCsphQsBkJ_Mkd4M1QKFTN5Q"
                    target="_blank"
                    rel="noreferrer"
                >
                    <FontAwesomeIcon icon={faYoutube} color="#4d4d4e" />
                </a>
            </li>

            <li>
                <a
                    href="https://www.facebook.com/"
                    target="_blank"
                    rel="noreferrer"
                >
                    <FontAwesomeIcon icon={faFacebook} color="#4d4d4e" />
                </a>
            </li>
        </ul>
    </div>
);

export default Sidebar;
