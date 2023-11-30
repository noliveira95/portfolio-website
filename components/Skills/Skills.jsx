"use client";

import React from "react";
import styles from "./Skills.module.css";
import Image from "next/image";
// import { useMediaQuery, useIsClient } from "@uidotdev/usehooks";

function Skills() {
  return (
    <section id={styles.skills}>
      <h2 className={styles["skills-title"]}>My Skills</h2>
      <div className={styles["skills-container"]}>
        <div className={styles["skill-section"]}>
          <Image
            src="/images/icons/code_development_icon.png"
            alt="Developer icon"
            width={80}
            height={80}
          />
          <h3>Front-end Development</h3>
          <p>
            I have 2+ years of experience in front-end web development. My
            portfolio includes websites, web apps, and mobile applications.
          </p>
          <div className={styles["tools-list-wrapper"]}>
            <h4 className={styles["skills-subheading"]}>
              Tools that I work with:
            </h4>
            <p>
              HTML/CSS, JavaScript, TypeScript, Dart, React, Next.js, Flutter,
              Webflow
            </p>
          </div>
        </div>
        <div className={styles["skill-section"]}>
          <Image
            src="/images/icons/eye_icon.png"
            alt="Developer icon"
            width={80}
            height={80}
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
    </section>
  );
}

export default Skills;
