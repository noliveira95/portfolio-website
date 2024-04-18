'use client';

import React, { useState, useEffect } from 'react';
import styles from './Navbar.module.css';
import Image from 'next/image';
import Link from 'next/link';
import logo from '../../public/images/logos/NickOliveLogo3Cropped.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faClose } from '@fortawesome/free-solid-svg-icons';
import Button from '../shared/Button/Button';
import SocialButtonRow from '../shared/SocialButtonRow/SocialButtonRow';

function Navbar() {
  const [isActive, setIsActive] = useState(false);
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);

  const toggleActive = () => {
    setIsActive(!isActive);
  };

  const removeActive = () => {
    setIsActive(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      let st = window.scrollY || document.documentElement.scrollTop;
      if (st > lastScrollTop) {
        setIsNavbarVisible(false);
      } else {
        setIsNavbarVisible(true);
      }
      setLastScrollTop(st <= 0 ? 0 : st);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollTop]);

  return (
    <>
      <nav
        className={`${styles.navbar} ${
          isNavbarVisible ? styles['slide-in'] : styles['slide-out']
        }`}
      >
        <Link href="/">
          <Image src={logo} alt="Logo" className={styles.logo} />
        </Link>
        <div
          className={`${styles['nav-links']} ${isActive ? styles.active : ''}`}
        >
          <ul className={styles['nav-links-list']}>
            <li className={styles['nav-link']} onClick={removeActive}>
              <Link href="/#who-am-i">About Me</Link>
            </li>
            <li className={styles['nav-link']} onClick={removeActive}>
              <Link href="/#projects">Projects</Link>
            </li>
            <li className={styles['nav-link']} onClick={removeActive}>
              <Link href="/#contact">Contact</Link>
            </li>
            {/* <li onClick={removeActive}>
              <Button
                isLinkButton={true}
                btnText="Contact Me"
                btnLink="/#contact"
                className={styles['cta-button']}
              />
            </li> */}
          </ul>
          <SocialButtonRow />
        </div>
        <div
          className={`${styles.hamburger} ${isActive ? styles.active : ''}`}
          onClick={toggleActive}
        >
          {isActive ? (
            <FontAwesomeIcon icon={faClose} />
          ) : (
            <FontAwesomeIcon icon={faBars} />
          )}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
