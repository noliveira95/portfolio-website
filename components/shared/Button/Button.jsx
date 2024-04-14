import React from 'react';
import styles from './Button.module.css';
import Link from 'next/link';

function Button({
  btnText,
  btnIcon,
  btnLink,
  btnType = 'primary',
  onClick,
  isLinkButton = false,
  isExternalLinkButton = false,
  isActive = true,
}) {
  const buttonClass = `${styles.btn} ${styles[btnType]} ${
    isActive ? '' : styles.disabled
  }`;
  if (isLinkButton) {
    return (
      <>
        <Link className={buttonClass} type="button" href={btnLink}>
          {btnIcon}
          {btnText}
        </Link>
      </>
    );
  } else if (isExternalLinkButton) {
    return (
      <a className={buttonClass} type="button" href={btnLink} target="_blank">
        {btnIcon}
        {btnText}
      </a>
    );
  }
  return (
    <>
      <button className={buttonClass} type="button" onClick={onClick}>
        {btnIcon}
        {btnText}
      </button>
    </>
  );
}

export default Button;
