import React from "react";
import styles from "./Skills.module.css";

function Skills() {
  return (
    <div id={styles.skills}>
      <h2 className={styles["skills-title"]}>My Skills</h2>
      <div className={styles["skills-container"]}>
        <div className={styles["skill-section"]}>
          <h3>Front-end Development</h3>
          <p>
            I have 2+ years of experience in front-end web development. My
            portfolio includes websites, web apps, and mobile applications.
          </p>
          <div className={styles["tools-list-wrapper"]}>
            <h4>Tools:</h4>
            <ul>
              <li>Figma</li>
              <li>Figjam</li>
              <li>Adobe Illustrator</li>
              <li>Adobe Photoshop</li>
            </ul>
          </div>
        </div>
        <div className={styles["skill-section"]}>
          <h3>UX/UI Design</h3>
          <p>
            My experience includes creating wireframes, mockups and prototypes,
            as well as conducting user research utilizing methods such as
            personas and user journey maps.
          </p>
          <div className={styles["tools-list-wrapper"]}>
            <h4>Tools:</h4>
            <ul>
              <li>Figma</li>
              <li>Figjam</li>
              <li>Adobe Illustrator</li>
              <li>Adobe Photoshop</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
