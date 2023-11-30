import Image from "next/image";
import React from "react";
import styles from "./Skills.module.css";

function SkillCard({
  title,
  description,
  subtitle,
  description2,
  imageSrc,
  imageAlt,
}) {
  return (
    <div className={styles["skill-section"]}>
      <Image src={imageSrc} alt={imageAlt} width={80} height={80} />
      <h3>{title}</h3>
      <p>{description}</p>
      <div className={styles["tools-list-wrapper"]}>
        <h4 className={styles["skills-subheading"]}>{subtitle}</h4>
        <p>{description2}</p>
      </div>
    </div>
  );
}

export default SkillCard;
