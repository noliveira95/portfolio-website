import React from "react";
import styles from "./About.module.css";
import Image from "next/image";
import Link from "next/link";
import MyPic from "../../public/images/AISelfieGrayBG.jpg";

function About() {
  return (
    <section id={styles.about}>
      <h2>Who Am I?</h2>
      <div className={styles["about-content"]}>
        <Image src={MyPic} alt="Picture of Nicholas" width={240} height={240} />
        <p className={styles["about-paragraph"]}>
          My name is Nicholas Oliveira. I&apos;m a front-end web developer and
          UI/UX designer located in Las Vegas, NV. Technologies that I commonly
          use in my work include HTML/CSS, JavaScript, TypeScript, React,
          Webflow, and WordPress. I also utilize Figma, FigJam, and Adobe for
          design work such as creating mockups, prototyping, and conducting user
          research. I have experience in every stage of the{" "}
          <Link href="https://aws.amazon.com/what-is/sdlc/">
            software development lifecycle.
          </Link>
        </p>
      </div>
    </section>
  );
}

export default About;
