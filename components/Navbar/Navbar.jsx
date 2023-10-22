import React from "react";
import styles from "./Navbar.module.css";
import Image from "next/image";
import Link from "next/link";
import logo from "../../public/Olive256x256.png";
import Button from "../shared/Button/Button";

function Navbar() {
  return (
    <>
      <nav className={styles.navbar}>
        <Link href="/">
          <Image src={logo} alt="Logo" className={styles.logo} />
        </Link>
        <div className={styles["nav-links-wrapper"]}>
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
        <Button btnLink={"/"} btnText={"Download"} />
      </nav>
    </>
  );
}

export default Navbar;
