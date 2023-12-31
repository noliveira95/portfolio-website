"use client";

import React, { useState } from "react";
import styles from "./Navbar.module.css";
import Image from "next/image";
import Link from "next/link";
import logo from "../../public/images/logos/NickOliveLogo3Cropped.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faBehance,
} from "@fortawesome/free-brands-svg-icons";
import { faBars, faClose } from "@fortawesome/free-solid-svg-icons";
import Button from "../shared/Button/Button";

function Navbar() {
  const [isActive, setIsActive] = useState(false);

  const toggleActive = () => {
    setIsActive(!isActive);
  };

  const removeActive = () => {
    setIsActive(false);
  };
  return (
    <>
      <nav className={styles.navbar}>
        <Link href="/">
          <Image src={logo} alt="Logo" className={styles.logo} />
        </Link>
        <div
          className={`${styles["nav-links"]} ${isActive ? styles.active : ""}`}
        >
          <ul className={styles["nav-links-list"]}>
            <li className={styles["nav-link"]} onClick={removeActive}>
              <Link href="/#who-am-i">Who Am I</Link>
            </li>
            <li className={styles["nav-link"]} onClick={removeActive}>
              <Link href="/#my-skills">My Skills</Link>
            </li>
            <li className={styles["nav-link"]} onClick={removeActive}>
              <Link href="/#my-work">My Work</Link>
            </li>
            {/* <li className={styles["nav-link"]} onClick={removeActive}>
              <Link href="/#testimonials">Testimonials</Link>
            </li> */}
            <li onClick={removeActive}>
              <Button
                isLinkButton={true}
                btnText="Contact Me"
                btnLink="/#contact-me"
              />
            </li>
          </ul>

          <div className={styles["social-icon-wrapper"]}>
            <a
              href="https://www.linkedin.com/in/nick-olive/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                icon={faLinkedin}
                className={styles["social-icon"]}
                size="xl"
              />
            </a>
            <a
              href="https://www.github.com/noliveira95"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                icon={faGithub}
                className={styles["social-icon"]}
                size="xl"
              />
            </a>
            <a
              href="https://behance.net/nicholaoliveir10"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                icon={faBehance}
                className={styles["social-icon"]}
                size="xl"
              />
            </a>
          </div>
        </div>
        <div
          className={`${styles.hamburger} ${isActive ? styles.active : ""}`}
          onClick={toggleActive}
        >
          {isActive ? (
            <FontAwesomeIcon icon={faClose} />
          ) : (
            <FontAwesomeIcon icon={faBars} />
          )}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
