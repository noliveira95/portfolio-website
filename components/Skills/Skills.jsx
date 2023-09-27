import React from "react";
import styles from "./Skills.module.css";
import SkillCard from "./SkillCard";

function Skills() {
  return (
    <div id={styles.skills}>
      <h2 className={styles["skills-title"]}>My Skills</h2>
      <div className={styles["skills-container"]}>
        <SkillCard
          imageSrc={"/Olive256x256.png"}
          skillName={"Skill 1"}
          skillText={"Skill Text 1"}
        />
        <SkillCard
          imageSrc={"/Olive256x256.png"}
          skillName={"Skill 2"}
          skillText={"Skill Text 2"}
        />
        <SkillCard
          imageSrc={"/Olive256x256.png"}
          skillName={"Skill 3"}
          skillText={"Skill Text 3"}
        />
      </div>
    </div>
  );
}

export default Skills;
