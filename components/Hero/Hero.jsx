import React from "react";
import styles from "./Hero.module.css";
import Button from "../shared/Button/Button";

function Hero() {
  return (
    <>
      <section className={styles.intro}>
        <div className={styles["intro-content"]}>
          <h3>Hello, I&apos;m</h3>
          <h1>
            <span className={styles["intro-name"]}>Nicholas Oliveira</span>
          </h1>
          <h1>Web Developer & UX Designer</h1>
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
