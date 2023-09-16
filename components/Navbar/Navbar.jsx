import React from "react";
import styles from "./Navbar.module.css";
import Image from "next/image";
import Link from "next/link";
import { DownloadIcon } from "@radix-ui/react-icons";
import logo from "../../public/Olive256x256.png";

function Navbar() {
  return (
    <>
      <nav className={styles.navbar}>
        <Image src={logo} alt="Logo" width={48} height={48} />
        <div className="navLinks">
          <Link href="/">Home</Link>
          <Link href="/">Who Am I</Link>
          <Link href="/">My Skills</Link>
          <Link href="/">My Work</Link>
        </div>
        <button className="btn">
          <DownloadIcon />
          Download CV
        </button>
      </nav>
    </>
  );
}

export default Navbar;
