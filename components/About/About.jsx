import React from 'react';
import styles from './About.module.css';
import Image from 'next/image';
import Link from 'next/link';
import MyPic from '../../public/images/SelfieGrayBG.jpg';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faArrowDown } from '@fortawesome/free-solid-svg-icons';

function About() {
  return (
    <section id="who-am-i" className={styles.about}>
      <div className={styles['about-content']}>
        <h1>Who Am I?</h1>
        <p className={styles['about-paragraph']}>
          My name is Nicholas Oliveira. I&apos;m a front-end web developer and
          UX/UI designer located in Las Vegas, NV. Technologies that I commonly
          use in my work include HTML/CSS, JavaScript, TypeScript, React,
          Webflow, and WordPress. I also utilize Figma, FigJam, and Adobe for
          design work such as creating mockups, prototyping, and conducting user
          research. I have experience in every stage of the{' '}
          <Link href="https://aws.amazon.com/what-is/sdlc/">
            software development lifecycle.
          </Link>
        </p>
      </div>
      <div className={styles['about-image']}>
        <Image src={MyPic} alt="Picture of Nicholas" width={200} height={200} />
      </div>
    </section>
  );
}

export default About;
