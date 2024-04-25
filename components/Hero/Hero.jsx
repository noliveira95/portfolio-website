import React from 'react';
import styles from './Hero.module.css';
import Button from '../shared/Button/Button';

function Hero() {
  return (
    <>
      <section id={styles.intro}>
        <div className={styles['intro-content']}>
          <h5 className={styles['intro-greeting']}>Hello, I&apos;m</h5>
          <h1 className={styles['intro-name']}>Nick Oliveira</h1>
          <h4 className={styles['intro-title']}>
            Front-end Developer
            <br /> & UI/UX Designer
          </h4>
          <div className={styles['button-row']}>
            <Button
              isLinkButton={true}
              btnText="Learn More"
              btnLink={'/#about-me'}
            />
            <Button
              isLinkButton={true}
              btnText="Contact Me"
              btnLink={'/#contact'}
              btnType="secondary"
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
