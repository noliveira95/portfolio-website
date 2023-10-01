"use client";

import React, { useRef } from "react";
import styles from "./Portfolio.module.css";
import Image from "next/image";
import { useScroll } from "framer-motion";

function Projects() {
  const carouselRef = useRef(null);
  const { scrollX } = useScroll({
    container: carouselRef,
  });
  return (
    <ul className={styles["project-slider"]} ref={carouselRef}>
      <li>
        <Image
          className={styles["project-image"]}
          src="/osman-talha-dikyar-NMCABEhN0RE-unsplash.jpg"
          alt="Project 1"
          width={300}
          height={300}
        />
      </li>
      <li>
        <Image
          className={styles["project-image"]}
          src="/osman-talha-dikyar-NMCABEhN0RE-unsplash.jpg"
          alt="Project 2"
          width={300}
          height={300}
        />
      </li>
      <li>
        <Image
          className={styles["project-image"]}
          src="/osman-talha-dikyar-NMCABEhN0RE-unsplash.jpg"
          alt="Project 3"
          width={300}
          height={300}
        />
      </li>
      <li>
        <Image
          className={styles["project-image"]}
          src="/osman-talha-dikyar-NMCABEhN0RE-unsplash.jpg"
          alt="Project 4"
          width={300}
          height={300}
        />
      </li>
      <li>
        <Image
          className={styles["project-image"]}
          src="/osman-talha-dikyar-NMCABEhN0RE-unsplash.jpg"
          alt="Project 5"
          width={300}
          height={300}
        />
      </li>
    </ul>
  );
}

export default Projects;
