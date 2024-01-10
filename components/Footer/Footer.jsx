import React from "react";
import styles from "./Footer.module.css";
import SocialButtonRow from "../shared/SocialButtonRow/SocialButtonRow";

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
        <SocialButtonRow />
      </div>
    </div>
  );
}

export default Footer;
