import React from "react";
import styles from "./Button.module.css";
import { DownloadIcon } from "@radix-ui/react-icons";
import Link from "next/link";

function Button({ btnText, btnLink, btnIcon }) {
  return (
    <>
      <Link type="button" href={btnLink}>
        <button className={styles["btn"]}>
          {btnIcon}
          {btnText}
        </button>
      </Link>
    </>
  );
}

export default Button;
