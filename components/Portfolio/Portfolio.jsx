"use client";

import React, { useState, useEffect } from "react";
import styles from "./Portfolio.module.css";
import Projects from "./Projects/Projects";
import data from "./Projects/projects.json";
import validateData from "./Projects/validate";
import { set } from "react-hook-form";

function Portfolio() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    const valid = validateData(data);
    setIsValid(valid);
  }, []);

  const handleNext = () => {
    if (currentIndex === data.length - 1) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (currentIndex === 0) {
      setCurrentIndex(data.length - 1);
    } else {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  if (!isValid) {
    console.log("Data is not valid");
  } else {
    console.log("Data is valid");
  }

  return (
    <div id="my-work">
      <section id={styles.portfolio}>
        <h2 className={styles["portfolio-heading"]}>My Work</h2>
        <div className={styles["project-carousel"]}>
          <div className={styles["project-container"]}>
            <Projects
              currentIndex={currentIndex}
              data={isValid ? data : []}
              handleDotClick={handleDotClick}
              handlePrevious={handlePrevious}
              handleNext={handleNext}
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Portfolio;
