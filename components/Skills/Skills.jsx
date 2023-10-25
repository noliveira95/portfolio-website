import React from "react";
import styles from "./Skills.module.css";
import Image from "next/image";

function Skills() {
  return (
    <div id={styles.skills}>
      <h2 className={styles["skills-title"]}>My Skills</h2>
      <div className={styles["skills-container"]}>
        <div className={styles["skill-section"]}>
          <Image
            src="/images/icons/code_development_icon.png"
            alt="Developer icon"
            width={100}
            height={100}
          />
          <h3>Front-end Development</h3>
          <p>
            I have 2+ years of experience in front-end web development. My
            portfolio includes websites, web apps, and mobile applications.
          </p>
          <div className={styles["tools-list-wrapper"]}>
            <h4 className={styles["skills-subheading"]}>
              Languages and Frameworks:
            </h4>
            <p>
              HTML/CSS, JavaScript, TypeScript, Dart, React, Next.js, Flutter
            </p>
          </div>
        </div>
        <div className={styles["skill-section"]}>
          <Image
            src="/images/icons/eye_icon.png"
            alt="Developer icon"
            width={100}
            height={100}
          />
          <h3>UX/UI Design</h3>
          <p>
            My experience includes creating wireframes, mockups and prototypes,
            as well as conducting user research utilizing methods such as
            personas and user journey maps.
          </p>
          <div className={styles["tools-list-wrapper"]}>
            <h4 className={styles["skills-subheading"]}>Things I design:</h4>
            <p>
              Websites, Web Apps, Mobile Apps, Design Systems, Information
              Architecture, Logos
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
