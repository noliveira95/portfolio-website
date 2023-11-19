import React from "react";
import styles from "./Hero.module.css";
import Button from "../shared/Button/Button";

function Hero() {
  return (
    <>
      <section id={styles.intro}>
        <div className={styles["intro-content"]}>
          <h3>Hello, I&apos;m</h3>
          <h1>
            <span className={styles["intro-name"]}>Nicholas Oliveira</span>
          </h1>
          <h1>Web Developer & UX Designer</h1>
          <p>
            Creating outstanding digital experiences for users, businesses, and
            beyond.
          </p>
          <Button onClick={null} btnText={"Download"} />
        </div>
      </section>
    </>
  );
}

export default Hero;
