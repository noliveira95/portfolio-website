"use client";

import React, { useState } from "react";
import styles from "./Portfolio.module.css";
import Projects from "./Projects";

const images = [
  "https://images.pexels.com/photos/169647/pexels-photo-169647.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/313782/pexels-photo-313782.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/773471/pexels-photo-773471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/672532/pexels-photo-672532.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/632522/pexels-photo-632522.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/777059/pexels-photo-777059.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
];

function Portfolio() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = (prevIndex) => {
    if (prevIndex === currentIndex) return;
    setCurrentIndex(currentIndex + 1);
    console.log(currentIndex);
  };

  const handlePrevious = (prevIndex) => {
    if (prevIndex === currentIndex) return;
    setCurrentIndex(currentIndex - 1);
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
