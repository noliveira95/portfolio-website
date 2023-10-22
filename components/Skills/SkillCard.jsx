import Image from "next/image";
import React from "react";
import styles from "./Skills.module.css";

function CustomCard({ imageSrc, skillName, skillText }) {
  return (
    <div className={styles["skill-card"]}>
      <Image
        src={imageSrc}
        alt="skill"
        width={60}
        height={60}
        className={styles["skill-image"]}
      />
      <div className={styles["skill-text"]}>
        <h3>{skillName}</h3>
        <p>{skillText}</p>
      </div>
    </div>
  );
}

export default CustomCard;
