import React from "react";
import styles from "./Button.module.css";
import Link from "next/link";

function Button({
  btnText,
  btnIcon,
  btnLink,
  onClick,
  isLinkButton = false,
  isActive = true,
}) {
  if (isLinkButton) {
    return (
      <>
        <Link
          className={isActive ? styles.btn : `${styles.btn} ${styles.disabled}`}
          type="button"
          href={btnLink}
        >
          {btnIcon}
          {btnText}
        </Link>
      </>
    );
  }
  return (
    <>
      <button
        className={isActive ? styles.btn : `${styles.btn} ${styles.disabled}`}
        type="button"
        onClick={onClick}
      >
        {btnIcon}
        {btnText}
      </button>
    </>
  );
}

export default Button;
