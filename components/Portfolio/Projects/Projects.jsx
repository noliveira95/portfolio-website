"use client";

import React from "react";
import styles from "../Portfolio.module.css";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeftIcon, ChevronRightIcon } from "@radix-ui/react-icons";

function Projects({
  images,
  currentIndex,
  handleNext,
  handlePrevious,
  handleDotClick,
}) {
  return (
    <div className={styles["project-carousel"]}>
      <Image
        className={styles["project-image"]}
        key={currentIndex}
        src={images[currentIndex]}
        alt="Project"
        width={600}
        height={400}
      ></Image>
      <div className={styles["slide-direction"]}>
        <div className={styles.left} onClick={handlePrevious}>
          <ChevronLeftIcon />
        </div>
        <div className={styles.right} onClick={handleNext}>
          <ChevronRightIcon />
        </div>
      </div>
      <div className={styles.indicator}>
        {images.map((_, index) => (
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
