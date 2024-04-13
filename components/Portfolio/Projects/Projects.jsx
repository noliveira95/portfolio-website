'use client';

import React from 'react';
import styles from '../Portfolio.module.css';
import { ChevronLeftIcon, ChevronRightIcon } from '@radix-ui/react-icons';
import Image from 'next/image';
import Button from '@/components/shared/Button/Button';

function Projects({
  currentIndex,
  data,
  handleDotClick,
  handlePrevious,
  handleNext,
}) {
  const isValid =
    data.length > 0 && currentIndex >= 0 && currentIndex < data.length;

  const currentProject = data[currentIndex];

  if (!isValid) {
    // TODO: Add UI if there are no projects
    return null;
  }

  return (
    <>
      <div className={styles['project-items']}>
        <div className={styles['current-project']}>
          <div className={styles['project-image-container']}>
            <Image
              width={480}
              height={320}
              src={currentProject.featured_image}
              alt={currentProject.title}
            />
          </div>
          <div className={styles['project-info']}>
            <h2 className={styles['project-title']}>{currentProject.title}</h2>
            <p>{currentProject.description}</p>
            <Button
              isExternalLinkButton={true}
              btnLink={currentProject.url}
              btnText={
                currentProject.type === 'dev'
                  ? 'View on Github'
                  : 'View on Figma'
              }
            />
          </div>
        </div>
        <div className={styles['project-controls']}>
          <button className={styles.left} onClick={handlePrevious}>
            <ChevronLeftIcon width={50} height={80} />
          </button>
          <div className={styles.indicator}>
            {data.map((_, index) => (
              <div
                key={index}
                className={`${styles.dot} ${
                  index === currentIndex ? styles.active : ''
                }`}
                onClick={() => handleDotClick(index)}
              ></div>
            ))}
          </div>
          <button className={styles.right} onClick={handleNext}>
            <ChevronRightIcon width={50} height={80} />
          </button>
        </div>
      </div>
    </>
  );
}

export default Projects;
