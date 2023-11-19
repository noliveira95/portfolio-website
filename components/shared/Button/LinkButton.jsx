import React from "react";
import styles from "./Button.module.css";
import Link from "next/link";

function LinkButton({ btnText, btnIcon, btnLink }) {
  return (
    <>
      <Link className={styles["btn"]} type="button" href={btnLink}>
        {btnIcon}
        {btnText}
      </Link>
    </>
  );
}

export default LinkButton;
