import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styles from "./SocialButton.module.css";

function SocialButton(props) {
  const { link, icon, title, ariaLabel } = props;
  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <FontAwesomeIcon
        icon={icon}
        className={styles["social-icon"]}
        size="xl"
        title={title}
        aria-label={ariaLabel}
      />
    </a>
  );
}

export default SocialButton;
