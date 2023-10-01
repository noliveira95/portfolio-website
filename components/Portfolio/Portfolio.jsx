import React from "react";
import styles from "./Portfolio.module.css";
import Image from "next/image";

function Portfolio() {
  return (
    <section id={styles.portfolio}>
      <h2>Portfolio</h2>
      <div className={styles["projects-slider"]}>
        {/* <Image
          className={styles["project-image"]}
          src="/images/Project1.png"
          alt="Project 1"
          width={300}
          height={300}
        />
        <Image
          className={styles["project-image"]}
          src="/images/Project2.png"
          alt="Project 2"
          width={300}
          height={300}
        />
        <Image
          className={styles["project-image"]}
          src="/images/Project3.png"
          alt="Project 3"
          width={300}
          height={300}
        /> */}
      </div>
    </section>
  );
}

export default Portfolio;
