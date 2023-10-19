"use client";

import React from "react";
import styles from "../Portfolio.module.css";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

function Projects({ currentIndex, data, handleDotClick }) {
  return (
    <>
      <div className={styles["project-items"]}>
        <Image
          className={styles["project-image"]}
          key={currentIndex}
          src={
            data.length > 0
              ? data[currentIndex].featured_image
              : "/osman-talha-dikyar-NMCABEhN0RE-unsplash.jpg"
          }
          alt="Project"
          width={600}
          height={400}
        ></Image>
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

        <div className={styles["project-title"]}>
          <h2>{data.length > 0 ? data[currentIndex].title : "Title"}</h2>
        </div>
        <div className={styles["project-description"]}>
          <p>
            {data.length > 0 ? data[currentIndex].description : "Description"}
          </p>
        </div>
      </div>
    </>
  );
}

export default Projects;
