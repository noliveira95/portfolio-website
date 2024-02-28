"use client";

import React from "react";
import styles from "../Portfolio.module.css";
import CustomCard from "@/components/shared/Card/Card";
import { ChevronLeftIcon, ChevronRightIcon } from "@radix-ui/react-icons";

function Projects({
  currentIndex,
  data,
  handleDotClick,
  handlePrevious,
  handleNext,
}) {
  const isValid =
    data.length > 0 && currentIndex >= 0 && currentIndex < data.length;

  return (
    <>
      <div className={styles["project-items"]}>
        <CustomCard
          cardImage={isValid ? data[currentIndex].logo : "/Olive256x256.png"}
          cardTitle={isValid ? data[currentIndex].title : "Title"}
          cardText={isValid ? data[currentIndex].description : "Description"}
          cardCTA={isValid ? data[currentIndex].url : "#"}
          cardCTAText={
            isValid
              ? data[currentIndex].is_active
                ? data[currentIndex].type === "design"
                  ? "View on Figma"
                  : "View on GitHub"
                : "Coming Soon"
              : "Coming Soon"
          }
          isActive={isValid ? data[currentIndex].is_active : true}
        />
        <div className={styles["project-controls"]}>
          <button className={styles.left} onClick={handlePrevious}>
            <ChevronLeftIcon width={50} height={80} />
          </button>
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
          <button className={styles.right} onClick={handleNext}>
            <ChevronRightIcon width={50} height={80} />
          </button>
        </div>
      </div>
    </>
  );
}

export default Projects;
