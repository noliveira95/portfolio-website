"use client";

import React from "react";
import styles from "../Portfolio.module.css";
import { motion, AnimatePresence } from "framer-motion";
import CustomCard from "@/components/shared/Card/Card";
import { ChevronLeftIcon, ChevronRightIcon } from "@radix-ui/react-icons";

function Projects({
  currentIndex,
  data,
  handleDotClick,
  handlePrevious,
  handleNext,
}) {
  return (
    <>
      <div className={styles["project-items"]}>
        <CustomCard
          cardImage={
            data.length > 0 ? data[currentIndex].logo : "/Olive256x256.png"
          }
          cardTitle={data.length > 0 ? data[currentIndex].title : "Title"}
          cardText={
            data.length > 0 ? data[currentIndex].description : "Description"
          }
          cardCTA={data.length > 0 ? data[currentIndex].url : "#"}
          cardCTAText={
            data.length > 0
              ? data[currentIndex].is_active
                ? data[currentIndex].type === "design"
                  ? "View on Figma"
                  : "View on GitHub"
                : "Coming Soon"
              : "Coming Soon"
          }
          isActive={data.length > 0 ? data[currentIndex].is_active : true}
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
