"use client";

import React from "react";
import styles from "../Portfolio.module.css";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

function Projects({ currentIndex, title, description, image }) {
  return (
    <>
      <div className={styles["project-items"]}>
        <Image
          className={styles["project-image"]}
          key={currentIndex}
          src={image}
          alt="Project"
          width={600}
          height={400}
        ></Image>

        <div className={styles["project-title"]}>
          <h2>{title}</h2>
        </div>
        <div className={styles["project-description"]}>
          <p>{description}</p>
        </div>
      </div>
    </>
  );
}

export default Projects;
