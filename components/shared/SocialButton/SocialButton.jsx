import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import styles from './SocialButton.module.css';

function SocialButton(props) {
  const { link, icon, ariaLabel } = props;
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      title={ariaLabel}
      aria-label={ariaLabel}
    >
      <FontAwesomeIcon
        icon={icon}
        className={styles['social-icon']}
        size="xl"
      />
    </a>
  );
}

export default SocialButton;
