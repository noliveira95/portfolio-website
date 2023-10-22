"use client";

import React from "react";
import styles from "../Portfolio.module.css";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import CustomCard from "@/components/shared/Card/Card";

function Projects({ currentIndex, data, handleDotClick }) {
  return (
    <>
      <div className={styles["project-items"]}>
        {/* <Image
          className={styles["project-image"]}
          key={currentIndex}
          src={
            data.length > 0
              ? data[currentIndex].featured_image
              : "/osman-talha-dikyar-NMCABEhN0RE-unsplash.jpg"
          }
          alt="Project"
          width={700}
          height={400}
        ></Image> */}
        {/* <div className={styles["client-logo-wrapper"]}>
          <Image
            className={styles["client-logo"]}
            src={
              data.length > 0
                ? data[currentIndex].client_logo
                : "/osman-talha-dikyar-NMCABEhN0RE-unsplash.jpg"
            }
            alt="Client Logo"
            width={200}
            height={200}
          ></Image>
        </div>
        <div className={styles["project-description"]}>
          <p>
            {data.length > 0 ? data[currentIndex].description : "Description"}
          </p>
        </div> */}
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

        {/* <div className={styles["project-title"]}>
          <h2>{data.length > 0 ? data[currentIndex].title : "Title"}</h2>
        </div> */}
      </div>
    </>
  );
}

export default Projects;
