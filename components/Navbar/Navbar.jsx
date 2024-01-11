"use client";

import React, { useState } from "react";
import styles from "./Navbar.module.css";
import Image from "next/image";
import Link from "next/link";
import logo from "../../public/images/logos/NickOliveLogo3Cropped.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faClose } from "@fortawesome/free-solid-svg-icons";
import Button from "../shared/Button/Button";
import SocialButtonRow from "../shared/SocialButtonRow/SocialButtonRow";

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
              <Link href="/#clients">Clients</Link>
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

          <SocialButtonRow />

          {/* <div className={styles["social-icon-wrapper"]}>
            <SocialButton
              link="https://www.linkedin.com/in/nick-olive/"
              icon={faLinkedin}
              title="LinkedIn"
              ariaLabel="LinkedIn"
            />
            <SocialButton
              link="https://www.github.com/noliveira95"
              icon={faGithub}
              title="GitHub"
              ariaLabel="GitHub"
            />
            <SocialButton
              link="https://www.dribbble.com/nickolive"
              icon={faDribbble}
              title="Dribbble"
            />
          </div> */}
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
