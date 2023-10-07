"use client";

import React, { useState } from "react";
import styles from "./Portfolio.module.css";
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
    <div className="project-carousel">
      <Image
        key={currentIndex}
        src={images[currentIndex]}
        alt="Project"
        width={300}
        height={200}
      ></Image>
      <div className="slide-direction">
        <div className="left" onClick={handlePrevious}>
          <ChevronLeftIcon />
        </div>
        <div className="right" onClick={handleNext}>
          <ChevronRightIcon />
        </div>
      </div>
      <div className="indicator">
        {images.map((_, index) => (
          <div
            key={index}
            className={`dot ${index === currentIndex ? "active" : ""}`}
            onClick={() => handleDotClick(index)}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
