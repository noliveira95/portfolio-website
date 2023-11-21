import React from "react";
import styles from "./Button.module.css";
import Link from "next/link";

function Button({ btnText, btnIcon, btnLink, onClick, isLinkButton = false }) {
  if (isLinkButton) {
    return (
      <>
        <Link className={styles["btn"]} type="button" href={btnLink}>
          {btnIcon}
          {btnText}
        </Link>
      </>
    );
  }
  return (
    <>
      <button className={styles["btn"]} type="button" onClick={onClick}>
        {btnIcon}
        {btnText}
      </button>
    </>
  );
}

export default Button;
