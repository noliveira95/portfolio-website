import React from 'react';
import styles from './Hero.module.css';
import Button from '../shared/Button/Button';

function Hero() {
  return (
    <>
      <section id={styles.intro}>
        <div className={styles['intro-content']}>
          <h3 className={styles['intro-greeting']}>Hello, I&apos;m</h3>
          <h1 className={styles['intro-name']}>Nick Oliveira</h1>
          <h2 className={styles['intro-title']}>
            Front-end Developer & UX/UI Designer
          </h2>
          <div className={styles['button-row']}>
            <Button
              isLinkButton={true}
              btnText="Learn More"
              btnLink={'/#who-am-i'}
            />
            <Button
              isLinkButton={true}
              btnText="Contact Me"
              btnLink={'/#contact'}
              buttonType="secondary"
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
