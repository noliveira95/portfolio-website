import Image from "next/image";
import React from "react";
import styles from "./Card.module.css";

function CustomCard({ cardImage, cardTitle, cardText }) {
  return (
    <div className={styles["card"]}>
      <Image
        src={cardImage}
        alt="skill"
        width={60}
        height={60}
        className={styles["card-image"]}
      />
      <div className={styles["card-text"]}>
        <h3>{cardTitle}</h3>
        <p>{cardText}</p>
      </div>
    </div>
  );
}

export default CustomCard;
