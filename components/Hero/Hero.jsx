import React from "react";
import styles from "./Hero.module.css";
import Button from "../shared/Button/Button";

function Hero() {
  return (
    <>
      <section className="intro">
        <div className="intro-content">
          <h2>Hello,</h2>
          <h1>
            I&apos;m <span className="intro-name">Nick</span>
          </h1>
          <h1>Web Developer & Designer</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatibus quae dolor voluptas animi quia omnis itaque!
          </p>
          <Button />
        </div>
      </section>
    </>
  );
}

export default Hero;
