import React from "react";
import { DownloadIcon } from "@radix-ui/react-icons";
import styles from "./Button.module.css";

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
