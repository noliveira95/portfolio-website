import React from "react";
import styles from "./Button.module.css";

function Button({ btnText, btnIcon, onClick }) {
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
