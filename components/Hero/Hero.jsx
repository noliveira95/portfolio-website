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
          <h1>Front-end Developer & UX/UI Designer</h1>
          <p className={styles["intro-paragraph"]}>
            Creating outstanding digital experiences for users, businesses, and
            beyond.
          </p>
          <Button
            isLinkButton={true}
            btnText="Learn More"
            btnLink={"/#who-am-i"}
          />
        </div>
      </section>
    </>
  );
}

export default Hero;
