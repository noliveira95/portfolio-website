import React from "react";
import styles from "./Skills.module.css";
import SkillCard from "./SkillCard";

function Skills() {
  return (
    <div id={styles.skills}>
      <h2>My Skills</h2>
      <div className={styles["skills-container"]}>
        <SkillCard />
        <SkillCard />
        <SkillCard />
      </div>
    </div>
  );
}

export default Skills;
