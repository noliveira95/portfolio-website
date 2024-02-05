import React from "react";
import styles from "./Footer.module.css";
import SocialButtonRow from "../shared/SocialButtonRow/SocialButtonRow";

function Footer() {
  return (
    <div id="footer" className={styles.footer}>
      <div className={styles["footer-content"]}>
        <div className={styles["footer-text"]}>
          <p>&copy; 2024 Nicholas J. Oliveira. All rights reserved.</p>
          <p className={styles["footer-span"]}>
            <a
              href="mailto:contact@nickolive.com"
              target="_blank"
              title="Email"
            >
              contact@nickolive.com
            </a>
          </p>
        </div>
        <SocialButtonRow />
      </div>
    </div>
  );
}

export default Footer;
