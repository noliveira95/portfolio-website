import React from "react";
import "./navbar.module.css";
import Image from "next/image";

function Navbar() {
  return (
    <>
      <nav className="navbar">
        <Image className="logo" src="" alt="logo" width={128} height={77} />
        <div className="navLinks"></div>
        <button className="btn">
          <Image className="logo" src="" alt="logo" />
          Download CV
        </button>
      </nav>
    </>
  );
}

export default Navbar;
