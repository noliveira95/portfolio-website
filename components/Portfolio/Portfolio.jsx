import React from "react";
import styles from "./Portfolio.module.css";
import Projects from "./Projects";

function Portfolio() {
  return (
    <section id={styles.portfolio}>
      <h2>Portfolio</h2>
      <Projects />
    </section>
  );
}

export default Portfolio;
