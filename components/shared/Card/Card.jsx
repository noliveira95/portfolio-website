import Image from "next/image";
import React from "react";
import styles from "./Card.module.css";
import Button from "../Button/Button";

function CustomCard({ cardImage, cardTitle, cardText, cardCTA, cardCTAText }) {
  return (
    <div className={styles["card"]}>
      <div className={styles["card-image-wrapper"]}>
        <Image
          src={cardImage}
          alt="skill"
          width={160}
          height={140}
          className={styles["card-image"]}
        />
      </div>
      <div className={styles["card-content"]}>
        <h3 className={styles["card-title"]}>{cardTitle}</h3>
        <p className={styles["card-description"]}>{cardText}</p>
        {cardCTA && (
          <div className={styles["card-cta"]}>
            <Button
              isLinkButton={true}
              btnLink={cardCTA}
              btnText={cardCTAText}
              className={styles["card-button"]}
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default CustomCard;
