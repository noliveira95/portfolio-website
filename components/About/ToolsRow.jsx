import Image from 'next/image';
import React from 'react';
import styles from './About.module.css';
import htmlLogo from '../../public/images/logos/HTML.png';
import cssLogo from '../../public/images/logos/CSS.png';
import jsLogo from '../../public/images/logos/JS.png';
import tsLogo from '../../public/images/logos/TS.png';
import nodeLogo from '../../public/images/logos/Node.png';
import reactLogo from '../../public/images/logos/React.png';
import nextLogo from '../../public/images/logos/Next.png';
import flutterLogo from '../../public/images/logos/Flutter.png';
import figmaLogo from '../../public/images/logos/Figma.png';
import adobeLogo from '../../public/images/logos/Adobe.png';

function ToolsRow() {
  const tools = [
    {
      name: 'HTML',
      image: htmlLogo,
    },
    {
      name: 'CSS',
      image: cssLogo,
    },
    {
      name: 'JavaScript',
      image: jsLogo,
    },
    {
      name: 'TypeScript',
      image: tsLogo,
    },
    {
      name: 'Node.js',
      image: nodeLogo,
    },
    {
      name: 'React',
      image: reactLogo,
    },
    {
      name: 'Next.js',
      image: nextLogo,
    },
    {
      name: 'Flutter',
      image: flutterLogo,
    },
    {
      name: 'Figma',
      image: figmaLogo,
    },
    {
      name: 'Adobe',
      image: adobeLogo,
    },
  ];
  return (
    <div className={styles.tools}>
      {tools.map((tool, index) => (
        <div key={index} className={styles['tool-item']}>
          <Image
            className={styles['tool-image']}
            src={tool.image}
            alt={tool.name}
          />
        </div>
      ))}
    </div>
  );
}

export default ToolsRow;
