import React from 'react';
import styles from './About.module.css';
import Image from 'next/image';
import Link from 'next/link';
import MyPic from '../../public/images/AISelfieNoBg.png';
import Button from '../shared/Button/Button';
import ToolsRow from './ToolsRow';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faArrowDown } from '@fortawesome/free-solid-svg-icons';

function About() {
  return (
    <section id="who-am-i" className={styles.about}>
      <div className={styles['about-me-content']}>
        <div className={styles['about-content-container']}>
          <h1>Who Am I?</h1>
          <p className={styles['about-paragraph']}>
            My name is Nicholas Oliveira. I&apos;m a front-end web developer and
            UX/UI designer located in Las Vegas, NV. Technologies that I
            commonly use in my work include HTML/CSS, JavaScript, TypeScript,
            React, Webflow, and WordPress. I also utilize Figma, FigJam, and
            Adobe for design work such as creating mockups, prototyping, and
            conducting user research. I have experience in every stage of the{' '}
            <Link href="https://aws.amazon.com/what-is/sdlc/">
              software development lifecycle.
            </Link>
          </p>
          <Button
            isLinkButton={true}
            btnText="See My Work"
            btnLink="/#projects"
          />
        </div>
        <div className={styles['about-image-container']}>
          <Image
            className={styles['about-image']}
            src={MyPic}
            alt="Picture of Nicholas"
            fill
          />
        </div>
      </div>
      <div className={styles['tools-section']}>
        <h3>Technologies I work with</h3>
        <ToolsRow />
      </div>
    </section>
  );
}

export default About;
