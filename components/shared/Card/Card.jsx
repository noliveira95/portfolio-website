import Image from "next/image";
import React from "react";
import styles from "./Card.module.css";

function CustomCard({ cardImage, cardTitle, cardText }) {
  return (
    <div className={styles["card"]}>
      <Image
        src={cardImage}
        alt="skill"
        width={200}
        height={200}
        className={styles["card-image"]}
      />
      <div className={styles["card-content"]}>
        <h3 className={styles["card-title"]}>{cardTitle}</h3>
        <p className={styles["card-description"]}>{cardText}</p>
      </div>
    </div>
  );
}

export default CustomCard;
