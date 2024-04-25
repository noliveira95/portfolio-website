import React from 'react';
import { Dialog } from '@headlessui/react';
import styles from './Dialog.module.css';
import Button from '../Button/Button';

function DialogPopup({ title, description, buttonText, isOpen, closeDialog }) {
  return (
    <Dialog
      className={styles['dialog-container']}
      open={isOpen}
      onClose={closeDialog}
    >
      <Dialog.Panel className={styles['dialog-box']}>
        <Dialog.Title className={styles['dialog-title']}>{title}</Dialog.Title>
        <Dialog.Description className={styles['dialog-content']}>
          {description}
        </Dialog.Description>
        <div className={styles['dialog-buttons']}>
          <Button onClick={closeDialog} btnText={buttonText} />
        </div>
      </Dialog.Panel>
    </Dialog>
  );
}

export default DialogPopup;
