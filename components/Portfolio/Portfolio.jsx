import React from "react";
import styles from "./Portfolio.module.css";
import Projects from "./Projects";

function Portfolio() {
  const images = [
    "/osman-talha-dikyar-NMCABEhN0RE-unsplash.jpg",
    "/osman-talha-dikyar-NMCABEhN0RE-unsplash.jpg",
    "/osman-talha-dikyar-NMCABEhN0RE-unsplash.jpg",
  ];
  return (
    <section id={styles.portfolio}>
      <h2>Portfolio</h2>
      <Projects images={images} />
    </section>
  );
}

export default Portfolio;
