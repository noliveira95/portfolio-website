"use client";

import React, { useEffect, useState } from "react";
import styles from "./Portfolio.module.css";
import Projects from "./Projects/Projects";
import data from "./Projects/projects.json";
import validate from "./Projects/validate";

function Portfolio() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [validatedData, setValidatedData] = useState(null);

  async function validateData() {
    try {
      const valid = await validate(data);
      setValidatedData(valid);
    } catch {
      console.log("error");
    }
  }

  useEffect(() => {
    validateData();
  }, [validatedData]);

  const handleNext = () => {
    if (currentIndex === data.projects.length - 1) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex(currentIndex + 1);
    }
    console.log(currentIndex);
  };

  const handlePrevious = () => {
    if (currentIndex < 0) {
      setCurrentIndex(data.projects.length - 1);
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
        currentIndex={currentIndex}
        handleNext={handleNext}
        handlePrevious={handlePrevious}
        handleDotClick={handleDotClick}
        data={data}
      />
    </section>
  );
}

export default Portfolio;
