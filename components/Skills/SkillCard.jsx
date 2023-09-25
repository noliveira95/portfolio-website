import Image from "next/image";
import React from "react";
import styles from "./Skills.module.css";

function SkillCard() {
  return (
    <div className={styles["skill-card"]}>
      <Image
        src="/Olive256x256.png"
        alt="skill"
        width={60}
        height={60}
        className={styles["skill-image"]}
      />
      <div className={styles["skill-text"]}>
        <h3>Skill Name</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
          quos.
        </p>
      </div>
    </div>
  );
}

export default SkillCard;
