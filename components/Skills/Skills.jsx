"use client";

import React from "react";
import styles from "./Skills.module.css";
import SkillCard from "./SkillCard";
// import { useMediaQuery, useIsClient } from "@uidotdev/usehooks";

function Skills() {
  return (
    <div id="my-skills">
      <section id={styles.skills}>
        <h2 className={styles["skills-heading"]}>My Skills</h2>
        <div className={styles["skills-container"]}>
          <SkillCard
            imageSrc={"/images/icons/code_development_icon.png"}
            imageAlt={"Developer Icon"}
            title={"Front-end Development"}
            description={
              "I have 2+ years of experience in front-end development. My portfolio includes websites, web apps, and mobile applications."
            }
            subtitle={"Tools that I work with:"}
            description2={
              "HTML/CSS, JavaScript, TypeScript, Dart, React, Next.js, Flutter, Webflow, WordPress"
            }
          />
          <SkillCard
            imageSrc={"/images/icons/eye_icon.png"}
            imageAlt={"Eye Icon"}
            title={"UX/UI Design"}
            description={
              "From sketches and wireframes to high-fidelity designs and prototypes. I apply design thinking methodologies to create user-centered products."
            }
            subtitle={"Things I design:"}
            description2={
              "Websites, Web Apps, Mobile Apps, Design Systems, Information Architecture"
            }
          />
        </div>
      </section>
    </div>
  );
}

export default Skills;
