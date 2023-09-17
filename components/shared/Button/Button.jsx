import React from "react";
import styles from "./Button.module.css";
import { DownloadIcon } from "@radix-ui/react-icons";
import Link from "next/link";

function Button() {
  return (
    <>
      <Link type="button" href="/">
        <button className={styles["btn"]}>
          <DownloadIcon className={styles["btn-icon"]} color="white" />
          Download CV
        </button>
      </Link>
    </>
  );
}

export default Button;
