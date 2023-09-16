import React from "react";
import "./navbar.module.css";
import Image from "next/image";
import { DownloadIcon } from "@radix-ui/react-icons";

function Navbar() {
  return (
    <>
      <nav className="navbar">
        <Image className="logo" src="" alt="logo" width={128} height={77} />
        <div className="navLinks"></div>
        <button className="btn">
          <DownloadIcon />
          Download CV
        </button>
      </nav>
    </>
  );
}

export default Navbar;
