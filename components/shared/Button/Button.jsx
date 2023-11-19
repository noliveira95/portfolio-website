import React from "react";
import styles from "./Button.module.css";
import { DownloadIcon } from "@radix-ui/react-icons";
// import Link from "next/link";

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
