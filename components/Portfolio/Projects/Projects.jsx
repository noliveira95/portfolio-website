"use client";

import React, { useEffect } from "react";
import styles from "../Portfolio.module.css";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeftIcon, ChevronRightIcon } from "@radix-ui/react-icons";
import validate from "../Projects/validate";

function Projects({
  images,
  currentIndex,
  handleNext,
  handlePrevious,
  handleDotClick,
  data,
}) {
  async function validateData() {
    try {
      const data = await validate(data);
      console.log(data);
    } catch (err) {
      console.log("Error: Invalid data " + `${err}`);
    }
  }

  useEffect(() => {
    validateData();
  }, [data]);
  return (
    <div className={styles["project-carousel"]}>
      <div className={styles["project-image-with-btns"]}>
        <div className={styles.left} onClick={handlePrevious}>
          <ChevronLeftIcon width={50} height={80} />
        </div>
        <Image
          className={styles["project-image"]}
          key={currentIndex}
          src={images[currentIndex]}
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
