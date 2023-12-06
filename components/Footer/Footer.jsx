import React from "react";
import styles from "./Footer.module.css";

function Footer() {
  return (
    <div id="footer" className={styles.footer}>
      <div className={styles["footer-content"]}>
        <div className={styles["footer-text"]}>
          <p>
            &copy; 2023 Nick Olive. All rights reserved.{" "}
            <span className={styles["footer-text-span"]}>
              Designed and built by{" "}
              <span className={styles["footer-name"]}>Nicholas Oliveira.</span>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
