import Image from 'next/image';
import React from 'react';
import styles from './About.module.css';
import tools from './tools';

function ToolsRow() {
  return (
    <div className={styles.tools}>
      {tools.map((tool, index) => (
        <div key={index} className={styles['tool-item']}>
          <Image
            className={styles['tool-image']}
            width={80}
            height={80}
            src={tool.image}
            alt={tool.name}
            title={tool.name}
          />
          <p className={styles['tool-name']}>{tool.name}</p>
        </div>
      ))}
    </div>
  );
}

export default ToolsRow;
