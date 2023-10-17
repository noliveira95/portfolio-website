"use client";

import React from "react";
import styles from "../Portfolio.module.css";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeftIcon, ChevronRightIcon } from "@radix-ui/react-icons";

function Projects({
  currentIndex,
  handleNext,
  handlePrevious,
  handleDotClick,
  data,
}) {
  return (
    <div className={styles["project-carousel"]}>
      <div className={styles["project-image-with-btns"]}>
        <div className={styles.left} onClick={handlePrevious}>
          <ChevronLeftIcon width={50} height={80} />
        </div>
        <Image
          className={styles["project-image"]}
          key={currentIndex}
          src={data.projects[currentIndex].featured_image}
          alt="Project"
          width={600}
          height={400}
        ></Image>
        <div className={styles.right} onClick={handleNext}>
          <ChevronRightIcon width={50} height={80} />
        </div>
      </div>

      <div className={styles["project-title"]}>
        <h2>{data.projects[currentIndex].title}</h2>
      </div>
      <div className={styles["project-description"]}>
        <p>{data.projects[currentIndex].description}</p>
      </div>

      <div className={styles.indicator}>
        {data.projects.map((_, index) => (
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
  );
}

export default Projects;
