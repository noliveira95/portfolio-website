import React from "react";
import styles from "./About.module.css";
import Image from "next/image";
import Link from "next/link";
import MyPic from "../../public/images/SelfieGrayBG.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";

function About() {
  return (
    <div id="who-am-i">
      <section id={styles.about}>
        <h2>Who Am I?</h2>
        <div className={styles["about-content"]}>
          <Image
            src={MyPic}
            alt="Picture of Nicholas"
            width={200}
            height={200}
          />
          <p className={styles["about-paragraph"]}>
            My name is Nicholas Oliveira. I&apos;m a front-end web developer and
            UI/UX designer located in Las Vegas, NV. Technologies that I
            commonly use in my work include HTML/CSS, JavaScript, TypeScript,
            React, Webflow, and WordPress. I also utilize Figma, FigJam, and
            Adobe for design work such as creating mockups, prototyping, and
            conducting user research. I have experience in every stage of the{" "}
            <Link href="https://aws.amazon.com/what-is/sdlc/">
              software development lifecycle.
            </Link>
          </p>
        </div>
        <Link href="/#my-skills" className={styles.cta}>
          See My Experience
          <FontAwesomeIcon
            icon={faArrowDown}
            size="sm"
            className={styles["cta-icon"]}
          />
        </Link>
      </section>
    </div>
  );
}

export default About;
