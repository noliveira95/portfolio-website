import React from "react";
import styles from "./Navbar.module.css";
import Image from "next/image";
import Link from "next/link";
import logo from "../../public/images/logos/NickOliveLogo3Cropped.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import Button from "../shared/Button/Button";

function Navbar() {
  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles["nav-links-wrapper"]}>
          <Link href="/">
            <Image src={logo} alt="Logo" className={styles.logo} />
          </Link>
          <Link className={styles["nav-link"]} href="/">
            Who Am I
          </Link>
          <Link className={styles["nav-link"]} href="/">
            My Skills
          </Link>
          <Link className={styles["nav-link"]} href="/">
            My Work
          </Link>
        </div>
        <div className={styles["social-icons-wrapper"]}>
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
        </div>
      </nav>
    </>
  );
}

export default Navbar;
