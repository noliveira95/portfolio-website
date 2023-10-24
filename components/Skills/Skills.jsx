import React from "react";
import styles from "./Skills.module.css";

function Skills() {
  return (
    <div id={styles.skills}>
      <h2 className={styles["skills-title"]}>My Skills</h2>
      <div className={styles["skills-container"]}>
        <div className={styles["left-section"]}>
          <h3>Front-end Development</h3>
        </div>
        <div className={styles["right-section"]}>
          <h3>UX/UI Design</h3>
        </div>
      </div>
    </div>
  );
}

export default Skills;
