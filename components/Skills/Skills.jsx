import React from "react";
import styles from "./Skills.module.css";
import CustomCard from "../shared/Card/Card";

function Skills() {
  return (
    <div id={styles.skills}>
      <h2 className={styles["skills-title"]}>My Skills</h2>
      <div className={styles["skills-container"]}>
        <CustomCard
          cardImage={"/Olive256x256.png"}
          cardTitle={"Skill 1"}
          cardText={"Skill Text 1"}
        />
        <CustomCard
          cardImage={"/Olive256x256.png"}
          cardTitle={"Skill 2"}
          cardText={"Skill Text 2"}
        />
        <CustomCard
          cardImage={"/Olive256x256.png"}
          cardTitle={"Skill 3"}
          cardText={"Skill Text 3"}
        />
      </div>
    </div>
  );
}

export default Skills;
