import React from 'react';
import styles from './Footer.module.css';
import SocialButtonRow from '../shared/SocialButtonRow/SocialButtonRow';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';

function Footer() {
  return (
    <footer id="footer" className={styles.footer}>
      <div className={styles['footer-content']}>
        <div className={styles['footer-text-container']}>
          <a
            className={styles['footer-email']}
            href="mailto:contact@nickolive.com"
            target="_blank"
            title="Email"
          >
            <FontAwesomeIcon
              className={styles['email-icon']}
              icon={faEnvelope}
              size="s"
            />
            contact@nickolive.com
          </a>
          <p className={styles['footer-text']}>
            &copy; 2024 Nicholas J. Oliveira. All rights reserved.
          </p>
        </div>
        <SocialButtonRow />
      </div>
    </footer>
  );
}

export default Footer;
