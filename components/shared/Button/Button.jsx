import React from "react";
import styles from "./Button.module.css";
import { DownloadIcon } from "@radix-ui/react-icons";

function Button() {
  return (
    <>
      <button className={styles["btn"]}>
        <DownloadIcon className={styles["btn-icon"]} color="white" />
        Download CV
      </button>
    </>
  );
}

export default Button;
