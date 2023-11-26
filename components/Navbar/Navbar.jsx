import React from "react";
import styles from "./Navbar.module.css";
import Image from "next/image";
import Link from "next/link";
import logo from "../../public/Olive256x256.png";
import { LinkedInLogoIcon, GitHubLogoIcon } from "@radix-ui/react-icons";

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
          <LinkedInLogoIcon className={styles["social-icon"]} />
          <GitHubLogoIcon className={styles["social-icon"]} />
        </div>
      </nav>
    </>
  );
}

export default Navbar;
