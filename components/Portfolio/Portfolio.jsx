"use client";

import React, { useState } from "react";
import styles from "./Portfolio.module.css";
import Projects from "./Projects";

const images = [
  "/osman-talha-dikyar-NMCABEhN0RE-unsplash.jpg",
  "/ulysse-pointcheval--j6LLsAehUo-unsplash.jpg",
];

function Portfolio() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    if (currentIndex === images.length - 1) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex(currentIndex + 1);
    }
    console.log(currentIndex);
  };

  const handlePrevious = () => {
    if (currentIndex < 0) {
      setCurrentIndex(images.length - 1);
    } else {
      setCurrentIndex(currentIndex - 1);
    }
    console.log(currentIndex);
  };

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <section id={styles.portfolio}>
      <h2>Portfolio</h2>
      <Projects
        images={images}
        currentIndex={currentIndex}
        handleNext={handleNext}
        handlePrevious={handlePrevious}
        handleDotClick={handleDotClick}
      />
    </section>
  );
}

export default Portfolio;
