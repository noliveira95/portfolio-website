import React, { useState } from "react";
import { Dialog } from "@headlessui/react";

function DialogPopup({ title, description, buttonText, isOpen, closeDialog }) {
  return (
    <Dialog open={isOpen} onClose={closeDialog}>
      <Dialog.Panel>
        <Dialog.Title>{title}</Dialog.Title>
        <Dialog.Description>{description}</Dialog.Description>

        <button onClick={() => setIsOpen(false)}>{buttonText}</button>
      </Dialog.Panel>
    </Dialog>
  );
}

export default DialogPopup;
