import React from "react";
import styles from "./Footer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faBehance,
} from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";

function Footer() {
  return (
    <div id="footer" className={styles.footer}>
      <div className={styles["footer-content"]}>
        <div className={styles["footer-text"]}>
          <p>
            &copy; 2023 Nicholas J. Oliveira. All rights reserved. Designed and
            built by{" "}
            <span className={styles["footer-name"]}>Nicholas Oliveira.</span>
          </p>
        </div>
        <div className={styles["footer-social"]}>
          <a
            href="https://www.linkedin.com/in/nick-olive/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={faLinkedin}
              className={styles["social-icon"]}
              size="xl"
            />
          </a>{" "}
          <a
            href="https://www.github.com/noliveira95"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={faGithub}
              className={styles["social-icon"]}
              size="xl"
            />
          </a>
          <a
            href="https://behance.net/nicholaoliveir10"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={faBehance}
              className={styles["social-icon"]}
              size="xl"
            />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
