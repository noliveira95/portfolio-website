"use client";

import React, { useState } from "react";
import styles from "./Portfolio.module.css";
import Projects from "./Projects/Projects";
import data from "./Projects/projects.json";
import { ChevronLeftIcon, ChevronRightIcon } from "@radix-ui/react-icons";

function Portfolio() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    if (currentIndex === data.length - 1) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex(currentIndex + 1);
    }
    console.log(currentIndex);
  };

  const handlePrevious = () => {
    if (currentIndex < 0) {
      setCurrentIndex(data.length - 1);
    } else {
      setCurrentIndex(currentIndex - 1);
    }
    console.log(currentIndex);
  };

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <>
      <section id={styles.portfolio}>
        <h2>Portfolio</h2>

        <div className={styles["project-carousel"]}>
          <div className={styles["project-with-btns"]}>
            <div className={styles.left} onClick={handlePrevious}>
              <ChevronLeftIcon width={50} height={80} />
            </div>
            <div className={styles["project-container"]}>
              <Projects
                currentIndex={currentIndex}
                title={data[currentIndex].title}
                description={data[currentIndex].description}
                image={data[currentIndex].featured_image}
              />
            </div>
            <div className={styles.right} onClick={handleNext}>
              <ChevronRightIcon width={50} height={80} />
            </div>
          </div>
          <div className={styles.indicator}>
            {data.map((_, index) => (
              <div
                key={index}
                className={`${styles.dot} ${
                  index === currentIndex ? styles.active : ""
                }`}
                onClick={() => handleDotClick(index)}
              ></div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Portfolio;
