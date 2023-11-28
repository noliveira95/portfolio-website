"use client";

import React, { useState } from "react";
import styles from "./Navbar.module.css";
import Image from "next/image";
import Link from "next/link";
import logo from "../../public/images/logos/NickOliveLogo3Cropped.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
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
              <Link href="/">Who Am I</Link>
            </li>
            <li className={styles["nav-link"]} onClick={removeActive}>
              <Link href="/">My Skills</Link>
            </li>
            <li className={styles["nav-link"]} onClick={removeActive}>
              <Link href="/">My Work</Link>
            </li>
          </ul>
          <Button isLinkButton={true} btnText="Contact Me" btnLink="/" />

          <div className={styles["social-icon-wrapper"]}>
            <Link href="/">
              <FontAwesomeIcon
                icon={faLinkedin}
                className={styles["social-icon"]}
                size="xl"
              />
            </Link>
            <Link href="/">
              <FontAwesomeIcon
                icon={faGithub}
                className={styles["social-icon"]}
                size="xl"
              />
            </Link>
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
        {/* <Link className={styles["nav-link"]} href="/">
            Who Am I
          </Link>
          <Link className={styles["nav-link"]} href="/">
            My Skills
          </Link>
          <Link className={styles["nav-link"]} href="/">
            My Work
          </Link> */}
        {/* <div className={styles["cta-wrapper"]}>
          <Link href="/">
            <FontAwesomeIcon
              icon={faLinkedin}
              className={styles["social-icon"]}
            />
          </Link>
          <Link href="/">
            <FontAwesomeIcon
              icon={faGithub}
              className={styles["social-icon"]}
            />
          </Link>
          <Button isLinkButton={true} btnText="Contact Me" btnLink="/" />
        </div> */}
      </nav>
    </>
  );
}

export default Navbar;
