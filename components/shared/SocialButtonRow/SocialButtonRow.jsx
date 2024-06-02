import React from 'react';
import SocialButton from '../SocialButton/SocialButton';
import styles from './SocialButtonRow.module.css';
import {
  faGithub,
  faLinkedin,
  faDribbble,
} from '@fortawesome/free-brands-svg-icons';

function SocialButtonRow() {
  return (
    <div className={styles['social-icon-wrapper']}>
      <SocialButton
        link="https://www.linkedin.com/in/nick-olive/"
        icon={faLinkedin}
        ariaLabel="LinkedIn"
      />
      <SocialButton
        link="https://www.github.com/noliveira95"
        icon={faGithub}
        ariaLabel="GitHub"
      />
      <SocialButton
        link="https://www.dribbble.com/nickolive"
        icon={faDribbble}
        ariaLabel="Dribbble"
      />
    </div>
  );
}

export default SocialButtonRow;
