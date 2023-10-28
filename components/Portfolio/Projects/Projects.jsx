"use client";

import React from "react";
import styles from "../Portfolio.module.css";
import { motion, AnimatePresence } from "framer-motion";
import CustomCard from "@/components/shared/Card/Card";

function Projects({ currentIndex, data, handleDotClick }) {
  return (
    <>
      <div className={styles["project-items"]}>
        <CustomCard
          cardImage={
            data.length > 0
              ? data[currentIndex].client_logo
              : "/Olive256x256.png"
          }
          cardTitle={data.length > 0 ? data[currentIndex].title : "Title"}
          cardText={
            data.length > 0 ? data[currentIndex].description : "Description"
          }
          cardCTA={data.length > 0 ? data[currentIndex].client_url : "#"}
          cardCTAText={"Visit Site"}
        />
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
    </>
  );
}

export default Projects;
