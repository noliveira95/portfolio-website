import React from "react";
import "./navbar.module.css";
import Image from "next/image";
import Link from "next/link";
import { DownloadIcon } from "@radix-ui/react-icons";

function Navbar() {
  return (
    <>
      <nav className="navbar">
        <Image className="logo" src="" alt="logo" width={128} height={77} />
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
