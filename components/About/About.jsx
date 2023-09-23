import React from "react";
import styles from "./About.module.css";
import Image from "next/image";

function About() {
  return (
    <section id={styles.about}>
      <div className={styles["about-content"]}>
        <h2>Who Am I?</h2>
        <div className="about-grid">
          <Image
            src="/MyPic.png"
            alt="Picture of Nicholas"
            width={240}
            height={240}
          />
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque,
            deserunt ut sed explicabo perspiciatis minima similique non qui
            veniam repellendus molestiae esse nobis voluptatibus debitis
            deleniti ipsam id, perferendis vel!
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
